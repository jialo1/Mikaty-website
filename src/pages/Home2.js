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
    </div>
  );
} 