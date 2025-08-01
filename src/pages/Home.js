import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

// Composant typewriter corrigé
function Typewriter({ text, speed = 35, className = "", textLines }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(0);
    if (textLines && Array.isArray(textLines) && textLines.length > 0) {
      // Animation ligne par ligne
      let line = 0;
      let char = 0;
      let interval;
      function nextChar() {
        if (char < textLines[line].length) {
          char++;
          setIndex((prev) => prev + 1);
        } else if (line < textLines.length - 1) {
          line++;
          char = 0;
          setIndex((prev) => prev + 1); // Pour passer à la ligne suivante
        } else {
          clearInterval(interval);
        }
      }
      interval = setInterval(nextChar, speed);
      return () => clearInterval(interval);
    } else if (text) {
      // Animation texte simple
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
      return () => clearInterval(interval);
    }
  }, [text, textLines, speed]);

  if (textLines && Array.isArray(textLines) && textLines.length > 0) {
    // Affiche chaque ligne animée
    let total = 0;
    const linesToShow = textLines.map((line, i) => {
      const start = total;
      const end = total + line.length;
      total = end + 1; // +1 pour le saut de ligne
      if (index >= end) {
        return <React.Fragment key={i}>{line}<br /></React.Fragment>;
      } else if (index > start) {
        return <React.Fragment key={i}>{line.slice(0, index - start)}<br /></React.Fragment>;
      } else {
        return null;
      }
    });
    return <span className={className}>{linesToShow}</span>;
  }
  // Fallback texte simple
  return <span className={className}>{text ? text.slice(0, index) : null}</span>;
}

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-28 pb-20 px-0 relative overflow-hidden font-sans min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_60%_40%,#7C3AED_0%,#1a1a1a_100%)] dark:bg-[radial-gradient(ellipse_at_60%_40%,#1a1a1a_0%,#2d1a4d_100%)]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-10 flex-1">
          <div className="md:w-1/2 flex flex-col items-start text-left gap-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-0" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
              Payez. Envoyez. Recevez.
            </h1>
            <p className="text-base text-white/90 mb-0 -mt-4" style={{fontFamily:'Inter, sans-serif'}}>Transférez de l'argent, payez vos factures, rechargez du crédit, partout, instantanément, sans compte bancaire.</p>
            <div className="flex flex-row items-center gap-3 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg p-3 w-auto max-w-xs border border-white/40 hover:shadow-xl transition-all duration-300 group mt-2 mb-2">
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
            <div className="flex flex-row gap-3 mt-0">
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
          <div className="md:w-1/2 flex justify-center items-center h-full mt-0 md:mt-0 relative">
            {/* Carte du Sénégal en fond, derrière l'image */}
            <motion.img
              src="/images/senegal-outline.svg"
              alt="Carte du Sénégal"
              className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none select-none z-0"
              style={{mixBlendMode: 'lighten'}}
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/images/hero.png"
              alt="Visuel Hero Mikaty"
              className="w-full max-w-md h-auto object-cover object-bottom rounded-2xl m-0 p-0 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            />
          </div>
        </div>
        
        {/* Étapes d'utilisation intégrées dans la hero */}
        <div className="max-w-5xl mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-start">
            {[{
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <rect x="7" y="2" width="10" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
              ),
              title: "1. Téléchargez l'app",
              description: 'Disponible sur tous les smartphones, légère et rapide.'
            }, {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path stroke="currentColor" strokeWidth="1.5" d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" fill="none" />
                  <path stroke="currentColor" strokeWidth="1.5" d="M19 8h2m-1-1v2" strokeLinecap="round" />
                </svg>
              ),
              title: '2. Créer un compte',
              description: 'Aucune paperasse, juste votre numéro de téléphone.'
            }, {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              ),
              title: "3. Envoyez, recevez, payez",
              description: "Transferts instantanés, paiements QR code, recharges, tout est simple."
            }].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="flex flex-col items-center rounded-xl transition-all duration-300 py-4 px-3 min-h-[120px] max-w-[200px] group hover:scale-105"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-3 transition-all duration-300">
                  {React.cloneElement(step.icon, { className: 'w-7 h-7 text-miikaty transition-all duration-300' })}
                </span>
                <h3 className="font-semibold text-base text-white mb-2 transition-all duration-300 whitespace-nowrap">{step.title}</h3>
                <p className="text-white/80 text-sm text-center transition-all duration-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Nos services */}
      <section className="pt-6 pb-32 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-miikaty-dark">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#563491] to-[#1a1a1a] dark:from-white dark:to-[#563491] bg-clip-text text-transparent">
            Nos services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                {/* Lightbulb icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-miikaty group-hover:text-white transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.625a6.01 6.01 0 00-1.5-11.625m-1.5 11.625a6.01 6.01 0 01-1.5-11.625" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.375 21L3 12m0 0l6.375-9M3 12h18" />
                </svg>
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Paiement de factures</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Réglez vos factures d'électricité, d'eau, d'internet et plus, en quelques clics.</p>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                {/* Mobile icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-miikaty group-hover:text-white transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Achat de crédit télé</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Rechargez instantanément votre téléphone ou celui de vos proches, tous opérateurs.</p>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                {/* Briefcase icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-miikaty group-hover:text-white transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
                </svg>
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Les poches</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Créez des poches pour mieux gérer votre argent, économiser ou partager en famille.</p>
            </div>
            {/* Service 4 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                {/* Credit card icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-miikaty group-hover:text-white transition-colors duration-300">
                  <path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 21z" />
                </svg>
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Paiement par carte en ligne</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Payez sur tous vos sites préférés avec votre carte bancaire, en toute sécurité.</p>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                {/* NFC icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-miikaty group-hover:text-white transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.136 11.886c3.11-3.11 8.154-3.11 11.264 0M11.46 18.19c.496.496 1.298.496 1.794 0M2.25 8.625c5.166-5.166 13.584-5.166 18.75 0" />
                </svg>
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">NFC tap to pay</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Réglez vos achats en magasin d'un simple geste, grâce au paiement sans contact NFC.</p>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                {/* QR code icon (simplified) */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-miikaty group-hover:text-white transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.5a.75.75 0 00-.75.75v13.5a.75.75 0 00.75.75h16.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75H3.75zM8.25 8.25h1.5v1.5h-1.5V8.25zm0 3h1.5v1.5h-1.5v-1.5zm0 3h1.5v1.5h-1.5V15zm-3-3h1.5v1.5H5.25v-1.5zm0 3h1.5v1.5H5.25V15zm0-6h1.5v1.5H5.25V9zm3 0h1.5v1.5H8.25V9zm6-3h1.5v1.5h-1.5V6zm-3 0h1.5v1.5h-1.5V6zm3 3h1.5v1.5h-1.5V9zm-3 6h1.5v1.5h-1.5V15zm-3 3h1.5v1.5h-1.5v-1.5z" />
                </svg>
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Paiement avec QR code</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Scannez et payez instantanément chez vos commerçants ou amis, sans contact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir MIikaty */}
      <section className="py-32 bg-[#f6f3ff] dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Mockup à gauche */}
          <motion.div
            className="md:w-1/2 flex justify-center relative mb-10 md:mb-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative flex items-center justify-center w-full max-w-2xl">
              <div className="absolute inset-0 z-0 rounded-3xl" style={{background: 'radial-gradient(circle at 60% 40%, #e9d8fd 0%, #f6f3ff 80%)', filter: 'blur(0.5px)'}}></div>
              <motion.img
                src="/images/app-mockup.png"
                alt="Aperçu de l'application MIikaty"
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
            {/* Carte flottante */}
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-8 py-6 w-72 border border-gray-100 dark:border-gray-700 flex flex-col items-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-3xl mb-2">💰</span>
              <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Solde principal</div>
              <div className="font-bold text-2xl text-miikaty mb-2">250 000 F CFA</div>
              <div className="flex gap-3 mt-2">
                <button className="bg-miikaty/10 dark:bg-miikaty/20 text-miikaty font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-miikaty/20 dark:hover:bg-miikaty/30 transition">+ Ajouter</button>
                <button className="bg-miikaty/10 dark:bg-miikaty/20 text-miikaty font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-miikaty/20 dark:hover:bg-miikaty/30 transition">↘ Retirer</button>
              </div>
            </motion.div>
          </motion.div>
          {/* Contenu à droite */}
          <motion.div
            className="md:w-1/2 text-left"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#563491] to-[#1a1a1a] dark:from-white dark:to-[#563491] bg-clip-text text-transparent">
              Mettez de l'argent de côté sans effort
            </h2>
            <p className="text-lg text-miikaty-dark dark:text-gray-300 mb-6">Mettez votre argent en sécurité sans effort grâce à MIikaty.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Economisez facilement avec les virements automatiques et le rendu monnaie</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Retirez votre argent quand vous voulez</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Economisez avec la communauté MIikaty grâce aux challenges et remportez des lots</span>
              </li>
            </ul>
            <a
              href="/signup"
              className="inline-block relative px-5 py-2.5 rounded-xl font-bold text-base shadow-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-miikaty-dark bg-gradient-to-r from-miikaty to-miikaty-dark text-white border-0 max-w-sm w-auto mt-8
              dark:bg-gradient-to-r dark:from-[#563491] dark:to-white dark:text-[#1a1a1a] dark:hover:from-white dark:hover:to-[#563491] dark:hover:text-white"
              style={{}}
            >
              <span className="transition-all duration-300 text-left dark:group-hover:text-[#563491]">
                Découvrir les poches
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 dark:group-hover:text-[#563491]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Sécurité MIikaty */}
      <section className="py-32 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-miikaty-dark">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Contenu à gauche */}
          <motion.div
            className="md:w-1/2 text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-[#563491] to-[#1a1a1a] dark:from-white dark:to-[#563491] bg-clip-text text-transparent">
              Votre sécurité, notre priorité
            </h2>
            <p className="text-lg text-miikaty-dark dark:text-gray-300 mb-6">MIikaty protège vos données et vos transactions 24h/24 grâce aux meilleures technologies de sécurité.</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Chiffrement de bout en bout</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Authentification biométrique et code PIN</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Surveillance anti-fraude en temps réel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-miikaty-dark dark:text-gray-300">Données hébergées en France/Europe</span>
              </li>
            </ul>
            <a
              href="/securite"
              className="inline-block relative px-5 py-2.5 rounded-xl font-bold text-base shadow-lg tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-miikaty-dark bg-gradient-to-r from-miikaty to-miikaty-dark text-white border-0 max-w-sm w-auto mt-8
              dark:bg-gradient-to-r dark:from-[#563491] dark:to-white dark:text-[#1a1a1a] dark:hover:from-white dark:hover:to-[#563491] dark:hover:text-white"
              style={{}}
            >
              <span className="transition-all duration-300 text-left dark:group-hover:text-[#563491]">
                En savoir plus sur la sécurité
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 dark:group-hover:text-[#563491]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
          {/* Illustration sécurité à droite */}
          <motion.div
            className="md:w-1/2 flex justify-center mb-10 md:mb-0 order-1 md:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative flex items-center justify-center w-full max-w-xl">
              <div className="absolute inset-0 z-0 rounded-3xl dark:bg-[radial-gradient(circle_at_60%_40%,#2d1a4d_0%,#1a1a1a_80%)]" style={{background: 'radial-gradient(circle at 60% 40%, #e9d8fd 0%, #f6f3ff 80%)', filter: 'blur(0.5px)'}}></div>
              {/* Carré flottant style solde principal */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-8 py-6 w-72 border border-gray-100 dark:border-gray-700 flex flex-col items-center z-20"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="text-3xl mb-2">🔒</span>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Protection</div>
                <div className="font-bold text-2xl text-miikaty mb-2">Sécurité 24h/24</div>
                <div className="flex gap-3 mt-2">
                  <span className="bg-miikaty/10 dark:bg-miikaty/20 text-miikaty font-semibold px-4 py-1.5 rounded-full text-sm">Chiffré</span>
                  <span className="bg-miikaty/10 dark:bg-miikaty/20 text-miikaty font-semibold px-4 py-1.5 rounded-full text-sm">Biométrie</span>
                </div>
              </motion.div>
              <motion.img
                src="/images/securite.png"
                alt="Sécurité MIikaty"
                className="relative z-10 w-full max-w-2xl h-auto object-cover object-top rounded-2xl shadow-lg"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Témoignages cartes */}
      <section className="py-24 bg-white dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-14 text-center bg-gradient-to-r from-[#563491] to-[#1a1a1a] dark:from-white dark:to-[#563491] bg-clip-text text-transparent">
            Ils utilisent MIikaty au quotidien
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Carte 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[600px] overflow-hidden"
            >
              <img
                src="/images/card1.png"
                alt="Fatou D."
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#563491]/80 via-[#563491]/40 to-transparent dark:from-black/80 dark:via-black/40"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white dark:text-white">
                <p className="italic mb-6 text-base leading-relaxed">
                  "J'envoie de l'argent à ma famille en 2 clics, même sans compte bancaire. MIikaty a changé ma vie !"
                </p>
                <div className="font-bold text-2xl mb-1">Fatou D.</div>
                <div className="text-white/80">Marchande</div>
              </div>
            </motion.div>

            {/* Carte 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[600px] overflow-hidden"
            >
              <img
                src="/images/avatar2.jpg"
                alt="Jean M."
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#563491]/80 via-[#563491]/40 to-transparent dark:from-black/80 dark:via-black/40"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white dark:text-white">
                <p className="italic mb-6 text-base leading-relaxed">
                  "Je paie mes factures et je recharge mon téléphone sans me déplacer. C'est simple et rapide."
                </p>
                <div className="font-bold text-2xl mb-1">Jean M.</div>
                <div className="text-white/80">Artisan</div>
              </div>
            </motion.div>

            {/* Carte 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[600px] overflow-hidden"
            >
              <img
                src="/images/avatar3.jpg"
                alt="Awa S."
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#563491]/80 via-[#563491]/40 to-transparent dark:from-black/80 dark:via-black/40"></div>
              <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white dark:text-white">
                <p className="italic mb-6 text-base leading-relaxed">
                  "MIikaty m'aide à gérer mon argent de poche et à économiser, tout depuis mon mobile."
                </p>
                <div className="font-bold text-2xl mb-1">Awa S.</div>
                <div className="text-white/80">Étudiante</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Partenaires */}
      <section className="py-16 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-miikaty-dark">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#563491] to-[#1a1a1a] dark:from-white dark:to-[#563491] bg-clip-text text-transparent">
            Nos partenaires
          </h2>
          <div className="overflow-x-hidden w-full relative">
            <div className="flex items-center gap-10 animate-partner-marquee" style={{minWidth: '1200px'}}>
              {[
                '/images/ecobank.png',
                '/images/visa.svg',
                '/images/orange-money.png',
                '/images/wave.png',
                // Ajoute ici d'autres logos si besoin
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Logo partenaire"
                  className="h-10 max-h-10 w-auto max-w-[100px] grayscale hover:grayscale-0 transition-all duration-300 mx-4 inline-block object-contain"
                  style={{maxHeight: '40px', maxWidth: '100px'}}
                />
              ))}
            </div>
            <style>{`
              @keyframes partner-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-partner-marquee {
                animation: partner-marquee 18s linear infinite;
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="pt-12 pb-8 bg-[linear-gradient(90deg,#f6f3ff_0%,#e5e5f7_50%,#e5e5f7_100%)] dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#563491] to-[#1a1a1a] dark:from-white dark:to-[#563491] bg-clip-text text-transparent">
            Questions fréquentes
          </h2>
          <div className="space-y-6 text-left">
            <div>
              <h3 className="font-semibold text-miikaty mb-1">Faut-il un compte bancaire pour utiliser MIikaty&nbsp;?</h3>
              <p className="text-miikaty-dark dark:text-gray-300">Non, MIikaty fonctionne avec votre numéro de téléphone, pour tous, partout.</p>
            </div>
            <div>
              <h3 className="font-semibold text-miikaty mb-1">Combien coûtent les transactions&nbsp;?</h3>
              <p className="text-miikaty-dark dark:text-gray-300">Les transferts entre utilisateurs MIikaty sont gratuits. Les autres opérations sont à prix mini, sans surprise.</p>
            </div>
            <div>
              <h3 className="font-semibold text-miikaty mb-1">Comment recharger mon solde&nbsp;?</h3>
              <p className="text-miikaty-dark dark:text-gray-300">Chez un partenaire MIikaty, par carte bancaire, ou par virement mobile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appel à l'action mobile */}
      <section className="py-16 text-center" style={{background: 'radial-gradient(ellipse at 60% 40%, #7C3AED 0%, #1a1a1a 100%)'}}>
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Essayez MIikaty dès maintenant
          </h2>
          <p className="text-miikaty-light mb-6">Rejoignez la révolution du paiement mobile. Gratuit, sans engagement, pour tous.</p>
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
      <footer className="bg-miikaty-dark text-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo & baseline + app download */}
          <div className="col-span-1 flex flex-col items-center md:items-start gap-6">
            <img src="/images/logo-miikaty-white.svg" alt="MIikaty" className="h-10 mb-2" />
            <span className="text-white/80 text-sm mb-4">La finance, simple et accessible.</span>
            <div className="flex gap-2 mt-2">
              <a href="https://play.google.com/store/apps/details?id=ton.app" target="_blank" rel="noopener noreferrer">
                <img src="/images/google-play-badge.svg" alt="Google Play" className="h-10" />
              </a>
              <a href="https://apps.apple.com/app/idtonappid" target="_blank" rel="noopener noreferrer">
                <img src="/images/app-store-badge.svg" alt="App Store" className="h-10" />
              </a>
            </div>
            <div className="mt-4 text-xs text-white/40">MIikaty SASU<br/>12 rue de la Fintech, 75000 Paris<br/>SIRET : 123 456 789 00012</div>
          </div>
          {/* À propos */}
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">À propos</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/about" className="hover:text-miikaty transition">Qui sommes-nous</a></li>
              <li><a href="/about" className="hover:text-miikaty transition">Notre mission</a></li>
              <li><a href="/careers" className="hover:text-miikaty transition">Carrières</a></li>
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
          <div className="col-span-1 flex flex-col gap-6 items-center md:items-start">
            <div>
              <div className="font-bold mb-4 text-miikaty">Légal</div>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="/mentions-legales" className="hover:text-miikaty transition">Mentions légales</a></li>
                <li><a href="/confidentialite" className="hover:text-miikaty transition">Confidentialité</a></li>
                <li><a href="/cgu" className="hover:text-miikaty transition">Conditions générales</a></li>
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
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} MIikaty. Tous droits réservés. <a href="/mentions-legales" className="underline hover:text-miikaty">Mentions légales</a>
        </div>
      </footer>
    </>
  );
}

// Composant carrousel témoignages
function TestimonialCarousel() {
  const testimonials = [
    {
      text: '“J\'envoie de l\'argent à ma famille en 2 clics, même sans compte bancaire. MIikaty a changé ma vie !”',
      name: 'Fatou D.',
      job: 'Marchande',
      avatar: '/images/avatar1.jpg',
    },
    {
      text: '“Je paie mes factures et je recharge mon téléphone sans me déplacer. C\'est simple et rapide.”',
      name: 'Jean M.',
      job: 'Artisan',
      avatar: '/images/avatar2.jpg',
    },
    {
      text: '“MIikaty m\'aide à gérer mon argent de poche et à économiser, tout depuis mon mobile.”',
      name: 'Awa S.',
      job: 'Étudiante',
      avatar: '/images/avatar3.jpg',
    },
  ];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  return (
    <div className="relative flex flex-col items-center">
      <button onClick={prev} aria-label="Précédent" className="absolute left-0 top-1/2 -translate-y-1/2 bg-miikaty/10 hover:bg-miikaty/20 text-miikaty rounded-full w-10 h-10 flex items-center justify-center z-10 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
      </button>
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
            className="bg-miikaty-light dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center md:items-stretch gap-8 min-h-[320px]"
          >
            {/* Photo très grande à gauche */}
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
              <img
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                className="w-52 h-52 md:w-72 md:h-72 rounded-3xl border-4 border-miikaty object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
                style={{background:'#f6f3ff'}}
              />
            </div>
            {/* Témoignage à droite */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left flex-1">
              <p className="text-miikaty-dark dark:text-gray-300 italic mb-6 text-lg md:text-xl font-medium">{testimonials[index].text}</p>
              <div className="font-bold text-miikaty dark:text-white text-xl md:text-2xl mb-1">{testimonials[index].name}</div>
              <div className="text-base text-gray-500 dark:text-gray-400">{testimonials[index].job}</div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={next} aria-label="Suivant" className="absolute right-0 top-1/2 -translate-y-1/2 bg-miikaty/10 hover:bg-miikaty/20 text-miikaty rounded-full w-10 h-10 flex items-center justify-center z-10 transition">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="flex gap-2 mt-6 justify-center">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-miikaty' : 'bg-miikaty/30 dark:bg-white/30'} transition`}
            aria-label={`Témoignage ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

const UseCasesSection = () => {
  const cases = [
    {
      title: 'Institutions Financières',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      ),
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      image: '/images/financial-person.png',
    },
    {
      title: 'Voyage',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
        </svg>
      ),
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      image: '/images/travel-person.png',
    },
    {
      title: 'E-commerce',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      image: '/images/ecommerce-person.png',
    },
  ];

  return (
    <section id="use-cases" className="py-24 bg-[#F9F9F7]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-white to-[#563491] bg-clip-text text-transparent">
          Adapté à tous vos besoins
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 text-center overflow-hidden relative h-[450px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <span className={`flex items-center justify-center w-16 h-16 rounded-full ${useCase.iconBg} ${useCase.iconColor}`}>
                  {useCase.icon}
                </span>
              </div>
              <h3 className="font-bold text-xl text-miikaty-dark mb-6">{useCase.title}</h3>
              <div className="absolute bottom-0 left-0 w-full h-4/5">
                <img src={useCase.image} alt={useCase.title} className="w-full h-full object-contain object-bottom"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SimpleTestimonials = () => {
  const testimonials = [
    {
      comment: "MIikaty a transformé ma façon de gérer mon argent au quotidien. C'est simple, rapide et sécurisé !",
      image: '/images/user1.png',
      name: 'Awa C.',
    },
    {
      comment: "Enfin une app qui comprend nos besoins au Sénégal. Les transferts sont instantanés, c'est génial.",
      image: '/images/user2.png',
      name: 'Moussa F.',
    },
    {
      comment: "Je paye toutes mes factures sans me déplacer. Un vrai gain de temps et d'énergie.",
      image: '/images/user3.png',
      name: 'Fatou K.',
    },
  ];

  return (
    <section id="simple-testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-16 bg-gradient-to-r from-white to-[#563491] bg-clip-text text-transparent">
          Ce que nos utilisateurs pensent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-left shadow-lg flex flex-col justify-between h-full"
            >
              <p className="text-miikaty-dark italic mb-4 h-24">"{testimonial.comment}"</p>
              <div className="w-full h-64 rounded-xl overflow-hidden mt-4 flex items-end justify-center bg-gray-100">
                <img src={testimonial.image} alt={`Témoignage de ${testimonial.name}`} className="w-auto h-full object-contain"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "“J'envoie de l'argent à ma famille en 2 clics, même sans compte bancaire. MIikaty a changé ma vie !”",
      name: 'Fatou D.',
      job: 'Marchande',
      avatar: '/images/avatar1.jpg',
    },
    {
      text: "“Je paie mes factures et je recharge mon téléphone sans me déplacer. C'est simple et rapide.”",
      name: 'Jean M.',
      job: 'Artisan',
      avatar: '/images/avatar2.jpg',
    },
    {
      text: "“MIikaty m'aide à gérer mon argent de poche et à économiser, tout depuis mon mobile.”",
      name: 'Awa S.',
      job: 'Étudiante',
      avatar: '/images/avatar3.jpg',
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12">
          <span className="bg-gradient-to-r from-miikaty to-miikaty-dark bg-clip-text text-transparent">
            Ils utilisent MIikaty au quotidien
          </span>
        </h2>
        <div className="relative h-72">
          <AnimatePresence>
            <motion.div
              key={index}
              className="absolute w-full flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-32 h-32 rounded-full object-cover border-4 border-miikaty" />
              <div className="text-left max-w-lg">
                <p className="text-lg text-miikaty-dark italic mb-4">{testimonials[index].text}</p>
                <p className="font-bold text-miikaty-dark">{testimonials[index].name}</p>
                <p className="text-sm text-gray-500">{testimonials[index].job}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
};

const PartnerLogosSlider = () => {
  const logos = [
    '/images/ecobank.png',
    '/images/visa.svg',
    '/images/orange-money.png',
    '/images/wave.png',
    // Ajoute ici d'autres logos si besoin
  ];
  // On duplique la liste pour l'effet infini
  const allLogos = [...logos, ...logos];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center bg-gradient-to-r from-white to-[#563491] bg-clip-text text-transparent">
          Nos partenaires
        </h2>
        <div className="overflow-x-hidden w-full relative">
          <div className="flex items-center gap-10 animate-partner-marquee" style={{minWidth: '1200px'}}>
            {allLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Logo partenaire"
                className="h-10 max-h-10 w-auto max-w-[100px] grayscale hover:grayscale-0 transition-all duration-300 mx-4 inline-block object-contain"
                style={{maxHeight: '40px', maxWidth: '100px'}}
              />
            ))}
          </div>
          <style>{`
            @keyframes partner-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-partner-marquee {
              animation: partner-marquee 18s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

// Animation CSS pour le slider des partenaires
const scrollPartnersAnimation = `
  @keyframes scroll-partners {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll-partners {
    animation: scroll-partners 18s linear infinite;
  }
`;

export const head = () => (
  <>
    <style>{scrollPartnersAnimation}</style>
  </>
); 