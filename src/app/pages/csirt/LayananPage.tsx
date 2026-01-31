import { AlertTriangle, Shield, FileText, Bell, BookOpen, Phone, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/app/components/ui/alert';

export function LayananPage() {
  const services = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Penerimaan dan Penanganan Laporan Insiden',
      description: 'Menerima, mendokumentasikan, dan menangani laporan insiden keamanan siber dari seluruh sivitas akademika.',
      details: [
        'Layanan pelaporan 24/7 melalui email dan form online',
        'Triase dan klasifikasi tingkat keparahan insiden',
        'Investigasi awal untuk memahami scope dan dampak',
        'Dokumentasi lengkap setiap insiden yang dilaporkan'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Koordinasi Respons Insiden',
      description: 'Mengkoordinasikan tim teknis untuk merespons dan menangani insiden keamanan dengan cepat dan efektif.',
      details: [
        'Aktivasi tim respons sesuai tingkat keparahan',
        'Koordinasi dengan unit terkait (IT, Legal, Fakultas)',
        'Manajemen komunikasi selama penanganan insiden',
        'Eskalasi ke pihak berwenang jika diperlukan'
      ]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Analisis Awal dan Rekomendasi Mitigasi',
      description: 'Melakukan analisis mendalam terhadap insiden dan memberikan rekomendasi untuk mencegah kejadian serupa.',
      details: [
        'Analisis forensik digital tingkat dasar',
        'Identifikasi akar masalah dan vektor serangan',
        'Penyusunan rekomendasi perbaikan keamanan',
        'Laporan post-incident untuk pembelajaran'
      ]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Peringatan Dini dan Advis Keamanan',
      description: 'Menyebarkan informasi peringatan dini tentang ancaman keamanan siber yang relevan dengan lingkungan universitas.',
      details: [
        'Monitoring ancaman dan kerentanan terkini',
        'Publikasi security advisory berkala',
        'Peringatan urgent untuk ancaman kritis',
        'Rekomendasi patch dan update sistem'
      ]
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Edukasi dan Awareness Keamanan Siber',
      description: 'Memberikan edukasi dan meningkatkan kesadaran keamanan informasi kepada sivitas akademika.',
      details: [
        'Workshop dan seminar keamanan siber',
        'Publikasi panduan dan best practices',
        'Kampanye awareness keamanan',
        'Simulasi phishing dan social engineering'
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Konsultasi Keamanan Informasi',
      description: 'Memberikan konsultasi dan dukungan terkait implementasi praktik keamanan informasi yang baik.',
      details: [
        'Konsultasi security policy dan prosedur',
        'Review konfigurasi keamanan sistem',
        'Rekomendasi tools dan solusi keamanan',
        'Dukungan compliance dan audit keamanan'
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Layanan CSIRT UNISSULA</h1>
          <p className="text-xl text-gray-600">
            Layanan profesional untuk melindungi aset informasi universitas
          </p>
        </div>

        {/* Info Banner */}
        <Alert className="mb-8 border-blue-200 bg-blue-50">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
          <AlertTitle className="text-blue-900">Layanan Non-Komersial</AlertTitle>
          <AlertDescription className="text-blue-800">
            Semua layanan CSIRT UNISSULA disediakan secara gratis untuk sivitas akademika sebagai bentuk 
            komitmen universitas dalam menjaga keamanan informasi. Layanan kami bersifat informatif, 
            responsif, dan berorientasi pada kepercayaan.
          </AlertDescription>
        </Alert>

        {/* Services Grid */}
        <div className="space-y-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="ml-16">
                  <h4 className="font-semibold text-gray-900 mb-3">Detail Layanan:</h4>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Hours */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Jam Operasional Layanan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Layanan Pelaporan Insiden:</h4>
                <p className="text-gray-700">
                  <strong>24/7</strong> - Sistem pelaporan online dan email aktif sepanjang waktu. 
                  Insiden kritis akan segera ditangani.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Konsultasi dan Dukungan:</h4>
                <p className="text-gray-700">
                  <strong>Senin - Jumat, 08:00 - 16:00 WIB</strong><br />
                  Konsultasi langsung dan dukungan teknis tersedia pada jam kerja.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* SLA Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Komitmen Waktu Respons (SLA)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Tingkat Keparahan</th>
                    <th className="px-4 py-3 font-semibold">Waktu Respons Awal</th>
                    <th className="px-4 py-3 font-semibold">Waktu Penanganan Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 bg-red-100 text-red-800 rounded text-sm font-medium">
                        Kritis
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">Maksimal 1 jam</td>
                    <td className="px-4 py-3 text-gray-700">4-8 jam</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">
                        Tinggi
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">Maksimal 4 jam</td>
                    <td className="px-4 py-3 text-gray-700">1-2 hari kerja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">
                        Sedang
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">Maksimal 1 hari kerja</td>
                    <td className="px-4 py-3 text-gray-700">3-5 hari kerja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                        Rendah
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">Maksimal 2 hari kerja</td>
                    <td className="px-4 py-3 text-gray-700">7-14 hari kerja</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              * Waktu respons dan penanganan dapat bervariasi tergantung kompleksitas insiden dan ketersediaan sumber daya.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
