import { Link } from 'react-router-dom';
import { Shield, Lock, Users, Award, ChevronRight } from 'lucide-react';

export function HomePage() {
  const services = [
    {
      title: 'Konsultasi Keamanan Sistem Informasi',
      description: 'Analisis mendalam terhadap infrastruktur keamanan sistem informasi Anda',
    },
    {
      title: 'Asesmen Risiko Keamanan Siber',
      description: 'Identifikasi dan evaluasi risiko keamanan yang mengancam organisasi',
    },
    {
      title: 'Review Kebijakan & Tata Kelola',
      description: 'Evaluasi kebijakan keamanan dan IT governance yang ada',
    },
    {
      title: 'Pendampingan Penerapan Keamanan',
      description: 'Dukungan implementasi solusi keamanan informasi',
    },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Expertise',
      description: 'Tim ahli berpengalaman dalam keamanan siber dan IT governance',
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Confidentiality',
      description: 'Jaminan kerahasiaan penuh atas data dan informasi klien',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Metodologi',
      description: 'Pendekatan terstruktur dan terukur sesuai standar internasional',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Konsultasi Keamanan Siber Terpercaya
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Tingkatkan posture keamanan informasi organisasi Anda bersama cysecunissula - mitra strategis dalam menghadapi ancaman siber
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/layanan"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Jelajahi Layanan
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/kontak"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Utama Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Solusi konsultasi keamanan siber yang komprehensif untuk berbagai kebutuhan organisasi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/layanan"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Lihat Semua Layanan
              <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keunggulan Kami
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Meningkatkan Keamanan Siber Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasikan kebutuhan keamanan informasi organisasi Anda dengan tim ahli kami
          </p>
          <Link
            to="/kontak"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Mulai Konsultasi
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
