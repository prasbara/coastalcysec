import SEO from './SEO';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About Us - Coastal Delta Response"
        description="Learn about Coastal Delta Response, a professional cybersecurity consultation service in Semarang providing expert incident response, security guidance, and protection for client information assets near UNISSULA area."
        keywords="about coastal delta response, cybersecurity team, incident response team, security experts, cyber security professionals, Semarang, UNISSULA, Kaligawe, cybersecurity Semarang"
      />
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Documentation</p>
        </nav>

        {/* Article Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          About Coastal Delta Response
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Professional cybersecurity consultation services, established to provide
          expert incident response and security advisory for organizations.
        </p>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <section>
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Organization
            </h2>
            <div
              className="prose prose-lg max-w-none text-muted-foreground space-y-4"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                Coastal Delta Response is a professional cybersecurity consultation service
                dedicated to protecting organizations from cyber threats. We serve as the primary
                point of contact for cybersecurity incident response and security advisory.
              </p>
              <p className="leading-relaxed">
                Our team consists of trained cybersecurity professionals who are dedicated to
                maintaining the security and integrity of our clients' information systems.
                We operate 24/7 to ensure rapid response to any security incidents that may occur.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Vision & Mission
            </h2>
            <div className="space-y-8">
              <div>
                <h3
                  className="text-xl mb-3 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Vision
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  To become a center of excellence in professional, trusted, and responsive
                  cybersecurity incident response to protect digital ecosystems.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl mb-3 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Mission
                </h3>
                <ul
                  className="space-y-3 text-muted-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <li className="leading-relaxed">
                    — Provide fast and effective cybersecurity incident response services
                    to protect client information assets
                  </li>
                  <li className="leading-relaxed">
                    — Enhance cybersecurity awareness and knowledge through education
                    and training programs
                  </li>
                  <li className="leading-relaxed">
                    — Coordinate and collaborate with relevant stakeholders in handling
                    cybersecurity incidents
                  </li>
                  <li className="leading-relaxed">
                    — Develop and maintain incident response procedures and security guidelines
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Core Responsibilities
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <div className="border-l-2 border-border pl-6">
                <h3 className="text-lg mb-2 text-foreground">Incident Response</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rapid detection, analysis, and response to cybersecurity incidents affecting
                  client systems.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6">
                <h3 className="text-lg mb-2 text-foreground">Threat Analysis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Continuous monitoring and analysis of cybersecurity threats and vulnerabilities.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6">
                <h3 className="text-lg mb-2 text-foreground">Security Advisory</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Publishing security advisories and recommendations for our clients.
                </p>
              </div>

              <div className="border-l-2 border-border pl-6">
                <h3 className="text-lg mb-2 text-foreground">Coordination</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Liaising with national and international cybersecurity organizations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2
              className="text-3xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Operating Principles
            </h2>
            <div
              className="space-y-4 text-muted-foreground"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              <p className="leading-relaxed">
                <strong className="text-foreground">Confidentiality:</strong> All incident reports
                and communications are handled with strict confidentiality to protect the integrity
                of ongoing investigations.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Professionalism:</strong> We adhere to
                international best practices and standards in incident response and cybersecurity.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Transparency:</strong> We maintain transparent
                communication with stakeholders while respecting confidentiality requirements.
              </p>
              <p className="leading-relaxed">
                <strong className="text-foreground">Continuous Improvement:</strong> We regularly
                review and update our procedures to adapt to evolving cybersecurity threats.
              </p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
