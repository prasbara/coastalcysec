import { Shield, Lock, Eye, FileText } from 'lucide-react';

export function PrivasiPage() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi & Kerahasiaan
          </h1>
          <p className="text-xl text-gray-600">
            Komitmen kami terhadap perlindungan data dan kerahasiaan informasi klien
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <p className="text-gray-700 text-center">
            <strong>Terakhir diperbarui:</strong> 23 Januari 2026
          </p>
          <p className="text-gray-700 text-center mt-2">
            cysecunissula berkomitmen penuh terhadap perlindungan privasi dan kerahasiaan informasi klien kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-4">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Komitmen Kerahasiaan
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Kami memahami bahwa dalam konsultasi keamanan siber, klien mempercayakan informasi yang sangat sensitif kepada kami. Oleh karena itu, kami berkomitmen untuk:
              </p>
              <ul className="space-y-2 ml-6">
                <li>Menjaga kerahasiaan semua informasi klien dengan standar tertinggi</li>
                <li>Tidak mengungkapkan informasi klien kepada pihak ketiga tanpa persetujuan tertulis</li>
                <li>Menerapkan kontrol keamanan yang ketat untuk melindungi data klien</li>
                <li>Memastikan semua konsultan menandatangani Non-Disclosure Agreement (NDA)</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white mr-4">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                2. Informasi yang Kami Kumpulkan
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Dalam proses konsultasi, kami dapat mengumpulkan informasi berikut:
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                2.1 Informasi Kontak
              </h3>
              <ul className="space-y-2 ml-6">
                <li>Nama dan jabatan person of contact</li>
                <li>Email dan nomor telepon</li>
                <li>Nama dan alamat organisasi</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                2.2 Informasi Organisasi
              </h3>
              <ul className="space-y-2 ml-6">
                <li>Struktur organisasi dan governance</li>
                <li>Kebijakan dan prosedur yang ada</li>
                <li>Dokumentasi sistem dan infrastruktur IT</li>
                <li>Informasi terkait keamanan informasi</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                2.3 Data Teknis
              </h3>
              <ul className="space-y-2 ml-6">
                <li>Konfigurasi sistem dan network</li>
                <li>Log files dan security events</li>
                <li>Hasil assessment dan testing</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Penggunaan Informasi
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Informasi yang kami kumpulkan digunakan semata-mata untuk:
              </p>
              <ul className="space-y-2 ml-6">
                <li>Melakukan assessment dan analisis sesuai scope konsultasi</li>
                <li>Menyusun rekomendasi dan deliverable project</li>
                <li>Komunikasi terkait project</li>
                <li>Memenuhi kewajiban legal dan regulatory (jika ada)</li>
              </ul>
              <p className="mt-4">
                <strong>Kami TIDAK akan:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li>Menggunakan informasi untuk kepentingan komersial lain</li>
                <li>Menjual atau menyewakan data klien</li>
                <li>Menggunakan informasi klien untuk case study tanpa persetujuan tertulis</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white mr-4">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                4. Perlindungan Data
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Kami menerapkan kontrol keamanan yang ketat untuk melindungi data klien:
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                4.1 Kontrol Akses
              </h3>
              <ul className="space-y-2 ml-6">
                <li>Prinsip least privilege dan need-to-know</li>
                <li>Multi-factor authentication untuk akses sistem</li>
                <li>Role-based access control</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                4.2 Enkripsi
              </h3>
              <ul className="space-y-2 ml-6">
                <li>Enkripsi data in-transit (TLS/SSL)</li>
                <li>Enkripsi data at-rest</li>
                <li>Secure communication channels</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                4.3 Manajemen Dokumen
              </h3>
              <ul className="space-y-2 ml-6">
                <li>Penyimpanan di environment yang secure</li>
                <li>Klasifikasi dan labeling dokumen</li>
                <li>Secure disposal setelah retention period</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                5. Retensi dan Penghapusan Data
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="mb-4">
                  Data klien hanya disimpan selama diperlukan untuk memenuhi tujuan konsultasi dan kewajiban legal:
                </p>
                <ul className="space-y-2 ml-6">
                  <li><strong>Selama Project:</strong> Data disimpan untuk keperluan analisis dan penyusunan deliverable</li>
                  <li><strong>Post-Project:</strong> Data dapat disimpan selama periode tertentu yang disepakati (biasanya 3-6 bulan) untuk keperluan clarification dan support</li>
                  <li><strong>Archival:</strong> Hanya dokumen yang diperlukan untuk compliance yang diarsipkan (dengan persetujuan klien)</li>
                  <li><strong>Deletion:</strong> Setelah retention period, semua data sensitif dihapus secara permanen menggunakan secure deletion method</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              6. Hak Klien
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Klien memiliki hak untuk:
              </p>
              <ul className="space-y-2 ml-6">
                <li>Mengetahui informasi apa saja yang kami kumpulkan dan bagaimana penggunaannya</li>
                <li>Meminta copy data yang kami miliki</li>
                <li>Meminta koreksi jika ada data yang tidak akurat</li>
                <li>Meminta penghapusan data (setelah project selesai)</li>
                <li>Mengajukan keluhan terkait penanganan data</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              7. Perubahan Kebijakan
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Kami dapat memperbarui kebijakan ini dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau requirement legal. Versi terbaru akan selalu tersedia di website kami dengan tanggal update yang jelas.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              8. Hubungi Kami
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-4">
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan privasi ini atau penanganan data Anda, silakan hubungi kami di:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-semibold text-gray-900">Email:</p>
                <p>info@cysecunissula.ac.id</p>
                <p className="font-semibold text-gray-900 mt-4">Subject:</p>
                <p>Privacy Inquiry / Data Protection</p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-sm text-gray-700 text-center">
            <strong>Catatan Penting:</strong> Kebijakan ini tidak menggantikan atau mengubah ketentuan dalam kontrak konsultasi atau Non-Disclosure Agreement (NDA) yang telah disepakati. Dalam hal terjadi pertentangan, ketentuan dalam kontrak atau NDA yang berlaku.
          </p>
        </div>
      </div>
    </div>
  );
}
