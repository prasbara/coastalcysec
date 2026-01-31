import { Building2, ShieldCheck, TrendingUp } from 'lucide-react';

export function StudiKasusPage() {
  const caseStudies = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Transformasi Keamanan Institusi Pendidikan',
      industry: 'Pendidikan Tinggi',
      challenge: 'Institusi pendidikan menghadapi tantangan dalam mengamankan data mahasiswa dan sistem informasi akademik yang tersebar di berbagai unit. Belum adanya framework keamanan yang terstruktur menyebabkan kesulitan dalam pengelolaan risiko.',
      solution: [
        'Asesmen menyeluruh terhadap infrastruktur IT eksisting',
        'Pengembangan kebijakan keamanan informasi institusional',
        'Implementasi security awareness program untuk civitas academica',
        'Penyusunan roadmap implementasi kontrol keamanan',
      ],
      results: [
        'Terbentuknya framework keamanan informasi yang terstruktur',
        'Peningkatan awareness keamanan di seluruh unit',
        'Identifikasi dan mitigasi 15+ risiko keamanan kritis',
        'Dokumentasi kebijakan yang compliant dengan regulasi',
      ],
      duration: '3 bulan',
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: 'Persiapan Compliance ISO 27001',
      industry: 'Layanan Keuangan',
      challenge: 'Organisasi fintech memerlukan sertifikasi ISO 27001 untuk memenuhi requirement regulator dan meningkatkan kepercayaan klien. Namun belum memiliki pemahaman yang cukup tentang requirement standar dan gap yang perlu ditutup.',
      solution: [
        'Gap analysis terhadap requirement ISO 27001',
        'Pendampingan penyusunan dokumentasi ISMS',
        'Implementasi kontrol keamanan sesuai Annex A',
        'Mock audit dan persiapan sertifikasi',
      ],
      results: [
        'Berhasil mendapatkan sertifikasi ISO 27001',
        'Terbentuknya Information Security Management System (ISMS)',
        'Implementasi 93 kontrol keamanan',
        'Peningkatan confidence dari stakeholder dan regulator',
      ],
      duration: '6 bulan',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Peningkatan Security Posture UMKM Digital',
      industry: 'E-Commerce',
      challenge: 'UMKM yang berkembang pesat di platform digital mengalami peningkatan serangan siber. Keterbatasan resource dan pemahaman tentang keamanan siber menyebabkan kerentanan dalam operasional bisnis online.',
      solution: [
        'Quick security assessment terhadap website dan platform',
        'Implementasi basic security controls yang cost-effective',
        'Training untuk tim internal tentang cyber hygiene',
        'Penyusunan incident response playbook sederhana',
      ],
      results: [
        'Penutupan kerentanan kritis pada sistem',
        'Implementasi multi-factor authentication',
        'Awareness keamanan yang lebih baik di tim',
        'Waktu response terhadap insiden berkurang 60%',
      ],
      duration: '1 bulan',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Klien & Studi Kasus
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pengalaman kami dalam membantu organisasi meningkatkan posture keamanan informasi mereka
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-12">
          <p className="text-gray-700 text-center">
            <strong>Catatan Kerahasiaan:</strong> Demi menjaga confidentiality klien, detail dalam studi kasus berikut telah diubah dan digeneralisasi. Data sensitif dan informasi spesifik yang dapat mengidentifikasi klien tidak ditampilkan.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <div className="flex items-center text-white">
                  <div className="w-14 h-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    {study.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{study.title}</h2>
                    <p className="text-blue-100">Industri: {study.industry}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold mr-2 text-sm">
                        P
                      </span>
                      Permasalahan
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {study.challenge}
                    </p>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-2 text-sm">
                        S
                      </span>
                      Solusi yang Diberikan
                    </h3>
                    <ul className="space-y-2">
                      {study.solution.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-2 text-sm">
                        M
                      </span>
                      Manfaat yang Diperoleh
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {study.results.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600">
                        <strong>Durasi Konsultasi:</strong> {study.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Style Section */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Feedback Klien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                feedback: 'Pendekatan yang terstruktur dan deliverable yang actionable sangat membantu kami dalam meningkatkan keamanan sistem.',
                role: 'IT Manager, Institusi Pendidikan',
              },
              {
                feedback: 'Tim konsultan sangat profesional dan mampu menjelaskan konsep teknis dengan bahasa yang mudah dipahami management.',
                role: 'CIO, Perusahaan Fintech',
              },
              {
                feedback: 'Konsultasi yang cost-effective dan memberikan hasil nyata dalam waktu singkat.',
                role: 'Founder, E-Commerce',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <p className="text-gray-600 italic mb-4">"{item.feedback}"</p>
                <p className="text-sm font-semibold text-gray-900">— {item.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tertarik Menjadi Klien Kami?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Mari diskusikan bagaimana kami dapat membantu organisasi Anda meningkatkan keamanan informasi
          </p>
          <a
            href="/kontak"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Mulai Konsultasi
          </a>
        </div>
      </div>
    </div>
  );
}
