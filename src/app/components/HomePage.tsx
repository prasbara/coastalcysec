import SEO from './SEO';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <SEO
        title="Coastal Delta Response - Professional Cybersecurity Consultation"
        description="Expert cybersecurity incident response and consultation services in Semarang. Coastal Delta Response provides professional security solutions, threat detection, and incident management for organizations near UNISSULA, Kaligawe, and Genuk area."
        keywords="cybersecurity consultation, incident response, security services, threat detection, cyber security expert, information security, security advisory, incident management, UNISSULA, Semarang, Kaligawe, Genuk, cybersecurity Semarang, keamanan siber Semarang, CSIRT, Jawa Tengah"
      />
      {/* Editorial Hero Section - Typography First */}
      <section className="bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-4xl">
            {/* Status Badge - Minimal */}
            <div className="inline-block mb-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-foreground rounded-full"></span>
                Service Status: Active (Mitigation and response measures are currently under development)
              </div>
            </div>

            {/* Main Headline - Large Serif */}
            <h1
              className="text-6xl lg:text-7xl leading-tight mb-8 tracking-tight text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Coastal Delta Response
            </h1>

            {/* Subheadline */}
            <h2
              className="text-2xl lg:text-3xl mb-12 text-foreground/80 leading-snug max-w-2xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Professional Cybersecurity Consultation
            </h2>

            {/* Description - Sans Serif */}
            <p
              className="text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mb-16"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Trusted cybersecurity consultation services grounded in a higher-education ecosystem,
              driven by academic rigor, continuous research, and technical expertise to protect
              organizational information assets and deliver professional incident response.
            </p>

            {/* CTA Buttons - Editorial Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('report')}
                className="px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wide border-0"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Report an Incident
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-8 py-4 bg-transparent text-foreground hover:bg-secondary transition-colors text-sm tracking-wide border border-border"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Read Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information - Minimal Grid */}
      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3
                className="text-4xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                24/7
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Emergency response service for critical security incidents
              </p>
            </div>

            <div>
              <h3
                className="text-4xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Confidential
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All incident reports are handled with strict confidentiality
              </p>
            </div>

            <div>
              <h3
                className="text-4xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Professional
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trained and certified cybersecurity response team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CSIRT - Editorial Article Style */}
      <section className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <div className="max-w-3xl">
            <h2
              className="text-4xl lg:text-5xl mb-8 text-foreground leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              About Coastal Delta Response
            </h2>

            <p
              className="text-base lg:text-lg leading-relaxed text-foreground/80 mb-6"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              A professional team dedicated to handling cybersecurity incidents with
              expertise and trusted methodologies.
            </p>

            <div className="space-y-8 mt-12">
              <div>
                <h3
                  className="text-xl mb-3 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Our Vision
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  To become a center of excellence in professional, trusted, and responsive
                  cybersecurity incident response to protect digital ecosystems.
                </p>
              </div>

              <div>
                <h3
                  className="text-xl mb-3 text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Our Mission
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>— Provide fast and effective cybersecurity incident response services</li>
                  <li>— Enhance cybersecurity awareness across organizations</li>
                  <li>— Coordinate and collaborate in incident handling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Clean List */}
      <section className="bg-background border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <h2
            className="text-4xl lg:text-5xl mb-16 text-foreground max-w-2xl leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3
                className="text-xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Incident Response
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Fast response to cybersecurity incidents with trusted standard procedures
              </p>
            </div>

            <div>
              <h3
                className="text-xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Analysis & Mitigation
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                In-depth analysis and mitigation recommendations to prevent recurring incidents
              </p>
            </div>

            <div>
              <h3
                className="text-xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Security Education
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Awareness programs and cybersecurity guidelines for the entire academic community
              </p>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="text-sm text-foreground hover:opacity-70 transition-opacity underline underline-offset-4"
            >
              View all services →
            </button>
          </div>
        </div>
      </section>

      {/* Incident Types - Minimal Typography */}
      <section className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20">
          <h2
            className="text-4xl lg:text-5xl mb-16 text-foreground max-w-2xl leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Types of Incidents We Handle
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'Malware',
              'Phishing',
              'Defacement',
              'Data Breach',
              'DDoS Attack',
              'Account Hijacking'
            ].map((incident, index) => (
              <div key={index} className="group cursor-pointer">
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {incident}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button
              onClick={() => onNavigate('incident-types')}
              className="text-sm text-foreground hover:opacity-70 transition-opacity underline underline-offset-4"
            >
              Learn more →
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA - Editorial */}
      <section className="bg-foreground text-background border-t border-foreground">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h2
            className="text-4xl lg:text-5xl mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Discovered a Security Incident?
          </h2>
          <p
            className="text-lg mb-12 opacity-80 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Report immediately to Coastal Delta Response for fast and professional handling
          </p>
          <button
            onClick={() => onNavigate('report')}
            className="px-8 py-4 bg-background text-foreground hover:bg-background/90 transition-colors text-sm tracking-wide"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Report Incident
          </button>
        </div>
      </section>
    </div>
  );
}
