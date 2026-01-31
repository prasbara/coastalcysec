import { Shield, Lock, Mail, Smartphone, Wifi, Database, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';

export function PanduanPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Panduan Keamanan & Awareness</h1>
          <p className="text-xl text-gray-600">
            Panduan praktis keamanan siber untuk sivitas akademika UNISSULA
          </p>
        </div>

        <Tabs defaultValue="akun" className="mb-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="akun">Keamanan Akun</TabsTrigger>
            <TabsTrigger value="email">Email & Phishing</TabsTrigger>
            <TabsTrigger value="perangkat">Perangkat Aman</TabsTrigger>
            <TabsTrigger value="data">Perlindungan Data</TabsTrigger>
          </TabsList>

          {/* Keamanan Akun */}
          <TabsContent value="akun" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-6 h-6 text-blue-600" />
                  Keamanan Akun dan Password
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Membuat Password yang Kuat</h4>
                  <ul className="space-y-2">
                    {[
                      'Minimal 12 karakter, kombinasi huruf besar, kecil, angka, dan simbol',
                      'Hindari informasi pribadi (nama, tanggal lahir, NIM)',
                      'Jangan gunakan kata yang ada di kamus',
                      'Gunakan passphrase: kalimat yang mudah diingat namun sulit ditebak',
                      'Contoh kuat: "Sayakuliah!DiUnissula2024"'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Praktik Terbaik Pengelolaan Akun</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">✓ LAKUKAN</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Gunakan password unik untuk setiap akun</li>
                        <li>• Aktifkan 2FA/verifikasi 2 langkah</li>
                        <li>• Ganti password secara berkala</li>
                        <li>• Gunakan password manager</li>
                        <li>• Logout setelah selesai</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg">
                      <h5 className="font-semibold text-red-900 mb-2">✗ JANGAN LAKUKAN</h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Membagikan password ke siapapun</li>
                        <li>• Menyimpan password di notes/file</li>
                        <li>• Menggunakan password yang sama</li>
                        <li>• Login di komputer umum tanpa logout</li>
                        <li>• Menyimpan password di browser</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Email & Phishing */}
          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-blue-600" />
                  Mengenali dan Menghindari Phishing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Tanda-tanda Email Phishing</h4>
                  <div className="space-y-3">
                    {[
                      {
                        title: 'Pengirim Mencurigakan',
                        desc: 'Email dari alamat yang mirip tapi bukan resmi (@unissulla.ac.id, @unissula-ac.id)'
                      },
                      {
                        title: 'Bahasa Mendesak/Mengancam',
                        desc: 'Kata-kata seperti "akun akan diblokir", "verifikasi sekarang", "hadiah menanti"'
                      },
                      {
                        title: 'Link Mencurigakan',
                        desc: 'Hover link sebelum klik - domain tidak sesuai dengan institusi resmi'
                      },
                      {
                        title: 'Attachment Tidak Diminta',
                        desc: 'File .exe, .zip, atau dokumen dengan macro yang tidak Anda minta'
                      },
                      {
                        title: 'Permintaan Data Sensitif',
                        desc: 'Meminta password, NIM, PIN, atau informasi pribadi via email'
                      }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                        <h5 className="font-semibold text-yellow-900 mb-1">{item.title}</h5>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Apa yang Harus Dilakukan?</h4>
                  <ol className="space-y-2">
                    {[
                      'JANGAN klik link atau download attachment jika ragu',
                      'Verifikasi pengirim dengan menghubungi langsung',
                      'Periksa alamat email pengirim dengan teliti',
                      'Laporkan email phishing ke csirt@unissula.ac.id',
                      'Hapus email phishing dan blokir pengirim'
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-bold text-blue-600">{i + 1}.</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perangkat Aman */}
          <TabsContent value="perangkat" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  Penggunaan Perangkat yang Aman
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Komputer/Laptop
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Install dan update antivirus secara rutin',
                        'Aktifkan Windows Update/auto-update OS',
                        'Gunakan firewall bawaan sistem',
                        'Enkripsi hard disk (BitLocker/FileVault)',
                        'Lock screen otomatis setelah idle',
                        'Hindari software bajakan'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-blue-600" />
                      Smartphone/Tablet
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Aktifkan lock screen (PIN/pattern/biometric)',
                        'Install apps hanya dari official store',
                        'Review permission apps secara berkala',
                        'Update OS dan apps secara rutin',
                        'Aktifkan "Find My Device/Phone"',
                        'Backup data secara berkala'
                      ].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                    <Wifi className="w-5 h-5" />
                    Keamanan WiFi
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gunakan WiFi kampus resmi (UNISSULA-WIFI)</li>
                    <li>• Hindari WiFi publik untuk akses data sensitif</li>
                    <li>• Gunakan VPN jika harus menggunakan WiFi publik</li>
                    <li>• Matikan WiFi auto-connect</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Perlindungan Data */}
          <TabsContent value="data" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-600" />
                  Perlindungan Data dan Privasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Klasifikasi Data</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <h5 className="font-semibold text-red-900 mb-2">Sangat Rahasia</h5>
                      <p className="text-sm text-gray-700 mb-2">Password, PIN, KTP, No.Rek</p>
                      <p className="text-xs text-red-700">Jangan pernah dibagikan</p>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h5 className="font-semibold text-yellow-900 mb-2">Rahasia</h5>
                      <p className="text-sm text-gray-700 mb-2">Data pribadi, nilai, transkrip</p>
                      <p className="text-xs text-yellow-700">Hanya untuk pihak berwenang</p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h5 className="font-semibold text-green-900 mb-2">Publik</h5>
                      <p className="text-sm text-gray-700 mb-2">Nama, program studi, angkatan</p>
                      <p className="text-xs text-green-700">Boleh dibagikan</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Praktik Perlindungan Data</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold mb-2">✓ Backup Data Rutin</h5>
                      <p className="text-sm text-gray-700">Backup file penting ke cloud atau external drive</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold mb-2">✓ Enkripsi File Sensitif</h5>
                      <p className="text-sm text-gray-700">Gunakan password untuk file penting (ZIP dengan password, office file protection)</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold mb-2">✓ Hati-hati Sharing</h5>
                      <p className="text-sm text-gray-700">Periksa penerima sebelum share file/link. Gunakan password sharing untuk data sensitif</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold mb-2">✓ Hapus Data Lama</h5>
                      <p className="text-sm text-gray-700">Hapus file/email yang tidak lagi diperlukan. Gunakan secure delete untuk data sensitif</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Sumber Belajar Tambahan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Video Tutorial</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Tonton video tutorial keamanan siber di channel YouTube CSIRT UNISSULA
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Workshop & Seminar</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Ikuti workshop keamanan siber yang diselenggarakan secara berkala
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
