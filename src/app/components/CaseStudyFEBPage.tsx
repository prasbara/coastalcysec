import SEO from './SEO';

export default function CaseStudyFEBPage() {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Case Study: WordPress Security Assessment - feb.unissula.ac.id"
                description="Technical WordPress security assessment report for feb.unissula.ac.id. Comprehensive vulnerability analysis and security audit conducted by Coastal Delta Response."
                keywords="WordPress security, security assessment, feb UNISSULA, WPScan, vulnerability analysis, cybersecurity audit, penetration testing, website security"
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
                    WordPress Security Assessment Report
                </h1>

                <p className="text-2xl text-muted-foreground mb-16" style={{ fontFamily: 'var(--font-serif)' }}>
                    feb.unissula.ac.id
                </p>

                {/* Content Sections */}
                <div className="space-y-16">
                    {/* Assessment Overview */}
                    <section>
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Assessment Overview
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                A comprehensive security assessment was conducted on <strong className="text-foreground">1 Februari 2026</strong> using
                                WPScan Security Scanner v3.8.28 to evaluate the security posture of the WordPress-based website
                                <strong className="text-foreground"> feb.unissula.ac.id</strong>. The assessment focused on identifying
                                vulnerabilities in WordPress core, installed themes, plugins, and server configuration.
                            </p>
                            <p className="leading-relaxed">
                                This technical documentation serves as a case study demonstrating Coastal Delta Response's systematic
                                approach to website security assessment, vulnerability identification, and risk analysis for WordPress
                                installations in academic environments.
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
                                    <dd className="text-muted-foreground">https://feb.unissula.ac.id/</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">IP Address:</dt>
                                    <dd className="text-muted-foreground">103.28.223.7</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Platform:</dt>
                                    <dd className="text-muted-foreground">WordPress</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Server:</dt>
                                    <dd className="text-muted-foreground">Apache</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Scan Tool:</dt>
                                    <dd className="text-muted-foreground">WPScan v3.8.28</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Scan Date:</dt>
                                    <dd className="text-muted-foreground">1 Februari 2026</dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    {/* Key Findings Summary */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Key Findings Summary
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                The security assessment identified multiple critical security issues requiring immediate attention:
                            </p>

                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <ul className="space-y-3 text-sm">
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">WordPress Core:</strong> Version 6.6.1 detected with known
                                        security vulnerabilities (CVE-2025-58674, CVE-2025-58246)
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">XML-RPC Enabled:</strong> Publicly accessible XML-RPC interface
                                        exposing brute force and DDoS attack vectors
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">WP-Cron Exposure:</strong> WordPress cron system accessible
                                        externally, enabling potential resource abuse
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">REST API Exposure:</strong> The Events Calendar REST API
                                        endpoints publicly accessible without authentication
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Outdated Components:</strong> Multiple plugins and theme
                                        (Kingster 3.0.3) running outdated versions with known vulnerabilities
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Overall Risk:</strong> <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded font-semibold">HIGH to CRITICAL</span>
                                    </li>
                                </ul>
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
                                The target system is running <strong className="text-foreground">WordPress version 6.6.1</strong>,
                                which contains two critical security vulnerabilities that have been patched in version 6.6.4:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">1. Author+ DOM Stored XSS (CVE-2025-58674)</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Vulnerability Type:</strong> Cross-Site Scripting (XSS)</p>
                                        <p><strong className="text-foreground">Required Privilege:</strong> Author or higher</p>
                                        <p><strong className="text-foreground">Attack Vector:</strong> DOM manipulation through malicious content injection</p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Technical Impact:</strong> Authenticated users with Author
                                            privileges can inject malicious JavaScript code that executes in the context of other users'
                                            browsers, enabling session hijacking, credential theft, and unauthorized actions.
                                        </p>
                                        <p><strong className="text-foreground">Patched in:</strong> WordPress 6.6.4</p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">2. Contributor+ Sensitive Data Disclosure (CVE-2025-58246)</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Vulnerability Type:</strong> Information Disclosure</p>
                                        <p><strong className="text-foreground">Required Privilege:</strong> Contributor or higher</p>
                                        <p><strong className="text-foreground">Attack Vector:</strong> Unauthorized access to sensitive system information</p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Technical Impact:</strong> Users with Contributor privileges
                                            can access sensitive configuration data, user information, and system paths that should be
                                            restricted, potentially aiding further exploitation.
                                        </p>
                                        <p><strong className="text-foreground">Patched in:</strong> WordPress 6.6.4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Theme Analysis */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Theme Analysis
                        </h2>
                        <div className="bg-muted/30 p-6 rounded-lg border border-border">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">Kingster</h3>
                                        <p className="text-sm text-muted-foreground">Active WordPress Theme</p>
                                    </div>
                                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded text-sm font-semibold">OUTDATED</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="font-semibold text-foreground">Version:</p>
                                        <p className="text-muted-foreground">3.0.3</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Status:</p>
                                        <p className="text-muted-foreground">Requires Update</p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    <strong className="text-foreground">Risk Assessment:</strong> Outdated theme versions may contain
                                    unpatched security vulnerabilities and compatibility issues. While no specific CVEs were identified
                                    for this version during the scan, running outdated themes increases the attack surface and may
                                    introduce security risks.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Plugin Vulnerability Overview */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Plugin Vulnerability Overview
                        </h2>

                        <div className="space-y-6">
                            {/* Revolution Slider */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Revolution Slider</h3>
                                    <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Vulnerabilities:</strong> Multiple high-severity issues</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> Arbitrary File Upload, SQL Injection, Privilege Escalation</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> File upload vulnerabilities can lead to Remote
                                        Code Execution (RCE). SQL Injection enables database compromise. Privilege escalation allows
                                        unauthorized administrative access.
                                    </p>
                                </div>
                            </div>

                            {/* Smart Slider 3 */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Smart Slider 3</h3>
                                    <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Vulnerabilities:</strong> 6+ identified security issues</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, Stored XSS, Authorization Bypass</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> SQL Injection allows database manipulation.
                                        Stored XSS enables persistent malicious script execution. Authorization bypass permits access to
                                        restricted functionality.
                                    </p>
                                </div>
                            </div>

                            {/* The Events Calendar */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">The Events Calendar</h3>
                                    <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Vulnerabilities:</strong> 8+ critical security flaws</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, XSS, Privilege Escalation, REST API Exposure</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> Multiple SQL Injection points enable comprehensive
                                        database access. XSS vulnerabilities facilitate session hijacking. REST API exposure allows
                                        unauthorized data access and manipulation.
                                    </p>
                                </div>
                            </div>

                            {/* GTranslate */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">GTranslate</h3>
                                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded text-sm font-semibold">MEDIUM</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Status:</strong> Outdated version detected</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> XSS, Configuration Issues</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> Potential XSS vulnerabilities and configuration
                                        weaknesses that may expose site to security risks.
                                    </p>
                                </div>
                            </div>

                            {/* Goodlayers Core */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Goodlayers Core</h3>
                                    <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Vulnerabilities:</strong> Multiple security issues</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, File Upload, Authorization Bypass</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> Core theme functionality plugin with database
                                        access vulnerabilities and potential file upload exploits.
                                    </p>
                                </div>
                            </div>

                            {/* CM Pop-Up Banners */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">CM Pop-Up Banners</h3>
                                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded text-sm font-semibold">MEDIUM</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Status:</strong> Outdated version</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> XSS, CSRF</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> Cross-Site Scripting and CSRF vulnerabilities
                                        may allow malicious content injection and unauthorized actions.
                                    </p>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Newsletter</h3>
                                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded text-sm font-semibold">MEDIUM</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Status:</strong> Requires security review</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> SQL Injection, XSS</p>
                                    <p className="leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Impact:</strong> Newsletter functionality may expose subscriber
                                        data through SQL Injection or XSS vulnerabilities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Configuration and Exposure Findings */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Configuration and Exposure Findings
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                Beyond plugin and core vulnerabilities, several configuration issues were identified that increase
                                the attack surface:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">XML-RPC Enabled</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> XML-RPC interface is publicly accessible
                                        at <code className="px-2 py-1 bg-muted rounded text-xs">/xmlrpc.php</code>
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Security Impact:</strong> XML-RPC can be exploited for:
                                    </p>
                                    <ul className="text-sm space-y-1 mt-2 list-disc list-inside">
                                        <li>Brute force authentication attacks with amplification</li>
                                        <li>Distributed Denial of Service (DDoS) attacks</li>
                                        <li>Pingback abuse for reconnaissance and attacks</li>
                                    </ul>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">External WP-Cron Active</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> WordPress cron system is accessible via
                                        external HTTP requests
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Security Impact:</strong> Attackers can trigger resource-intensive
                                        cron jobs repeatedly, causing server resource exhaustion and potential denial of service.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">REST API Endpoint Exposure</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> The Events Calendar REST API endpoints are
                                        publicly accessible without authentication
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Security Impact:</strong> Exposed REST API enables:
                                    </p>
                                    <ul className="text-sm space-y-1 mt-2 list-disc list-inside">
                                        <li>User enumeration for targeted attacks</li>
                                        <li>Information disclosure about site structure and content</li>
                                        <li>Potential data manipulation if combined with other vulnerabilities</li>
                                    </ul>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Outdated Components with Known CVEs</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> Multiple plugins running versions with
                                        publicly disclosed Common Vulnerabilities and Exposures (CVEs)
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Security Impact:</strong> Attackers can leverage public exploit
                                        databases to target known vulnerabilities in outdated components.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Risk Assessment */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Risk Assessment
                        </h2>
                        <div className="bg-orange-500/5 border-l-4 border-orange-500 p-6 rounded-r mb-6">
                            <p className="text-lg font-semibold text-foreground mb-2">
                                Overall Risk Level: <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded">HIGH to CRITICAL</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Multiple critical vulnerabilities require immediate remediation to prevent security incidents.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                The combination of WordPress core vulnerabilities, multiple plugin security issues, and configuration
                                weaknesses creates a high-risk environment with potential for severe security incidents:
                            </p>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Potential Impact Scenarios</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Remote Code Execution (RCE):</strong> File upload vulnerabilities
                                        in Revolution Slider and other plugins may allow attackers to execute arbitrary code on the server,
                                        leading to complete system compromise.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Database Compromise:</strong> Multiple SQL Injection vulnerabilities
                                        across plugins enable unauthorized database access, data exfiltration, modification, or deletion.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Session Hijacking:</strong> XSS vulnerabilities in WordPress core
                                        and plugins allow theft of authentication tokens, enabling attackers to impersonate legitimate users
                                        including administrators.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Information Disclosure:</strong> Sensitive data exposure through
                                        CVE-2025-58246 and REST API endpoints may reveal confidential information about users, system
                                        configuration, and internal structure.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Privilege Escalation:</strong> Authorization bypass vulnerabilities
                                        enable attackers to elevate privileges from low-level accounts to administrative access.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Denial of Service:</strong> XML-RPC and WP-Cron abuse can cause
                                        resource exhaustion, making the website unavailable to legitimate users.
                                    </li>
                                </ul>
                            </div>
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
                                    Immediate Action (Priority 1 - Within 24 Hours)
                                </h3>
                                <div className="bg-red-500/5 p-6 rounded-lg border-l-4 border-red-500">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">1. Update WordPress Core:</strong> Upgrade immediately to
                                            WordPress 6.6.4 or latest stable version to patch CVE-2025-58674 and CVE-2025-58246
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">2. Update Critical Plugins:</strong> Update Revolution Slider,
                                            The Events Calendar, Smart Slider 3, and Goodlayers Core to their latest secure versions
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">3. Disable XML-RPC:</strong> Immediately disable XML-RPC
                                            functionality unless absolutely required for specific integrations
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">4. Review User Accounts:</strong> Audit all user accounts,
                                            especially those with Author, Contributor, or higher privileges. Remove unnecessary accounts and
                                            enforce strong password policies.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Short-Term Mitigation */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Short-Term Mitigation (Priority 2 - Within 1 Week)
                                </h3>
                                <div className="bg-orange-500/5 p-6 rounded-lg border-l-4 border-orange-500">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">1. Update All Plugins:</strong> Update GTranslate, CM Pop-Up
                                            Banners, Newsletter, and all other installed plugins to latest versions
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">2. Update Kingster Theme:</strong> Upgrade theme to latest
                                            version or consider migrating to a more actively maintained theme
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">3. Disable WP-Cron External Access:</strong> Configure server-level
                                            cron jobs and disable public WP-Cron execution via <code className="px-2 py-1 bg-muted rounded text-xs">DISABLE_WP_CRON</code>
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">4. Restrict REST API Access:</strong> Implement authentication
                                            requirements for sensitive REST API endpoints, particularly The Events Calendar endpoints
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">5. Remove Unused Plugins:</strong> Deactivate and delete any
                                            plugins not actively required for site functionality
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Security Hardening */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Security Hardening Best Practices (Ongoing)
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Web Application Firewall (WAF):</strong> Deploy WAF with
                                            WordPress-specific rulesets to filter malicious requests (e.g., Cloudflare, Sucuri, Wordfence)
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Two-Factor Authentication (2FA):</strong> Enforce 2FA for all
                                            administrative and privileged user accounts
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Security Headers:</strong> Implement HTTP security headers
                                            including Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, and Strict-Transport-Security
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">File Permissions:</strong> Ensure proper file and directory
                                            permissions (644 for files, 755 for directories, 600 for wp-config.php)
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Database Security:</strong> Use strong database credentials,
                                            restrict database user privileges to minimum required, enable query logging
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Disable File Editing:</strong> Disable theme and plugin file
                                            editing from WordPress admin panel via <code className="px-2 py-1 bg-muted rounded text-xs">DISALLOW_FILE_EDIT</code>
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Security Monitoring:</strong> Implement continuous security
                                            monitoring, intrusion detection, and file integrity monitoring
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Regular Backups:</strong> Establish automated daily backup
                                            procedures with offsite storage and regular restore testing
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Security Audits:</strong> Schedule quarterly security assessments
                                            and annual penetration testing
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Update Policy:</strong> Establish policy for applying security
                                            updates within 48 hours of release
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
                                This WordPress security assessment report is provided as a <strong className="text-foreground">technical
                                    case study and internal documentation</strong> demonstrating Coastal Delta Response's website security
                                assessment methodology and capabilities. The assessment was conducted using automated scanning tools
                                (WPScan v3.8.28) and represents a point-in-time analysis of publicly accessible information.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                This documentation is <strong className="text-foreground">intended for educational and demonstration
                                    purposes</strong> to illustrate common WordPress security issues and professional security assessment
                                practices. It is <strong className="text-foreground">not intended as a publication of active exploitation
                                    techniques</strong> and should not be used for malicious purposes or unauthorized security testing.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                The findings presented in this report are based on automated vulnerability scanning and may require
                                manual verification. Coastal Delta Response operates as a cybersecurity research prototype within the
                                higher education ecosystem, committed to advancing cybersecurity knowledge through rigorous technical
                                analysis and responsible disclosure practices.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                <strong className="text-foreground">Responsible Disclosure:</strong> Any identified vulnerabilities
                                should be reported to the website administrators through appropriate channels to enable timely
                                remediation and protect users.
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
