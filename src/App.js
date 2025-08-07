import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HeroSection2 from "./pages/HeroSection2";
import Entreprise from "./pages/Entreprise";
import MiCard from "./pages/MiCard";
import FAQ from "./pages/FAQ";
import ChatAssistant from "./components/ChatAssistant";
import ErrorBoundary from "./components/ErrorBoundary";

// Composant Navbar qui adapte le fond selon la page
function Navbar({ isScrolled, isAfterHero, isDark, setIsDark, LanguageSwitch }) {
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
        ${pagePath === '/entreprise' || pagePath === '/micard' || pagePath === '/contact' || pagePath === '/faq'
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
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-miikaty flex items-center">
          <img src="/images/logomauve.svg" alt="Logo Mikaty" className="h-8 max-h-10 w-auto max-w-[140px] object-contain" style={{background: 'none'}} />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-6 items-center justify-center w-full">
          <li><Link to="/" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Accueil</Link></li>
          <li><Link to="/home2" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/home2' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Accueil 2</Link></li>
          <li><Link to="/services" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/services' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Services</Link></li>
          <li><Link to="/micard" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/micard' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>MiCard</Link></li>
          
          <li><Link to="/entreprise" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/entreprise' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Entreprise</Link></li>
          <li><Link to="/contact" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/contact' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Contact</Link></li>
          <li><Link to="/faq" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${pagePath === '/faq' ? 'after:w-full' : ''} ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>FAQ</Link></li>
          <li>
            <Link to="/contact" className={`ml-4 bg-gray-900 border border-gray-400 px-5 py-2 rounded-xl font-semibold text-base hover:bg-gray-800 hover:border-miikaty transition ${pagePath === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>
              S'inscrire
            </Link>
          </li>
        </ul>

        {/* Contrôles de droite (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4 ml-6">
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

        {/* Bouton hamburger mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu mobile"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
                <Link to="/" className={`block font-medium py-2 transition-colors ${pagePath === '/' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>Accueil</Link>
                <Link to="/home2" className={`block font-medium py-2 transition-colors ${pagePath === '/home2' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>Accueil 2</Link>
                <Link to="/services" className={`block font-medium py-2 transition-colors ${pagePath === '/services' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>Services</Link>
                <Link to="/micard" className={`block font-medium py-2 transition-colors ${pagePath === '/micard' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>MiCard</Link>
                <Link to="/entreprise" className={`block font-medium py-2 transition-colors ${pagePath === '/entreprise' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>Entreprise</Link>
                <Link to="/contact" className={`block font-medium py-2 transition-colors ${pagePath === '/contact' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>Contact</Link>
                <Link to="/faq" className={`block font-medium py-2 transition-colors ${pagePath === '/faq' ? 'text-miikaty' : 'text-white hover:text-miikaty'}`}>FAQ</Link>
                

              </div>
              
              {/* Bouton S'inscrire */}
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="block w-full bg-miikaty text-white text-center py-3 px-4 rounded-xl font-semibold hover:bg-miikaty-dark transition-colors"
                >
                  S'inscrire
                </Link>
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
function LanguageSwitch() {
  const [lang, setLang] = useState("fr");
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
      <Router>
        <div className="min-h-screen flex flex-col text-miikaty-dark">
          {!isLoading && (
            <>
              <Navbar isScrolled={isScrolled} isAfterHero={isAfterHero} isDark={isDark} setIsDark={setIsDark} LanguageSwitch={LanguageSwitch} />
              <motion.main
                className="flex-1 bg-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home2" element={<Home2 />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/entreprise" element={<Entreprise />} />
                  <Route path="/micard" element={<MiCard />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/securite" element={<Home />} />
                  <Route path="/hero-section-2" element={<HeroSection2 />} />
                </Routes>
              </motion.main>
              <ChatAssistant />
            </>
          )}
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
