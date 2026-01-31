import { BookOpen, Shield, Lock, AlertTriangle, Users, FileText } from 'lucide-react';

export function EdukasiPage() {
  const articles = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: '5 Prinsip Dasar Keamanan Informasi',
      category: 'Best Practice',
      excerpt: 'Memahami fondasi keamanan informasi: Confidentiality, Integrity, Availability, Authentication, dan Non-repudiation.',
      content: [
        'Confidentiality (Kerahasiaan): Memastikan informasi hanya dapat diakses oleh pihak yang berwenang.',
        'Integrity (Integritas): Menjaga keutuhan dan keakuratan data dari modifikasi yang tidak sah.',
        'Availability (Ketersediaan): Memastikan informasi dan sistem tersedia saat dibutuhkan.',
        'Authentication (Autentikasi): Verifikasi identitas pengguna sebelum akses diberikan.',
        'Non-repudiation: Memastikan aksi tidak dapat disangkal oleh pelakunya.',
      ],
      tips: [
        'Implementasikan enkripsi untuk data sensitif',
        'Gunakan access control yang ketat',
        'Backup data secara berkala',
        'Implementasi logging dan monitoring',
      ],
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Password Security: Praktik Terbaik',
      category: 'Cyber Hygiene',
      excerpt: 'Tips praktis untuk mengelola password dengan aman dan efektif untuk melindungi akun Anda.',
      content: [
        'Gunakan password yang panjang (minimal 12 karakter) dan kompleks',
        'Jangan gunakan password yang sama untuk multiple akun',
        'Aktifkan Multi-Factor Authentication (MFA) di semua layanan yang mendukung',
        'Gunakan password manager untuk mengelola password',
        'Update password secara berkala, terutama untuk akun sensitif',
      ],
      tips: [
        'Buat passphrase dari kata-kata random yang mudah diingat',
        'Jangan bagikan password ke siapapun',
        'Waspada terhadap phishing yang mencuri kredensial',
        'Gunakan biometric authentication jika memungkinkan',
      ],
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: 'Mengenali dan Menghindari Phishing',
      category: 'Awareness',
      excerpt: 'Panduan untuk mengidentifikasi serangan phishing dan melindungi diri dari social engineering.',
      content: [
        'Phishing adalah teknik penipuan untuk mencuri informasi sensitif seperti username, password, atau data kartu kredit.',
        'Perhatikan tanda-tanda phishing: email dari pengirim yang mencurigakan, urgensi yang berlebihan, link yang mencurigakan.',
        'Verifikasi pengirim email sebelum mengklik link atau membuka attachment.',
        'Jangan pernah memberikan informasi sensitif melalui email.',
      ],
      tips: [
        'Hover mouse di link untuk melihat URL sebenarnya',
        'Periksa alamat email pengirim dengan teliti',
        'Waspada terhadap email dengan kesalahan grammar/spelling',
        'Gunakan bookmark untuk mengakses situs penting',
        'Laporkan email phishing ke IT department',
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Security Awareness Culture',
      category: 'Organizational',
      excerpt: 'Membangun budaya keamanan yang kuat dalam organisasi melalui program awareness yang efektif.',
      content: [
        'Security awareness bukan hanya tanggung jawab IT, tapi seluruh organisasi.',
        'Program awareness yang efektif harus continuous dan engaging.',
        'Gunakan berbagai metode: training, simulation, poster, newsletter.',
        'Ukur efektivitas program melalui metrics dan feedback.',
      ],
      tips: [
        'Lakukan phishing simulation berkala',
        'Sediakan kanal untuk melaporkan insiden',
        'Berikan recognition untuk security champions',
        'Sesuaikan konten dengan role dan risiko',
      ],
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Data Classification dan Handling',
      category: 'Best Practice',
      excerpt: 'Panduan mengklasifikasikan dan menangani data berdasarkan tingkat sensitivitasnya.',
      content: [
        'Data classification membantu organisasi menentukan level proteksi yang tepat untuk setiap jenis data.',
        'Kategori umum: Public, Internal, Confidential, Restricted/Secret.',
        'Setiap kategori memiliki requirement handling yang berbeda.',
        'Clear labeling membantu user memahami bagaimana menangani data.',
      ],
      tips: [
        'Buat kebijakan klasifikasi yang jelas',
        'Training user tentang handling requirement',
        'Gunakan DLP (Data Loss Prevention) tools',
        'Regular review terhadap klasifikasi data',
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Framework Keamanan: NIST vs ISO 27001',
      category: 'Framework',
      excerpt: 'Perbandingan dua framework keamanan informasi yang populer dan kapan menggunakan masing-masing.',
      content: [
        'NIST Cybersecurity Framework: Fokus pada identifikasi, proteksi, deteksi, respons, dan recovery.',
        'ISO 27001: Standar internasional untuk Information Security Management System (ISMS).',
        'NIST lebih fleksibel dan prescriptive, ISO lebih terstruktur untuk sertifikasi.',
        'Kedua framework dapat digunakan bersamaan dan saling melengkapi.',
      ],
      tips: [
        'Pilih framework berdasarkan kebutuhan dan regulasi',
        'Mulai dengan gap assessment',
        'Implementasi secara bertahap',
        'Dokumentasikan semua proses',
      ],
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Edukasi & Insight Keamanan Siber
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artikel dan panduan untuk meningkatkan pemahaman tentang keamanan informasi
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                    {article.icon}
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-2">
                      {article.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900">
                      {article.title}
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>

                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Points:</h3>
                  <ul className="space-y-2">
                    {article.content.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">💡 Tips Praktis:</h3>
                  <ul className="space-y-1">
                    {article.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-gray-600">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Sumber Daya Tambahan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Standar Internasional
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ISO 27001/27002</li>
                <li>• NIST Cybersecurity Framework</li>
                <li>• CIS Controls</li>
                <li>• COBIT Framework</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Online Resources
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• OWASP (owasp.org)</li>
                <li>• SANS Institute</li>
                <li>• NIST Publications</li>
                <li>• Krebs on Security</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">
                Sertifikasi Profesional
              </h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• CISSP</li>
                <li>• CISM</li>
                <li>• CEH</li>
                <li>• ISO 27001 Lead Auditor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Butuh Konsultasi Lebih Lanjut?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda mengimplementasikan best practices keamanan informasi di organisasi
          </p>
          <a
            href="/kontak"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  );
}
