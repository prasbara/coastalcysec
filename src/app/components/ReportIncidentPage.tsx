import { useState } from 'react';

export default function ReportIncidentPage() {
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    incidentType: '',
    severity: '',
    description: '',
    affectedSystems: '',
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you. Your incident report has been received. Our team will respond shortly.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Form Header */}
      <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <p className="text-xs text-muted-foreground">Report Incident</p>
        </nav>

        {/* Page Title */}
        <h1 
          className="text-5xl lg:text-6xl leading-tight mb-8 text-foreground"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Report a Security Incident
        </h1>

        {/* Lead Paragraph */}
        <p 
          className="text-xl leading-relaxed text-foreground/80 mb-12 border-l-2 border-border pl-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          If you have discovered or suspect a cybersecurity incident, please report it 
          immediately using this form. All reports are treated with strict confidentiality.
        </p>

        {/* Important Notice */}
        <div className="mb-16 p-6 border border-border bg-card">
          <h2 
            className="text-xl mb-4 text-foreground"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Important Information
          </h2>
          <ul 
            className="space-y-2 text-sm text-muted-foreground"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            <li>— For critical incidents, call our emergency hotline: +62 XXX XXXX XXXX</li>
            <li>— All incident reports are confidential and handled by trained professionals</li>
            <li>— You will receive a confirmation and case number within 1 hour for critical incidents</li>
            <li>— Anonymous reporting is available, though it may limit our ability to provide updates</li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Reporter Information */}
          <section>
            <h2 
              className="text-2xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Reporter Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="reporterName"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="reporterName"
                  value={formData.reporterName}
                  onChange={(e) => setFormData({...formData, reporterName: e.target.value})}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  disabled={formData.anonymous}
                />
              </div>

              <div>
                <label 
                  htmlFor="reporterEmail"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="reporterEmail"
                  value={formData.reporterEmail}
                  onChange={(e) => setFormData({...formData, reporterEmail: e.target.value})}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  disabled={formData.anonymous}
                />
              </div>

              <div>
                <label 
                  htmlFor="reporterPhone"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="reporterPhone"
                  value={formData.reporterPhone}
                  onChange={(e) => setFormData({...formData, reporterPhone: e.target.value})}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  disabled={formData.anonymous}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={formData.anonymous}
                  onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                  className="w-4 h-4 border border-border"
                />
                <label 
                  htmlFor="anonymous"
                  className="text-sm text-muted-foreground cursor-pointer"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Submit this report anonymously
                </label>
              </div>
            </div>
          </section>

          {/* Incident Details */}
          <section className="pt-12 border-t border-border">
            <h2 
              className="text-2xl mb-6 text-foreground"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Incident Details
            </h2>

            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="incidentType"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Incident Type
                </label>
                <select
                  id="incidentType"
                  value={formData.incidentType}
                  onChange={(e) => setFormData({...formData, incidentType: e.target.value})}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  required
                >
                  <option value="">Select incident type</option>
                  <option value="malware">Malware Infection</option>
                  <option value="phishing">Phishing Attack</option>
                  <option value="data-breach">Data Breach</option>
                  <option value="defacement">Website Defacement</option>
                  <option value="ddos">DDoS Attack</option>
                  <option value="account-compromise">Account Compromise</option>
                  <option value="unauthorized-access">Unauthorized Access</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="severity"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Severity Assessment
                </label>
                <select
                  id="severity"
                  value={formData.severity}
                  onChange={(e) => setFormData({...formData, severity: e.target.value})}
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  required
                >
                  <option value="">Select severity level</option>
                  <option value="critical">Critical — Active attack or data loss</option>
                  <option value="high">High — Significant risk or compromise</option>
                  <option value="medium">Medium — Potential security concern</option>
                  <option value="low">Low — General security question</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="affectedSystems"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Affected Systems (Optional)
                </label>
                <input
                  type="text"
                  id="affectedSystems"
                  value={formData.affectedSystems}
                  onChange={(e) => setFormData({...formData, affectedSystems: e.target.value})}
                  placeholder="e.g., portal.unissula.ac.id, email server, specific computer"
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>

              <div>
                <label 
                  htmlFor="description"
                  className="block text-sm mb-2 text-foreground"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Incident Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={8}
                  placeholder="Please provide a detailed description of the incident, including when it was discovered, what was observed, and any actions already taken..."
                  className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  required
                />
              </div>
            </div>
          </section>

          {/* Submit */}
          <section className="pt-12 border-t border-border">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm tracking-wide"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Submit Incident Report
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              By submitting this report, you acknowledge that the information provided is accurate 
              to the best of your knowledge.
            </p>
          </section>
        </form>
      </article>
    </div>
  );
}
