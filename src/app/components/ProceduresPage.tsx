export default function ProceduresPage() {
  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Procedures</p>
        </nav>

        {/* Page Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Incident Response Procedures
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Standardized procedures for handling cybersecurity incidents to ensure
          consistent, effective, and professional response.
        </p>

        {/* Content */}
        <div className="space-y-16">
          {/* Overview */}
          <section>
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Response Framework
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Coastal Delta Response follows a structured incident response framework aligned
                with international standards including NIST Cybersecurity Framework and
                best practices from national and international CSIRT/CERT organizations.
              </p>
              <p className="leading-relaxed">
                Our procedures ensure systematic handling of incidents from initial
                detection through resolution and post-incident review.
              </p>
            </div>
          </section>

          {/* Phase 1: Preparation */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Phase 1: Preparation
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Establishing and maintaining readiness for incident response through
                continuous preparation activities.
              </p>
              <div className="pl-6 border-l-2 border-border">
                <h3 className="text-lg mb-3 text-foreground">Key Activities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>— Maintain incident response capabilities and tools</li>
                  <li>— Develop and update response procedures</li>
                  <li>— Train response team members</li>
                  <li>— Establish communication channels</li>
                  <li>— Define roles and responsibilities</li>
                  <li>— Maintain contact lists and escalation procedures</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Phase 2: Detection & Analysis */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Phase 2: Detection & Analysis
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Identifying and analyzing potential security incidents to determine
                scope, impact, and appropriate response actions.
              </p>
              <div className="space-y-8">
                <div className="pl-6 border-l-2 border-border">
                  <h3 className="text-lg mb-3 text-foreground">Initial Assessment</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Receive and log incident report</li>
                    <li>— Conduct initial triage and classification</li>
                    <li>— Assign severity level and priority</li>
                    <li>— Allocate response resources</li>
                    <li>— Notify stakeholders as appropriate</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-border">
                  <h3 className="text-lg mb-3 text-foreground">Investigation</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Collect and preserve evidence</li>
                    <li>— Analyze logs and system data</li>
                    <li>— Determine attack vectors and methods</li>
                    <li>— Identify affected systems and data</li>
                    <li>— Assess potential impact and risk</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 3: Containment */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Phase 3: Containment, Eradication & Recovery
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Implementing actions to limit damage, remove threats, and restore
                normal operations.
              </p>
              <div className="space-y-8">
                <div className="pl-6 border-l-2 border-border">
                  <h3 className="text-lg mb-3 text-foreground">Containment</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Isolate affected systems to prevent spread</li>
                    <li>— Implement short-term containment measures</li>
                    <li>— Develop long-term containment strategy</li>
                    <li>— Document all containment actions</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-border">
                  <h3 className="text-lg mb-3 text-foreground">Eradication</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Remove malware and malicious artifacts</li>
                    <li>— Close attack vectors and vulnerabilities</li>
                    <li>— Reset compromised credentials</li>
                    <li>— Apply security patches and updates</li>
                  </ul>
                </div>

                <div className="pl-6 border-l-2 border-border">
                  <h3 className="text-lg mb-3 text-foreground">Recovery</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>— Restore systems from clean backups</li>
                    <li>— Verify system integrity before restoration</li>
                    <li>— Monitor for signs of persistence</li>
                    <li>— Gradually return systems to production</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Phase 4: Post-Incident */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Phase 4: Post-Incident Activities
            </h2>
            <div
              className="space-y-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="text-muted-foreground leading-relaxed">
                Learning from incidents to improve security posture and response
                capabilities for future incidents.
              </p>
              <div className="pl-6 border-l-2 border-border">
                <h3 className="text-lg mb-3 text-foreground">Key Activities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>— Conduct post-incident review and analysis</li>
                  <li>— Document lessons learned</li>
                  <li>— Update procedures and playbooks</li>
                  <li>— Implement preventive measures</li>
                  <li>— Share findings with stakeholders (anonymized)</li>
                  <li>— Update security controls and monitoring</li>
                  <li>— Provide final incident report</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Communication Protocol */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Communication Protocol
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Effective communication is critical during incident response. We maintain
                regular communication with:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Incident reporters (providing updates on case status)</li>
                <li>— Affected parties (notification and guidance)</li>
                <li>— University management (for significant incidents)</li>
                <li>— External parties (law enforcement, peer CSIRTs when necessary)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                All communications are conducted through secure channels with appropriate
                confidentiality measures.
              </p>
            </div>
          </section>

          {/* Escalation */}
          <section className="pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Escalation Criteria
            </h2>
            <div
              className="text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Incidents are escalated based on:
              </p>
              <ul className="space-y-2 pl-6">
                <li>— Severity and potential impact</li>
                <li>— Affected systems and data sensitivity</li>
                <li>— Duration and persistence of incident</li>
                <li>— Media or public attention</li>
                <li>— Legal or regulatory implications</li>
                <li>— Resource requirements beyond team capacity</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="mt-20 pt-16 border-t border-border">
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Questions About Procedures?
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              For questions about our incident response procedures or to report an incident:
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
