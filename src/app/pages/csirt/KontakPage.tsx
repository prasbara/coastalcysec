import { Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';

export function KontakPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hubungi CSIRT UNISSULA</h1>
          <p className="text-xl text-gray-600">
            Informasi kontak dan jalur komunikasi resmi
          </p>
        </div>

        {/* Emergency Contact */}
        <Card className="mb-8 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-900">
              <AlertCircle className="w-6 h-6" />
              Kontak Darurat (Insiden Kritis)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-800 mb-4">
              Untuk insiden keamanan kritis yang memerlukan respons segera:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900">Telepon</span>
                </div>
                <p className="text-lg font-bold text-gray-900">024-6583584 (ext. 1234)</p>
                <p className="text-sm text-gray-600">Hubungi segera untuk insiden kritis</p>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-900">Email Darurat</span>
                </div>
                <p className="text-lg font-bold text-gray-900">csirt@unissula.ac.id</p>
                <p className="text-sm text-gray-600">Subject: [URGENT] + deskripsi</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-blue-600" />
                Email Resmi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Pelaporan Insiden:</p>
                <p className="text-blue-600">csirt@unissula.ac.id</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Konsultasi Keamanan:</p>
                <p className="text-blue-600">security@unissula.ac.id</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Advisory & Info:</p>
                <p className="text-blue-600">advisory@unissula.ac.id</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="w-6 h-6 text-blue-600" />
                Telepon
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Kantor CSIRT:</p>
                <p className="text-gray-700">024-6583584 (ext. 1234)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Help Desk IT:</p>
                <p className="text-gray-700">024-6583584 (ext. 5678)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  <strong>Catatan:</strong> Untuk respons tercepat pada insiden kritis, 
                  hubungi via telepon DAN email secara bersamaan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Office Hours */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-600" />
              Jam Operasional
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Pelaporan Insiden (24/7)</h4>
                <p className="text-gray-700 mb-2">
                  Sistem pelaporan online dan email aktif sepanjang waktu. Laporan akan ditindaklanjuti 
                  sesuai tingkat keparahan.
                </p>
                <div className="p-3 bg-green-50 rounded-lg mt-2">
                  <p className="text-sm text-green-900">
                    <strong>Insiden Kritis:</strong> Respons segera termasuk di luar jam kerja
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Konsultasi & Dukungan</h4>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Senin - Jumat</span>
                    <span className="font-semibold">08:00 - 16:00 WIB</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Sabtu</span>
                    <span className="font-semibold">08:00 - 12:00 WIB</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Minggu & Libur</span>
                    <span className="font-semibold">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              Lokasi Kantor
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">CSIRT UNISSULA</p>
                <p className="text-gray-700">
                  Gedung Rektorat Lantai 3<br />
                  Universitas Islam Sultan Agung<br />
                  Jl. Raya Kaligawe KM.4<br />
                  Semarang, Jawa Tengah 50112<br />
                  Indonesia
                </p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Catatan:</strong> Untuk kunjungan langsung, mohon buat janji terlebih dahulu 
                  via email atau telepon. Walk-in hanya melayani kasus darurat.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Response Time */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Komitmen Waktu Respons</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Kami berkomitmen untuk merespons setiap komunikasi sesuai prioritas:
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="text-gray-900 font-medium">Insiden Kritis</span>
                <span className="text-red-600 font-semibold">< 1 jam</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-gray-900 font-medium">Insiden Tinggi</span>
                <span className="text-orange-600 font-semibold">< 4 jam</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="text-gray-900 font-medium">Konsultasi/Pertanyaan</span>
                <span className="text-yellow-600 font-semibold">< 1 hari kerja</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-gray-900 font-medium">Permintaan Umum</span>
                <span className="text-blue-600 font-semibold">< 2 hari kerja</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
