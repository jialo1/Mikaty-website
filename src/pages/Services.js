import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
      {/* Mini Hero Section */}
      <section className="pt-32 pb-32 px-0 relative overflow-hidden font-sans">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/herotest.png" 
            alt="Fond hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 dark:bg-opacity-50"></div>
        </div>
                          <div className="max-w-7xl mx-auto px-6">
           {/* Services */}
           <div className="space-y-8 relative z-10 max-w-4xl mt-16">
            <div>
                                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
                   Découvrez tous<br />
                   nos services
            </h1>
               <p className="text-lg md:text-xl text-white/90 font-medium mb-8 max-w-xl">
              Des solutions innovantes pour simplifier vos paiements, votre gestion et votre quotidien.
            </p>
            </div>
            
            {/* Liste des services */}
              <div className="grid grid-cols-2 gap-2 max-w-md">
                {/* Micash */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Micash</h3>
                    <p className="text-xs text-white/80 truncate">Transférer vers d'autres apps</p>
                </div>
              </div>
              
                {/* Crédit mobile */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Crédit mobile</h3>
                    <p className="text-xs text-white/80 truncate">Acheter du crédit mobile</p>
                </div>
              </div>
              
                {/* Paiement de factures */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Paiement factures</h3>
                    <p className="text-xs text-white/80 truncate">Eau, électricité, etc.</p>
                </div>
              </div>
              
                {/* Virement bancaire */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Virement bancaire</h3>
                    <p className="text-xs text-white/80 truncate">Vers compte bancaire</p>
                </div>
              </div>
              
                {/* Cadeaux */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Cadeaux</h3>
                    <p className="text-xs text-white/80 truncate">Offrir de l'argent</p>
                </div>
              </div>
              
                {/* Poches */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Poches</h3>
                    <p className="text-xs text-white/80 truncate">Garder de l'argent</p>
                </div>
              </div>
              
                {/* IBAN */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">IBAN</h3>
                    <p className="text-xs text-white/80 truncate">Recevoir des virements</p>
                </div>
              </div>
              
                {/* Devises */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Devises</h3>
                    <p className="text-xs text-white/80 truncate">Taux de change</p>
            </div>
          </div>
          
                {/* Abonnement */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Abonnement</h3>
                    <p className="text-xs text-white/80 truncate">Netflix et autres</p>
              </div>
            </div>
            
                {/* Tap to Pay */}
                <div className="flex items-center space-x-2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-white text-xs">Tap to Pay</h3>
                    <p className="text-xs text-white/80 truncate">Payer avec le téléphone</p>
                </div>
                  </div>
                  </div>
                  </div>
                  </div>
         {/* Dégradé en bas de la section */}
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#563491] to-transparent dark:from-[#2d1a4d]"></div>
        </section>

      {/* Section Cartes de Services */}
      <section className="py-16 bg-[linear-gradient(90deg,#fefefe_0%,#f8f7ff_50%,#f8f7ff_100%)] dark:bg-gradient-to-b dark:from-miikaty-dark dark:to-[#2d1a4d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#563491] dark:bg-gradient-to-r dark:from-white dark:to-[#d8a5ff] dark:bg-clip-text dark:text-transparent mb-6">
              Nos services principaux
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez les fonctionnalités qui font de Mikaty<br />
              votre partenaire financier de confiance.
            </p>
              </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Carte 1 - Paiement de factures */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Paiement de factures</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Réglez toutes vos factures en quelques clics. Électricité, eau, internet, télévision et bien plus encore.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Paiement instantané
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Reçu électronique
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Sécurisé 24h/24
                  </div>
                  </div>
                </div>
                
            {/* Carte 2 - Transfert d'argent */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
              </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Transfert d'argent</h3>
                  </div>
                  
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Envoyez de l'argent instantanément à vos proches. Rapide, sécurisé et sans frais cachés.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Transfert instantané
                      </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Sans frais cachés
                    </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Sécurisé 24h/24
                  </div>
                    </div>
                  </div>
                  
            {/* Carte 3 - Les poches */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-yellow-200 dark:border-yellow-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                      </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Les poches</h3>
                  </div>
                  
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Créez des poches pour mieux gérer votre argent, économiser ou partager en famille.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Épargne intelligente
                      </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Partage en famille
                    </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Objectifs personnalisés
                  </div>
                </div>
              </div>

            {/* Carte 4 - Micash */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Micash</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Transférez de l'argent vers d'autres applications de paiement en toute simplicité.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Transfert inter-apps
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Rapide et sécurisé
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Compatible multi-plateformes
                  </div>
                  </div>
                </div>
                
            {/* Carte 5 - Crédit mobile */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-green-200 dark:border-green-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
              </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Crédit mobile</h3>
                  </div>
                  
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Achetez du crédit mobile pour tous les opérateurs en quelques clics.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Tous les opérateurs
                      </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Recharge instantanée
                    </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Tarifs avantageux
                  </div>
                    </div>
                  </div>
                  
            {/* Carte 6 - Virement bancaire */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-indigo-200 dark:border-indigo-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                      </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Virement bancaire</h3>
                  </div>
                  
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Virez de l'argent de l'application vers votre compte bancaire en toute sécurité.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Vers compte bancaire
                      </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Traitement rapide
                    </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Sécurisé et fiable
                  </div>
                </div>
              </div>

            {/* Carte 7 - Cadeaux */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-pink-200 dark:border-pink-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Cadeaux</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Offrez de l'argent à vos proches pour toutes les occasions spéciales.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Messages personnalisés
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Envoi instantané
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Occasions spéciales
                  </div>
                  </div>
                </div>
                
            {/* Carte 8 - IBAN */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-teal-200 dark:border-teal-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">IBAN</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Recevez des virements directement sur votre compte Mikaty avec votre IBAN personnel.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  IBAN personnel
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Réception instantanée
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Compatible international
                  </div>
                  </div>
                </div>
                
            {/* Carte 9 - Devises */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-orange-200 dark:border-orange-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Devises</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Vérifiez les taux de change en temps réel et convertissez vos devises facilement.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Taux en temps réel
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Conversion instantanée
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Multiples devises
                  </div>
                  </div>
                </div>
                
            {/* Carte 10 - Abonnement */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-red-200 dark:border-red-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Abonnement</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Payez vos abonnements Netflix, Spotify et autres services en streaming.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Services populaires
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Paiement automatique
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Gestion centralisée
                  </div>
                  </div>
                </div>
                
            {/* Carte 11 - Tap to Pay */}
            <div className="bg-white dark:bg-[#1a1a1a] border-2 border-emerald-200 dark:border-emerald-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                <h3 className="text-2xl font-bold text-miikaty-dark dark:text-white">Tap to Pay</h3>
                </div>
                
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Payez directement avec votre téléphone comme un terminal de paiement.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Paiement sans contact
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Sécurisé NFC
                  </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="w-2 h-2 bg-miikaty rounded-full mr-3"></span>
                  Compatible partout
                  </div>
                  </div>
                </div>
          </div>
        </div>
      </section>

      {/* Section Services Illustrés */}
      <section className="py-20 bg-white dark:bg-gradient-to-b dark:from-[#2d1a4d] dark:to-miikaty-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#563491] dark:bg-gradient-to-r dark:from-white dark:to-[#d8a5ff] dark:bg-clip-text dark:text-transparent mb-6">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services financiers<br />
              conçus pour simplifier votre quotidien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Micash */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#563491] dark:text-white mb-3">Micash</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Transférez de l'argent vers d'autres applications de paiement mobile en quelques clics. 
                Compatible avec tous les services populaires.
              </p>
            </div>
            
            {/* Service 2 - Crédit Mobile */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-full h-48 rounded-xl mb-4 overflow-hidden">
                <img 
                  src="/images/Credit.jpg" 
                  alt="Crédit Mobile" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-[#563491] dark:text-white mb-3">Crédit Mobile</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Achetez du crédit mobile pour tous les opérateurs. Rechargez votre téléphone 
                ou celui de vos proches instantanément.
              </p>
            </div>
            
            {/* Service 3 - Paiement de Factures */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#563491] dark:text-white mb-3">Paiement de Factures</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Payez vos factures d'eau, d'électricité, d'internet et plus encore. 
                Plus besoin de faire la queue, tout se fait depuis votre mobile.
              </p>
            </div>
            
            {/* Service 4 - Virement Bancaire */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#563491] dark:text-white mb-3">Virement Bancaire</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Effectuez des virements vers n'importe quel compte bancaire. 
                Transferts sécurisés et instantanés vers vos proches.
              </p>
            </div>
            
            {/* Service 5 - Cadeaux */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#563491] dark:text-white mb-3">Cadeaux</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Offrez de l'argent à vos proches de manière élégante. 
                Créez des cartes cadeaux personnalisées pour toutes les occasions.
              </p>
            </div>
            
            {/* Service 6 - Poches */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-20 h-20 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#563491] dark:text-white mb-3">Poches</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                Organisez vos finances avec des poches personnalisées. 
                Épargnez pour vos projets et gérez vos budgets facilement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Essayez Mikaty dès aujourd'hui */}
      <section className="py-16 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#563491] dark:text-white mb-6">
              Essayez Mikaty dès aujourd'hui
        </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'utilisateurs qui ont déjà transformé leur expérience financière avec Mikaty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link
                to="/contact"
                className="bg-[#563491] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a2d7a] transform hover:scale-105 transition-all duration-300"
              >
                Commencer maintenant
              </Link>
              <Link
                to="/services"
                className="border-2 border-[#563491] text-[#563491] dark:border-[#d8a5ff] dark:text-[#d8a5ff] px-8 py-3 rounded-full font-semibold hover:bg-[#563491] hover:text-white dark:hover:bg-[#d8a5ff] dark:hover:text-black transition-all duration-300"
              >
                Découvrir nos services
              </Link>
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
          </motion.div>
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