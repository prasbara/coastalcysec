import { Check } from 'lucide-react';

export function PaketPage() {
  const packages = [
    {
      name: 'Basic Assessment',
      subtitle: 'Untuk organisasi yang ingin memulai evaluasi keamanan',
      duration: '2-3 minggu',
      ideal: 'Organisasi skala kecil-menengah atau unit bisnis tertentu',
      scope: [
        'High-level security assessment',
        'Quick gap analysis',
        'Prioritized recommendations',
        'Executive summary report',
      ],
      deliverables: [
        'Laporan hasil assessment',
        'Executive summary (5-10 halaman)',
        'Quick wins recommendations',
        'Presentasi hasil',
      ],
      features: [
        'Desktop review dokumentasi',
        'Interview dengan key person (3-5 orang)',
        'Basic technical assessment',
        'Gap analysis terhadap 1 standar',
      ],
    },
    {
      name: 'Standard Consultation',
      subtitle: 'Paket komprehensif untuk evaluasi mendalam',
      duration: '4-6 minggu',
      ideal: 'Organisasi skala menengah yang membutuhkan analisis mendalam',
      scope: [
        'Comprehensive security assessment',
        'Detailed risk assessment',
        'Policy & governance review',
        'Implementation roadmap',
      ],
      deliverables: [
        'Detailed assessment report',
        'Risk assessment matrix',
        'Policy review report',
        '12-month implementation roadmap',
        'Executive dan technical presentation',
      ],
      features: [
        'Comprehensive document review',
        'Extended interview sessions',
        'Technical security assessment',
        'Gap analysis terhadap multiple standar',
        'Workshop dengan tim internal',
      ],
      recommended: true,
    },
    {
      name: 'Advanced Consultancy',
      subtitle: 'Konsultasi strategis untuk transformasi keamanan',
      duration: '8-12 minggu',
      ideal: 'Organisasi besar atau yang membutuhkan transformasi keamanan menyeluruh',
      scope: [
        'Enterprise-wide security assessment',
        'Strategic security planning',
        'Organizational readiness assessment',
        'Change management support',
      ],
      deliverables: [
        'Comprehensive consulting report',
        'Multi-year security strategy',
        'Detailed implementation plan',
        'Policy framework development',
        'Security awareness materials',
        'Management dan technical workshops',
      ],
      features: [
        'Enterprise-level assessment',
        'Multi-stakeholder engagement',
        'Advanced technical analysis',
        'Benchmarking dengan industri',
        'Pendampingan implementasi fase awal',
        'Knowledge transfer program',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Paket Layanan Konsultasi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilihan paket yang dapat disesuaikan dengan skala dan kebutuhan organisasi Anda
          </p>
        </div>

        {/* Info */}
        <div className="bg-blue-50 rounded-lg p-6 mb-12">
          <p className="text-gray-700 text-center">
            <strong>Catatan:</strong> Semua paket dapat dikustomisasi sesuai kebutuhan spesifik organisasi Anda. Durasi dan cakupan bersifat indikatif dan dapat disesuaikan.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg border-2 ${
                pkg.recommended
                  ? 'border-blue-600 shadow-lg relative'
                  : 'border-gray-200'
              } bg-white overflow-hidden`}
            >
              {pkg.recommended && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  REKOMENDASI
                </div>
              )}
              
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h2>
                <p className="text-gray-600 mb-6">{pkg.subtitle}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Durasi:</span>
                    <p className="text-gray-600">{pkg.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-700">Ideal untuk:</span>
                    <p className="text-gray-600 text-sm">{pkg.ideal}</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Cakupan Layanan:</h3>
                  <ul className="space-y-2">
                    {pkg.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Deliverable:</h3>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Yang Termasuk:</h3>
                  <ul className="space-y-2">
                    {pkg.features.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Paket Customized
          </h2>
          <p className="text-gray-700 text-center mb-6 max-w-3xl mx-auto">
            Selain paket standar di atas, kami juga menyediakan layanan konsultasi yang dapat disesuaikan dengan kebutuhan spesifik organisasi Anda, termasuk:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Fokus Area Tertentu</h3>
              <p className="text-gray-600 text-sm">
                Konsultasi yang difokuskan pada area keamanan tertentu sesuai prioritas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Retainer Service</h3>
              <p className="text-gray-600 text-sm">
                Layanan konsultasi berkelanjutan dengan alokasi jam tertentu per bulan
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Project-Based</h3>
              <p className="text-gray-600 text-sm">
                Konsultasi untuk project khusus seperti compliance preparation atau post-incident
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Training & Workshop</h3>
              <p className="text-gray-600 text-sm">
                Program pelatihan dan workshop keamanan untuk tim internal
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Butuh Konsultasi Paket yang Tepat?
          </h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Tim kami siap membantu Anda menentukan paket layanan yang paling sesuai dengan kebutuhan dan budget organisasi
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
