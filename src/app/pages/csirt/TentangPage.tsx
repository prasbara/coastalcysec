import { Shield, Target, Eye, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function TentangPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tentang CSIRT UNISSULA</h1>
          <p className="text-xl text-gray-600">
            Tim Tanggap Insiden Keamanan Siber Universitas Islam Sultan Agung
          </p>
        </div>

        {/* Definisi CSIRT */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Apa itu CSIRT?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>CSIRT (Computer Security Incident Response Team)</strong> adalah tim khusus yang bertugas 
              menangani insiden keamanan komputer dan jaringan. CSIRT UNISSULA dibentuk sebagai upaya proaktif 
              universitas dalam menjaga keamanan sistem informasi dan data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tim ini berfungsi sebagai pusat koordinasi untuk mendeteksi, merespons, dan memulihkan sistem 
              dari berbagai ancaman keamanan siber, serta memberikan edukasi kepada sivitas akademika tentang 
              praktik keamanan informasi yang baik.
            </p>
          </CardContent>
        </Card>

        {/* Dasar Pembentukan */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dasar Pembentukan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              CSIRT UNISSULA dibentuk berdasarkan kebutuhan mendesak untuk melindungi aset informasi 
              universitas di era digital yang semakin rentan terhadap serangan siber. Pembentukan tim ini 
              selaras dengan:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Kebijakan Keamanan Informasi Nasional</li>
              <li>Standar ISO/IEC 27001 tentang Sistem Manajemen Keamanan Informasi</li>
              <li>Rekomendasi BSSN (Badan Siber dan Sandi Negara)</li>
              <li>Komitmen universitas dalam melindungi data sivitas akademika</li>
            </ul>
          </CardContent>
        </Card>

        {/* Visi dan Misi */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-6 h-6 text-blue-600" />
                Visi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Menjadi tim tanggap insiden keamanan siber yang terpercaya dan profesional dalam 
                melindungi aset informasi Universitas Islam Sultan Agung, mendukung terciptanya 
                lingkungan digital yang aman dan terpercaya.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-600" />
                Misi
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mendeteksi dan merespons insiden keamanan dengan cepat</li>
                <li>Memberikan layanan konsultasi keamanan informasi</li>
                <li>Meningkatkan kesadaran keamanan siber sivitas akademika</li>
                <li>Berkolaborasi dengan CSIRT/CERT nasional dan internasional</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Ruang Lingkup Layanan */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ruang Lingkup Layanan</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              CSIRT UNISSULA melayani seluruh sivitas akademika dan sistem informasi universitas, meliputi:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Infrastruktur yang Dilindungi:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Sistem Informasi Akademik</li>
                  <li>Portal Mahasiswa dan Dosen</li>
                  <li>Email Institusi (@unissula.ac.id)</li>
                  <li>Website Resmi Universitas</li>
                  <li>Server dan Database Universitas</li>
                  <li>Jaringan Kampus (WiFi dan LAN)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Pengguna Layanan:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Mahasiswa Aktif</li>
                  <li>Dosen dan Tenaga Pendidik</li>
                  <li>Staf dan Karyawan</li>
                  <li>Unit Kerja dan Fakultas</li>
                  <li>Alumni (terbatas)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Afiliasi Institusional */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Afiliasi Institusional
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              CSIRT UNISSULA berada di bawah naungan Lembaga Sistem Informasi universitas dan 
              bekerja sama dengan berbagai pihak untuk menjaga keamanan siber, termasuk:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Internal</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lembaga Sistem Informasi UNISSULA</li>
                  <li>• Unit Teknologi Informasi</li>
                  <li>• Bagian Hukum dan Kepatuhan</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Eksternal</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• BSSN (Badan Siber dan Sandi Negara)</li>
                  <li>• ID-CERT (Indonesia Computer Emergency Response Team)</li>
                  <li>• Forum CSIRT Perguruan Tinggi Indonesia</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
