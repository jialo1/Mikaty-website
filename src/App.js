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

// Composant Navbar qui adapte le fond selon la page
function Navbar({ isScrolled, isAfterHero, isDark, setIsDark, LanguageSwitch }) {
  const location = useLocation();
  const pagePath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

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
        ${pagePath === '/services' || pagePath === '/entreprise' || pagePath === '/micard'
          ? 'bg-[#563491] shadow-lg border-b-0'
          : (isScrolled
              ? (isAfterHero
                  ? 'bg-black/70 backdrop-blur-sm shadow-lg border-b border-white/10'
                  : 'bg-black/20 backdrop-blur-sm shadow-md border-b border-white/5')
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
          <li><Link to="/" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Accueil</Link></li>
          <li><Link to="/home2" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Accueil 2</Link></li>
          <li><Link to="/services" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Services</Link></li>
          <li><Link to="/micard" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>MiCard</Link></li>
          
          {/* Menu déroulant Fonctionnalités */}
          <li className="relative group">
            <button 
              onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
              onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
              className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full flex items-center ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}
            >
              Fonctionnalités
              <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
              {isFeaturesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
                  onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-[600px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 z-50"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {/* Bloc 1 */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Paiements</h3>
                      <ul className="space-y-3">
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Paiement de factures
                        </Link></li>
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Transfert d'argent
                        </Link></li>
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Recharge mobile
                        </Link></li>
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Achat de crédit
                        </Link></li>
                      </ul>
                    </div>
                    
                    {/* Bloc 2 */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Services Financiers</h3>
                      <ul className="space-y-3">
                        <li><Link to="/micard" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Carte virtuelle MiCard
                        </Link></li>
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Épargne et investissement
                        </Link></li>
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Prêts et crédits
                        </Link></li>
                        <li><Link to="/services" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-miikaty dark:hover:text-miikaty transition-colors">
                          <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                          Assurance
                        </Link></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
          
          <li><Link to="/entreprise" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Entreprise</Link></li>
          <li><Link to="/contact" className={`relative font-medium text-shadow-md after:content-[''] after:block after:w-0 after:h-0.5 after:bg-miikaty after:transition-all after:duration-300 hover:after:w-full ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>Contact</Link></li>
          <li>
            <Link to="/contact" className={`ml-4 bg-gray-900 border border-gray-400 px-5 py-2 rounded-xl font-semibold text-base hover:bg-gray-800 hover:border-miikaty transition ${window.location.pathname === '/hero-section-2' ? 'text-miikaty' : 'text-white'}`}>
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
                <Link to="/" className="block text-white font-medium py-2 hover:text-miikaty transition-colors">Accueil</Link>
                <Link to="/home2" className="block text-white font-medium py-2 hover:text-miikaty transition-colors">Accueil 2</Link>
                <Link to="/services" className="block text-white font-medium py-2 hover:text-miikaty transition-colors">Services</Link>
                <Link to="/micard" className="block text-white font-medium py-2 hover:text-miikaty transition-colors">MiCard</Link>
                <Link to="/entreprise" className="block text-white font-medium py-2 hover:text-miikaty transition-colors">Entreprise</Link>
                <Link to="/contact" className="block text-white font-medium py-2 hover:text-miikaty transition-colors">Contact</Link>
                
                {/* Fonctionnalités mobile */}
                <div className="border-t border-white/10 pt-3">
                  <div className="text-white font-medium py-2 mb-2">Fonctionnalités</div>
                  <div className="pl-4 space-y-2">
                    <Link to="/services" className="block text-gray-300 text-sm py-1 hover:text-miikaty transition-colors">Paiement de factures</Link>
                    <Link to="/services" className="block text-gray-300 text-sm py-1 hover:text-miikaty transition-colors">Transfert d'argent</Link>
                    <Link to="/services" className="block text-gray-300 text-sm py-1 hover:text-miikaty transition-colors">Recharge mobile</Link>
                    <Link to="/micard" className="block text-gray-300 text-sm py-1 hover:text-miikaty transition-colors">Carte virtuelle MiCard</Link>
                    <Link to="/services" className="block text-gray-300 text-sm py-1 hover:text-miikaty transition-colors">Épargne et investissement</Link>
                  </div>
                </div>
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setIsAfterHero(window.scrollY > 400); // 400px = hauteur approximative du hero
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Router>
      <div className="min-h-screen flex flex-col text-miikaty-dark">
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
            <Route path="/securite" element={<Home />} />
            <Route path="/hero-section-2" element={<HeroSection2 />} />
          </Routes>
        </motion.main>
        <footer className="bg-miikaty-dark text-miikaty-light text-center py-4 text-sm">© 2024 MIikaty. Tous droits réservés.</footer>
      </div>
    </Router>
  );
}

export default App;
