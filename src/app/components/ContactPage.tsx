import SEO from './SEO';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us - Coastal Delta Response"
        description="Get in touch with Coastal Delta Response for cybersecurity consultation, incident reporting, and security inquiries. Professional cybersecurity services available."
        keywords="contact cybersecurity, incident reporting, security consultation contact, cyber security help, report security incident"
      />
      {/* Editorial Article Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Contact</p>
        </nav>

        {/* Page Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Contact Coastal Delta Response
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Reach out to our team for incident reporting, security consultations,
          or general inquiries about cybersecurity services.
        </p>

        {/* Emergency Contact */}
        <section className="mb-16 p-8 bg-foreground text-background">
          <h2
            className="text-2xl mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Emergency Response
          </h2>
          <p
            className="mb-6 opacity-90"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            For critical security incidents requiring immediate attention:
          </p>
          <div
            className="space-y-2 text-lg"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <p className="text-sm opacity-75 mt-4">Contact information not currently available</p>
          </div>
        </section>

        {/* General Contact */}
        <section className="mb-16">
          <h2
            className="text-3xl mb-8 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            General Contact
          </h2>

          <div
            className="space-y-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg mb-2 text-foreground">Office Location</h3>
              <p className="text-muted-foreground">
                Coastal Delta Response<br />
                Jl. Kaligawe Raya No.Km.4, Terboyo Kulon, Kec. Genuk, Kota Semarang, Jawa Tengah 50112<br />
                Indonesia
              </p>
            </div>

            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg mb-2 text-foreground">Office Hours</h3>
              <p className="text-muted-foreground">
                Monday – Friday: 08:00 – 16:00 WIB<br />
                Emergency hotline operates 24/7
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16 pt-16 border-t border-border">
          <h2
            className="text-3xl mb-8 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            How to Reach Us
          </h2>

          <div
            className="space-y-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <div>
              <h3 className="text-xl mb-3 text-foreground">Incident Reporting</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Use our online incident reporting form for detailed incident submissions.
                This ensures all necessary information is captured for efficient response.
              </p>
              <button className="text-sm text-foreground hover:opacity-70 transition-opacity underline underline-offset-4">
                Go to report form →
              </button>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-foreground">Security Advisory Subscription</h3>
              <p className="text-muted-foreground leading-relaxed">
                Subscribe to receive security advisories and updates. Contact information
                not currently available.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-foreground">General Inquiries</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions about our services, security training, or collaboration
                opportunities, please email us with a clear subject line describing your inquiry.
              </p>
            </div>

            <div>
              <h3 className="text-xl mb-3 text-foreground">Media Inquiries</h3>
              <p className="text-muted-foreground leading-relaxed">
                Media representatives should direct inquiries to our official email with
                subject line "Media Inquiry" for appropriate routing.
              </p>
            </div>
          </div>
        </section>

        {/* PGP Information */}
        <section className="mb-16 pt-16 border-t border-border">
          <h2
            className="text-3xl mb-8 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Secure Communication
          </h2>
          <div
            className="text-muted-foreground space-y-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <p className="leading-relaxed">
              For sensitive communications, we recommend using encrypted email. Our PGP
              public key is available upon request. When reporting security vulnerabilities,
              please encrypt your message to protect the information from unauthorized disclosure.
            </p>
            <p className="text-sm">
              PGP Key ID: Available on request<br />
              Fingerprint: Available on request
            </p>
          </div>
        </section>

        {/* Response Times */}
        <section className="pt-16 border-t border-border">
          <h2
            className="text-3xl mb-8 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Expected Response Times
          </h2>
          <div
            className="space-y-4 text-sm text-muted-foreground"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <p>— Critical incidents: Within 1 hour</p>
            <p>— High priority incidents: Within 4 hours</p>
            <p>— Medium priority incidents: Within 24 hours</p>
            <p>— General inquiries: Within 48 hours</p>
          </div>
        </section>
      </article>
    </div>
  );
}
