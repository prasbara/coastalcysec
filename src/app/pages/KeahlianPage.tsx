import { Network, Code, Shield, Users, FileCheck } from 'lucide-react';

export function KeahlianPage() {
  const expertiseAreas = [
    {
      icon: <Network className="h-10 w-10" />,
      title: 'Keamanan Jaringan',
      description: 'Expertise dalam mengamankan infrastruktur jaringan organisasi dari berbagai ancaman',
      topics: [
        'Arsitektur keamanan jaringan',
        'Network segmentation',
        'Firewall dan IDS/IPS',
        'VPN dan remote access security',
        'Network monitoring',
        'Wireless security',
      ],
      keyPoints: [
        'Desain arsitektur jaringan yang aman',
        'Implementasi defense in depth',
        'Deteksi dan pencegahan intrusi',
      ],
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Keamanan Aplikasi',
      description: 'Memastikan aplikasi dikembangkan dan dioperasikan dengan standar keamanan yang tinggi',
      topics: [
        'Secure development lifecycle',
        'Application security testing',
        'Web application security',
        'API security',
        'Secure coding practices',
        'OWASP Top 10 mitigation',
      ],
      keyPoints: [
        'Identifikasi kerentanan aplikasi',
        'Secure coding standards',
        'Application security assessment',
      ],
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Manajemen Risiko TI',
      description: 'Framework dan metodologi untuk mengidentifikasi, menilai, dan mengelola risiko keamanan',
      topics: [
        'Risk assessment methodology',
        'Threat modeling',
        'Vulnerability management',
        'Business impact analysis',
        'Risk treatment strategies',
        'Risk monitoring',
      ],
      keyPoints: [
        'Identifikasi dan penilaian risiko',
        'Prioritisasi penanganan risiko',
        'Risk-based decision making',
      ],
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Awareness & Cyber Hygiene',
      description: 'Membangun budaya keamanan melalui edukasi dan awareness program',
      topics: [
        'Security awareness program',
        'Phishing simulation',
        'Social engineering prevention',
        'Password management',
        'Safe internet practices',
        'Security culture building',
      ],
      keyPoints: [
        'Program awareness yang efektif',
        'Behavior change management',
        'Security culture assessment',
      ],
    },
    {
      icon: <FileCheck className="h-10 w-10" />,
      title: 'Kepatuhan & Standar Keamanan',
      description: 'Membantu organisasi memenuhi requirement standar dan regulasi keamanan informasi',
      topics: [
        'ISO 27001 implementation',
        'Compliance assessment',
        'Policy development',
        'Audit preparation',
        'Best practices adoption',
        'Regulatory compliance',
      ],
      keyPoints: [
        'Gap analysis terhadap standar',
        'Roadmap compliance',
        'Documentation dan evidence',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Bidang Keahlian
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Area expertise kami dalam konsultasi keamanan siber yang komprehensif
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pendekatan Holistik Keamanan Informasi
          </h2>
          <p className="text-gray-700">
            Kami memahami bahwa keamanan informasi yang efektif memerlukan pendekatan holistik yang mencakup aspek teknologi, proses, dan manusia. Tim ahli kami memiliki keahlian mendalam di berbagai domain keamanan siber, memungkinkan kami memberikan konsultasi yang komprehensif dan terintegrasi untuk kebutuhan organisasi Anda.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="space-y-12">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-6 flex-shrink-0">
                    {area.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {area.title}
                    </h2>
                    <p className="text-gray-600">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Topik yang Kami Tangani:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {area.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Key Points:
                    </h3>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <ul className="space-y-3">
                        {area.keyPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Mengapa Memilih Kami?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tim Ahli Berpengalaman</h3>
              <p className="text-gray-600 text-sm">
                Konsultan dengan sertifikasi internasional dan pengalaman praktis
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Pendekatan Praktis</h3>
              <p className="text-gray-600 text-sm">
                Solusi yang aplikatif dan disesuaikan dengan konteks organisasi
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Knowledge Transfer</h3>
              <p className="text-gray-600 text-sm">
                Membangun kapabilitas internal melalui knowledge sharing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
