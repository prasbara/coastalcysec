import SEO from './SEO';

export default function FAQPage() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is Coastal Delta Response?',
          a: 'Coastal Delta Response is a professional cybersecurity consultation service. We are responsible for handling cybersecurity incidents, providing security guidance, and protecting our clients\' information assets.'
        },
        {
          q: 'Who can report an incident?',
          a: 'Anyone who discovers or suspects a cybersecurity incident can report to us. This includes clients, partners, and external parties who identify vulnerabilities or security concerns.'
        },
        {
          q: 'Are incident reports confidential?',
          a: 'Yes. All incident reports are handled with strict confidentiality. Information is only shared with authorized personnel on a need-to-know basis for incident response purposes.'
        }
      ]
    },
    {
      category: 'Incident Reporting',
      questions: [
        {
          q: 'How do I report a security incident?',
          a: 'You can report incidents through our online reporting form. Provide as much detail as possible about what you observed. Contact information is not currently available.'
        },
        {
          q: 'What information should I include in an incident report?',
          a: 'Include: type of incident, when it was discovered, affected systems or accounts, description of what was observed, and any actions you\'ve already taken. Screenshots or logs are helpful if available.'
        },
        {
          q: 'Can I report anonymously?',
          a: 'Yes, anonymous reporting is available. However, providing contact information helps us provide updates and ask follow-up questions if needed for investigation.'
        },
        {
          q: 'How quickly will CSIRT respond?',
          a: 'Response time depends on severity: critical incidents within 1 hour, high priority within 4 hours, medium priority within 24 hours, and general inquiries within 48 hours.'
        }
      ]
    },
    {
      category: 'Security Incidents',
      questions: [
        {
          q: 'What constitutes a security incident?',
          a: 'A security incident includes any event that compromises the confidentiality, integrity, or availability of information systems. Examples: malware infections, unauthorized access, data breaches, phishing attacks, and system compromises.'
        },
        {
          q: 'What should I do if I receive a suspicious email?',
          a: 'Do not click links or open attachments. Do not reply or provide any information. Report the email to CSIRT immediately. If you\'ve already clicked a link or provided credentials, report it as urgent.'
        },
        {
          q: 'My account was compromised. What should I do?',
          a: 'Immediately change your password if you still have access. Report the compromise to CSIRT. Check for unauthorized activity or changes. Enable two-factor authentication if available.'
        }
      ]
    },
    {
      category: 'Services & Support',
      questions: [
        {
          q: 'Do you provide security training?',
          a: 'Yes, we conduct security awareness programs, training workshops, and provide educational resources for our clients. Contact us for training requests or collaboration.'
        },
        {
          q: 'Can you help with security assessments?',
          a: 'Yes, we provide vulnerability assessments and security consultations for client systems and projects. Contact us to discuss your specific needs.'
        },
        {
          q: 'How can I stay informed about security threats?',
          a: 'Subscribe to our security advisories. We publish regular updates about relevant threats, vulnerabilities, and security best practices. Contact information not currently available.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="FAQ - Coastal Delta Response"
        description="Frequently asked questions about Coastal Delta Response cybersecurity services, incident reporting, and security consultation. Get answers to common security questions."
        keywords="cybersecurity faq, incident response questions, security help, cyber security answers, security incident faq"
      />
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">FAQ</p>
        </nav>

        {/* Page Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Frequently Asked Questions
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Common questions about our services, incident reporting, and cybersecurity consultation.
        </p>

        {/* FAQ Categories */}
        <div className="space-y-16">
          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className={categoryIndex > 0 ? 'pt-16 border-t border-border' : ''}>
              <h2
                className="text-3xl mb-12 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {category.category}
              </h2>

              <div className="space-y-10">
                {category.questions.map((item, qIndex) => (
                  <div key={qIndex} className="space-y-3">
                    <h3
                      className="text-xl text-foreground"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {item.q}
                    </h3>
                    <p
                      className="text-muted-foreground leading-relaxed pl-6 border-l-2 border-border"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2
            className="text-3xl mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Still Have Questions?
          </h2>
          <p
            className="text-muted-foreground leading-relaxed mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            If you couldn't find the answer you're looking for, please don't hesitate to contact us directly.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">Contact information not currently available.</p>
          </div>
        </section>
      </article>
    </div>
  );
}
