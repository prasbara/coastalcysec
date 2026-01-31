import SEO from './SEO';

export default function AdvisoryPage() {
  const advisories: never[] = [];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Security Advisories - Coastal Delta Response"
        description="Stay informed with the latest security advisories and updates from Coastal Delta Response. Get critical cybersecurity alerts, vulnerability notifications, and security best practices."
        keywords="security advisories, cyber security alerts, vulnerability notifications, security updates, threat intelligence, security bulletins"
      />
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Advisory</p>
        </nav>

        {/* Article Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Security Advisories
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Official security advisories, vulnerability notifications, and threat intelligence
          reports.
        </p>

        {/* Introduction */}
        <div
          className="mb-16 text-muted-foreground space-y-4"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <p className="leading-relaxed">
            Coastal Delta Response publishes security advisories to inform our clients
            about significant cybersecurity threats, vulnerabilities, and recommended actions.
            These advisories are based on threat intelligence gathered from various sources
            and our own security research.
          </p>
          <p className="leading-relaxed">
            All advisories are classified according to severity levels and include actionable
            recommendations for mitigation and remediation.
          </p>
        </div>

        {/* Severity Legend */}
        <section className="mb-16 pb-16 border-b border-border">
          <h2
            className="text-2xl mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Severity Classification
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div>
              <h3 className="mb-2 text-foreground">Critical / High</h3>
              <p className="text-muted-foreground leading-relaxed">
                Requires immediate attention. Active exploitation or significant risk to systems.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-foreground">Medium</h3>
              <p className="text-muted-foreground leading-relaxed">
                Should be addressed promptly. Moderate risk requiring mitigation planning.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-foreground">Low / Informational</h3>
              <p className="text-muted-foreground leading-relaxed">
                General awareness. Best practice recommendations and updates.
              </p>
            </div>
          </div>
        </section>

        {/* Advisory List */}
        <section>
          <h2
            className="text-3xl mb-12 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Recent Advisories
          </h2>

          <div className="space-y-12">
            {advisories.map((advisory) => (
              <article
                key={advisory.id}
                className="border-t border-border pt-8 first:border-t-0 first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <div className="flex items-baseline gap-4 mb-2 md:mb-0">
                    <h3
                      className="text-xl text-foreground"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {advisory.id}
                    </h3>
                    <span
                      className={`text-xs px-2 py-1 ${advisory.severity === 'High' || advisory.severity === 'Critical'
                        ? 'bg-foreground text-background'
                        : advisory.severity === 'Medium'
                          ? 'bg-muted text-foreground'
                          : 'bg-secondary text-muted-foreground'
                        }`}
                    >
                      {advisory.severity}
                    </span>
                  </div>
                  <time
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {new Date(advisory.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <h4
                  className="text-lg mb-3 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {advisory.title}
                </h4>

                <p
                  className="text-muted-foreground leading-relaxed text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {advisory.summary}
                </p>

                <button
                  className="mt-4 text-sm text-foreground hover:opacity-70 transition-opacity underline underline-offset-4"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Read full advisory →
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* Subscription Notice */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2
            className="text-3xl mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Stay Informed
          </h2>
          <p
            className="text-muted-foreground leading-relaxed mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Subscribe to receive security advisories and updates directly to your email.
            Critical advisories are sent immediately, while routine updates are delivered weekly.
          </p>
          <p className="text-sm text-muted-foreground">
            Contact information not currently available.
          </p>
        </section>
      </article>
    </div>
  );
}
