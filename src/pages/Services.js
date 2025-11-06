import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "../translations";

export default function Services({ lang = 'fr' }) {
  const t = useTranslation(lang);
  // Effet pour gérer le scroll automatique vers l'ancre
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#securite') {
      // Attendre que le composant soit monté puis scroller
      setTimeout(() => {
        const element = document.getElementById('securite');
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

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
              <h1 className="text-2xl md:text-3xl font-extrabold mb-4 text-white leading-tight">
                {t.services.heroTitle}<br />
                {t.services.heroTitleLine2}
              </h1>
              <p className="text-base md:text-lg text-white/90 font-medium mb-8 max-w-xl leading-relaxed">
                {t.services.heroSubtitle}
              </p>
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
              {t.services.mainTitle}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t.services.mainSubtitle}
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

      {/* Section Présentation La carte Mikaty */}
      <section id="micard" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#563491] dark:text-white mb-6">
              La carte Mikaty
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Votre carte bancaire virtuelle toujours disponible sur votre smartphone. 
              Simple, sécurisée et acceptée partout pour tous vos paiements quotidiens.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image de la carte à gauche */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <img
                src="/images/Micard.png"
                alt="La carte Mikaty - Carte virtuelle"
                className="w-full max-w-md h-auto object-contain rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>

            {/* Contenu texte à droite */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Une carte pour tous vos besoins
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Avec la carte Mikaty, gérez vos paiements en toute simplicité. 
                Que ce soit en ligne, en magasin ou pour recevoir des virements, 
                votre carte virtuelle est toujours à portée de main.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#563491] rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Création instantanée en quelques secondes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#563491] rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Acceptée sur tous les sites e-commerce</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#563491] rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Paiement sans contact dans les magasins</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#563491] rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">IBAN personnel pour recevoir des virements</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#563491] rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Contrôle total de vos dépenses en temps réel</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Grille des fonctionnalités */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Paiements en ligne</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Effectuez des achats sécurisés sur tous les sites e-commerce avec chiffrement de bout en bout.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Paiement sans contact</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Payez rapidement dans les magasins avec la technologie NFC. Votre téléphone devient votre portefeuille.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">IBAN personnel</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Recevez des virements directement sur votre compte depuis n'importe quelle banque avec votre IBAN unique.
              </p>
            </motion.div>
          </div>
            </div>
      </section>

      {/* Section Sécurité */}
      <section id="securite" className="py-20 bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-900 dark:to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Contenu texte à gauche */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Icône et titre */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#563491] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    {t.services.security.title}
            </h2>
          </div>
          
                {/* Sous-titres */}
                <div className="flex items-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
                  <span className="text-green-400 text-xl font-semibold">{t.services.security.pciDss}</span>
            </div>
            
                <div className="mb-8">
                  <span className="text-[#563491] text-xl font-semibold">{t.services.security.compliance}</span>
              </div>

                {/* Paragraphes */}
                <div className="space-y-6 text-gray-700 dark:text-white/90 text-lg leading-relaxed">
                  <p>
                    {t.services.security.description1}
                  </p>
                  <p>
                    {t.services.security.description2}
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Zone image à droite */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Image de sécurité */}
                <div className="relative">
                  {/* Fond flou avec lumières */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
                  
                  {/* Conteneur pour l'image */}
                  <div className="relative bg-gray-100 dark:bg-gray-800 rounded-3xl p-4 w-full max-w-lg mx-auto">
                    <img 
                      src="/images/price.png" 
                      alt="Sécurité Mikaty" 
                      className="w-full h-auto object-contain rounded-2xl"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-[350px] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-2xl" style={{display: 'none'}}>
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">🔒</div>
                        <h3 className="text-2xl font-bold mb-2">Sécurité</h3>
                        <p className="text-lg opacity-90">Protection maximale</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            </div>

          {/* Liste des certifications en bas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Certifié PCI DSS */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="#10B981" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                </div>
                <span className="text-gray-900 dark:text-white text-xs font-medium">{t.services.security.cert1}</span>
              </div>

              {/* Chiffrement sécurisé */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="#3B82F6" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <span className="text-gray-900 dark:text-white text-xs font-medium">{t.services.security.cert2}</span>
            </div>
            
              {/* Protection des données */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="#8B5CF6" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                </div>
                <span className="text-gray-900 dark:text-white text-xs font-medium">{t.services.security.cert4}</span>
              </div>

              {/* Surveillance 24h/24 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="#F97316" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-900 dark:text-white text-xs font-medium">{t.services.security.cert6}</span>
            </div>

              {/* Conforme au RGPD */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="#14B8A6" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-gray-900 dark:text-white text-xs font-medium">{t.services.security.cert5}</span>
              </div>

              {/* Authentification 2FA */}
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="#EAB308" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-gray-900 dark:text-white text-xs font-medium">{t.services.security.cert3}</span>
            </div>
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
            <div className="mt-2 text-xs text-white/40">MIikaty SASU<br/>Almadies Zone 06, Résidence jasmin 1/D, Dakar Sénégal</div>
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
                <li><a href="/cgu" className="hover:text-miikaty transition">Conditions Générales d'Utilisation</a></li>
                <li><a href="/termes-et-conditions" className="hover:text-miikaty transition">Termes et Conditions</a></li>
              </ul>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12"/></svg>
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-miikaty transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>
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