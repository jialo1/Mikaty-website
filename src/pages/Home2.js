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
          <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"></div>
          {/* Dégradé #563491 qui remonte */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#563491] to-transparent dark:from-[#2d1a4d]"></div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 dark:opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu à gauche */}
            <div className="text-left">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#d8a5ff]">
                  MiCard
                </span>
                <br />
                <span className="text-2xl md:text-4xl font-light">
                  La finance réinventée
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white mb-6 max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Découvrez une nouvelle façon de gérer votre argent. 
                Simple, sécurisé et accessible à tous.
              </motion.p>

              <motion.div 
                className="flex flex-col gap-4 justify-start items-start mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Champ de saisie du numéro de téléphone */}
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <input
                    type="tel"
                    placeholder="+221 Votre numéro de téléphone"
                    className="flex-1 px-4 py-3 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white transition-all duration-300"
                  />
                  <button className="border-2 border-white text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
                    Recevoir le lien
                  </button>
                </div>
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
                  <div className="bg-white rounded-xl p-2 shadow-lg mb-2">
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

      {/* Section Sécurité et Avantages */}
      <section className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Titre et bouton */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Sécurité et <span className="text-[#563491] dark:text-[#d8a5ff]">Avantages</span>
            </h2>
            <Link 
              to="/securite" 
              className="inline-flex items-center border-2 border-[#563491] text-[#563491] dark:border-[#d8a5ff] dark:text-[#d8a5ff] px-6 py-2 rounded-full text-base font-semibold hover:bg-[#563491] hover:text-white dark:hover:bg-[#d8a5ff] dark:hover:text-black transition-all duration-300"
            >
              En savoir plus
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 3 blocs d'images en haut */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Bloc gauche - Sécurité */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative">
              <img 
                src="/images/securite.png" 
                alt="Sécurité" 
                className="w-full h-[500px] object-cover"
              />
              {/* Dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-green-500/30 to-transparent"></div>
            </div>

            {/* Bloc central - Rapidité */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative">
              <img 
                src="/images/rapidite.png" 
                alt="Rapidité" 
                className="w-full h-[500px] object-cover"
              />
              {/* Dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
            </div>

            {/* Bloc droit - Simplicité */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden relative">
              <img 
                src="/images/simplicite.png" 
                alt="Simplicité" 
                className="w-full h-[500px] object-cover"
              />
              {/* Dégradé en bas */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
            </div>
          </div>

          {/* 3 sections de texte en bas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Section gauche - Sécurité */}
            <div className="text-left bg-transparent rounded-2xl p-6 border-2 border-green-500">
              <div className="group">
                <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3 underline decoration-green-500 decoration-2 underline-offset-4 flex items-center">
                  🔒 Sécurité de Niveau Bancaire
                </h3>
              </div>
              <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                Chiffrement de bout en bout, authentification biométrique, surveillance anti-fraude 24h/24. Vos données sont protégées par les meilleures technologies de sécurité.
              </p>
            </div>

            {/* Section centrale - Rapidité */}
            <div className="text-left bg-transparent rounded-2xl p-6 border-2 border-blue-500">
              <div className="group">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-3 underline decoration-blue-500 decoration-2 underline-offset-4 flex items-center">
                  ⚡ Transactions en Temps Réel
                </h3>
              </div>
              <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                Effectuez vos paiements et transferts en quelques secondes. Plus besoin d'attendre, vos transactions sont traitées instantanément.
              </p>
            </div>

            {/* Section droite - Simplicité */}
            <div className="text-left bg-transparent rounded-2xl p-6 border-2 border-purple-500">
              <div className="group">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3 underline decoration-purple-500 decoration-2 underline-offset-4 flex items-center">
                  🎯 Simplicité d'Utilisation
                </h3>
              </div>
              <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                Interface moderne et intuitive. Gérez vos finances en toute simplicité, même si vous n'êtes pas expert en technologie.
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

      {/* Section Essayez Mikaty dès aujourd'hui */}
      <section className="py-12 px-4 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-[#1a1a1a] relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#d8a5ff]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#563491]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Icône de l'app */}
          <div className="flex justify-center mb-6">
            <img src="/images/logo.png" alt="Mikaty" className="w-16 h-16 object-contain" />
          </div>

          {/* Titre principal */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Essayez</span>
            <br />
            <span className="text-[#563491] dark:text-[#d8a5ff]">Mikaty dès aujourd'hui</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs<br />
            qui ont déjà transformé leur expérience financière
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a href="/signup" className="border-2 border-[#563491] text-[#563491] hover:bg-[#563491] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Commencer maintenant
            </a>
            <a href="/services" className="border-2 border-[#563491] text-[#563491] hover:bg-[#563491] hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Découvrir nos services
            </a>
          </div>

          {/* Badges de téléchargement */}
          <div className="flex justify-center gap-4">
            <a href="#" className="block">
              <img src="/images/app-store-badge.svg" alt="App Store" className="h-10 hover:scale-105 transition-transform duration-300" />
            </a>
            <a href="#" className="block">
              <img src="/images/google-play-badge.svg" alt="Google Play" className="h-10 hover:scale-105 transition-transform duration-300" />
            </a>
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

    </div>
  );
} 