import { Shield, FileSearch, BookOpen, Users, AlertTriangle } from 'lucide-react';

export function LayananPage() {
  const services = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Konsultasi Keamanan Sistem Informasi',
      description: 'Analisis mendalam terhadap arsitektur dan infrastruktur keamanan sistem informasi organisasi Anda untuk mengidentifikasi celah keamanan dan memberikan rekomendasi perbaikan.',
      scope: [
        'Assessment infrastruktur IT',
        'Evaluasi kontrol keamanan',
        'Gap analysis terhadap standar',
        'Rekomendasi peningkatan keamanan',
      ],
      benefits: [
        'Pemahaman komprehensif tentang posture keamanan',
        'Identifikasi kelemahan sistem',
        'Roadmap perbaikan yang jelas',
        'Compliance dengan standar keamanan',
      ],
    },
    {
      icon: <FileSearch className="h-8 w-8" />,
      title: 'Asesmen Risiko Keamanan Siber',
      description: 'Identifikasi, analisis, dan evaluasi risiko keamanan siber yang dapat mengancam aset informasi dan operasional organisasi Anda.',
      scope: [
        'Identifikasi aset kritis',
        'Analisis ancaman dan kerentanan',
        'Penilaian dampak risiko',
        'Rekomendasi mitigasi risiko',
      ],
      benefits: [
        'Pemahaman landscape risiko',
        'Prioritisasi penanganan risiko',
        'Basis pengambilan keputusan',
        'Optimasi investasi keamanan',
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Review Kebijakan & Tata Kelola Keamanan',
      description: 'Evaluasi kebijakan keamanan informasi dan framework IT governance yang diterapkan untuk memastikan kesesuaian dengan best practices dan kebutuhan bisnis.',
      scope: [
        'Review dokumentasi kebijakan',
        'Evaluasi struktur governance',
        'Assessment implementasi kebijakan',
        'Benchmarking dengan standar',
      ],
      benefits: [
        'Kebijakan yang efektif dan applicable',
        'Governance yang terstruktur',
        'Kepatuhan regulasi',
        'Alignment dengan tujuan bisnis',
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Pendampingan Penerapan Keamanan Informasi',
      description: 'Dukungan dan guidance dalam implementasi solusi keamanan informasi, mulai dari perencanaan hingga deployment dan monitoring.',
      scope: [
        'Perencanaan implementasi',
        'Pendampingan deployment',
        'Knowledge transfer',
        'Post-implementation review',
      ],
      benefits: [
        'Implementasi yang efektif',
        'Transfer knowledge ke tim internal',
        'Minimalisasi resistensi perubahan',
        'Quick wins yang terukur',
      ],
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Konsultasi Kesiapan Insiden Siber',
      description: 'Evaluasi dan peningkatan kapabilitas organisasi dalam menghadapi dan merespons insiden keamanan siber secara efektif.',
      scope: [
        'Assessment incident response capability',
        'Pengembangan incident response plan',
        'Simulasi skenario insiden',
        'Evaluasi dan improvement',
      ],
      benefits: [
        'Kesiapan menghadapi insiden',
        'Response time yang lebih cepat',
        'Minimalisasi dampak insiden',
        'Continuous improvement',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Layanan Konsultasi Keamanan Siber
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solusi konsultasi komprehensif untuk meningkatkan posture keamanan informasi organisasi Anda
          </p>
        </div>

        {/* Services */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-6 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Ruang Lingkup:
                    </h3>
                    <ul className="space-y-2">
                      {service.scope.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-blue-600 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Manfaat:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Tertarik dengan Layanan Kami?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Hubungi kami untuk mendiskusikan kebutuhan keamanan siber organisasi Anda
          </p>
          <a
            href="/kontak"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
