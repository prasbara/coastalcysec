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
    const siteUrl = 'https://coastaldeltaresponse.com'; // Update with actual domain
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
            <meta name="robots" content="index, follow" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="7 days" />
            <meta name="author" content="Coastal Delta Response" />

            {/* Canonical URL */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Structured Data - Organization */}
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
                })}
            </script>
        </Helmet>
    );
}
