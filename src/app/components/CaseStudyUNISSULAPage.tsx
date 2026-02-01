import SEO from './SEO';

export default function CaseStudyUNISSULAPage() {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Case Study: WordPress Security Assessment - unissula.ac.id"
                description="Critical WordPress security assessment report for unissula.ac.id main website. Comprehensive vulnerability analysis of WordPress 4.2.35 conducted by Coastal Delta Response."
                keywords="WordPress security, UNISSULA security, WPScan, vulnerability assessment, WordPress 4.2.35, critical vulnerabilities, security audit"
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
                    unissula.ac.id
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
                                WPScan Security Scanner v3.8.28 to evaluate the security posture of the main institutional website
                                <strong className="text-foreground"> unissula.ac.id</strong>. The assessment encompassed WordPress core
                                vulnerabilities, theme security, plugin analysis, configuration review, and HTTP security header evaluation.
                            </p>
                            <p className="leading-relaxed">
                                This technical documentation represents a critical security assessment revealing severe vulnerabilities
                                in an outdated WordPress installation, demonstrating Coastal Delta Response's systematic approach to
                                identifying and documenting security risks in academic web infrastructure.
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
                                    <dd className="text-muted-foreground">https://unissula.ac.id/</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">IP Address:</dt>
                                    <dd className="text-muted-foreground">103.28.223.48</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Platform:</dt>
                                    <dd className="text-muted-foreground">WordPress 4.2.35</dd>
                                </div>
                                <div className="flex">
                                    <dt className="font-semibold text-foreground w-40">Server:</dt>
                                    <dd className="text-muted-foreground">LiteSpeed</dd>
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

                    {/* Security Headers Observation */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Security Headers Observation
                        </h2>
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                HTTP security header analysis revealed multiple configuration weaknesses and missing security controls:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">CORS Policy Configuration</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> <code className="px-2 py-1 bg-muted rounded text-xs">access-control-allow-origin: *</code>
                                        detected, allowing unrestricted cross-origin resource access.
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Risk:</strong> Overly permissive CORS policy enables any external
                                        domain to make requests, potentially exposing sensitive data and enabling cross-site attacks.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Content Security Policy (CSP)</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> Content-Security-Policy header is <strong>missing</strong>.
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Risk:</strong> Absence of CSP allows execution of inline scripts
                                        and resources from any source, significantly increasing XSS attack surface.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Referrer Policy</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> Referrer-Policy header not configured.
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Risk:</strong> Referrer information may leak sensitive URL
                                        parameters and internal structure to external sites.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Permissions Policy</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> Permissions-Policy (formerly Feature-Policy)
                                        header is absent.
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Risk:</strong> Browser features (camera, microphone, geolocation)
                                        are not restricted, potentially enabling unauthorized access to sensitive capabilities.
                                    </p>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">Cross-Origin Policy Misconfiguration</h3>
                                    <p className="text-sm leading-relaxed">
                                        <strong className="text-foreground">Finding:</strong> Cross-Origin-Embedder-Policy and
                                        Cross-Origin-Opener-Policy headers not implemented.
                                    </p>
                                    <p className="text-sm leading-relaxed mt-2">
                                        <strong className="text-foreground">Risk:</strong> Site is vulnerable to cross-origin attacks
                                        including Spectre-like side-channel attacks and cross-window communication exploits.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Findings Summary */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Key Findings Summary
                        </h2>
                        <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r mb-6">
                            <p className="text-lg font-semibold text-foreground mb-2">
                                Critical Security Issues Identified
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Multiple critical vulnerabilities requiring immediate remediation
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <ul className="space-y-3">
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">Severely Outdated WordPress Core:</strong> Version 4.2.35 detected
                                    with <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded font-semibold">7 critical vulnerabilities</span>
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">XML-RPC Enabled:</strong> Publicly accessible XML-RPC interface
                                    exposing brute force and amplification attack vectors
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">External WP-Cron Active:</strong> WordPress cron system accessible
                                    externally, enabling resource exhaustion attacks
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">Information Disclosure:</strong> Files <code className="px-2 py-1 bg-muted rounded text-xs">readme.html</code> and
                                    <code className="px-2 py-1 bg-muted rounded text-xs ml-1">robots.txt</code> publicly accessible, revealing system information
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">Outdated Components:</strong> Multiple plugins and theme running
                                    unmaintained versions with known vulnerabilities
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-foreground">Missing Security Headers:</strong> Critical HTTP security headers
                                    absent, increasing attack surface
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* WordPress Core Vulnerabilities */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            WordPress Core Vulnerabilities
                        </h2>
                        <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r mb-6">
                            <p className="text-lg font-semibold text-foreground mb-2">
                                WordPress 4.2.35: <span className="px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded">7 CRITICAL VULNERABILITIES</span>
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Minimum required version for security: <strong className="text-foreground">4.2.38 or newer</strong>
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                WordPress version 4.2.35 is severely outdated and contains multiple critical security vulnerabilities
                                that have been publicly disclosed and actively exploited:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">1. Arbitrary Shortcode Execution</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Severity:</strong> <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded">Critical</span></p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Impact:</strong> Attackers can execute arbitrary shortcodes,
                                            potentially leading to information disclosure, privilege escalation, and remote code execution
                                            depending on installed plugins.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">2. Comment Disclosure</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Severity:</strong> <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded">High</span></p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Impact:</strong> Unapproved and private comments can be
                                            accessed by unauthorized users, exposing sensitive information and internal communications.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">3. Deserialization of Untrusted Data</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Severity:</strong> <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded">Critical</span></p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Impact:</strong> PHP object injection vulnerability enabling
                                            Remote Code Execution (RCE). Attackers can execute arbitrary PHP code on the server, leading to
                                            complete system compromise.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">4. Authenticated PHP File Upload</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Severity:</strong> <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded">Critical</span></p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Impact:</strong> Authenticated users can upload malicious PHP
                                            files, bypassing security restrictions. Leads to Remote Code Execution and full server compromise.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">5. Multiple Stored XSS Vulnerabilities</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Severity:</strong> <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded">High</span></p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Impact:</strong> Multiple injection points allow persistent
                                            malicious script storage. Enables session hijacking, credential theft, and administrative account
                                            compromise affecting all site visitors.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">6. Path Traversal</h3>
                                    <div className="space-y-2 text-sm">
                                        <p><strong className="text-foreground">Severity:</strong> <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded">High</span></p>
                                        <p className="leading-relaxed">
                                            <strong className="text-foreground">Impact:</strong> Directory traversal vulnerability allows
                                            unauthorized file system access. Attackers can read sensitive configuration files, database
                                            credentials, and system information.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <h3 className="text-lg font-semibold text-foreground mb-3">7. Additional Core Vulnerabilities</h3>
                                    <div className="space-y-2 text-sm">
                                        <p className="leading-relaxed">
                                            Multiple additional vulnerabilities including CSRF, authentication bypass, and privilege escalation
                                            issues compound the security risk.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-500/5 p-6 rounded-lg border-l-4 border-red-500 mt-6">
                                <p className="text-sm font-semibold text-foreground mb-2">CRITICAL RECOMMENDATION</p>
                                <p className="text-sm leading-relaxed">
                                    Immediate upgrade to WordPress 4.2.38 or preferably latest stable version (6.x) is essential.
                                    Version 4.2.35 is <strong>severely compromised</strong> and actively targeted by automated exploit tools.
                                </p>
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
                                        <h3 className="text-lg font-semibold text-foreground">Tonjoo Default Theme</h3>
                                        <p className="text-sm text-muted-foreground">Active WordPress Theme</p>
                                    </div>
                                    <span className="px-3 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="font-semibold text-foreground">Version:</p>
                                        <p className="text-muted-foreground">1</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-foreground">Status:</p>
                                        <p className="text-muted-foreground">Severely Outdated / Unmaintained</p>
                                    </div>
                                </div>
                                <div className="bg-red-500/5 p-4 rounded border-l-4 border-red-500">
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        <strong className="text-foreground">Critical Risk Assessment:</strong> Theme version "1" indicates
                                        an extremely outdated or custom-developed theme with no apparent update history. This presents severe
                                        security risks:
                                    </p>
                                    <ul className="text-sm space-y-2 mt-3 list-disc list-inside">
                                        <li>No security patches or vulnerability fixes</li>
                                        <li>Potential incompatibility with modern WordPress security features</li>
                                        <li>Unknown security vulnerabilities in custom code</li>
                                        <li>Lack of ongoing maintenance and support</li>
                                        <li>High probability of containing exploitable code patterns</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Plugin Vulnerability Overview */}
                    <section className="pt-8 border-t border-border">
                        <h2 className="text-3xl mb-6 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                            Plugin Vulnerability Overview
                        </h2>

                        <div className="space-y-6">
                            {/* Contact Form 7 */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-red-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Contact Form 7</h3>
                                    <span className="px-2 py-1 bg-red-500/10 text-red-600 dark:text-red-400 rounded text-sm font-semibold">CRITICAL</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Version:</strong> 3.5.4 (Severely Outdated)</p>
                                    <p><strong className="text-foreground">Vulnerabilities:</strong> Multiple critical security flaws</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> Arbitrary File Upload, Privilege Escalation, Stored XSS, Open Redirect</p>
                                    <p className="leading-relaxed text-muted-foreground mt-3">
                                        <strong className="text-foreground">Technical Impact:</strong> Contact Form 7 version 3.5.4 contains
                                        critical file upload vulnerabilities allowing unauthenticated attackers to upload malicious files,
                                        leading to Remote Code Execution. Privilege escalation enables unauthorized administrative access.
                                        Stored XSS affects all site visitors. Open redirect facilitates phishing attacks.
                                    </p>
                                </div>
                            </div>

                            {/* Fluid Responsive Slideshow */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Fluid Responsive Slideshow</h3>
                                    <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Status:</strong> Outdated version detected</p>
                                    <p><strong className="text-foreground">Attack Vectors:</strong> CSRF, XSS</p>
                                    <p className="leading-relaxed text-muted-foreground mt-3">
                                        <strong className="text-foreground">Impact:</strong> Cross-Site Request Forgery enables unauthorized
                                        actions on behalf of authenticated users. XSS vulnerabilities allow malicious script injection.
                                    </p>
                                </div>
                            </div>

                            {/* Instagram Feed */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Instagram Feed</h3>
                                    <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Vulnerabilities:</strong> Stored XSS, Reflected XSS</p>
                                    <p className="leading-relaxed text-muted-foreground mt-3">
                                        <strong className="text-foreground">Impact:</strong> Both stored and reflected XSS vulnerabilities
                                        enable persistent and immediate malicious script execution, facilitating session hijacking and
                                        credential theft.
                                    </p>
                                </div>
                            </div>

                            {/* Custom Popup Builder */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Custom Popup Builder</h3>
                                    <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Attack Vectors:</strong> Denial of Service (DoS), Stored XSS</p>
                                    <p className="leading-relaxed text-muted-foreground mt-3">
                                        <strong className="text-foreground">Impact:</strong> DoS vulnerabilities can cause service disruption.
                                        Stored XSS enables persistent malicious code execution affecting all users.
                                    </p>
                                </div>
                            </div>

                            {/* Toggles Shortcode and Widget */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-yellow-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">Toggles Shortcode and Widget</h3>
                                    <span className="px-2 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded text-sm font-semibold">MEDIUM</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Attack Vector:</strong> Stored XSS</p>
                                    <p className="leading-relaxed text-muted-foreground mt-3">
                                        <strong className="text-foreground">Impact:</strong> Stored XSS vulnerability allows persistent
                                        malicious script injection through shortcode parameters.
                                    </p>
                                </div>
                            </div>

                            {/* UberMenu */}
                            <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-orange-500">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-foreground">UberMenu</h3>
                                    <span className="px-2 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded text-sm font-semibold">HIGH</span>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p><strong className="text-foreground">Attack Vectors:</strong> Stored XSS, CSRF</p>
                                    <p className="leading-relaxed text-muted-foreground mt-3">
                                        <strong className="text-foreground">Impact:</strong> Navigation menu plugin with XSS and CSRF
                                        vulnerabilities affecting site-wide navigation security. Enables session hijacking and unauthorized
                                        configuration changes.
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
                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6" style={{ fontFamily: 'var(--font-sans)' }}>
                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-3">XML-RPC Enabled</h3>
                                <p className="text-sm leading-relaxed">
                                    <strong className="text-foreground">Configuration:</strong> XML-RPC interface publicly accessible
                                    at <code className="px-2 py-1 bg-muted rounded text-xs">/xmlrpc.php</code>
                                </p>
                                <p className="text-sm leading-relaxed mt-2">
                                    <strong className="text-foreground">Security Risks:</strong>
                                </p>
                                <ul className="text-sm space-y-1 mt-2 list-disc list-inside">
                                    <li>Brute force authentication attacks with request amplification</li>
                                    <li>DDoS attack vector through pingback abuse</li>
                                    <li>Information disclosure through system.listMethods</li>
                                    <li>Resource exhaustion attacks</li>
                                </ul>
                            </div>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-3">External WP-Cron Active</h3>
                                <p className="text-sm leading-relaxed">
                                    <strong className="text-foreground">Configuration:</strong> WordPress cron system accessible via
                                    external HTTP requests to <code className="px-2 py-1 bg-muted rounded text-xs">/wp-cron.php</code>
                                </p>
                                <p className="text-sm leading-relaxed mt-2">
                                    <strong className="text-foreground">Security Impact:</strong> Attackers can trigger resource-intensive
                                    cron jobs repeatedly, causing server resource exhaustion, performance degradation, and potential
                                    denial of service.
                                </p>
                            </div>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Unmaintained Plugin Ecosystem</h3>
                                <p className="text-sm leading-relaxed">
                                    <strong className="text-foreground">Finding:</strong> Multiple plugins running versions that are
                                    no longer actively maintained or supported
                                </p>
                                <p className="text-sm leading-relaxed mt-2">
                                    <strong className="text-foreground">Risk:</strong> Unmaintained plugins will not receive security
                                    patches for newly discovered vulnerabilities, creating permanent security gaps in the installation.
                                </p>
                            </div>

                            <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                <h3 className="text-lg font-semibold text-foreground mb-3">Public Information Disclosure</h3>
                                <p className="text-sm leading-relaxed">
                                    <strong className="text-foreground">Files Exposed:</strong> <code className="px-2 py-1 bg-muted rounded text-xs">readme.html</code>,
                                    <code className="px-2 py-1 bg-muted rounded text-xs ml-1">robots.txt</code>, version information in HTML source
                                </p>
                                <p className="text-sm leading-relaxed mt-2">
                                    <strong className="text-foreground">Impact:</strong> Publicly accessible files reveal WordPress version,
                                    installed plugins, and system structure, significantly aiding reconnaissance for targeted attacks.
                                </p>
                            </div>
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
                                Immediate emergency remediation required. System is actively vulnerable to exploitation.
                            </p>
                        </div>

                        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4" style={{ fontFamily: 'var(--font-sans)' }}>
                            <p className="leading-relaxed">
                                The combination of severely outdated WordPress core (4.2.35), multiple critical plugin vulnerabilities,
                                missing security headers, and configuration weaknesses creates an <strong className="text-foreground">
                                    extremely high-risk environment</strong> with imminent threat of compromise:
                            </p>

                            <div className="bg-red-500/5 p-6 rounded-lg border-l-4 border-red-500">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Critical Impact Scenarios</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Remote Code Execution (RCE):</strong> Multiple pathways to RCE
                                        through deserialization vulnerabilities, file upload exploits in Contact Form 7, and authenticated
                                        PHP file upload in WordPress core. Attackers can achieve complete server compromise and install
                                        backdoors for persistent access.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Database Compromise:</strong> WordPress 4.2.35 vulnerabilities
                                        combined with plugin SQL injection risks enable complete database access, allowing data exfiltration,
                                        modification, or deletion of all institutional data.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Privilege Escalation:</strong> Multiple privilege escalation
                                        vectors in core and Contact Form 7 allow attackers to elevate from low-privilege accounts to
                                        administrative access, bypassing all access controls.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Stored and Reflected XSS:</strong> Widespread XSS vulnerabilities
                                        across core and plugins enable persistent malicious script execution, facilitating mass session
                                        hijacking, credential harvesting, and defacement affecting all site visitors including administrators.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Service Disruption:</strong> DoS vulnerabilities in Custom Popup
                                        Builder, XML-RPC abuse, and WP-Cron exploitation can cause complete service unavailability, impacting
                                        institutional operations and reputation.
                                    </li>
                                    <li className="leading-relaxed">
                                        <strong className="text-foreground">Information Disclosure:</strong> Path traversal, comment disclosure,
                                        and public file exposure reveal sensitive configuration data, database credentials, user information,
                                        and system architecture, enabling sophisticated targeted attacks.
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-yellow-500/5 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                                <p className="text-sm font-semibold text-foreground mb-2">ACTIVE EXPLOITATION RISK</p>
                                <p className="text-sm leading-relaxed">
                                    WordPress 4.2.35 vulnerabilities are <strong>publicly documented and actively exploited</strong> by
                                    automated attack tools and botnets. The site is likely already being targeted or compromised.
                                    Immediate forensic investigation is recommended alongside remediation.
                                </p>
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
                                    Immediate Emergency Action (Within 24 Hours)
                                </h3>
                                <div className="bg-red-500/5 p-6 rounded-lg border-l-4 border-red-500">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">1. CRITICAL: Upgrade WordPress Core:</strong> Immediately
                                            upgrade from 4.2.35 to latest stable version (6.x). This is the highest priority action. Consider
                                            taking site offline during upgrade if necessary.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">2. Update Contact Form 7:</strong> Upgrade Contact Form 7
                                            from version 3.5.4 to latest version immediately to patch critical file upload and RCE vulnerabilities.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">3. Disable XML-RPC:</strong> Immediately disable XML-RPC
                                            functionality via plugin or server configuration unless absolutely required.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">4. Forensic Investigation:</strong> Conduct immediate security
                                            audit to check for existing compromise, backdoors, malicious files, and unauthorized user accounts.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">5. Change All Credentials:</strong> Reset all WordPress user
                                            passwords, database credentials, FTP/SSH credentials, and hosting account passwords immediately.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Short-Term Mitigation */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Short-Term Mitigation (Within 1 Week)
                                </h3>
                                <div className="bg-orange-500/5 p-6 rounded-lg border-l-4 border-orange-500">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">1. Update All Plugins:</strong> Update all installed plugins
                                            to latest versions. Remove or replace unmaintained plugins (Fluid Responsive Slideshow, Custom
                                            Popup Builder, Toggles Shortcode).
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">2. Replace Theme:</strong> Replace Tonjoo Default Theme v1
                                            with actively maintained, security-audited theme from reputable source.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">3. Disable WP-Cron External Access:</strong> Configure
                                            server-level cron jobs and disable public WP-Cron execution via
                                            <code className="px-2 py-1 bg-muted rounded text-xs ml-1">DISABLE_WP_CRON</code> constant.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">4. Implement Security Headers:</strong> Configure HTTP
                                            security headers: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options,
                                            Referrer-Policy, Permissions-Policy, Strict-Transport-Security.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">5. Fix CORS Configuration:</strong> Replace
                                            <code className="px-2 py-1 bg-muted rounded text-xs ml-1">access-control-allow-origin: *</code>
                                            with specific allowed origins.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">6. Remove Exposed Files:</strong> Delete or restrict access
                                            to <code className="px-2 py-1 bg-muted rounded text-xs">readme.html</code> and other information
                                            disclosure files.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Security Hardening */}
                            <div>
                                <h3 className="text-2xl mb-4 text-foreground" style={{ fontFamily: 'var(--font-serif)' }}>
                                    Security Hardening and Long-Term Protection
                                </h3>
                                <div className="bg-muted/30 p-6 rounded-lg border border-border">
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Web Application Firewall (WAF):</strong> Deploy enterprise-grade
                                            WAF with WordPress-specific rulesets (Cloudflare, Sucuri, Wordfence) to filter malicious requests
                                            and provide virtual patching.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Two-Factor Authentication (2FA):</strong> Enforce 2FA for all
                                            user accounts, especially administrators and editors.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">File Integrity Monitoring:</strong> Implement automated file
                                            integrity monitoring to detect unauthorized modifications and backdoor installations.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Database Security:</strong> Use strong database credentials,
                                            restrict database user privileges, enable query logging, implement database firewall rules.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Disable File Editing:</strong> Disable theme and plugin file
                                            editing from admin panel via <code className="px-2 py-1 bg-muted rounded text-xs">DISALLOW_FILE_EDIT</code>.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Security Monitoring:</strong> Implement 24/7 security monitoring,
                                            intrusion detection, and automated alerting for suspicious activities.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Regular Backups:</strong> Establish automated daily backups
                                            with offsite storage, encryption, and regular restore testing.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Security Audits:</strong> Schedule monthly security assessments
                                            and quarterly penetration testing by qualified security professionals.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Update Policy:</strong> Establish mandatory policy for applying
                                            security updates within 24-48 hours of release.
                                        </li>
                                        <li className="leading-relaxed">
                                            <strong className="text-foreground">Incident Response Plan:</strong> Develop and test comprehensive
                                            incident response plan for security breaches.
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
                                    case study and professional documentation</strong> demonstrating Coastal Delta Response's comprehensive
                                website security assessment methodology. The assessment was conducted using WPScan v3.8.28 automated
                                scanning tools and represents a point-in-time security analysis.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                This documentation is <strong className="text-foreground">intended for educational purposes and to
                                    demonstrate security assessment services</strong> offered by Coastal Delta Response. It illustrates
                                the critical importance of maintaining up-to-date WordPress installations and the severe security
                                risks associated with outdated software.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                This report is <strong className="text-foreground">not intended as a publication of active exploitation
                                    techniques</strong> and should not be used for malicious purposes or unauthorized security testing.
                                The findings are presented to promote cybersecurity awareness and encourage proactive security measures
                                within academic and institutional environments.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground mt-4">
                                <strong className="text-foreground">Responsible Disclosure:</strong> All identified vulnerabilities
                                should be reported to the website administrators through appropriate channels to enable timely remediation
                                and protect the institution and its users. Coastal Delta Response operates within ethical cybersecurity
                                research principles and supports responsible vulnerability disclosure practices.
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </div>
    );
}
