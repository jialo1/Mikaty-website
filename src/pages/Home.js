import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";





export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="pt-28 pb-20 px-0 relative overflow-hidden font-sans min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_60%_40%,#7C3AED_0%,#1a1a1a_100%)] dark:bg-[radial-gradient(ellipse_at_60%_40%,#1a1a1a_0%,#2d1a4d_100%)]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-10 flex-1">
          <div className="md:w-1/4 flex flex-col items-start text-left gap-4">
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
          <div className="md:w-3/5 flex justify-end items-end h-full mt-0 md:mt-0 relative">
            {/* Carte du Sénégal en fond, derrière l'image */}
            <motion.img
              src="/images/senegal-outline.svg"
              alt="Carte du Sénégal"
              className="absolute inset-0 w-[100%] h-[100%] object-contain opacity-40 pointer-events-none select-none z-0"
              style={{mixBlendMode: 'lighten'}}
              initial={{ y: 0 }}
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/images/testhero.png"
              alt="Visuel Hero Mikaty"
              className="w-2/3 h-auto object-cover object-bottom rounded-2xl m-0 p-0 mr-0 pr-0 relative z-10"
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
                <img src="/images/Factures.svg" alt="Factures" className="w-7 h-7 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
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
                <img src="/images/Carte.svg" alt="Carte bancaire" className="w-7 h-7 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Paiement par carte en ligne</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Payez sur tous vos sites préférés avec votre carte bancaire, en toute sécurité.</p>
            </div>
            {/* Service 5 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                <img src="/images/nfc.svg" alt="NFC" className="w-7 h-7 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">NFC tap to pay</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Réglez vos achats en magasin d'un simple geste, grâce au paiement sans contact NFC.</p>
            </div>
            {/* Service 6 */}
            <div className="flex flex-col items-center bg-white dark:bg-[#563491] rounded-3xl shadow-[0_4px_24px_0_rgba(124,58,237,0.10)] hover:shadow-[0_8px_32px_0_rgba(124,58,237,0.18)] hover:bg-[#f6f3ff] dark:hover:bg-[#F2E4F8] transition-all duration-300 p-10 group">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-2 group-hover:bg-[#563491] transition-colors duration-300">
                <img src="/images/Qr.svg" alt="QR Code" className="w-7 h-7 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </span>
              <h3 className="font-semibold text-base text-black dark:text-white mb-1 group-hover:text-miikaty-dark">Paiement avec QR code</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-snug text-center group-hover:text-miikaty-dark transition-colors duration-300">Scannez et payez instantanément chez vos commerçants ou amis, sans contact.</p>
            </div>
          </div>
          
          {/* Bouton "Voir tous nos services" */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              to="/services" 
              className="group inline-flex items-center px-6 py-3 border-2 border-miikaty dark:border-purple-400 hover:border-purple-600 dark:hover:border-purple-300 text-miikaty dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 font-semibold text-base rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Voir plus
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>





      {/* Section Innovation */}
      <section className="py-20 px-4 bg-[linear-gradient(90deg,#fefefe_0%,#f8f7ff_50%,#f8f7ff_100%)] dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Espace pour image à gauche */}
          <div className="md:w-1/2 flex justify-center order-2 md:order-1">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border-2 border-dashed border-blue-300 dark:border-blue-600 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-blue-400 dark:text-blue-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-blue-500 dark:text-blue-400 text-sm">Espace pour image</p>
              </div>
            </div>
          </div>
          
          {/* Contenu à droite */}
          <div className="md:w-1/2 text-left order-1 md:order-2">
                      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#563491] to-black dark:from-[#d8a5ff] dark:to-[#d8a5ff] bg-clip-text text-transparent">
            Innovation au service de votre quotidien
          </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Découvrez comment Mikaty révolutionne vos transactions financières avec des technologies de pointe et une expérience utilisateur exceptionnelle.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Transactions instantanées</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Interface intuitive et moderne</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Disponible partout dans le monde</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Fonctionnalités innovantes</span>
              </li>
            </ul>
            <button className="inline-flex items-center px-6 py-3 border-2 border-[#563491] text-[#563491] hover:bg-[#563491] hover:text-white font-semibold rounded-xl transition-all duration-300">
              Découvrir nos innovations
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>



      {/* Section MiCard */}
      <section className="py-24 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#563491] to-black dark:from-white dark:to-[#d8a5ff] bg-clip-text text-transparent mb-6">
              Découvrez MiCard
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              La carte virtuelle qui révolutionne vos paiements en ligne et en magasin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu à gauche */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#563491] dark:text-white">
                  💳 Carte virtuelle sécurisée
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Créez votre carte virtuelle en quelques secondes et commencez à payer instantanément. 
                  Aucun frais caché, contrôle total de vos dépenses.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#563491] dark:text-white">
                  🔒 Sécurité maximale
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chiffrement de bout en bout, authentification biométrique et surveillance anti-fraude 24h/24. 
                  Vos données sont protégées par les meilleures technologies.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#563491] dark:text-white">
                  🌍 Acceptée partout
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Payez sur tous vos sites préférés et en magasin avec votre carte virtuelle. 
                  Compatible avec tous les terminaux de paiement.
                </p>
              </div>

              <div className="pt-6">
                <Link 
                  to="/micard" 
                  className="inline-flex items-center px-8 py-3 bg-[#563491] text-white font-semibold rounded-full hover:bg-[#4a2d7a] transition-all duration-300 transform hover:scale-105"
                >
                  En savoir plus sur MiCard
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Image à droite */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 bg-gradient-to-br from-[#563491] to-[#8b5cf6] rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#563491] rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 003 3z" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-[#563491]">MiCard</h4>
                      <p className="text-sm text-gray-600">Carte virtuelle</p>
                    </div>
                  </div>
                </div>
                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Sécurité */}
      <section className="py-20 px-4 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-miikaty-dark">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Contenu à gauche */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#563491] to-black dark:from-[#d8a5ff] dark:to-[#d8a5ff] bg-clip-text text-transparent">
              Votre sécurité, notre priorité
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Mlikaty protège vos données et vos transactions 24h/24 grâce aux meilleures technologies de sécurité.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Chiffrement de bout en bout</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Authentification biométrique et code PIN</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Surveillance anti-fraude en temps réel</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✔</span>
                <span className="text-gray-700 dark:text-gray-300">Données hébergées en France/Europe</span>
              </li>
            </ul>
            <button className="inline-flex items-center px-6 py-3 border-2 border-[#563491] text-[#563491] hover:bg-[#563491] hover:text-white font-semibold rounded-xl transition-all duration-300">
              En savoir plus sur la sécurité
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Espace pour image à droite */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Espace pour image</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Ils utilisent Mikaty au quotidien */}
      <section className="py-24 bg-[linear-gradient(90deg,#fefefe_0%,#f8f7ff_50%,#f8f7ff_100%)] dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
        <div className="text-center mb-16 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#563491] to-black dark:from-white dark:to-white bg-clip-text text-transparent mb-4">
            Ils utilisent Mikaty au quotidien
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez comment nos utilisateurs transforment<br />
            leur expérience financière avec Mikaty
          </p>
        </div>

        {/* Carrousel de blocs qui défilent */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6 px-6 md:px-12 lg:px-16">
              {/* Bloc 1 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/femmecard.png" 
                  alt="Femme card" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Bloc 2 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
              {/* Bloc 3 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
              {/* Bloc 4 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
              {/* Bloc 5 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
              {/* Bloc 6 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
              {/* Répéter les blocs pour un défilement continu */}
              {/* Bloc 1 (dupliqué) */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/femmecard.png" 
                  alt="Femme card" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              {/* Bloc 2 (dupliqué) */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[
              { name: "Orange Money", logo: "/images/Orange-Money.png" },
              { name: "Wave", logo: "/images/Wave.png" },
              { name: "Ecobank", logo: "/images/ecobank.png" },
              { name: "Visa", logo: "/images/Visa.svg" }
            ].map((partenaire, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <img 
                  src={partenaire.logo} 
                  alt={partenaire.name} 
                  className="h-12 max-w-full object-contain filter brightness-0 dark:invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="pt-12 pb-8 bg-[linear-gradient(90deg,#fefefe_0%,#f8f7ff_50%,#f8f7ff_100%)] dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
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
          <div className="col-span-1 flex flex-col gap-4 items-center md:items-start">
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
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-white/60 text-sm">
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