import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
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

interface MenuItem {
  id?: PageType;
  label: string;
  highlight?: boolean;
  submenu?: { id: PageType; label: string }[];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Main navigation structure with dropdowns
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    {
      label: 'Services',
      submenu: [
        { id: 'advisory', label: 'Advisory' },
        { id: 'services', label: 'Governance' },
        { id: 'incident-types', label: 'Incident Types' },
        { id: 'procedures', label: 'Procedures' },
        { id: 'security-guide', label: 'Security Guide' },
      ]
    },
    { id: 'about', label: 'Documentation' },
    {
      label: 'Case Studies',
      submenu: [
        { id: 'case-study', label: 'Farmasi UNISSULA' },
        { id: 'case-study-feb', label: 'FEB UNISSULA' },
        { id: 'case-study-unissula', label: 'UNISSULA Main' },
      ]
    },
    { id: 'report', label: 'Report Incident', highlight: true },
    {
      label: 'About',
      submenu: [
        { id: 'faq', label: 'FAQ' },
        { id: 'privacy', label: 'Privacy Policy' },
      ]
    },
    { id: 'contact', label: 'Contact' },
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

            {/* Desktop Navigation with Dropdowns */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                        style={{ fontFamily: 'var(--font-sans)' }}
                      >
                        {item.label}
                        <ChevronDown className="h-3 w-3" />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                setCurrentPage(subItem.id);
                                setOpenDropdown(null);
                              }}
                              className={`block w-full text-left px-4 py-2 text-sm transition-colors ${currentPage === subItem.id
                                  ? 'text-foreground bg-muted/50'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                                }`}
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.id) {
                          setCurrentPage(item.id);
                        }
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
                  )}
                </div>
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

          {/* Mobile Navigation with Accordion */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pt-6 pb-2 space-y-2 border-t border-border mt-6">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-left text-sm text-muted-foreground py-2"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.submenu.map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                setCurrentPage(subItem.id);
                                setMobileMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                              className={`block w-full text-left text-sm py-1 transition-colors ${currentPage === subItem.id
                                  ? 'text-foreground'
                                  : 'text-muted-foreground'
                                }`}
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.id) {
                          setCurrentPage(item.id);
                        }
                        setMobileMenuOpen(false);
                      }}
                      className={`block w-full text-left text-sm py-2 transition-colors ${item.highlight
                          ? 'text-foreground underline'
                          : currentPage === item.id
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
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