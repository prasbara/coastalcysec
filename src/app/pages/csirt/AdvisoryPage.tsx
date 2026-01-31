import { Bell, AlertTriangle, Info, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function AdvisoryPage() {
  const advisories = [
    {
      id: 'ADV-2024-001',
      date: '2024-01-20',
      severity: 'Kritis',
      severityColor: 'bg-red-600',
      title: 'Kerentanan Kritis pada Microsoft Exchange Server',
      summary: 'Ditemukan kerentanan yang memungkinkan eksekusi kode jarak jauh tanpa autentikasi.',
      affected: 'Microsoft Exchange Server 2013/2016/2019',
      recommendation: 'Segera update ke patch terbaru dari Microsoft',
      action: 'IT Admin harus segera menerapkan security patch'
    },
    {
      id: 'ADV-2024-002',
      date: '2024-01-18',
      severity: 'Tinggi',
      severityColor: 'bg-orange-600',
      title: 'Kampanye Phishing Mengatasnamakan Rektorat',
      summary: 'Terdeteksi email phishing yang mengaku dari Rektorat meminta verifikasi data dosen.',
      affected: 'Seluruh sivitas akademika',
      recommendation: 'Jangan klik link atau berikan informasi pribadi via email',
      action: 'Laporkan email mencurigakan ke CSIRT'
    },
    {
      id: 'ADV-2024-003',
      date: '2024-01-15',
      severity: 'Sedang',
      severityColor: 'bg-yellow-600',
      title: 'Update Keamanan Windows January 2024',
      summary: 'Microsoft merilis patch keamanan bulanan untuk Windows 10/11.',
      affected: 'Semua pengguna Windows',
      recommendation: 'Aktifkan Windows Update dan install patch terbaru',
      action: 'Update sistem operasi Anda'
    },
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Advisory & Peringatan Keamanan</h1>
          <p className="text-xl text-gray-600">
            Informasi peringatan keamanan dan imbauan dari CSIRT UNISSULA
          </p>
        </div>

        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Tentang Advisory</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Advisory berisi informasi peringatan keamanan, kerentanan sistem yang ditemukan, dan 
                  rekomendasi tindakan pencegahan. Informasi ini bersifat publik dan tidak mengungkapkan 
                  detail teknis yang dapat disalahgunakan.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {advisories.map((adv) => (
            <Card key={adv.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="font-mono text-xs">
                        {adv.id}
                      </Badge>
                      <Badge className={`${adv.severityColor} text-white`}>
                        {adv.severity}
                      </Badge>
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(adv.date).toLocaleDateString('id-ID', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{adv.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ringkasan:</h4>
                  <p className="text-gray-700">{adv.summary}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Sistem/Platform Terpengaruh:</h4>
                    <p className="text-gray-700 text-sm">{adv.affected}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Rekomendasi:</h4>
                    <p className="text-gray-700 text-sm">{adv.recommendation}</p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-1">Tindakan yang Diperlukan:</h4>
                      <p className="text-yellow-800 text-sm">{adv.action}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-6 h-6 text-blue-600" />
              Berlangganan Notifikasi
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Untuk menerima notifikasi advisory keamanan langsung ke email, daftarkan diri Anda 
              dengan menghubungi csirt@unissula.ac.id dengan subject "Subscribe Advisory".
            </p>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Catatan:</strong> Advisory akan dikirim hanya untuk isu keamanan yang relevan 
                dan signifikan. Kami tidak akan mengirim spam atau informasi yang tidak berkaitan.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
