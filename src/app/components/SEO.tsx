import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    ogType?: string;
    ogImage?: string;
    canonical?: string;
}

export default function SEO({
    title = 'Coastal Delta Response - Cybersecurity Consultation',
    description = 'Professional cybersecurity consultation services for incident response and security advisory. Coastal Delta Response provides expert cybersecurity solutions.',
    keywords = 'cybersecurity, incident response, security consultation, cyber security, information security, threat detection, security advisory, UNISSULA, Universitas Islam Sultan Agung, Semarang, Kaligawe, Genuk, cybersecurity Semarang, keamanan siber, konsultasi keamanan siber, CSIRT, computer security, Jawa Tengah, layanan keamanan informasi',
    ogType = 'website',
    ogImage = '/og-image.png',
    canonical,
}: SEOProps) {
    const siteUrl = 'https://coastalcysec.vercel.app';
    const fullTitle = title.includes('Coastal Delta Response') ? title : `${title} | Coastal Delta Response`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={canonical || siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:site_name" content="Coastal Delta Response" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonical || siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={ogImage} />

            {/* Additional Meta Tags */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="Coastal Delta Response" />
            <meta name="publisher" content="Coastal Delta Response" />

            {/* Geo Location Tags */}
            <meta name="geo.region" content="ID-JT" />
            <meta name="geo.placename" content="Semarang" />
            <meta name="geo.position" content="-6.9667;110.4167" />
            <meta name="ICBM" content="-6.9667, 110.4167" />

            {/* Mobile Optimization */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="CoastalCySec" />

            {/* Theme Color */}
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />

            {/* Additional Open Graph */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="id_ID" />

            {/* Security Headers (meta equivalent) */}
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Structured Data - Organization with UNISSULA Association */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: 'Coastal Delta Response',
                    description: description,
                    url: siteUrl,
                    logo: `${siteUrl}/logo.png`,
                    contactPoint: {
                        '@type': 'ContactPoint',
                        contactType: 'Customer Service',
                        areaServed: 'ID',
                        availableLanguage: ['en', 'id'],
                    },
                    address: {
                        '@type': 'PostalAddress',
                        streetAddress: 'Jl. Kaligawe Raya No.Km.4, Terboyo Kulon, Kec. Genuk',
                        addressLocality: 'Semarang',
                        addressRegion: 'Jawa Tengah',
                        postalCode: '50112',
                        addressCountry: 'ID',
                    },
                    about: {
                        '@type': 'CollegeOrUniversity',
                        name: 'Universitas Islam Sultan Agung',
                        alternateName: 'UNISSULA',
                        url: 'https://unissula.ac.id',
                        address: {
                            '@type': 'PostalAddress',
                            addressLocality: 'Semarang',
                            addressRegion: 'Jawa Tengah',
                            addressCountry: 'ID',
                        },
                    },
                    keywords: 'cybersecurity, CSIRT, incident response, UNISSULA, Semarang, academic research, prototype',
                })}
            </script>

            {/* Additional Structured Data - Research Project Context */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ResearchProject',
                    name: 'Coastal Delta Response - Cybersecurity CSIRT Prototype',
                    description: 'Academic cybersecurity incident response prototype developed in the context of higher education research at Universitas Islam Sultan Agung (UNISSULA)',
                    url: siteUrl,
                    about: {
                        '@type': 'Thing',
                        name: 'Cybersecurity Incident Response',
                        description: 'CSIRT prototype for academic and research purposes',
                    },
                    keywords: 'CSIRT UNISSULA, cybersecurity research, incident response prototype, academic cybersecurity',
                })}
            </script>

            {/* WebSite Schema with Sitelinks Searchbox */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: 'Coastal Delta Response',
                    alternateName: 'CoastalCySec',
                    url: siteUrl,
                    description: 'Professional cybersecurity consultation and incident response services',
                    inLanguage: ['en', 'id'],
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate: `${siteUrl}/?s={search_term_string}`,
                        },
                        'query-input': 'required name=search_term_string',
                    },
                })}
            </script>

            {/* ProfessionalService Schema */}
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'ProfessionalService',
                    name: 'Coastal Delta Response',
                    description: 'Cybersecurity consultation and incident response services',
                    url: siteUrl,
                    areaServed: {
                        '@type': 'Country',
                        name: 'Indonesia',
                    },
                    serviceType: ['Cybersecurity Consultation', 'Incident Response', 'Security Assessment', 'Vulnerability Analysis'],
                    priceRange: 'Contact for pricing',
                })}
            </script>
        </Helmet>
    );
}
