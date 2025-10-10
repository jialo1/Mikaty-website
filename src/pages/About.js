import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../translations";

export default function About({ lang = 'fr' }) {
  const t = useTranslation(lang);
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    // Si la carte est déjà ouverte, on la ferme
    if (expandedCard === cardId) {
      setExpandedCard(null);
    } else {
      // Sinon on l'ouvre
      setExpandedCard(cardId);
    }
  };
  return (
    <div className="bg-gradient-to-r from-[#2D0036] to-[#3c0470] dark:from-[#2D0036] dark:to-[#3c0470] from-gray-50 to-purple-50 text-purple-100 dark:text-purple-100 text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#563491] dark:text-white mb-6">
              {t.about.heroTitle}
            </h1>
            <p className="text-lg text-[#563491]/80 dark:text-white/90 max-w-3xl mx-auto">
              {t.about.heroDescription} 
              Notre mission : rendre les services financiers accessibles, simples et sécurisés pour tous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid de navigation */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-6 items-start">
            {/* À Propos de Nous */}
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
              <div 
                className="p-6 flex items-center justify-between hover:bg-[#563491] dark:hover:bg-white/20 hover:text-white dark:hover:text-white transition-colors cursor-pointer [&:hover>div>span]:text-white [&:hover>div>svg]:stroke-white"
                onClick={() => toggleCard('about')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="#a894ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold">{t.about.cards.aboutUs.title}</span>
                </div>
                        <motion.div
                          animate={{ rotate: expandedCard === 'about' ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-bold text-gray-700 dark:text-white"
                        >
                          {expandedCard === 'about' ? '−' : '+'}
                        </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === 'about' ? 'auto' : 0,
                  opacity: expandedCard === 'about' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                    Chez Mikaty, nous construisons l'avenir de l'accès financier en Afrique. Notre application tout-en-un permet aux particuliers et aux entreprises d'envoyer, de dépenser et de gérer leur argent facilement — de manière sécurisée, instantanée et abordable.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Carrières */}
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
              <div 
                className="p-6 flex items-center justify-between hover:bg-[#563491] dark:hover:bg-white/20 hover:text-white dark:hover:text-white transition-colors cursor-pointer [&:hover>div>span]:text-white [&:hover>div>svg]:stroke-white"
                onClick={() => toggleCard('careers')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="#a894ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold">{t.about.cards.careers.title}</span>
                </div>
                        <motion.div
                          animate={{ rotate: expandedCard === 'careers' ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-bold text-gray-700 dark:text-white"
                        >
                          {expandedCard === 'careers' ? '−' : '+'}
                        </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === 'careers' ? 'auto' : 0,
                  opacity: expandedCard === 'careers' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed mb-4">
                    Nous avons pour mission de transformer la finance — et nous recrutons ! Rejoignez Mikaty pour façonner l'économie numérique de demain tout en développant votre carrière dans un environnement dynamique et axé sur un objectif.
                  </p>
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                    Consultez notre page{' '}
                    <a 
                      href="https://www.linkedin.com/company/mikatyofficial/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#563491] dark:text-white underline hover:text-[#4a2c7a] dark:hover:text-white/80 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Actualités et Médias */}
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
              <div 
                className="p-6 flex items-center justify-between hover:bg-[#563491] dark:hover:bg-white/20 hover:text-white dark:hover:text-white transition-colors cursor-pointer [&:hover>div>span]:text-white [&:hover>div>svg]:stroke-white"
                onClick={() => toggleCard('news')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="#a894ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold">{t.about.cards.news.title}</span>
                </div>
                        <motion.div
                          animate={{ rotate: expandedCard === 'news' ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-bold text-gray-700 dark:text-white"
                        >
                          {expandedCard === 'news' ? '−' : '+'}
                        </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === 'news' ? 'auto' : 0,
                  opacity: expandedCard === 'news' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                    Restez informé des dernières étapes clés, des lancements de produits et de la couverture médiatique de Mikaty alors que nous stimulons l'inclusion financière dans la région de l'UEMOA et au-delà.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Travailler chez Mikaty */}
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
              <div 
                className="p-6 flex items-center justify-between hover:bg-[#563491] dark:hover:bg-white/20 hover:text-white dark:hover:text-white transition-colors cursor-pointer [&:hover>div>span]:text-white [&:hover>div>svg]:stroke-white"
                onClick={() => toggleCard('work')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="#a894ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold">{t.about.cards.workingAt.title}</span>
                </div>
                        <motion.div
                          animate={{ rotate: expandedCard === 'work' ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-bold text-gray-700 dark:text-white"
                        >
                          {expandedCard === 'work' ? '−' : '+'}
                        </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === 'work' ? 'auto' : 0,
                  opacity: expandedCard === 'work' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                    Chez Mikaty, l'innovation rencontre l'impact. Nous valorisons l'agilité, l'appropriation et l'inclusivité. Chaque membre de l'équipe joue un rôle essentiel dans la création de produits qui font une réelle différence dans la vie des gens.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* ESG */}
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
              <div 
                className="p-6 flex items-center justify-between hover:bg-[#563491] dark:hover:bg-white/20 hover:text-white dark:hover:text-white transition-colors cursor-pointer [&:hover>div>span]:text-white [&:hover>div>svg]:stroke-white"
                onClick={() => toggleCard('esg')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="#a894ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold">ESG</span>
                </div>
                        <motion.div
                          animate={{ rotate: expandedCard === 'esg' ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-bold text-gray-700 dark:text-white"
                        >
                          {expandedCard === 'esg' ? '−' : '+'}
                        </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === 'esg' ? 'auto' : 0,
                  opacity: expandedCard === 'esg' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                    Chez Mikaty, nous construisons l'avenir de l'accès financier en Afrique. Notre application tout-en-un permet aux particuliers et aux entreprises d'envoyer, de dépenser et de gérer leur argent facilement — de manière sécurisée, instantanée et abordable.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Culture */}
            <div className="bg-white dark:bg-white/5 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/10">
              <div 
                className="p-6 flex items-center justify-between hover:bg-[#563491] dark:hover:bg-white/20 hover:text-white dark:hover:text-white transition-colors cursor-pointer [&:hover>div>span]:text-white [&:hover>div>svg]:stroke-white"
                onClick={() => toggleCard('culture')}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center mr-4">
                    <svg className="w-8 h-8" fill="none" stroke="#a894ff" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-900 dark:text-white font-bold">Culture</span>
                </div>
                        <motion.div
                          animate={{ rotate: expandedCard === 'culture' ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl font-bold text-gray-700 dark:text-white"
                        >
                          {expandedCard === 'culture' ? '−' : '+'}
                        </motion.div>
              </div>
              <motion.div
                initial={false}
                animate={{ 
                  height: expandedCard === 'culture' ? 'auto' : 0,
                  opacity: expandedCard === 'culture' ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-600 dark:text-white/90 text-sm leading-relaxed">
                    Chez Mikaty, nous construisons l'avenir de l'accès financier en Afrique. Notre application tout-en-un permet aux particuliers et aux entreprises d'envoyer, de dépenser et de gérer leur argent facilement — de manière sécurisée, instantanée et abordable.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-miikaty-dark text-white pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & baseline + app download */}
          <div className="col-span-1 flex flex-col items-center md:items-start gap-4">
            <img src="/images/logomauve.svg" alt="MIikaty" className="h-8 mb-2" />
            <span className="text-white/80 text-sm mb-4">La finance, simple et accessible.</span>
            <div className="flex gap-2 mt-2">
              <a href="https://play.google.com/store/apps/details?id=ton.app" target="_blank" rel="noopener noreferrer">
                <img src="/images/google-play-badge.svg" alt="Google Play" className="h-10" />
              </a>
              <a href="https://apps.apple.com/app/idtonappid" target="_blank" rel="noopener noreferrer">
                <img src="/images/app-store-badge.svg" alt="App Store" className="h-10" />
              </a>
            </div>
            <div className="mt-2 text-xs text-white/40">MIikaty SASU<br/>12 rue de la Fintech, 75000 Paris<br/>SIRET : 123 456 789 00012</div>
          </div>
          {/* À propos */}
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">À propos</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/about" className="hover:text-miikaty transition">Qui sommes-nous</a></li>
              <li><a href="/about" className="hover:text-miikaty transition">Notre mission</a></li>
              <li><a href="/carrieres" className="hover:text-miikaty transition">Carrières</a></li>
            </ul>
          </div>
          {/* Produits */}
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">Produits</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/services" className="hover:text-miikaty transition">Application mobile</a></li>
              <li><a href="/tarifs" className="hover:text-miikaty transition">Tarifs</a></li>
              <li><a href="/securite" className="hover:text-miikaty transition">Sécurité</a></li>
              <li><a href="/faq" className="hover:text-miikaty transition">FAQ</a></li>
            </ul>
          </div>
          {/* Support */}
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">Support</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/contact" className="hover:text-miikaty transition">Contact</a></li>
              <li><a href="/aide" className="hover:text-miikaty transition">Centre d'aide</a></li>
              <li><a href="/support" className="hover:text-miikaty transition">Assistance 24/7</a></li>
            </ul>
          </div>
          {/* Légal & réseaux sociaux */}
          <div className="col-span-1 flex flex-col gap-4 items-center md:items-start">
            <div>
              <div className="font-bold mb-4 text-miikaty">Légal</div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/mentions-legales" className="hover:text-miikaty transition">Mentions légales</a></li>
                <li><a href="/cgu" className="hover:text-miikaty transition">Conditions Générales d'Utilisation</a></li>
                <li><a href="/termes-et-conditions" className="hover:text-miikaty transition">Termes et Conditions</a></li>
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.09 4.07 7.38 1.64 4.9c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.94 3.62-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.12 2.91 3.99 2.94A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.239 3.417 1.297C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.297-3.417-.967-.967-2.14-1.239-3.417-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.645 3.5 12 3.5 12 3.5s-7.645 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 7.927 0 12 0 12s0 4.073.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.355 20.5 12 20.5 12 20.5s7.645 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 16.073 24 12 24 12s0-4.073-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} MIikaty. Tous droits réservés. <a href="/mentions-legales" className="underline hover:text-miikaty">Mentions légales</a>
        </div>
      </footer>
    </div>
  );
} 