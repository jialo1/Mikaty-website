import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import MiCard from "./pages/MiCard";
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./pages/TermsAndConditions";
import CGU from "./pages/CGU";
import LegalNotice from "./pages/LegalNotice";
import Careers from "./pages/Careers";
import ChatAssistant from "./components/ChatAssistant";
import ErrorBoundary from "./components/ErrorBoundary";
import { useTranslation } from "./translations";

// Composant Navbar qui adapte le fond selon la page
function Navbar({ isScrolled, isAfterHero, isDark, setIsDark, LanguageSwitch, lang }) {
  const t = useTranslation(lang);
  const location = useLocation();
  const pagePath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fermer le menu mobile quand on change de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                        ${pagePath === '/about' || pagePath === '/micard' || pagePath === '/contact' || pagePath === '/faq' || pagePath === '/carrieres' || pagePath === '/mentions-legales' || pagePath === '/cgu' || pagePath === '/termes-et-conditions'
          ? (isScrolled 
              ? 'bg-[#563491]/90 backdrop-blur-md shadow-lg border-b border-white/10' 
              : 'bg-[#563491] shadow-lg border-b-0')
          : (isScrolled
              ? (isAfterHero
                  ? 'bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10'
                  : 'bg-black/30 backdrop-blur-md shadow-md border-b border-white/5')
              : 'bg-transparent shadow-none border-b-0')}
      `}
    >
      <nav className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-miikaty flex items-center flex-shrink-0">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
            <img src="/images/logomauve.svg" alt="Logo Mikaty" className="h-6 max-h-8 w-auto max-w-[120px] object-contain" style={{background: 'none'}} />
          </Link>
        </div>

        {/* Menu Desktop - Centré */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-6 items-center">
            <li><Link to="/" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/' ? 'after:w-full' : ''} text-white`}>{t.nav.home}</Link></li>
            <li><Link to="/services" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/services' ? 'after:w-full' : ''} text-white`}>{t.nav.services}</Link></li>
            <li><Link to="/micard" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/micard' ? 'after:w-full' : ''} text-white`}>{t.nav.micard}</Link></li>
            
                            <li><Link to="/about" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/about' ? 'after:w-full' : ''} text-white`}>{t.nav.about}</Link></li>
            <li><Link to="/contact" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/contact' ? 'after:w-full' : ''} text-white`}>{t.nav.contact}</Link></li>
            <li><Link to="/carrieres" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/carrieres' ? 'after:w-full' : ''} text-white`}>{t.nav.careers}</Link></li>
            <li><Link to="/faq" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/faq' ? 'after:w-full' : ''} text-white`}>{t.nav.faq}</Link></li>
          </ul>
        </div>

        {/* Contrôles de droite (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 ml-6 flex-shrink-0">
          <LanguageSwitch />
          {/* Bouton mode sombre */}
          <button
            className={`flex items-center justify-center w-6 h-6 rounded-md border border-gray-500 focus:outline-none transition duration-200 ${isDark ? 'bg-miikaty-dark text-white' : 'bg-white text-black'} hover:bg-gray-800 hover:border-miikaty`}
            onClick={() => setIsDark(d => !d)}
            aria-label="Basculer le mode sombre"
          >
            {isDark ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
            )}
          </button>
        </div>

        {/* Bouton hamburger mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu mobile"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-black/95 backdrop-blur-sm border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {/* Liens de navigation */}
              <div className="space-y-3">
                <Link to="/" className={`block font-medium py-2 transition-colors ${pagePath === '/' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.home}</Link>
                <Link to="/services" className={`block font-medium py-2 transition-colors ${pagePath === '/services' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.services}</Link>
                <Link to="/micard" className={`block font-medium py-2 transition-colors ${pagePath === '/micard' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.micard}</Link>
                <Link to="/about" className={`block font-medium py-2 transition-colors ${pagePath === '/about' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.about}</Link>
                <Link to="/contact" className={`block font-medium py-2 transition-colors ${pagePath === '/contact' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.contact}</Link>
                <Link to="/carrieres" className={`block font-medium py-2 transition-colors ${pagePath === '/carrieres' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.careers}</Link>
                <Link to="/faq" className={`block font-medium py-2 transition-colors ${pagePath === '/faq' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>{t.nav.faq}</Link>
                

              </div>
              

              {/* Contrôles mobile */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <LanguageSwitch />
                {/* Bouton mode sombre */}
                <button
                  className={`flex items-center justify-center w-8 h-8 rounded-lg border border-gray-500 focus:outline-none transition duration-200 ${isDark ? 'bg-miikaty-dark text-white' : 'bg-white text-black'} hover:bg-gray-800 hover:border-miikaty`}
                  onClick={() => setIsDark(d => !d)}
                  aria-label="Basculer le mode sombre"
                >
                  {isDark ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Composant LanguageSwitch
function LanguageSwitch({ lang, setLang }) {
  return (
    <div className="flex items-center">
      <span className={`font-bold text-base mr-1 transition-colors duration-200 ${lang === 'fr' ? 'text-white' : 'text-gray-400'}`}>FR</span>
      <button
        className="relative w-14 h-7 bg-gray-100 rounded-full flex items-center shadow-inner focus:outline-none transition"
        onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
        aria-label="Changer la langue"
      >
        <span
          className={`absolute top-0.5 left-0.5 transition-all duration-300 ${lang === 'en' ? 'translate-x-7' : ''}`}
        >
          <img
            src={lang === 'fr' ? '/images/france-flag.svg' : '/images/uk-flag.svg'}
            alt={lang === 'fr' ? 'Français' : 'English'}
            className="w-6 h-6 rounded-full border border-gray-300 shadow"
          />
        </span>
      </button>
      <span className={`font-bold text-base ml-1 transition-colors duration-200 ${lang === 'en' ? 'text-white' : 'text-gray-400'}`}>EN</span>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAfterHero, setIsAfterHero] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'fr';
    }
    return 'fr';
  });
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }, [lang]);

  useEffect(() => {
    // Simuler un temps de chargement pour s'assurer que tout est prêt
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsAfterHero(window.scrollY > 400); // 400px = hauteur approximative du hero
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  return (
    <ErrorBoundary>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="min-h-screen flex flex-col text-miikaty-dark">
          {!isLoading && (
            <>
              <Navbar isScrolled={isScrolled} isAfterHero={isAfterHero} isDark={isDark} setIsDark={setIsDark} LanguageSwitch={() => <LanguageSwitch lang={lang} setLang={setLang} />} lang={lang} />
              <motion.main
                className="flex-1 bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              >
                <Routes>
                  <Route path="/" element={<Home lang={lang} />} />
                  <Route path="/about" element={<About lang={lang} />} />
                  <Route path="/services" element={<Services lang={lang} />} />
                  <Route path="/contact" element={<Contact lang={lang} />} />
                  <Route path="/micard" element={<MiCard lang={lang} />} />
                  <Route path="/faq" element={<FAQ lang={lang} />} />
                  <Route path="/termes-et-conditions" element={<TermsAndConditions lang={lang} />} />
                  <Route path="/cgu" element={<CGU lang={lang} />} />
                  <Route path="/mentions-legales" element={<LegalNotice lang={lang} />} />
                  <Route path="/carrieres" element={<Careers lang={lang} />} />
                  <Route path="/securite" element={<Home lang={lang} />} />
          
                </Routes>
              </motion.main>
              <ChatAssistant lang={lang} />
            </>
          )}
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
