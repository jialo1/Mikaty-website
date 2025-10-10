import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "../translations";





export default function Home({ lang = 'fr' }) {
  const t = useTranslation(lang);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  const toggleDownloadPopup = () => {
    setShowDownloadPopup(!showDownloadPopup);
  };

  return (
    <>
      {/* Hero section */}
      <section className="pt-8 pb-20 px-0 relative overflow-hidden font-sans min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_60%_40%,#7C3AED_0%,#1a1a1a_100%)] dark:bg-[radial-gradient(ellipse_at_60%_40%,#1a1a1a_0%,#2d1a4d_100%)]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-10 flex-1">
          <div className="md:w-1/2 flex flex-col items-start text-left gap-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-0 leading-tight" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              {t.home.heroTitle}
            </h1>
            <p className="text-sm text-white/90 mb-0 -mt-4" style={{fontFamily:'Inter, sans-serif'}}>{t.home.heroSubtitle}</p>
          </div>
          <div className="md:w-3/5 flex justify-end items-end h-full mt-0 md:mt-0 relative">
            {/* Carte du Sénégal en fond, derrière l'image */}
            <motion.img
              src="/images/senegal-outline.png"
              alt="Carte du Sénégal"
              className="absolute inset-0 w-[100%] h-[100%] object-contain opacity-100 pointer-events-none select-none z-0"
              style={{mixBlendMode: 'lighten'}}
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/images/testhero.png"
              alt="Visuel Hero Mikaty"
              className="w-2/5 h-auto object-cover object-bottom rounded-2xl m-0 p-0 mr-0 pr-0 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            />
          </div>
        </div>
        
        {/* Section de téléchargement en bas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-row items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-3 w-auto max-w-xs border border-white/40 hover:shadow-xl transition-all duration-300 group">
              <div className="relative flex-shrink-0">
                <img src="/images/QR_code.png" alt="QR code télécharger l'app" className="w-20 h-20 rounded-xl border-2 border-miikaty bg-white shadow-md group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute -bottom-2 -right-2 bg-miikaty text-white rounded-full p-1 shadow-lg flex items-center justify-center">
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v12m0 0l-4-4m4 4l4-4m-4 4V4' />
                  </svg>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-miikaty text-base">{t.home.scanToDownload}</span>
                <span className="text-xs text-gray-700 mt-1">{t.home.scanDesc}</span>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <motion.a
                href="https://play.google.com/store/apps/details?id=ton.app"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                <img src="/images/google-play-badge.svg" alt="Disponible sur Google Play" className="h-10" />
              </motion.a>
              <motion.a
                href="https://apps.apple.com/app/idtonappid"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                <img src="/images/app-store-badge.svg" alt="Disponible sur l'App Store" className="h-10" />
              </motion.a>
            </div>
          </div>
        </div>
        
      </section>








      {/* Section Transferts Instantanés */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Section image à gauche (50%) */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 relative overflow-hidden">
            </div>
              </div>
          
            {/* Section texte à droite (50%) */}
            <div className="lg:w-1/2 bg-[#fafafa] dark:bg-gray-800 p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-6 leading-tight">
                {t.home.instantTransfers.title} : {t.home.instantTransfers.subtitle}
            </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.home.instantTransfers.description}
              </p>
              <button onClick={toggleDownloadPopup} className="inline-flex items-center text-gray-900 dark:text-white hover:text-[#563491] font-semibold text-lg transition-colors duration-300 cursor-pointer">
                {t.home.instantTransfers.cta} →
            </button>
            </div>
          </div>
        </div>
      </section>



      {/* Section Expérience de Carte Numérique */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Section texte à gauche (50%) */}
            <div className="lg:w-1/2 bg-[#fafafa] dark:bg-gray-800 p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-6 leading-tight">
                {t.home.digitalCard.title} : {t.home.digitalCard.subtitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.home.digitalCard.description}
              </p>
              <a href="/micard" className="inline-flex items-center text-gray-900 dark:text-white hover:text-[#563491] font-semibold text-lg transition-colors duration-300">
                {t.home.digitalCard.cta} →
              </a>
          </div>
          
            {/* Section image à droite (50%) */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-emerald-50 to-green-100 dark:from-emerald-900/20 dark:to-green-900/20 relative overflow-hidden">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services Bancaires Sécurisés */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Section image à gauche (50%) */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 relative overflow-hidden">
              </div>
          </div>
          
            {/* Section texte à droite (50%) */}
            <div className="lg:w-1/2 bg-[#fafafa] dark:bg-gray-800 p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-6 leading-tight">
                {t.home.secureBanking.title} : {t.home.secureBanking.subtitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.home.secureBanking.description}
              </p>
              <a href="/services#securite" className="inline-flex items-center text-gray-900 dark:text-white hover:text-[#563491] font-semibold text-lg transition-colors duration-300">
                {t.home.secureBanking.cta} →
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Section Coûts Compétitifs */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Section texte à gauche (50%) */}
            <div className="lg:w-1/2 bg-[#fafafa] dark:bg-gray-800 p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-6 leading-tight">
                {t.home.competitiveCosts.title} : {t.home.competitiveCosts.subtitle}
          </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.home.competitiveCosts.description}
          </p>
              <a href="/services" className="inline-flex items-center text-gray-900 dark:text-white hover:text-[#563491] font-semibold text-lg transition-colors duration-300">
                {t.home.competitiveCosts.cta} →
              </a>
              </div>

            {/* Section image à droite (50%) */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 relative overflow-hidden">
              </div>
              </div>
              </div>
              </div>
      </section>

      {/* Section Catalogue Complet de Services */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto bg-white dark:bg-gray-900 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Section image à gauche (50%) */}
            <div className="lg:w-1/2 relative">
              <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 relative overflow-hidden">
              </div>
              </div>
            
            {/* Section texte à droite (50%) */}
            <div className="lg:w-1/2 bg-[#fafafa] dark:bg-gray-800 p-12 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-6 leading-tight">
                {t.home.completeCatalog.title} : {t.home.completeCatalog.subtitle}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t.home.completeCatalog.description}
              </p>
              <a href="/services" className="inline-flex items-center text-gray-900 dark:text-white hover:text-[#563491] font-semibold text-lg transition-colors duration-300">
                {t.home.completeCatalog.cta} →
              </a>
              </div>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nos Partenaires</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des collaborations stratégiques pour un écosystème financier plus fort
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {[
              { name: "Visa", logo: "/images/Visa.svg", size: "h-8" },
              { name: "Verestro", logo: "/images/Verestro.svg" },
              { name: "Ecobank", logo: "/images/ecobank.png" },
              { name: "Lam", logo: "/images/lam.png", size: "h-12" },
              { name: "Bdk", logo: "/images/bdk.png" },
              { name: "Orange Money", logo: "/images/Orange-Money.png" },
              { name: "Wave", logo: "/images/Wave.png" },
              { name: "Paymentology", logo: "/images/Paymentology.png", size: "h-8" }
            ].map((partenaire, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-3 flex items-center justify-center"
              >
                <img 
                  src={partenaire.logo} 
                  alt={partenaire.name} 
                  className={`${partenaire.size || "h-10"} max-w-full object-contain`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* Appel à l'action mobile */}
      <section className="py-16 text-center bg-[linear-gradient(90deg,#fefefe_0%,#f8f7ff_50%,#f8f7ff_100%)] dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-[#1a1a1a]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#563491] to-black dark:from-white dark:to-white bg-clip-text text-transparent">
            Essayez MIikaty dès maintenant
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Rejoignez la révolution du paiement mobile. Gratuit, sans engagement, pour tous.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
            <motion.a
              href="https://play.google.com/store/apps/details?id=ton.app"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <img src="/images/google-play-badge.svg" alt="Disponible sur Google Play" className="h-12" />
            </motion.a>
            <motion.a
              href="https://apps.apple.com/app/idtonappid"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
            >
              <img src="/images/app-store-badge.svg" alt="Disponible sur l'App Store" className="h-12" />
            </motion.a>
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
            <div className="font-bold mb-4 text-miikaty">{t.footer.about}</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/about" className="hover:text-miikaty transition">{t.footer.whoWeAre}</a></li>
              <li><a href="/about" className="hover:text-miikaty transition">{t.footer.ourMission}</a></li>
              <li><a href="/careers" className="hover:text-miikaty transition">{t.footer.careers}</a></li>
            </ul>
          </div>
          {/* Produits */}
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">{t.footer.products}</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/services" className="hover:text-miikaty transition">{t.footer.mobileApp}</a></li>
              <li><a href="/tarifs" className="hover:text-miikaty transition">{t.footer.pricing}</a></li>
              <li><a href="/securite" className="hover:text-miikaty transition">{t.footer.security}</a></li>
              <li><a href="/faq" className="hover:text-miikaty transition">{t.footer.faq}</a></li>
            </ul>
          </div>
          {/* Support */}
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">{t.footer.support}</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/contact" className="hover:text-miikaty transition">{t.footer.contact}</a></li>
              <li><a href="/aide" className="hover:text-miikaty transition">{t.footer.helpCenter}</a></li>
              <li><a href="/support" className="hover:text-miikaty transition">{t.footer.support247}</a></li>
            </ul>
          </div>
          {/* Légal & réseaux sociaux */}
          <div className="col-span-1 flex flex-col gap-4 items-center md:items-start">
            <div>
              <div className="font-bold mb-4 text-miikaty">{t.footer.legal}</div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/mentions-legales" className="hover:text-miikaty transition">{t.footer.legalNotice}</a></li>
                <li><a href="/cgu" className="hover:text-miikaty transition">{t.footer.cgu}</a></li>
                <li><a href="/termes-et-conditions" className="hover:text-miikaty transition">{t.footer.terms}</a></li>
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} MIikaty. {t.footer.copyright} <a href="/mentions-legales" className="underline hover:text-miikaty">{t.footer.legalNotice}</a>
        </div>
      </footer>

      {/* Popup de téléchargement */}
      {showDownloadPopup && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-4 max-w-sm w-full relative shadow-2xl"
          >
            {/* Bouton de fermeture */}
          <button
              onClick={toggleDownloadPopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Même composant que la hero section */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-row items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-3 w-auto max-w-xs border border-white/40 hover:shadow-xl transition-all duration-300 group">
                <div className="relative flex-shrink-0">
                  <img src="/images/QR_code.png" alt="QR code télécharger l'app" className="w-20 h-20 rounded-xl border-2 border-miikaty bg-white shadow-md group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute -bottom-2 -right-2 bg-miikaty text-white rounded-full p-1 shadow-lg flex items-center justify-center">
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' className='w-5 h-5'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v12m0 0l-4-4m4 4l4-4m-4 4V4' />
                    </svg>
                </span>
              </div>
                <div className="flex flex-col">
                  <span className="font-bold text-miikaty text-base">Scan to download</span>
                  <span className="text-xs text-gray-700 mt-1">Scannez pour télécharger l'application.</span>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <motion.a
                  href="https://play.google.com/store/apps/details?id=ton.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <img src="/images/google-play-badge.svg" alt="Disponible sur Google Play" className="h-10" />
                </motion.a>
                <motion.a
                  href="https://apps.apple.com/app/idtonappid"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <img src="/images/app-store-badge.svg" alt="Disponible sur l'App Store" className="h-10" />
                </motion.a>
              </div>
              </div>
            </motion.div>
        </div>
      )}
    </>
  );
}
