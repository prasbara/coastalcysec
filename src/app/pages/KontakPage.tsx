import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

export function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real application, this would send data to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Konsultasikan kebutuhan keamanan siber organisasi Anda dengan tim ahli kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Permintaan Konsultasi
            </h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Terima Kasih!
                </h3>
                <p className="text-gray-600">
                  Permintaan Anda telah kami terima. Tim kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Organisasi <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="PT. Contoh Indonesia"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Diminati <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Pilih layanan...</option>
                    <option value="security-assessment">Konsultasi Keamanan Sistem Informasi</option>
                    <option value="risk-assessment">Asesmen Risiko Keamanan Siber</option>
                    <option value="policy-review">Review Kebijakan & Tata Kelola</option>
                    <option value="implementation">Pendampingan Penerapan Keamanan</option>
                    <option value="incident-preparedness">Konsultasi Kesiapan Insiden Siber</option>
                    <option value="custom">Konsultasi Customized</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Kebutuhan / Pertanyaan <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Jelaskan secara singkat kebutuhan atau pertanyaan Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Permintaan
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Dengan mengirim form ini, Anda menyetujui kami untuk menghubungi Anda terkait permintaan konsultasi.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-lg p-8">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Email Resmi
                  </h3>
                  <p className="text-gray-700">
                    info@cysecunissula.ac.id
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Untuk pertanyaan umum dan permintaan informasi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Waktu Respon
              </h3>
              <p className="text-gray-600 mb-4">
                Kami akan merespons permintaan Anda dalam waktu <strong>1-2 hari kerja</strong>.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Jam Operasional:</strong><br />
                  Senin - Jumat: 08:00 - 17:00 WIB
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proses Selanjutnya
              </h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">
                    1
                  </span>
                  <span className="text-gray-600 text-sm">
                    Tim kami akan menghubungi Anda untuk initial consultation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">
                    2
                  </span>
                  <span className="text-gray-600 text-sm">
                    Kami akan menyusun proposal sesuai kebutuhan Anda
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold mr-3 flex-shrink-0">
                    3
                  </span>
                  <span className="text-gray-600 text-sm">
                    Setelah agreement, project dapat dimulai
                  </span>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Catatan Kerahasiaan
              </h3>
              <p className="text-sm text-gray-700">
                Semua informasi yang Anda berikan akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan konsultasi. Lihat <a href="/privasi" className="text-blue-600 hover:underline">Kebijakan Privasi</a> kami untuk detail lebih lanjut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
