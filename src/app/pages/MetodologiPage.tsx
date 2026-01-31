import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function MetodologiPage() {
  const phases = [
    {
      phase: 'Fase 1',
      title: 'Identifikasi Kebutuhan',
      description: 'Memahami kondisi, tujuan, dan kebutuhan spesifik organisasi',
      activities: [
        'Kick-off meeting dengan stakeholder',
        'Pengumpulan informasi awal',
        'Penentuan scope dan objectives',
        'Perencanaan jadwal kegiatan',
      ],
      deliverable: 'Proposal kerja dan project charter',
    },
    {
      phase: 'Fase 2',
      title: 'Analisis Kondisi Eksisting',
      description: 'Evaluasi mendalam terhadap keamanan sistem dan proses yang ada',
      activities: [
        'Document review',
        'Interview dengan key personnel',
        'Technical assessment',
        'Gap analysis',
      ],
      deliverable: 'Laporan hasil assessment awal',
    },
    {
      phase: 'Fase 3',
      title: 'Penyusunan Rekomendasi',
      description: 'Mengembangkan solusi dan rekomendasi berbasis temuan',
      activities: [
        'Analisis temuan',
        'Penyusunan opsi solusi',
        'Prioritasi rekomendasi',
        'Development roadmap',
      ],
      deliverable: 'Dokumen rekomendasi terstruktur',
    },
    {
      phase: 'Fase 4',
      title: 'Presentasi & Finalisasi',
      description: 'Penyampaian hasil dan finalisasi laporan konsultasi',
      activities: [
        'Presentasi temuan dan rekomendasi',
        'Diskusi dan klarifikasi',
        'Revisi berdasarkan feedback',
        'Penyerahan laporan final',
      ],
      deliverable: 'Laporan konsultasi final dan executive summary',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Metodologi & Alur Konsultasi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pendekatan terstruktur dan sistematis untuk menghasilkan rekomendasi yang actionable
          </p>
        </div>

        {/* Metodologi Overview */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pendekatan Metodologi Kami
          </h2>
          <p className="text-gray-700 mb-6">
            Kami mengadopsi metodologi konsultasi yang terstruktur dan berbasis pada standar internasional seperti ISO 27001, NIST Cybersecurity Framework, dan best practices industri. Setiap tahapan dirancang untuk memastikan pemahaman yang mendalam dan menghasilkan rekomendasi yang applicable dan terukur.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Terstruktur</h3>
              <p className="text-gray-600 text-sm">
                Setiap fase memiliki tujuan, aktivitas, dan deliverable yang jelas
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Terukur</h3>
              <p className="text-gray-600 text-sm">
                Progress dapat dipantau dan hasil dapat divalidasi
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Adaptif</h3>
              <p className="text-gray-600 text-sm">
                Dapat disesuaikan dengan kondisi dan kebutuhan spesifik klien
              </p>
            </div>
          </div>
        </div>

        {/* Process Flow Diagram */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Alur Proses Konsultasi
          </h2>
          
          <div className="relative">
            {phases.map((phase, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                  <div className="flex items-start">
                    {/* Phase Number */}
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    
                    {/* Phase Content */}
                    <div className="flex-1">
                      <div className="mb-4">
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                          {phase.phase}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600 mt-2">
                          {phase.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Aktivitas Utama:
                          </h4>
                          <ul className="space-y-2">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start text-gray-600 text-sm">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Deliverable:
                          </h4>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-gray-700 text-sm">
                              {phase.deliverable}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow between phases */}
                {index < phases.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowRight className="h-8 w-8 text-blue-600 transform rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Quality Assurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Standar Kualitas
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Deliverable review oleh senior consultant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Validasi temuan dengan bukti yang memadai</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Rekomendasi yang actionable dan terukur</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Komunikasi & Reporting
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Progress update berkala kepada stakeholder</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dokumentasi lengkap dan terstruktur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Executive summary untuk management level</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
