import React from "react";

export default function Services() {
  return (
    <>
      {/* Mini Hero Section */}
      <section className="pt-32 pb-24 px-0 relative overflow-hidden font-sans bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Services à gauche */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#563491] dark:text-white">
              Découvrez tous nos services
            </h1>
              <p className="text-lg md:text-xl text-[#563491] dark:text-white/90 font-medium mb-8 max-w-xl">
              Des solutions innovantes pour simplifier vos paiements, votre gestion et votre quotidien.
            </p>
            </div>
            
            {/* Liste des services */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Paiement de facture</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Payez toutes vos factures</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Achats de crédit</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Rechargez votre crédit</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Transfert bancaire</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Envoyez de l'argent</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Cadeaux</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Envoyez de l'argent</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Coffres</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Épargnez intelligemment</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Mon IBAN</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Transférez entre comptes</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Devises</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Convertissez vos devises</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 dark:bg-[#563491]/10 rounded-xl hover:bg-white/30 dark:hover:bg-[#563491]/20 transition-all duration-300 border border-white/20 dark:border-[#563491]/20">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-miikaty-dark dark:text-white text-sm">Gestionnaire d'abonnement</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">Gérez vos abonnements</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Grande image à droite */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/images/app-mockup.png" 
                alt="Application MIikaty" 
                className="w-full h-auto max-w-md mx-auto rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display='none';
                  e.target.nextSibling.style.display='block';
                }}
              />
              {/* Fallback si l'image ne charge pas */}
              <div className="hidden w-full h-96 bg-gradient-to-br from-[#563491] to-[#1a1a1a] rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-xl font-semibold">Application MIikaty</p>
                  <p className="text-sm opacity-80">Interface moderne et intuitive</p>
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-20 animate-pulse delay-500"></div>
          </div>
        </div>
      </section>
      
      <div className="max-w-7xl mx-auto py-16 px-6">
        {/* Section détaillée - Paiement de facture */}
        <section className="mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-[#1a1a1a] dark:to-[#2d1a4d] rounded-2xl lg:rounded-3xl p-4 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div className="text-left">
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-blue-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-blue-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 0 0 2.25 2.25h.75m0-3H21" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Paiement de facture</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Payez toutes vos factures en un seul endroit. Plus besoin de faire la queue ou de vous déplacer. Notre plateforme vous connecte directement aux fournisseurs de services.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mb-4 lg:mb-8 justify-items-start">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Électricité, eau, internet et téléphonie</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Paiement sécurisé 24h/24 et 7j/7</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Reçus instantanés par email/SMS</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Historique complet de vos paiements</span>
                  </div>
                </div>
              </div>
              
              {/* Logos des partenaires à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Nos partenaires</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* SENELEC */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">⚡</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">SENELEC</span>
                    </div>
                  </div>
                  
                  {/* SDE */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💧</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">SDE</span>
                    </div>
                  </div>
                  
                  {/* Orange */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📱</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Orange</span>
                    </div>
                  </div>
                  
                  {/* Free */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🌐</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Free</span>
                    </div>
                  </div>
                  
                  {/* Expresso */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📶</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Expresso</span>
                    </div>
                  </div>
                  
                  {/* Canal+ */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📺</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Canal+</span>
                    </div>
                  </div>
                  
                  {/* Nouveau partenaire - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouveau</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-xs lg:text-sm mt-4 lg:mt-6">
                  Et bien d'autres partenaires...
                </p>
                
                <button className="bg-blue-400 hover:bg-blue-500 text-white dark:bg-blue-400 dark:text-white dark:hover:bg-blue-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Commencer maintenant
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 2 - Achats de crédit */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-100 dark:from-[#2d1a4d] dark:to-[#1a1a1a] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-green-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Achats de crédit</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Rechargez votre crédit téléphonique en quelques secondes. Compatible avec tous les opérateurs majeurs du Sénégal et de la sous-région.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Orange Money, Yass, Expresso</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Recharges instantanées</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Tarifs préférentiels</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Bonus et promotions exclusives</span>
                  </div>
                </div>
                
              </div>
              
              {/* Logos des opérateurs à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Nos opérateurs partenaires</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* Orange */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📱</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Orange</span>
                    </div>
                  </div>
                  
                  {/* Yass */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📞</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Yass</span>
                    </div>
                  </div>
                  
                  {/* Expresso */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📶</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Expresso</span>
                    </div>
                  </div>
                  
                  {/* Free */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🌐</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Free</span>
                    </div>
                  </div>
                  
                  {/* Tigo */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📡</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Tigo</span>
                    </div>
                  </div>
                  
                  {/* MTN */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📲</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">MTN</span>
                    </div>
                  </div>
                  
                  {/* Nouveau partenaire - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouveau</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Et bien d'autres opérateurs...
                </p>
                
                <button className="bg-green-400 hover:bg-green-500 text-white dark:bg-green-400 dark:text-white dark:hover:bg-green-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Recharger maintenant
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 3 - Transfert bancaire */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-50 to-violet-100 dark:from-[#1a1a1a] dark:to-[#2d1a4d] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-purple-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-purple-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Transfert bancaire</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Envoyez de l'argent instantanément à vos proches, peu importe où ils se trouvent. Transferts sécurisés et rapides.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Transferts instantanés</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Pas de frais cachés</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Sécurité maximale</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Transferts internationaux</span>
                  </div>
                </div>
                
              </div>
              
              {/* Logos des banques à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Nos partenaires bancaires</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* Ecobank */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🏦</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Ecobank</span>
                    </div>
                  </div>
                  
                  {/* BICIS */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🏛️</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">BICIS</span>
                    </div>
                  </div>
                  
                  {/* SGBS */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🏢</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">SGBS</span>
                    </div>
                  </div>
                  
                  {/* BHS */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🏪</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">BHS</span>
                    </div>
                  </div>
                  
                  {/* Visa */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💳</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Visa</span>
                    </div>
                  </div>
                  
                  {/* Mastercard */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💳</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Mastercard</span>
                    </div>
                  </div>
                  
                  {/* Nouveau partenaire - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouveau</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Et bien d'autres partenaires...
                </p>
                
                <button className="bg-purple-400 hover:bg-purple-500 text-white dark:bg-purple-400 dark:text-white dark:hover:bg-purple-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Transférer maintenant
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 4 - Cadeaux */}
      <section className="mb-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-100 dark:from-[#2d1a4d] dark:to-[#1a1a1a] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-pink-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-pink-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Cadeaux</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Envoyez de l'argent en cadeau à vos proches avec des messages personnalisés. Parfait pour les occasions spéciales.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Messages personnalisés</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Envoi instantané</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Cartes virtuelles animées</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Occasions spéciales</span>
                  </div>
                </div>
                
              </div>
              
              {/* Occasions spéciales à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Occasions spéciales</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* Anniversaire */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🎂</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Anniversaire</span>
                    </div>
                  </div>
                  
                  {/* Mariage */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💒</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Mariage</span>
                    </div>
                  </div>
                  
                  {/* Noël */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🎄</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Noël</span>
                    </div>
                  </div>
                  
                  {/* Nouvel An */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🎆</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Nouvel An</span>
                    </div>
                  </div>
                  
                  {/* Fête des mères */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🌹</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Fête des mères</span>
                    </div>
                  </div>
                  
                  {/* Fête des pères */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">👔</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Fête des pères</span>
                    </div>
                  </div>
                  
                  {/* Nouvelle occasion - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouvelle</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Et bien d'autres occasions...
                </p>
                
                <button className="bg-pink-400 hover:bg-pink-500 text-white dark:bg-pink-400 dark:text-white dark:hover:bg-pink-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Envoyer un cadeau
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 5 - Coffres */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-50 to-amber-100 dark:from-[#1a1a1a] dark:to-[#2d1a4d] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-yellow-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-yellow-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Coffres</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Créez des coffres pour mettre de l'argent de côté et atteindre vos objectifs d'épargne. Épargnez intelligemment.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Objectifs personnalisés</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Intérêts attractifs</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Épargne automatique</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Suivi en temps réel</span>
                  </div>
                </div>
                
              </div>
              
              {/* Types de coffres à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Types de coffres</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* Voyage */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">✈️</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Voyage</span>
                    </div>
                  </div>
                  
                  {/* Études */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📚</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Études</span>
                    </div>
                  </div>
                  
                  {/* Maison */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🏠</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Maison</span>
                    </div>
                  </div>
                  
                  {/* Urgence */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🚨</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Urgence</span>
                    </div>
                  </div>
                  
                  {/* Mariage */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💒</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Mariage</span>
                    </div>
                  </div>
                  
                  {/* Business */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💼</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Business</span>
                    </div>
                  </div>
                  
                  {/* Nouveau coffre - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouveau</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Créez vos propres objectifs...
                </p>
                
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white dark:bg-yellow-400 dark:text-white dark:hover:bg-yellow-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Créer un coffre
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 6 - Mon IBAN */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-50 to-teal-100 dark:from-[#2d1a4d] dark:to-[#1a1a1a] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-cyan-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-cyan-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Mon IBAN</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Générez votre IBAN personnel pour recevoir des virements bancaires directement sur votre compte MIikaty.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">IBAN unique et sécurisé</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Virements internationaux</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Reception instantanée</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Compatible SEPA</span>
                  </div>
                </div>
                
              </div>
              
              {/* Logos des réseaux bancaires à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Réseaux bancaires supportés</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* SEPA */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇪🇺</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">SEPA</span>
                    </div>
                  </div>
                  
                  {/* SWIFT */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🌍</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">SWIFT</span>
                    </div>
                  </div>
                  
                  {/* Visa Direct */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💳</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Visa Direct</span>
                    </div>
                  </div>
                  
                  {/* Mastercard Send */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💳</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Mastercard Send</span>
                    </div>
                  </div>
                  
                  {/* Orange Money */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📱</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Orange Money</span>
                    </div>
                  </div>
                  
                  {/* Wave */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🌊</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Wave</span>
                    </div>
                  </div>
                  
                  {/* Nouveau réseau - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouveau</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Et bien d'autres réseaux...
                </p>
                
                <button className="bg-cyan-400 hover:bg-cyan-500 text-white dark:bg-cyan-400 dark:text-white dark:hover:bg-cyan-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Générer mon IBAN
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 7 - Devises */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-100 dark:from-[#2d1a4d] dark:to-[#1a1a1a] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-indigo-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-indigo-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Devises</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Convertissez vos devises en temps réel avec les meilleurs taux du marché. Support de plus de 50 devises.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Taux en temps réel</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">50+ devises supportées</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Conversion instantanée</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Historique des taux</span>
                  </div>
                </div>
                
              </div>
              
              {/* Devises principales à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Devises principales</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* Euro */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇪🇺</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">EUR</span>
                    </div>
                  </div>
                  
                  {/* Dollar US */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇺🇸</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">USD</span>
                    </div>
                  </div>
                  
                  {/* Franc CFA */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇸🇳</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">XOF</span>
                    </div>
                  </div>
                  
                  {/* Livre Sterling */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇬🇧</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">GBP</span>
                    </div>
                  </div>
                  
                  {/* Yen */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇯🇵</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">JPY</span>
                    </div>
                  </div>
                  
                  {/* Yuan */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🇨🇳</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">CNY</span>
                    </div>
                  </div>
                  
                  {/* Nouvelle devise - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouvelle</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Et bien d'autres devises...
                </p>
                
                <button className="bg-indigo-400 hover:bg-indigo-500 text-white dark:bg-indigo-400 dark:text-white dark:hover:bg-indigo-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Convertir des devises
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Service 8 - Gestionnaire d'abonnement */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-emerald-50 to-green-100 dark:from-[#2d1a4d] dark:to-[#1a1a1a] rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Détails du service à gauche */}
              <div>
                <div className="flex items-center justify-start mb-3 lg:mb-6">
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-emerald-200 rounded-full flex items-center justify-center mr-2 lg:mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-8 lg:h-8 text-emerald-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75ZM5.625 9.75h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75ZM5.625 15h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
                    </svg>
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-miikaty-dark dark:text-white">Gestionnaire d'abonnement</h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm lg:text-lg mb-4 lg:mb-8 leading-relaxed">
                  Gérez tous vos abonnements en un seul endroit. Paiements automatiques, rappels et économies garanties.
                </p>
                
                <div className="space-y-3 lg:space-y-4 mb-4 lg:mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Paiements automatiques</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Rappels intelligents</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Analytics détaillés</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-miikaty mr-2 lg:mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 text-xs lg:text-base">Suggestions d'économies</span>
                  </div>
                </div>
                
              </div>
              
              {/* Types d'abonnements à droite */}
              <div className="max-w-xs lg:max-w-none mx-auto lg:mx-0">
                <h3 className="text-base lg:text-xl font-semibold text-miikaty-dark dark:text-white mb-3 lg:mb-6 text-left">Types d'abonnements</h3>
                <div className="grid grid-cols-4 gap-1 lg:gap-4">
                  {/* Streaming */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">📺</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Streaming</span>
                    </div>
                  </div>
                  
                  {/* Musique */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🎵</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Musique</span>
                    </div>
                  </div>
                  
                  {/* Jeux */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">🎮</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Jeux</span>
                    </div>
                  </div>
                  
                  {/* Fitness */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💪</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Fitness</span>
                    </div>
                  </div>
                  
                  {/* Cloud */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">☁️</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Cloud</span>
                    </div>
                  </div>
                  
                  {/* Logiciels */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-white font-bold text-xs lg:text-lg">💻</span>
                      </div>
                      <span className="text-gray-800 dark:text-white font-semibold text-xs lg:text-sm">Logiciels</span>
                    </div>
                  </div>
                  
                  {/* Nouvel abonnement - Place disponible */}
                  <div className="bg-white dark:bg-[#563491] rounded-lg lg:rounded-2xl p-1 lg:p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                    <div className="text-center">
                      <div className="w-6 h-6 lg:w-12 lg:h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-1 lg:mb-2">
                        <span className="text-gray-500 dark:text-gray-400 font-bold text-xs lg:text-lg">+</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 font-semibold text-xs lg:text-sm">Nouveau</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-6">
                  Et bien d'autres services...
                </p>
                
                <button className="bg-emerald-400 hover:bg-emerald-500 text-white dark:bg-emerald-400 dark:text-white dark:hover:bg-emerald-500 font-semibold py-2 lg:py-3 px-3 lg:px-6 rounded-lg lg:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-xs lg:text-base w-full lg:w-auto mt-6">
                  Gérer mes abonnements
                </button>
              </div>
          </div>
        </div>
      </section>



        {/* Section Sécurité et Conformité */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-miikaty-dark dark:text-white mb-4">Sécurité et Conformité</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Votre sécurité est notre priorité absolue. Nous utilisons les technologies les plus avancées pour protéger vos données et vos transactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-[#563491] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-miikaty-dark dark:text-white mb-2">Chiffrement SSL/TLS 256-bit</h3>
              <p className="text-gray-600 dark:text-gray-300">Toutes vos données sont chiffrées avec les standards les plus élevés de l'industrie.</p>
            </div>
            
            <div className="bg-white dark:bg-[#563491] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-miikaty-dark dark:text-white mb-2">Authentification à deux facteurs</h3>
              <p className="text-gray-600 dark:text-gray-300">Protection supplémentaire avec 2FA pour sécuriser vos transactions.</p>
            </div>
            
            <div className="bg-white dark:bg-[#563491] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-miikaty-dark dark:text-white mb-2">Conformité RGPD et PCI DSS</h3>
              <p className="text-gray-600 dark:text-gray-300">Respect total des réglementations européennes et standards de paiement.</p>
            </div>
            
            <div className="bg-white dark:bg-[#563491] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-miikaty-dark dark:text-white mb-2">Surveillance 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">Monitoring continu de nos systèmes pour détecter toute activité suspecte.</p>
            </div>
            
            <div className="bg-white dark:bg-[#563491] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-miikaty-dark dark:text-white mb-2">3D Secure</h3>
              <p className="text-gray-600 dark:text-gray-300">Protection renforcée pour tous vos paiements par carte bancaire.</p>
            </div>
            
            <div className="bg-white dark:bg-[#563491] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-miikaty-dark dark:text-white mb-2">SSL/TLS</h3>
              <p className="text-gray-600 dark:text-gray-300">Connexions sécurisées pour protéger vos données en transit.</p>
            </div>
          </div>
        </section>

        {/* Section Téléchargement avec Personne */}
        <section className="mb-8 mt-16 relative overflow-hidden">
          <div className="bg-gradient-to-br from-[#563491] via-[#6b46c1] to-[#805ad5] dark:from-[#1a1a1a] dark:via-[#2d1a4d] dark:to-[#563491] rounded-2xl p-8 lg:p-12 relative">
            {/* Éléments décoratifs flottants */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute top-16 right-12 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-8 left-16 w-20 h-20 bg-white/10 rounded-full animate-pulse delay-500"></div>
            <div className="absolute bottom-16 right-8 w-14 h-14 bg-white/10 rounded-full animate-pulse delay-1500"></div>
            
                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center relative z-10">
              {/* Colonne gauche - Téléchargement */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Téléchargez l'application
        </h2>
                <p className="text-white/90 text-base mb-4">
                  Rejoignez des millions d'utilisateurs qui font confiance à MIikaty pour leurs paiements quotidiens.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://play.google.com/store/apps/details?id=ton.app" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="/images/google-play-badge.svg" alt="Google Play" className="h-12 hover:scale-105 transition-transform duration-300" />
                  </a>
                  <a href="https://apps.apple.com/app/idtonappid" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <img src="/images/app-store-badge.svg" alt="App Store" className="h-12 hover:scale-105 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              
              {/* Colonne centrale - Personne avec téléphone (cachée sur mobile) */}
              <div className="hidden lg:flex relative justify-center">
                <div className="relative">
                  {/* Icônes flottantes autour de la personne */}
                  <div className="absolute -top-6 -left-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute -top-3 -right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-300">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-4 -left-3 w-9 h-9 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-500">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-700">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -left-10 w-7 h-7 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute top-1/2 -right-10 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center animate-bounce delay-1200">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
                  </div>
                  
                  {/* Personne avec téléphone */}
                  <div className="relative z-10">
                    <div className="w-36 h-36 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-30 h-30 bg-white/30 rounded-full flex items-center justify-center">
                        <div className="w-24 h-24 bg-white/40 rounded-full flex items-center justify-center relative">
                          {/* Visage souriant */}
                          <div className="w-18 h-18 bg-white/50 rounded-full flex items-center justify-center relative">
                            {/* Yeux */}
                            <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                            <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"></div>
                            {/* Sourire */}
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-3 border-b-2 border-white rounded-full"></div>
                            {/* Téléphone */}
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-white/80 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-6 bg-[#563491] rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Colonne droite - Code QR */}
              <div className="text-center space-y-3">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  Scannez le code QR
                </h3>
                <p className="text-white/90 text-base mb-4">
                  Accédez rapidement à l'application en scannant ce code QR avec votre téléphone.
                </p>
                
                <div className="flex justify-center">
                  <div className="bg-white rounded-lg shadow-lg">
                    <img src="/images/QR_code.png" alt="QR code MIikaty" className="w-28 h-28 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>


      </div>
      {/* Footer déplacé en dehors du conteneur principal pour occuper toute la largeur */}
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