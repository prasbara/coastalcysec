export default function IncidentTypesPage() {
  const incidentTypes = [
    {
      name: 'Malware Infection',
      description: 'Malicious software including viruses, trojans, ransomware, spyware, and other harmful programs that compromise system integrity.',
      examples: ['Ransomware attacks encrypting data', 'Trojan horses providing backdoor access', 'Spyware collecting sensitive information', 'Worms spreading across networks']
    },
    {
      name: 'Phishing Attacks',
      description: 'Social engineering attempts to obtain sensitive information by impersonating trusted entities through email, websites, or messages.',
      examples: ['Email phishing impersonating university services', 'Spear phishing targeting specific individuals', 'SMS phishing (smishing)', 'Voice phishing (vishing)']
    },
    {
      name: 'Data Breach',
      description: 'Unauthorized access, disclosure, or theft of confidential information including personal data, research data, or institutional records.',
      examples: ['Database compromise exposing student records', 'Unauthorized access to research data', 'Theft of credentials or personal information', 'Accidental public exposure of sensitive data']
    },
    {
      name: 'Website Defacement',
      description: 'Unauthorized modification of website content, typically through exploitation of web application vulnerabilities.',
      examples: ['Homepage alteration or replacement', 'Injection of malicious content', 'Unauthorized page modifications', 'Website vandalism']
    },
    {
      name: 'Distributed Denial of Service (DDoS)',
      description: 'Coordinated attacks overwhelming systems or networks with traffic to disrupt service availability.',
      examples: ['Network flooding attacks', 'Application layer attacks', 'Resource exhaustion attacks', 'Service disruption']
    },
    {
      name: 'Account Compromise',
      description: 'Unauthorized access to user accounts through credential theft, session hijacking, or exploitation of authentication weaknesses.',
      examples: ['Email account takeover', 'Social media account hijacking', 'Administrative account compromise', 'Credential stuffing attacks']
    },
    {
      name: 'Unauthorized Access',
      description: 'Gaining access to systems, networks, or data without authorization through various exploitation techniques.',
      examples: ['Network intrusion', 'Privilege escalation', 'Exploitation of unpatched vulnerabilities', 'Unauthorized system access']
    },
    {
      name: 'Insider Threats',
      description: 'Security risks originating from individuals within the organization, whether intentional or accidental.',
      examples: ['Unauthorized data exfiltration', 'Abuse of access privileges', 'Accidental data exposure', 'Policy violations']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Incident Types</p>
        </nav>

        {/* Page Title */}
        <h1
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Types of Security Incidents
        </h1>

        {/* Lead Paragraph */}
        <p
          className="text-xl lg:text-2xl leading-relaxed text-foreground/80 mb-16 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Understanding different categories of cybersecurity incidents that may affect
          client systems and require professional response.
        </p>

        {/* Introduction */}
        <div
          className="mb-16 text-muted-foreground space-y-4"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          <p className="leading-relaxed">
            Coastal Delta Response handles a wide range of cybersecurity incidents. Proper
            classification helps ensure appropriate response and resource allocation.
            If you're unsure about the type of incident you're experiencing, report
            it anyway—our team will assess and classify it accordingly.
          </p>
        </div>

        {/* Incident Types List */}
        <div className="space-y-16">
          {incidentTypes.map((type, index) => (
            <section
              key={index}
              className={index > 0 ? 'pt-16 border-t border-border' : ''}
            >
              <h2
                className="text-3xl mb-6 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {type.name}
              </h2>

              <p
                className="text-muted-foreground leading-relaxed mb-6"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {type.description}
              </p>

              <div>
                <h3 className="text-sm mb-3 text-foreground">Common Examples:</h3>
                <ul
                  className="space-y-2 text-sm text-muted-foreground pl-6"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {type.examples.map((example, exIndex) => (
                    <li key={exIndex}>— {example}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Reporting CTA */}
        <section className="mt-20 pt-16 border-t border-border">
          <h2
            className="text-3xl mb-6 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Encountered an Incident?
          </h2>
          <p
            className="text-muted-foreground leading-relaxed mb-6"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            If you've experienced or suspect any of these incident types, report it
            immediately to Coastal Delta Response. Early reporting enables faster response
            and mitigation.
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-foreground">Emergency: Contact information not currently available</p>
            <p className="text-muted-foreground">Or use our online incident reporting form</p>
          </div>
        </section>
      </article>
    </div>
  );
}
