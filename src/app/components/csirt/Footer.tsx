import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <div className="font-bold text-xl text-white">Coastal Delta Response</div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional cybersecurity consultation services, committed to protecting
              information assets and technology infrastructure with trusted expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tentang" className="text-sm hover:text-blue-400 transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/layanan" className="text-sm hover:text-blue-400 transition-colors">
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link to="/laporkan" className="text-sm hover:text-blue-400 transition-colors">
                  Laporkan Insiden
                </Link>
              </li>
              <li>
                <Link to="/panduan" className="text-sm hover:text-blue-400 transition-colors">
                  Panduan Keamanan
                </Link>
              </li>
              <li>
                <Link to="/privasi" className="text-sm hover:text-blue-400 transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak Darurat</h3>
            <ul className="space-y-3">

              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                <div className="text-sm">
                  <div className="text-white font-medium">Alamat</div>
                  <div className="text-gray-400">Jl. Kaligawe Raya No.Km.4, Terboyo Kulon, Kec. Genuk, Kota Semarang, Jawa Tengah 50112</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Coastal Delta Response. Professional Cybersecurity Consultation Services.
          </p>
        </div>
      </div>
    </footer>
  );
}
