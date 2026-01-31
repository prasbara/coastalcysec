export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Privacy Policy</p>
        </nav>

        {/* Page Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Privacy Policy
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl leading-relaxed text-foreground/80 mb-4 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          How Coastal Delta Response collects, uses, and protects information in accordance
          with applicable privacy regulations and institutional policies.
        </p>

        <p
          className="text-sm text-muted-foreground mb-16"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Last Updated: January 24, 2025
        </p>

        {/* Content Sections */}
        <div className="space-y-16">
          <section>
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Introduction
            </h2>
            <div
              className="prose prose-lg max-w-none text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Coastal Delta Response is committed to protecting the privacy and confidentiality
                of information we receive in the course of our cybersecurity incident
                response operations. This privacy policy explains how we collect, use,
                store, and protect information related to incident reports and security
                activities.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Information We Collect
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <div>
                <h3 className="text-xl mb-3 text-foreground">Incident Reports</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you report a security incident, we collect: reporter contact information
                  (if provided), incident details, affected systems, timestamps, and any
                  supporting evidence or documentation you provide.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">System Logs and Technical Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  During incident response, we may collect system logs, network traffic data,
                  and other technical information necessary for investigation and remediation.
                </p>
              </div>

              <div>
                <h3 className="text-xl mb-3 text-foreground">Communication Records</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain records of communications related to incident response, including
                  emails, phone calls, and other interactions with reporters and stakeholders.
                </p>
              </div>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              How We Use Information
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Information collected by Coastal Delta Response is used exclusively for:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Investigating and responding to security incidents</li>
                <li>— Analyzing threats and vulnerabilities</li>
                <li>— Improving security measures and incident response procedures</li>
                <li>— Communicating with incident reporters and affected parties</li>
                <li>— Generating anonymized statistics and trends for security reporting</li>
                <li>— Fulfilling legal or regulatory requirements</li>
              </ul>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Information Sharing
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Coastal Delta Response maintains strict confidentiality. Information is shared only
                in the following circumstances:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— With authorized university personnel on a need-to-know basis for incident response</li>
                <li>— With law enforcement when required by law or for criminal investigations</li>
                <li>— With national/international CSIRT/CERT organizations for coordination purposes (with identifying information removed)</li>
                <li>— With affected parties to enable remediation actions</li>
                <li>— When explicitly authorized by the information provider</li>
              </ul>
              <p className="leading-relaxed mt-4">
                We do not sell, rent, or share personal information for commercial purposes.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Data Security
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect
                information from unauthorized access, disclosure, alteration, or destruction.
                These measures include:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Encrypted storage and transmission of sensitive information</li>
                <li>— Access controls and authentication mechanisms</li>
                <li>— Regular security assessments and audits</li>
                <li>— Staff training on confidentiality and data protection</li>
                <li>— Secure disposal of information when no longer needed</li>
              </ul>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Data Retention
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Incident-related information is retained for the period necessary to fulfill
                the purposes outlined in this policy, typically:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Active incident data: Duration of investigation plus 1 year</li>
                <li>— Closed incident records: 5 years for analysis and reference</li>
                <li>— Anonymized statistical data: Retained indefinitely for trend analysis</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Retention periods may be extended when required by legal or regulatory
                obligations.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Your Rights
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                You have the right to:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Request information about data we hold about you</li>
                <li>— Request correction of inaccurate information</li>
                <li>— Request deletion of your data (subject to legal and operational requirements)</li>
                <li>— Withdraw consent for data processing where applicable</li>
                <li>— Lodge a complaint with appropriate supervisory authorities</li>
              </ul>
              <p className="leading-relaxed mt-4">
                To exercise these rights, contact information is not currently available.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Anonymous Reporting
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                We provide the option to report incidents anonymously. However, please note
                that anonymous reporting may limit our ability to:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Provide updates on incident status</li>
                <li>— Request additional information for investigation</li>
                <li>— Acknowledge receipt of the report</li>
              </ul>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Changes to This Policy
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                We may update this privacy policy periodically to reflect changes in our
                practices, legal requirements, or operational needs. The "Last Updated"
                date at the top of this policy indicates when it was last revised.
                Significant changes will be communicated through appropriate channels.
              </p>
            </div>
          </section>

          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Contact Information
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                For questions about this privacy policy or our data practices, please contact:
              </p>
              <div className="pl-6 border-l-2 border-border space-y-1 mt-4">
                <p className="text-foreground">Coastal Delta Response</p>
                <p>Email: Contact information not currently available</p>
                <p>Subject: Privacy Policy Inquiry</p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
