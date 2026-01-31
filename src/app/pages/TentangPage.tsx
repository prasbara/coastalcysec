import { Target, Eye, Users } from 'lucide-react';

export function TentangPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tentang Coastal Delta Response
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mitra strategis dalam meningkatkan posture keamanan informasi organisasi Anda
          </p>
        </div>

        {/* Profil */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Profil Kami</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Coastal Delta Response adalah penyedia layanan konsultasi keamanan siber yang berkomitmen untuk membantu organisasi meningkatkan posture keamanan informasi mereka. Kami hadir sebagai mitra strategis yang memahami kompleksitas ancaman siber modern dan kebutuhan akan perlindungan data yang efektif.
            </p>
            <p className="mb-4">
              Dengan pendekatan yang terstruktur dan berbasis pada standar internasional, kami memberikan solusi konsultasi yang disesuaikan dengan kebutuhan spesifik setiap klien. Tim ahli kami memiliki pengalaman mendalam dalam berbagai aspek keamanan siber, mulai dari asesmen risiko hingga implementasi kebijakan keamanan.
            </p>
            <p>
              Kami percaya bahwa keamanan informasi bukan hanya tentang teknologi, tetapi juga tentang people, process, dan policy. Oleh karena itu, layanan kami dirancang untuk memberikan pemahaman holistik dan solusi komprehensif bagi organisasi Anda.
            </p>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Visi</h2>
            </div>
            <p className="text-gray-700">
              Menjadi mitra konsultasi keamanan siber terpercaya yang membantu organisasi membangun ekosistem keamanan informasi yang tangguh dan berkelanjutan.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Misi</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Memberikan layanan konsultasi berkualitas tinggi</li>
              <li>• Meningkatkan awareness keamanan informasi</li>
              <li>• Mendampingi implementasi best practices</li>
              <li>• Membangun kapabilitas keamanan organisasi</li>
            </ul>
          </div>
        </div>

        {/* Pendekatan */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Pendekatan Konsultasi</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">People-Centric</h3>
              <p className="text-gray-600">
                Kami memahami bahwa manusia adalah elemen kunci dalam keamanan. Pendekatan kami fokus pada membangun awareness dan kapabilitas tim Anda.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Process-Driven</h3>
              <p className="text-gray-600">
                Metodologi terstruktur kami memastikan setiap tahapan konsultasi dilakukan secara sistematis dan terukur sesuai standar best practice.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology-Aware</h3>
              <p className="text-gray-600">
                Kami mengikuti perkembangan teknologi terkini dan memahami implikasinya terhadap keamanan informasi organisasi.
              </p>
            </div>
          </div>
        </div>

        {/* Komitmen */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Komitmen Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Kerahasiaan',
                description: 'Menjaga kerahasiaan informasi klien dengan standar tertinggi',
              },
              {
                title: 'Profesionalisme',
                description: 'Memberikan layanan dengan integritas dan standar profesional',
              },
              {
                title: 'Kualitas',
                description: 'Menghasilkan deliverable yang berkualitas dan actionable',
              },
              {
                title: 'Kemitraan',
                description: 'Membangun hubungan jangka panjang sebagai mitra strategis',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
