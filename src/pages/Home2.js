import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home2() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/Fondhero.png" 
            alt="Fond hero" 
            className="w-full h-full object-cover scale-x-[-1]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          {/* Dégradé #563491 qui remonte */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#563491] to-transparent"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu à gauche */}
            <div className="text-left">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#d8a5ff]">
                  MiCard
                </span>
                <br />
                <span className="text-3xl md:text-5xl font-light">
                  La finance réinventée
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white mb-8 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Découvrez une nouvelle façon de gérer votre argent. 
                Simple, sécurisé et accessible à tous.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-[#563491] to-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Commencer maintenant
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Découvrir nos services
                </Link>
              </motion.div>

              {/* Section téléchargement */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 items-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* QR Code */}
                <div className="flex flex-col items-center">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 shadow-lg mb-2">
                    <img 
                      src="/images/QR_code.png" 
                      alt="QR Code" 
                      className="w-16 h-16"
                    />
                  </div>
                  <span className="text-white text-sm font-medium">Scanner ici</span>
                </div>

                {/* Badges de téléchargement */}
                <div className="flex flex-col gap-3">
                  <img 
                    src="/images/app-store-badge.svg" 
                    alt="Télécharger sur App Store" 
                    className="h-10 cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                  <img 
                    src="/images/google-play-badge.svg" 
                    alt="Télécharger sur Google Play" 
                    className="h-10 cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </motion.div>
            </div>

            {/* Espace vide à droite */}
            <div className="w-full h-96">
            </div>
          </div>
        </div>


      </section>

      {/* Section avec 3 blocs horizontaux */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Titre principal */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-[#563491] dark:from-[#d8a5ff] dark:to-[#563491] bg-clip-text text-transparent mb-8">
              Nos Services
            </h2>
                          <Link
                to="/services"
                className="inline-flex items-center border-2 border-[#563491] text-[#563491] dark:border-[#d8a5ff] dark:text-[#d8a5ff] px-6 py-2 rounded-full text-base font-semibold hover:bg-[#563491] hover:text-white dark:hover:bg-[#d8a5ff] dark:hover:text-black transition-all duration-300"
              >
              Voir tous les services
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 3 blocs principaux */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Bloc gauche - Image femme */}
            <div className="bg-white dark:bg-[#563491] rounded-2xl shadow-lg overflow-hidden relative">
              <img 
                src="/images/femme.png" 
                alt="Femme" 
                className="w-full h-[500px] object-cover object-top scale-x-[-1]"
              />
              {/* Dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#563491] to-transparent"></div>
            </div>

            {/* Bloc central - Transferts d'argent avec taxi */}
            <div className="bg-gray-100 dark:bg-yellow-500 rounded-2xl shadow-lg overflow-hidden relative">
              <img 
                src="/images/taxi.png" 
                alt="Taxi" 
                className="w-full h-[500px] object-cover"
              />
              {/* Dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-yellow-500/30 to-transparent"></div>
            </div>

            {/* Bloc droit - Marché avec image */}
            <div className="bg-white dark:bg-black rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-[#563491] relative">
              <img 
                src="/images/marche.png" 
                alt="Marché" 
                className="w-full h-[500px] object-cover"
              />
              {/* Dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black dark:from-white to-transparent"></div>
            </div>
          </div>

          {/* 3 sections de texte en bas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section gauche - Paiement de factures */}
            <div className="text-left bg-transparent rounded-2xl p-6 border-2 border-[#563491]">
              <Link to="/services" className="group">
                <h3 className="text-xl font-bold text-[#563491] dark:text-[#563491] mb-3 underline decoration-[#563491] decoration-2 underline-offset-4 flex items-center hover:decoration-[#d8a5ff] transition-all duration-300">
                  Paiement de Factures
                  <svg className="ml-2 w-4 h-4 text-[#563491] group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </Link>
              <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                Payez toutes vos factures en quelques clics, sans vous déplacer. Électricité, eau, téléphone et recharges mobiles instantanées.
              </p>
            </div>

            {/* Section centrale - Transferts d'argent */}
            <div className="text-left bg-transparent rounded-2xl p-6 border-2 border-yellow-500">
              <Link to="/services" className="group">
                <h3 className="text-xl font-bold text-yellow-500 mb-3 underline decoration-yellow-500 decoration-2 underline-offset-4 flex items-center hover:decoration-[#563491] transition-all duration-300">
                  Transferts d'Argent
                  <svg className="ml-2 w-4 h-4 text-yellow-500 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </Link>
              <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                Envoyez de l'argent instantanément à vos proches. Transferts sécurisés et tracés, sans frais entre utilisateurs.
              </p>
            </div>

            {/* Section droite - MiCard */}
            <div className="text-left bg-transparent rounded-2xl p-6 border-2 border-black dark:border-white">
              <Link to="/services" className="group">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3 underline decoration-black dark:decoration-white decoration-2 underline-offset-4 flex items-center hover:decoration-[#563491] dark:hover:decoration-[#d8a5ff] transition-all duration-300">
                  Carte Virtuelle MiCard
                  <svg className="ml-2 w-4 h-4 text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </Link>
              <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                Payez en ligne et en magasin avec votre carte virtuelle sécurisée. Contrôle total de vos dépenses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ils utilisent Mikaty au quotidien */}
      <section className="py-24 bg-gray-50 dark:bg-black overflow-hidden">
        <div className="text-center mb-16 max-w-7xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-[#563491] dark:from-[#d8a5ff] dark:to-[#563491] bg-clip-text text-transparent mb-4">
            Ils utilisent Mikaty au quotidien
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez comment nos utilisateurs transforment leur expérience financière avec Mikaty
          </p>
        </div>

        {/* Carrousel de blocs qui défilent */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-6 px-6">
              {/* Bloc 1 */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
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
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
              {/* Bloc 2 (dupliqué) */}
              <div className="flex-shrink-0 w-80 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Votre image ici</span>
              </div>
          </div>
        </div>
      </section>

      {/* Section Essayez gratuitement */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#d8a5ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#563491]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Icône de l'app */}
          <div className="flex justify-center mb-8">
            <img src="/images/logo.png" alt="Mikaty" className="w-20 h-20 object-contain" />
          </div>

          {/* Titre principal */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Essayez gratuitement</span>
            <br />
            <span className="text-[#563491]">Mikaty dès aujourd'hui</span>
          </h2>



          {/* Formulaire d'inscription */}
          <div className="max-w-md mx-auto">
            <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Champ téléphone */}
              <div className="flex-1 flex items-center px-4 py-3">
                <img src="/images/senegal-outline.svg" alt="Sénégal" className="w-6 h-6 mr-3" />
                <input 
                  type="tel" 
                  placeholder="Entrez votre téléphone" 
                  className="flex-1 outline-none text-gray-700 placeholder-gray-500"
                />
              </div>
              
              {/* Bouton */}
              <button className="bg-gradient-to-r from-[#563491] to-[#d8a5ff] hover:from-[#d8a5ff] hover:to-[#563491] text-white font-bold px-16 py-2.5 transition-all duration-500 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Essayer gratuitement
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Intelligent */}
      <footer className="bg-gradient-to-br from-gray-900 via-[#563491] to-black text-white pt-20 pb-8 px-4 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#d8a5ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#563491]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section principale */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Logo et description */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-6">
                <img src="/images/logomauve.svg" alt="Mikaty" className="h-8 mr-3" />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#d8a5ff] to-white bg-clip-text text-transparent">Mikaty</span>
              </div>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                La finance réinventée. Simple, sécurisée et accessible à tous. Transformez votre expérience financière avec Mikaty.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-[#d8a5ff] hover:bg-white transition-all duration-300 p-2 rounded-lg group">
                  <svg className="w-5 h-5 text-black group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#d8a5ff] hover:bg-white transition-all duration-300 p-2 rounded-lg group">
                  <svg className="w-5 h-5 text-black group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#d8a5ff] hover:bg-white transition-all duration-300 p-2 rounded-lg group">
                  <svg className="w-5 h-5 text-black group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-[#d8a5ff] mb-6">Nos Services</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="/services" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Paiement de factures
                </a></li>
                <li><a href="/services" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Transferts d'argent
                </a></li>
                <li><a href="/micard" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Carte virtuelle MiCard
                </a></li>
                <li><a href="/services" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Épargne et investissement
                </a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-[#d8a5ff] mb-6">Support</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li><a href="/contact" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Contact
                </a></li>
                <li><a href="/aide" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Centre d'aide
                </a></li>
                <li><a href="/faq" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  FAQ
                </a></li>
                <li><a href="/securite" className="hover:text-[#d8a5ff] transition-colors duration-300 flex items-center group">
                  <span className="w-1 h-1 bg-[#d8a5ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Sécurité
                </a></li>
              </ul>
            </div>

            {/* Téléchargement */}
            <div className="col-span-1">
              <h3 className="text-lg font-bold text-[#d8a5ff] mb-6">Télécharger</h3>
              <div className="space-y-4">
                <a href="#" className="block">
                  <img src="/images/app-store-badge.svg" alt="App Store" className="h-12 hover:scale-105 transition-transform duration-300" />
                </a>
                <a href="#" className="block">
                  <img src="/images/google-play-badge.svg" alt="Google Play" className="h-12 hover:scale-105 transition-transform duration-300" />
                </a>
                <div className="mt-6 p-4 bg-black/20 rounded-xl border border-[#d8a5ff]/20">
                  <div className="flex items-center justify-center">
                    <img src="/images/QR_code.png" alt="QR Code" className="w-16 h-16" />
                  </div>
                  <p className="text-center text-xs text-gray-400 mt-2">Scanner pour télécharger</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section inférieure */}
          <div className="border-t border-[#d8a5ff]/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Mikaty. Tous droits réservés.
              </div>
              <div className="flex gap-6 text-sm">
                <a href="/mentions-legales" className="text-gray-400 hover:text-[#d8a5ff] transition-colors">Mentions légales</a>
                <a href="/confidentialite" className="text-gray-400 hover:text-[#d8a5ff] transition-colors">Confidentialité</a>
                <a href="/cgu" className="text-gray-400 hover:text-[#d8a5ff] transition-colors">CGU</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
} 