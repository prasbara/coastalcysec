export default function SecurityGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Security Guide</p>
        </nav>

        {/* Page Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Security Guidelines
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Essential cybersecurity practices and recommendations for protecting
          university information assets and personal data.
        </p>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Password Security */}
          <section>
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Password & Account Security
            </h2>

            <div className="space-y-10">
              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Creating Strong Passwords
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Use minimum 12 characters with combination of uppercase, lowercase, numbers, and symbols</li>
                  <li>— Avoid personal information such as names, birthdates, or common words</li>
                  <li>— Use different passwords for each account</li>
                  <li>— Consider using a password manager to manage credentials securely</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Account Security Practices
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Enable Two-Factor Authentication (2FA) when available</li>
                  <li>— Change passwords regularly (minimum every 6 months)</li>
                  <li>— Never share passwords with anyone, including IT support</li>
                  <li>— Log out after finishing, especially on public computers</li>
                  <li>— Be cautious of emails requesting password changes</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Signs of Compromised Account
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Logins from unknown locations or devices</li>
                  <li>— Password or profile changes you didn't make</li>
                  <li>— Emails or messages you didn't send</li>
                  <li>— Suspicious activity in login history</li>
                </ul>
                <p className="text-sm text-foreground mt-4 pl-6 border-l-2 border-border">
                  If you suspect compromise, change your password immediately and report to Coastal Delta Response.
                </p>
              </div>
            </div>
          </section>

          {/* Phishing Awareness */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Identifying & Avoiding Phishing
            </h2>

            <div className="space-y-10">
              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Common Phishing Indicators
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Sender address doesn't match the claimed organization</li>
                  <li>— Generic greetings ("Dear user" instead of your name)</li>
                  <li>— Urgent or threatening language creating pressure to act</li>
                  <li>— Requests for sensitive information or credentials</li>
                  <li>— Suspicious links or unexpected attachments</li>
                  <li>— Grammar and spelling errors</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  What to Do
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Do not click links or open attachments in suspicious emails</li>
                  <li>— Verify sender authenticity through official channels</li>
                  <li>— Report suspicious emails to Coastal Delta Response immediately</li>
                  <li>— If you clicked a link or provided information, report urgently</li>
                  <li>— Delete the email after reporting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Data Protection
            </h2>

            <div className="space-y-10">
              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Handling Sensitive Information
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Classify data according to sensitivity level</li>
                  <li>— Encrypt sensitive files before sharing or storing</li>
                  <li>— Use secure channels for transmitting confidential information</li>
                  <li>— Limit access to sensitive data on need-to-know basis</li>
                  <li>— Securely delete data when no longer needed</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Physical Security
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Lock your screen when leaving your workstation</li>
                  <li>— Don't leave devices unattended in public spaces</li>
                  <li>— Dispose of documents with sensitive information securely</li>
                  <li>— Be aware of shoulder surfing in public areas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Network Security */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Network & Wi-Fi Security
            </h2>

            <div className="space-y-10">
              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Safe Network Practices
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Use official university Wi-Fi networks when on campus</li>
                  <li>— Avoid accessing sensitive information on public Wi-Fi</li>
                  <li>— Use VPN when connecting from untrusted networks</li>
                  <li>— Verify network name before connecting</li>
                  <li>— Disable auto-connect to Wi-Fi networks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Device Security */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Device Security
            </h2>

            <div className="space-y-10">
              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  General Device Protection
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Keep operating systems and software updated</li>
                  <li>— Install and maintain antivirus/anti-malware software</li>
                  <li>— Enable device encryption</li>
                  <li>— Use screen lock with PIN/password/biometric</li>
                  <li>— Backup important data regularly</li>
                </ul>
              </div>

              <div>
                <h3
                  className="text-xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Mobile Device Security
                </h3>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Download apps only from official stores</li>
                  <li>— Review app permissions before installing</li>
                  <li>— Enable remote wipe capability</li>
                  <li>— Keep Bluetooth disabled when not in use</li>
                  <li>— Be cautious of public charging stations (juice jacking)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safe Browsing */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Safe Browsing Practices
            </h2>

            <div className="space-y-10">
              <div>
                <ul
                  className="space-y-2 text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li>— Verify website URLs before entering credentials</li>
                  <li>— Look for HTTPS and padlock icon for secure connections</li>
                  <li>— Be cautious of pop-ups and unexpected downloads</li>
                  <li>— Clear browser cache and cookies regularly</li>
                  <li>— Use privacy-focused browser extensions</li>
                  <li>— Don't save passwords in browsers on shared devices</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Incident Response */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              What to Do in Case of Security Incident
            </h2>

            <div
              className="space-y-4 text-muted-foreground"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <ol className="space-y-3 pl-6">
                <li className="leading-relaxed">
                  <strong className="text-foreground">1. Don't Panic</strong><br />
                  Stay calm and don't attempt to fix the issue yourself if you're unsure.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">2. Isolate Affected Systems</strong><br />
                  Disconnect from network if you suspect malware or ongoing attack.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">3. Document What Happened</strong><br />
                  Take notes or screenshots of error messages and suspicious activity.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">4. Report Immediately</strong><br />
                  Contact Coastal Delta Response through official channels as soon as possible.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">5. Follow Instructions</strong><br />
                  Cooperate with Coastal Delta Response team and follow their guidance for remediation.
                </li>
              </ol>
            </div>
          </section>

          {/* Contact */}
          <section className="mt-20 pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Need Assistance?
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              For security questions or to report an incident, contact Coastal Delta Response:
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-foreground">Email: Contact information not currently available</p>
              <p className="text-foreground">Emergency Hotline: Contact information not currently available</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
