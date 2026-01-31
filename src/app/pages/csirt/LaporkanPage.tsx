import { useState } from 'react';
import { AlertTriangle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Alert, AlertDescription } from '@/app/components/ui/alert';

export function LaporkanPage() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    afiliasi: '',
    jenisInsiden: '',
    waktuKejadian: '',
    sistemTerdampak: '',
    deskripsi: '',
    tindakanDiambil: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi submit - dalam implementasi nyata akan kirim ke backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form
    setTimeout(() => {
      setFormData({
        nama: '',
        email: '',
        telepon: '',
        afiliasi: '',
        jenisInsiden: '',
        waktuKejadian: '',
        sistemTerdampak: '',
        deskripsi: '',
        tindakanDiambil: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Laporkan Insiden Keamanan Siber</h1>
          <p className="text-xl text-gray-600">
            Form pelaporan insiden untuk sivitas akademika UNISSULA
          </p>
        </div>

        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-900">
            <strong>Untuk Insiden Kritis/Darurat:</strong> Hubungi langsung via telepon 024-6583584 ext. 1234 
            untuk respons segera. Tetap isi form ini untuk dokumentasi.
          </AlertDescription>
        </Alert>

        {submitted ? (
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Laporan Berhasil Dikirim!</h3>
              <p className="text-green-800 mb-4">
                Terima kasih atas laporan Anda. Tim CSIRT akan segera menindaklanjuti.
              </p>
              <div className="p-4 bg-white rounded-lg mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Nomor Tiket:</strong> CSIRT-2024-{Math.random().toString(36).substr(2, 6).toUpperCase()}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Simpan nomor tiket ini untuk referensi
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Anda akan menerima konfirmasi email dalam waktu singkat.
              </p>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Formulir Pelaporan Insiden</CardTitle>
              <CardDescription>
                Isi form di bawah dengan lengkap dan jelas. Semua informasi akan dijaga kerahasiaannya.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informasi Pelapor */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Informasi Pelapor</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nama">Nama Lengkap *</Label>
                      <Input
                        id="nama"
                        required
                        value={formData.nama}
                        onChange={(e) => handleChange('nama', e.target.value)}
                        placeholder="Nama Anda"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="email@unissula.ac.id"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telepon">Nomor Telepon/HP</Label>
                      <Input
                        id="telepon"
                        type="tel"
                        value={formData.telepon}
                        onChange={(e) => handleChange('telepon', e.target.value)}
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="afiliasi">Afiliasi (Fakultas/Unit Kerja) *</Label>
                      <Input
                        id="afiliasi"
                        required
                        value={formData.afiliasi}
                        onChange={(e) => handleChange('afiliasi', e.target.value)}
                        placeholder="Contoh: Fakultas Teknik"
                      />
                    </div>
                  </div>
                </div>

                {/* Detail Insiden */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Detail Insiden</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jenisInsiden">Jenis Insiden *</Label>
                      <Select value={formData.jenisInsiden} onValueChange={(value) => handleChange('jenisInsiden', value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih jenis insiden" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="malware">Malware/Virus</SelectItem>
                          <SelectItem value="phishing">Phishing/Social Engineering</SelectItem>
                          <SelectItem value="defacement">Defacement/Hacking</SelectItem>
                          <SelectItem value="databreach">Kebocoran Data</SelectItem>
                          <SelectItem value="ddos">DDoS Attack</SelectItem>
                          <SelectItem value="accountabuse">Penyalahgunaan Akun</SelectItem>
                          <SelectItem value="vulnerability">Kerentanan Sistem</SelectItem>
                          <SelectItem value="lainnya">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="waktuKejadian">Waktu Kejadian *</Label>
                      <Input
                        id="waktuKejadian"
                        type="datetime-local"
                        required
                        value={formData.waktuKejadian}
                        onChange={(e) => handleChange('waktuKejadian', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sistemTerdampak">Sistem/Platform yang Terdampak *</Label>
                    <Input
                      id="sistemTerdampak"
                      required
                      value={formData.sistemTerdampak}
                      onChange={(e) => handleChange('sistemTerdampak', e.target.value)}
                      placeholder="Contoh: Email kampus, Portal akademik, Website fakultas"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deskripsi">Deskripsi Detail Insiden *</Label>
                    <Textarea
                      id="deskripsi"
                      required
                      rows={6}
                      value={formData.deskripsi}
                      onChange={(e) => handleChange('deskripsi', e.target.value)}
                      placeholder="Jelaskan secara detail apa yang terjadi, gejala yang terlihat, dampak yang dirasakan, dan informasi penting lainnya..."
                    />
                    <p className="text-sm text-gray-600">
                      Sertakan informasi seperti: error message, screenshot (jika ada), alamat IP, URL yang mencurigakan, dll.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tindakanDiambil">Tindakan yang Sudah Diambil (Jika Ada)</Label>
                    <Textarea
                      id="tindakanDiambil"
                      rows={4}
                      value={formData.tindakanDiambil}
                      onChange={(e) => handleChange('tindakanDiambil', e.target.value)}
                      placeholder="Contoh: Sudah mengganti password, isolasi sistem, scan antivirus, dll."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    <Send className="w-5 h-5 mr-2" />
                    Kirim Laporan
                  </Button>
                  <Button type="button" size="lg" variant="outline" className="flex-1" onClick={() => setFormData({
                    nama: '',
                    email: '',
                    telepon: '',
                    afiliasi: '',
                    jenisInsiden: '',
                    waktuKejadian: '',
                    sistemTerdampak: '',
                    deskripsi: '',
                    tindakanDiambil: ''
                  })}>
                    Reset Form
                  </Button>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Catatan:</strong> Dengan mengirim laporan ini, Anda menyetujui bahwa informasi yang 
                    diberikan adalah benar dan dapat digunakan oleh CSIRT UNISSULA untuk keperluan penanganan 
                    insiden sesuai kebijakan privasi universitas.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Alternative Contact */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Cara Pelaporan Lainnya</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Email</h4>
                <p className="text-sm text-gray-700 mb-1">csirt@unissula.ac.id</p>
                <p className="text-xs text-gray-600">Lampirkan screenshot/bukti jika ada</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Telepon</h4>
                <p className="text-sm text-gray-700 mb-1">024-6583584 (ext. 1234)</p>
                <p className="text-xs text-gray-600">Senin-Jumat, 08:00-16:00 WIB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
