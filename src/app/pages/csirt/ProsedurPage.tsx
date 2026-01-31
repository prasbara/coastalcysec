import { FileCheck, Search, Shield, Users, FileText, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function ProsedurPage() {
  const procedures = [
    {
      step: 1,
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Penerimaan Laporan',
      description: 'Insiden dilaporkan melalui form online, email, atau telepon',
      activities: [
        'Pelapor mengisi form dengan detail insiden',
        'Sistem mencatat waktu dan tanggal laporan',
        'Pelapor mendapat nomor tiket/referensi',
        'Konfirmasi otomatis dikirim ke pelapor'
      ],
      duration: '< 5 menit'
    },
    {
      step: 2,
      icon: <Search className="w-8 h-8" />,
      title: 'Validasi & Triase',
      description: 'Tim CSIRT memvalidasi dan mengklasifikasi tingkat keparahan insiden',
      activities: [
        'Verifikasi kelengkapan informasi laporan',
        'Klasifikasi jenis dan tingkat keparahan',
        'Penentuan prioritas penanganan',
        'Assignment ke analis yang sesuai'
      ],
      duration: '1-4 jam (tergantung severity)'
    },
    {
      step: 3,
      icon: <Shield className="w-8 h-8" />,
      title: 'Respons Awal & Containment',
      description: 'Tindakan segera untuk membatasi dampak insiden',
      activities: [
        'Isolasi sistem atau akun yang terinfeksi',
        'Blokir akses atau koneksi berbahaya',
        'Backup data untuk forensik',
        'Komunikasi awal dengan pelapor'
      ],
      duration: '2-8 jam (untuk kasus kritis)'
    },
    {
      step: 4,
      icon: <Users className="w-8 h-8" />,
      title: 'Koordinasi Internal',
      description: 'Koordinasi dengan unit terkait untuk penanganan komprehensif',
      activities: [
        'Notifikasi ke stakeholder terkait',
        'Koordinasi dengan IT, Legal, atau unit lain',
        'Eskalasi ke pimpinan jika diperlukan',
        'Update status ke pelapor'
      ],
      duration: 'Bervariasi'
    },
    {
      step: 5,
      icon: <FileText className="w-8 h-8" />,
      title: 'Investigasi & Analisis',
      description: 'Analisis mendalam untuk memahami akar masalah dan scope insiden',
      activities: [
        'Analisis log dan forensik digital',
        'Identifikasi vektor serangan',
        'Penilaian dampak dan risiko',
        'Dokumentasi temuan'
      ],
      duration: '1-7 hari (tergantung kompleksitas)'
    },
    {
      step: 6,
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Pemulihan & Mitigasi',
      description: 'Tindakan untuk memulihkan sistem dan mencegah kejadian serupa',
      activities: [
        'Implementasi perbaikan keamanan',
        'Restore data atau service jika diperlukan',
        'Update patch dan konfigurasi',
        'Verifikasi sistem kembali normal'
      ],
      duration: 'Bervariasi'
    },
    {
      step: 7,
      icon: <FileText className="w-8 h-8" />,
      title: 'Penutupan & Dokumentasi',
      description: 'Finalisasi kasus dan pembelajaran untuk perbaikan di masa depan',
      activities: [
        'Penyusunan laporan akhir',
        'Rekomendasi perbaikan jangka panjang',
        'Lessons learned dan knowledge sharing',
        'Penutupan tiket dan notifikasi pelapor'
      ],
      duration: '1-3 hari'
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Prosedur & Alur Penanganan Insiden</h1>
          <p className="text-xl text-gray-600">
            Tahapan sistematis penanganan insiden keamanan siber oleh CSIRT UNISSULA
          </p>
        </div>

        {/* Flowchart Diagram */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Diagram Alur Penanganan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block" />
              
              <div className="space-y-8">
                {procedures.map((proc, index) => (
                  <div key={index} className="relative">
                    {/* Step indicator */}
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
                          {proc.step}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                              {proc.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900 mb-1">{proc.title}</h3>
                              <p className="text-gray-600 mb-2">{proc.description}</p>
                              <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                                Durasi: {proc.duration}
                              </div>
                            </div>
                          </div>
                          
                          <div className="ml-14">
                            <h4 className="font-semibold text-gray-900 mb-2">Aktivitas:</h4>
                            <ul className="space-y-2">
                              {proc.activities.map((activity, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span>{activity}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow to next step */}
                    {index < procedures.length - 1 && (
                      <div className="absolute left-7 -bottom-2 z-10 hidden md:block">
                        <ArrowRight className="w-6 h-6 text-blue-600 transform rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Komunikasi dengan Pelapor */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Komunikasi dengan Pelapor</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Selama proses penanganan, CSIRT UNISSULA akan menjaga komunikasi dengan pelapor:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Update Status</h4>
                <p className="text-sm text-gray-700">
                  Pelapor akan menerima update status penanganan secara berkala via email
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Laporan Akhir</h4>
                <p className="text-sm text-gray-700">
                  Setelah insiden selesai, pelapor akan menerima laporan singkat dan rekomendasi
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Kerahasiaan</h4>
                <p className="text-sm text-gray-700">
                  Identitas pelapor dan detail insiden dijaga kerahasiaannya sesuai kebijakan
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Feedback</h4>
                <p className="text-sm text-gray-700">
                  Pelapor dapat memberikan feedback terhadap kualitas layanan penanganan
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eskalasi */}
        <Card>
          <CardHeader>
            <CardTitle>Mekanisme Eskalasi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Insiden akan di-eskalasi ke level yang lebih tinggi jika:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  Dampak insiden meluas ke banyak sistem atau pengguna
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  Melibatkan data sensitif atau rahasia institusi
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  Memerlukan keputusan eksekutif atau legal
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  Mendapat perhatian media atau menjadi isu publik
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-1">•</span>
                <span className="text-gray-700">
                  Memerlukan koordinasi dengan pihak eksternal (Polisi, BSSN, dll)
                </span>
              </li>
            </ul>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Catatan:</strong> Eskalasi dilakukan secara otomatis oleh sistem atau manual oleh analis 
                berdasarkan penilaian profesional dan kebijakan yang berlaku.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
