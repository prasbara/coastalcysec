import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import HomePage from '@/app/components/HomePage';
import AboutPage from '@/app/components/AboutPage';
import ServicesPage from '@/app/components/ServicesPage';
import ReportIncidentPage from '@/app/components/ReportIncidentPage';
import IncidentTypesPage from '@/app/components/IncidentTypesPage';
import ProceduresPage from '@/app/components/ProceduresPage';
import SecurityGuidePage from '@/app/components/SecurityGuidePage';
import AdvisoryPage from '@/app/components/AdvisoryPage';
import FAQPage from '@/app/components/FAQPage';
import ContactPage from '@/app/components/ContactPage';
import PrivacyPage from '@/app/components/PrivacyPage';
import CaseStudyPage from '@/app/components/CaseStudyPage';
import CaseStudyFEBPage from '@/app/components/CaseStudyFEBPage';
import CaseStudyUNISSULAPage from '@/app/components/CaseStudyUNISSULAPage';


type PageType = 'home' | 'about' | 'services' | 'report' | 'incident-types' | 'procedures' | 'security-guide' | 'advisory' | 'faq' | 'contact' | 'privacy' | 'case-study' | 'case-study-feb' | 'case-study-unissula';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home' as PageType, label: 'Home' },
    { id: 'about' as PageType, label: 'Documentation' },
    { id: 'advisory' as PageType, label: 'Advisory' },
    { id: 'services' as PageType, label: 'Governance' },
    { id: 'report' as PageType, label: 'Report Incident', highlight: true },
    { id: 'contact' as PageType, label: 'Contact' },
  ];

  // Additional menu items for mobile only
  const additionalMenuItems = [
    { id: 'incident-types' as PageType, label: 'Incident Types' },
    { id: 'procedures' as PageType, label: 'Procedures' },
    { id: 'security-guide' as PageType, label: 'Security Guide' },
    { id: 'case-study' as PageType, label: 'Case Study: Farmasi' },
    { id: 'case-study-feb' as PageType, label: 'Case Study: FEB' },
    { id: 'case-study-unissula' as PageType, label: 'Case Study: UNISSULA' },
    { id: 'faq' as PageType, label: 'FAQ' },
    { id: 'privacy' as PageType, label: 'Privacy Policy' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'report':
        return <ReportIncidentPage />;
      case 'incident-types':
        return <IncidentTypesPage />;
      case 'procedures':
        return <ProceduresPage />;
      case 'security-guide':
        return <SecurityGuidePage />;
      case 'advisory':
        return <AdvisoryPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'case-study':
        return <CaseStudyPage />;
      case 'case-study-feb':
        return <CaseStudyFEBPage />;
      case 'case-study-unissula':
        return <CaseStudyUNISSULAPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Editorial Minimal Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            {/* Logo Section - Editorial Style */}
            <div className="flex items-center gap-6">
              {/* Text Section */}
              <div className="flex flex-col">
                <span
                  className="font-serif text-lg tracking-tight text-foreground cursor-pointer hover:opacity-70 transition-opacity"
                  style={{ fontFamily: 'var(--font-serif)' }}
                  onClick={() => setCurrentPage('home')}
                >
                  Coastal Delta Response
                </span>
                <span className="text-xs text-muted-foreground">
                  Professional Cybersecurity Consultation
                </span>
              </div>
            </div>

            {/* Desktop Navigation - Text Only */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-sm transition-colors ${item.highlight
                    ? 'text-foreground underline decoration-2 underline-offset-4'
                    : currentPage === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                    }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pt-6 pb-2 space-y-3 border-t border-border mt-6">
              {[...menuItems, ...additionalMenuItems].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-sm transition-colors ${item.highlight
                    ? 'text-foreground underline'
                    : currentPage === item.id
                      ? 'text-foreground'
                      : 'text-muted-foreground'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Editorial Footer */}
      <footer className="border-t border-border bg-card mt-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-lg mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Coastal Delta Response
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                Professional Cybersecurity Consultation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm mb-3 text-foreground">Contact</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Contact info not available</li>
                  <li>24/7 Emergency Line</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm mb-3 text-foreground">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <button onClick={() => setCurrentPage('report')} className="text-muted-foreground hover:text-foreground transition-colors">
                      Report Incident
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage('privacy')} className="text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Coastal Delta Response. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}