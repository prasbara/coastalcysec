import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/tentang', label: 'Tentang' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/laporkan', label: 'Laporkan Insiden' },
    { path: '/panduan', label: 'Panduan Keamanan' },
    { path: '/advisory', label: 'Advisory' },
    { path: '/faq', label: 'FAQ' },
    { path: '/kontak', label: 'Kontak' },
  ];

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Shield className="w-10 h-10" />
            <div>
              <div className="font-bold text-xl">Coastal Delta Response</div>
              <div className="text-sm text-blue-200">Professional Cybersecurity Consultation</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-blue-200 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-blue-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-blue-800">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block py-2 px-4 hover:bg-blue-800 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
