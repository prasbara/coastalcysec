export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Governance</p>
        </nav>

        {/* Article Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Services & Governance
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Comprehensive cybersecurity incident response services governed by established
          protocols and international standards.
        </p>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Core Services */}
          <section>
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Core Services
            </h2>

            <div className="space-y-12">
              {/* Service 1 */}
              <div>
                <h3
                  className="text-2xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Incident Response & Management
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  24/7 emergency response service for critical cybersecurity incidents.
                  Our team provides immediate assistance in detecting, containing, and
                  eradicating security threats.
                </p>
                <div className="pl-6 border-l-2 border-border">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Incident triage and classification</li>
                    <li>— Real-time threat containment</li>
                    <li>— Forensic analysis and investigation</li>
                    <li>— Post-incident reporting and recommendations</li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div>
                <h3
                  className="text-2xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Vulnerability Assessment
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Proactive identification and assessment of potential security vulnerabilities
                  within university systems and applications.
                </p>
                <div className="pl-6 border-l-2 border-border">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Regular security scanning and testing</li>
                    <li>— Risk assessment and prioritization</li>
                    <li>— Mitigation strategy development</li>
                    <li>— Compliance verification</li>
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div>
                <h3
                  className="text-2xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Security Advisory & Intelligence
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Publication of timely security advisories, threat intelligence, and
                  recommendations to help the community stay informed about emerging threats.
                </p>
                <div className="pl-6 border-l-2 border-border">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Threat intelligence gathering and analysis</li>
                    <li>— Security advisory publication</li>
                    <li>— Early warning notifications</li>
                    <li>— Best practice recommendations</li>
                  </ul>
                </div>
              </div>

              {/* Service 4 */}
              <div>
                <h3
                  className="text-2xl mb-4 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Security Awareness & Training
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Educational programs designed to enhance cybersecurity awareness among
                  faculty, staff, and students.
                </p>
                <div className="pl-6 border-l-2 border-border">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Security awareness campaigns</li>
                    <li>— Training workshops and seminars</li>
                    <li>— Security guidelines and documentation</li>
                    <li>— Phishing simulation exercises</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Service Levels */}
          <section>
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Service Level Commitments
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg text-foreground">Critical Incidents</h3>
                  <span className="text-sm text-muted-foreground">Response within 1 hour</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Immediate response to incidents causing active harm or significant risk
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg text-foreground">High Priority</h3>
                  <span className="text-sm text-muted-foreground">Response within 4 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Incidents with potential for significant impact requiring prompt attention
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg text-foreground">Medium Priority</h3>
                  <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Security concerns requiring investigation and assessment
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-lg text-foreground">General Inquiries</h3>
                  <span className="text-sm text-muted-foreground">Response within 48 hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  General security questions and consultation requests
                </p>
              </div>
            </div>
          </section>

          {/* Governance Framework */}
          <section>
            <h2
              className="text-3xl mb-8 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Governance Framework
            </h2>
            <div
              className="prose prose-lg max-w-none text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Coastal Delta Response operates under a structured governance framework that ensures
                accountability, transparency, and effectiveness in all our operations. Our
                framework aligns with international standards including ISO/IEC 27001, NIST
                Cybersecurity Framework, and best practices from national and international
                CSIRT/CERT organizations.
              </p>
              <p className="leading-relaxed">
                All incident response activities are conducted in accordance with established
                standard operating procedures (SOPs), with regular reviews and updates to
                ensure continuous improvement and adaptation to evolving threats.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
