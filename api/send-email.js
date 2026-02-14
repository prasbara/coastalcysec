
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Add CORS checks if necessary, or rely on Vercel's default same-origin for API routes
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
        recipientEmail,
        subject,
        message, // The formatted body from frontend
        reporterEmail // For Reply-To header
    } = req.body;

    if (!recipientEmail || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_USER || !EMAIL_PASS) {
        console.error('Missing email environment variables');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        // 1. Configure Transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false // As requested for troubleshooting
            }
        });

        // 2. Verify connection configuration
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.error('SMTP Connection Error:', error);
                    reject(error);
                } else {
                    console.log('SMTP Server is ready to take our messages');
                    resolve(success);
                }
            });
        });

        // 3. Send Email
        const info = await transporter.sendMail({
            from: `"Incident Report System" <${EMAIL_USER}>`, // Sender address
            to: recipientEmail, // List of receivers
            replyTo: reporterEmail && reporterEmail !== 'Not Provided' ? reporterEmail : undefined,
            subject: subject, // Subject line
            text: message, // Plain text body
        });

        // 4. Log Delivery Confirmation
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        console.log('Accepted Recipients:', info.accepted);
        console.log('Rejected Recipients:', info.rejected);
        console.log('Server Response:', info.response);

        return res.status(200).json({ success: true, messageId: info.messageId });

    } catch (error) {
        console.error('Email Sending Failed:', error);
        return res.status(500).json({
            error: 'Failed to send email',
            details: error.message
        });
    }
}
