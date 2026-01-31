import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, FileText, BookOpen, Bell, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-500 hover:bg-green-600 text-white">
              Status: Aktif & Siap Melayani
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CSIRT UNISSULA
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Computer Security Incident Response Team
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
              Tim Tanggap Insiden Keamanan Siber resmi Universitas Islam Sultan Agung yang 
              bertugas menangani, merespons, dan mencegah insiden keamanan informasi untuk 
              melindungi aset digital universitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/laporkan">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Laporkan Insiden Sekarang
                </Button>
              </Link>
              <Link to="/tentang">
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                  <FileText className="w-5 h-5 mr-2" />
                  Pelajari Lebih Lanjut
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jenis Insiden yang Ditangani */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Jenis Insiden yang Kami Tangani</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CSIRT UNISSULA menangani berbagai jenis insiden keamanan siber yang mengancam 
              keamanan sistem informasi universitas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Malware & Virus',
                description: 'Infeksi malware, ransomware, trojan, dan virus pada sistem kampus'
              },
              {
                title: 'Phishing & Social Engineering',
                description: 'Upaya penipuan melalui email, SMS, atau platform digital lainnya'
              },
              {
                title: 'Defacement & Hacking',
                description: 'Perusakan website, pencurian data, dan akses ilegal ke sistem'
              },
              {
                title: 'Kebocoran Data',
                description: 'Pencurian atau penyalahgunaan data pribadi sivitas akademika'
              },
              {
                title: 'DDoS Attack',
                description: 'Serangan yang mengganggu ketersediaan layanan digital kampus'
              },
              {
                title: 'Penyalahgunaan Akun',
                description: 'Penggunaan tidak sah akun email, sistem akademik, atau layanan IT'
              },
            ].map((incident, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{incident.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{incident.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/jenis-insiden">
              <Button variant="outline">
                Lihat Selengkapnya
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Layanan Utama */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Layanan CSIRT UNISSULA</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan untuk melindungi keamanan informasi universitas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <AlertTriangle className="w-8 h-8" />,
                title: 'Penerimaan Laporan Insiden',
                description: 'Menerima dan mendokumentasikan laporan insiden keamanan siber dari civitas akademika'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Koordinasi Respons',
                description: 'Mengkoordinasikan tim teknis untuk menangani dan mengatasi insiden keamanan'
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Analisis & Rekomendasi',
                description: 'Melakukan analisis insiden dan memberikan rekomendasi mitigasi'
              },
              {
                icon: <Bell className="w-8 h-8" />,
                title: 'Peringatan Dini',
                description: 'Menyebarkan informasi peringatan dini tentang ancaman keamanan terkini'
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Edukasi Keamanan',
                description: 'Memberikan edukasi dan awareness keamanan siber kepada civitas akademika'
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: 'Konsultasi Keamanan',
                description: 'Memberikan konsultasi terkait praktik keamanan informasi yang baik'
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-blue-600">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/layanan">
              <Button>
                Lihat Semua Layanan
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Temukan Insiden Keamanan?
          </h2>
          <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
            Segera laporkan kepada CSIRT UNISSULA untuk penanganan cepat dan profesional. 
            Kami siap membantu 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/laporkan">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Laporkan Insiden
              </Button>
            </Link>
            <Link to="/kontak">
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Info Penting */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-4 max-w-4xl mx-auto">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-900" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Informasi Penting</h3>
              <p className="text-gray-700">
                CSIRT UNISSULA menjaga kerahasiaan setiap laporan. Semua informasi ditangani 
                sesuai dengan kebijakan privasi dan keamanan informasi universitas. Kami tidak 
                meminta data sensitif yang tidak diperlukan untuk penanganan insiden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
