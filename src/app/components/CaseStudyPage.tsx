import SEO from './SEO';

export default function CaseStudyPage() {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Case Study: Website Security Assessment - farmasi.unissula.ac.id"
                description="Technical security assessment report for farmasi.unissula.ac.id WordPress website. Comprehensive vulnerability analysis conducted by Coastal Delta Response using WPScan."
                keywords="security assessment, WordPress security, vulnerability analysis, WPScan, farmasi UNISSULA, cybersecurity case study, penetration testing, security audit"
            />

            <article className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
                {/* Breadcrumb */}
                <nav className="mb-12">
                    <p className="text-xs text-muted-foreground">Case Study / Security Assessment</p>
                </nav>

                {/* Article Title */}
                <h1
                    className="text-4xl lg:text-5xl leading-tight mb-6 text-foreground"
                    style={{ fontFamily: 'var(--font-serif)' }}
                >
                    Website Security Assessment Report
                </h1>

                <p className="text-2xl text-muted-foreground mb-16" style={{ fontFamily: 'var(--font-serif)' }}>
                    farmasi.unissula.ac.id
                </p>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Overview
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                This security assessment was conducted on <strong className="text-foreground">1 Februari 2026</strong> using
                                WPScan Security Scanner to identify potential security vulnerabilities in the WordPress-based website
                                <strong className="text-foreground"> farmasi.unissula.ac.id</strong>. The assessment employed automated
                                vulnerability scanning techniques to evaluate the security posture of the target system.
                            </p>
                            <p className="leading-relaxed">
                                This report serves as internal documentation and a technical case study demonstrating Coastal Delta Response's
                                security assessment methodology. The findings are presented in a structured format to facilitate understanding
                                of identified vulnerabilities and recommended mitigation strategies.
                            </p>
                        </div>
                    </section>

                    {/* Target Information */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Target Information
                        </h2>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <dl className="space-y-3 text-sm">
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Target URL:</dt>
                                    <dd className="text-muted-foreground">https://farmasi.unissula.ac.id/</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Platform:</dt>
                                    <dd className="text-muted-foreground">WordPress</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Scan Date:</dt>
                                    <dd className="text-muted-foreground">1 Februari 2026</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Scanner:</dt>
                                    <dd className="text-muted-foreground">WPScan Security Scanner</dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    {/* Executive Summary */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Executive Summary
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                The security assessment identified <strong className="text-foreground">41 vulnerabilities</strong> across
                                the WordPress core installation, active theme, and installed plugins. The overall risk level is classified
                                as <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded font-semibold">CRITICAL</span>.
                            </p>
                            <p className="leading-relaxed">
                                Vulnerabilities span multiple attack vectors including Cross-Site Scripting (XSS), SQL Injection,
                                PHP Object Injection, and Authorization Bypass. The identified issues affect both WordPress core
                                (version 6.7.2) and several widely-used plugins, presenting significant security risks that require
                                immediate attention.
                            </p>
                        </div>
                    </section>

                    {/* Vulnerability Severity Breakdown */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Vulnerability Severity Breakdown
                        </h2>
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-red-500/5 border-l-4 border-red-500 rounded-r">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-foreground">WordPress Core</span>
                                        <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">2 vulnerabilities</p>
                                </div>

                                <div className="p-4 bg-orange-500/5 border-l-4 border-orange-500 rounded-r">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-foreground">ML Slider</span>
                                        <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">10 vulnerabilities</p>
                                </div>

                                <div className="p-4 bg-red-500/5 border-l-4 border-red-500 rounded-r">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-foreground">Popup Maker</span>
                                        <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">15 vulnerabilities</p>
                                </div>

                                <div className="p-4 bg-orange-500/5 border-l-4 border-orange-500 rounded-r">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-foreground">Smart Slider 3</span>
                                        <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">6 vulnerabilities</p>
                                </div>

                                <div className="p-4 bg-red-500/5 border-l-4 border-red-500 rounded-r md:col-span-2">
                                    <div className="flex justify-between items-center">
                                        <span className="font-semibold text-foreground">The Events Calendar</span>
                                        <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">8 vulnerabilities</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* WordPress Core Vulnerabilities */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            WordPress Core Vulnerabilities
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                The target system is running <strong className="text-foreground">WordPress version 6.7.2</strong>,
                                which contains known security vulnerabilities that have been addressed in subsequent releases.
                                Two critical vulnerabilities were identified:
                            </p>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">1. DOM-Based Stored XSS (CVE-2025-58674)</h3>
                                    <ul className="space-y-1 text-sm list-disc list-inside">
                                        <li><strong>Type:</strong> Cross-Site Scripting (XSS)</li>
                                        <li><strong>Vector:</strong> DOM manipulation via malicious input</li>
                                        <li><strong>Impact:</strong> Session hijacking, credential theft, malicious script execution</li>
                                        <li><strong>Fixed in:</strong> WordPress 6.7.4</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">2. Sensitive Data Disclosure (CVE-2025-58246)</h3>
                                    <ul className="space-y-1 text-sm list-disc list-inside">
                                        <li><strong>Type:</strong> Information Disclosure</li>
                                        <li><strong>Vector:</strong> Unauthorized access to sensitive system information</li>
                                        <li><strong>Impact:</strong> Exposure of configuration data, user information, system paths</li>
                                        <li><strong>Fixed in:</strong> WordPress 6.7.4</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="leading-relaxed">
                                Both vulnerabilities have been patched in WordPress version 6.7.4. Immediate upgrade is strongly recommended
                                to mitigate these security risks.
                            </p>
                        </div>
                    </section>

                    {/* Plugin Vulnerabilities Analysis */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Plugin Vulnerabilities Analysis
                        </h2>

                        <div className="space-y-8">
                            {/* ML Slider */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    ML Slider
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-foreground">Severity:</span>
                                            <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded font-semibold">HIGH</span>
                                        </div>
                                        <p><strong className="text-foreground">Vulnerabilities:</strong> 10 identified issues</p>
                                        <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, Cross-Site Scripting (XSS), Authorization Bypass</p>
                                        <p className="leading-relaxed text-muted-foreground">
                                            <strong className="text-foreground">Technical Impact:</strong> SQL Injection vulnerabilities allow
                                            unauthorized database access and potential data exfiltration. XSS issues enable malicious script
                                            injection affecting user sessions. Authorization bypass permits privilege escalation.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Popup Maker */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Popup Maker
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-foreground">Severity:</span>
                                            <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded font-semibold">CRITICAL</span>
                                        </div>
                                        <p><strong className="text-foreground">Vulnerabilities:</strong> 15 identified issues</p>
                                        <p><strong className="text-foreground">Attack Vectors:</strong> PHP Object Injection, SQL Injection, XSS, CSRF</p>
                                        <p className="leading-relaxed text-muted-foreground">
                                            <strong className="text-foreground">Technical Impact:</strong> PHP Object Injection can lead to
                                            Remote Code Execution (RCE), allowing attackers to execute arbitrary code on the server. Combined
                                            with SQL Injection, this presents severe database compromise risks. CSRF vulnerabilities enable
                                            unauthorized actions on behalf of authenticated users.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Smart Slider 3 */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Smart Slider 3
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-foreground">Severity:</span>
                                            <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded font-semibold">HIGH</span>
                                        </div>
                                        <p><strong className="text-foreground">Vulnerabilities:</strong> 6 identified issues</p>
                                        <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, Authorization Bypass, File Upload Vulnerabilities</p>
                                        <p className="leading-relaxed text-muted-foreground">
                                            <strong className="text-foreground">Technical Impact:</strong> File upload vulnerabilities may
                                            allow malicious file execution. SQL Injection enables database manipulation and data theft.
                                            Authorization bypass permits unauthorized access to administrative functions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* The Events Calendar */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    The Events Calendar
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-foreground">Severity:</span>
                                            <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded font-semibold">CRITICAL</span>
                                        </div>
                                        <p><strong className="text-foreground">Vulnerabilities:</strong> 8 identified issues</p>
                                        <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, XSS, Privilege Escalation</p>
                                        <p className="leading-relaxed text-muted-foreground">
                                            <strong className="text-foreground">Technical Impact:</strong> Multiple SQL Injection points allow
                                            comprehensive database access. XSS vulnerabilities facilitate session hijacking and credential
                                            harvesting. Privilege escalation issues enable unauthorized administrative access.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Additional Findings */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Additional Findings
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <ul className="space-y-3">
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">WP-Cron Enabled:</strong> WordPress cron system is publicly
                                    accessible, potentially allowing abuse for resource exhaustion attacks or timing-based reconnaissance.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">REST API Exposure:</strong> WordPress REST API endpoints are
                                    publicly accessible, exposing system information and user enumeration vectors.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">Outdated Theme:</strong> Twenty Twenty-Four theme version is
                                    outdated, potentially containing unpatched vulnerabilities.
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">Server Information Disclosure:</strong> Apache server version
                                    and configuration details are exposed through HTTP headers, aiding reconnaissance activities.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Risk Assessment */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Risk Assessment
                        </h2>
                        <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r mb-6">
                            <p className="text-lg font-semibold text-foreground mb-2">
                                Overall Risk Level: <span className="px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded">CRITICAL</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Immediate remediation required to prevent potential security incidents.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                The combination of WordPress core vulnerabilities and multiple plugin security issues creates a
                                high-risk environment with potential for:
                            </p>

                            <ul className="space-y-2">
                                <li><strong className="text-foreground">Database Compromise:</strong> SQL Injection vulnerabilities enable unauthorized database access, modification, and data exfiltration</li>
                                <li><strong className="text-foreground">Session Hijacking:</strong> XSS vulnerabilities allow theft of authentication tokens and user session compromise</li>
                                <li><strong className="text-foreground">Remote Code Execution:</strong> PHP Object Injection and file upload vulnerabilities may permit arbitrary code execution</li>
                                <li><strong className="text-foreground">Data Leakage:</strong> Information disclosure vulnerabilities expose sensitive system and user data</li>
                                <li><strong className="text-foreground">Privilege Escalation:</strong> Authorization bypass issues enable unauthorized administrative access</li>
                            </ul>
                        </div>
                    </section>

                    {/* Recommended Mitigation */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Recommended Mitigation
                        </h2>

                        <div className="space-y-8">
                            {/* Immediate Action */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Immediate Action (Priority 1)
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">1. Update WordPress Core:</strong> Upgrade to WordPress 6.7.4
                                            or latest stable version immediately to patch CVE-2025-58674 and CVE-2025-58246
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">2. Update All Plugins:</strong> Update ML Slider, Popup Maker,
                                            Smart Slider 3, and The Events Calendar to their latest secure versions
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">3. Disable Unused Plugins:</strong> Deactivate and remove any
                                            plugins not actively required for site functionality
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">4. Implement Web Application Firewall (WAF):</strong> Deploy
                                            WAF rules to filter malicious requests targeting identified vulnerabilities
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Short-Term Mitigation */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Short-Term Mitigation (Priority 2)
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">1. Restrict REST API Access:</strong> Implement authentication
                                            requirements for WordPress REST API endpoints
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">2. Disable WP-Cron Public Access:</strong> Configure server-level
                                            cron jobs and disable public WP-Cron execution
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">3. Update Theme:</strong> Upgrade Twenty Twenty-Four theme to
                                            latest version
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">4. Implement Security Headers:</strong> Configure HTTP security
                                            headers (CSP, X-Frame-Options, X-Content-Type-Options)
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Security Hardening */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Security Hardening Best Practices
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">File Permissions:</strong> Ensure proper file and directory
                                            permissions (644 for files, 755 for directories)
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Database Security:</strong> Use strong database credentials,
                                            restrict database user privileges, enable query logging
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Disable File Editing:</strong> Disable theme and plugin file
                                            editing from WordPress admin panel
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Enable Security Monitoring:</strong> Implement continuous
                                            security monitoring and intrusion detection systems
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Regular Backups:</strong> Establish automated backup procedures
                                            with offsite storage
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Security Audits:</strong> Schedule periodic security assessments
                                            and penetration testing
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Disclaimer */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Disclaimer
                        </h2>
                        <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-border">
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                This security assessment report is provided for <strong className="text-foreground">internal documentation
                                    and educational purposes</strong> as part of Coastal Delta Response's security research initiatives.
                                The assessment was conducted using automated scanning tools and represents a point-in-time analysis
                                of publicly accessible information.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                This documentation is <strong className="text-foreground">not intended as a publication of active
                                    exploitation techniques</strong> and should not be used for malicious purposes. The findings are
                                presented to demonstrate security assessment methodologies and promote awareness of common WordPress
                                security issues within an academic and research context.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                Coastal Delta Response operates as a cybersecurity research prototype within the higher education
                                ecosystem. This case study reflects our commitment to advancing cybersecurity knowledge through
                                rigorous technical analysis and responsible disclosure practices.
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
