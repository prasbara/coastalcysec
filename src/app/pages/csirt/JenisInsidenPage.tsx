import { AlertTriangle, Bug, Mail, Globe, Database, Ban, User, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export function JenisInsidenPage() {
  const incidents = [
    {
      icon: <Bug className="w-8 h-8" />,
      title: 'Malware dan Virus',
      severity: 'Tinggi',
      severityColor: 'bg-red-100 text-red-800',
      description: 'Infeksi perangkat lunak berbahaya yang dapat merusak sistem, mencuri data, atau mengganggu operasional.',
      examples: [
        'Ransomware yang mengenkripsi file dan meminta tebusan',
        'Trojan yang mencuri kredensial login',
        'Virus yang menyebar melalui USB atau email',
        'Spyware yang memantau aktivitas pengguna',
        'Adware yang mengganggu dengan iklan berlebihan'
      ],
      indicators: [
        'Komputer berjalan sangat lambat',
        'File terkunci atau ter-enkripsi',
        'Popup atau iklan yang tidak biasa',
        'Program berjalan tanpa izin'
      ]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Phishing dan Social Engineering',
      severity: 'Tinggi',
      severityColor: 'bg-red-100 text-red-800',
      description: 'Upaya penipuan untuk mendapatkan informasi sensitif dengan menyamar sebagai entitas terpercaya.',
      examples: [
        'Email phishing yang mengaku dari IT/admin',
        'SMS phishing (smishing) mengaku dari bank',
        'Panggilan telepon palsu (vishing)',
        'Fake website yang mirip portal kampus',
        'Social media scam mengatas-namakan pejabat'
      ],
      indicators: [
        'Email dengan link mencurigakan',
        'Permintaan password atau OTP',
        'Bahasa yang mendesak atau mengancam',
        'Alamat pengirim tidak resmi'
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Defacement dan Website Hacking',
      severity: 'Kritis',
      severityColor: 'bg-red-200 text-red-900',
      description: 'Perusakan atau perubahan tidak sah pada website universitas atau unit kerja.',
      examples: [
        'Tampilan website diubah oleh hacker',
        'Injeksi konten tidak pantas atau propaganda',
        'Penanaman backdoor untuk akses jangka panjang',
        'SQL Injection dan XSS attacks',
        'Directory traversal attack'
      ],
      indicators: [
        'Tampilan website berubah drastis',
        'Konten tidak pantas muncul',
        'User dialihkan ke website lain',
        'Error database yang tidak biasa'
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Kebocoran dan Pencurian Data',
      severity: 'Kritis',
      severityColor: 'bg-red-200 text-red-900',
      description: 'Akses, penyalinan, atau penyebaran data pribadi atau rahasia tanpa izin.',
      examples: [
        'Data mahasiswa/dosen bocor ke publik',
        'Kredensial akun dijual di dark web',
        'Database diunduh oleh pihak tidak berwenang',
        'Dokumen rahasia tersebar',
        'Breach melalui API atau sistem terintegrasi'
      ],
      indicators: [
        'Data muncul di forum/dark web',
        'Akses tidak sah terdeteksi di log',
        'Laporan account takeover',
        'Traffic data yang tidak wajar'
      ]
    },
    {
      icon: <Ban className="w-8 h-8" />,
      title: 'DDoS Attack (Serangan Denial of Service)',
      severity: 'Tinggi',
      severityColor: 'bg-orange-100 text-orange-800',
      description: 'Serangan yang membuat layanan online tidak dapat diakses dengan membanjiri traffic.',
      examples: [
        'Website kampus tidak dapat diakses',
        'Email server down karena overload',
        'Portal akademik sangat lambat',
        'Bandwidth habis karena traffic palsu',
        'Services timeout atau error'
      ],
      indicators: [
        'Lonjakan traffic mendadak',
        'Website/service tidak responsif',
        'Bandwidth usage abnormal',
        'Server resource mencapai limit'
      ]
    },
    {
      icon: <User className="w-8 h-8" />,
      title: 'Penyalahgunaan Akun dan Akses',
      severity: 'Sedang',
      severityColor: 'bg-yellow-100 text-yellow-800',
      description: 'Penggunaan tidak sah akun, sistem, atau fasilitas IT universitas.',
      examples: [
        'Account takeover (akun diambil alih)',
        'Akses ilegal ke sistem akademik',
        'Penyalahgunaan email kampus untuk spam',
        'Sharing akun yang melanggar kebijakan',
        'Privilege escalation oleh pengguna'
      ],
      indicators: [
        'Login dari lokasi tidak biasa',
        'Aktivitas akun di luar jam normal',
        'Perubahan data tanpa sepengetahuan',
        'Email spam dari akun resmi'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Kerentanan Sistem (Vulnerability)',
      severity: 'Sedang',
      severityColor: 'bg-yellow-100 text-yellow-800',
      description: 'Kelemahan pada sistem, aplikasi, atau konfigurasi yang dapat dieksploitasi.',
      examples: [
        'Software versi lama dengan bug keamanan',
        'Konfigurasi server yang tidak aman',
        'Default password yang tidak diubah',
        'Port atau service yang terbuka tanpa proteksi',
        'Missing security patch'
      ],
      indicators: [
        'Scan vulnerability mendeteksi celah',
        'Alert dari security tools',
        'Laporan dari researcher',
        'CVE baru yang relevan'
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Jenis & Klasifikasi Insiden</h1>
          <p className="text-xl text-gray-600">
            Panduan identifikasi jenis insiden keamanan siber yang ditangani CSIRT UNISSULA
          </p>
        </div>

        {/* Alert Info */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-900">
            Panduan ini membantu Anda mengidentifikasi jenis insiden dengan benar sebelum melaporkan. 
            Jika ragu, silakan laporkan tetap - tim kami akan membantu mengklasifikasikannya.
          </AlertDescription>
        </Alert>

        {/* Severity Legend */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tingkat Keparahan Insiden</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-red-200 text-red-900 rounded font-semibold mb-2">
                    KRITIS
                  </span>
                  <p className="text-sm text-gray-700">Dampak besar, memerlukan respons segera</p>
                </div>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-orange-200 text-orange-900 rounded font-semibold mb-2">
                    TINGGI
                  </span>
                  <p className="text-sm text-gray-700">Dampak signifikan, prioritas tinggi</p>
                </div>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-900 rounded font-semibold mb-2">
                    SEDANG
                  </span>
                  <p className="text-sm text-gray-700">Dampak terbatas, perlu ditangani</p>
                </div>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-green-200 text-green-900 rounded font-semibold mb-2">
                    RENDAH
                  </span>
                  <p className="text-sm text-gray-700">Dampak minimal, monitoring</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Incidents List */}
        <div className="space-y-6">
          {incidents.map((incident, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                      {incident.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{incident.title}</CardTitle>
                        <span className={`px-3 py-1 rounded text-sm font-semibold ${incident.severityColor}`}>
                          {incident.severity}
                        </span>
                      </div>
                      <p className="text-gray-600">{incident.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Contoh Kasus:</h4>
                    <ul className="space-y-2">
                      {incident.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Indikator/Tanda-tanda:</h4>
                    <ul className="space-y-2">
                      {incident.indicators.map((indicator, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span>{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Menemukan Insiden yang Tidak Terdaftar?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Daftar di atas tidak mencakup semua kemungkinan insiden. Jika Anda menemukan aktivitas mencurigakan 
              yang tidak termasuk kategori di atas, tetap laporkan kepada tim kami untuk evaluasi lebih lanjut.
            </p>
            <a
              href="/laporkan"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              <AlertTriangle className="w-5 h-5" />
              Laporkan Insiden Sekarang
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
