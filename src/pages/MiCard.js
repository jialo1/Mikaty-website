import React from "react";
import { motion } from "framer-motion";

export default function MiCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Hero Section avec personne utilisant la carte */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Votre <span className="text-miikaty">MiCard</span> dans votre poche
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Payez partout, tout le temps, avec votre carte virtuelle sécurisée
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-miikaty hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Créer ma MiCard
                </button>
                <button className="border-2 border-miikaty text-miikaty hover:bg-miikaty hover:text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300">
                  En savoir plus
                </button>
              </motion.div>
            </motion.div>

            {/* Espace pour votre image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              {/* Placeholder pour votre image */}
              <div className="w-full h-96 bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-3xl border-2 border-dashed border-miikaty/30 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-miikaty/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-miikaty/70 font-medium">Votre image ici</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités avec images */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-20"
          >
            <span className="text-miikaty">Fonctionnalités</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sécurité */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-miikaty/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Placeholder pour image de sécurité */}
                <div className="w-full h-[500px] bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-miikaty/30 group-hover:border-miikaty/50 transition-colors duration-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-miikaty/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Paiements instantanés */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-miikaty/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Placeholder pour image de paiement instantané */}
                <div className="w-full h-[500px] bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-miikaty/30 group-hover:border-miikaty/50 transition-colors duration-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-miikaty/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contrôle */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-miikaty/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Placeholder pour image de contrôle */}
                <div className="w-full h-[500px] bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-miikaty/30 group-hover:border-miikaty/50 transition-colors duration-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-miikaty/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Multi-devices */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-miikaty/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Placeholder pour image multi-devices */}
                <div className="w-full h-[500px] bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-miikaty/30 group-hover:border-miikaty/50 transition-colors duration-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-miikaty/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-miikaty/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Placeholder pour image de notifications */}
                <div className="w-full h-[500px] bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-miikaty/30 group-hover:border-miikaty/50 transition-colors duration-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-miikaty/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.19 4.19A2 2 0 006 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* International */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-miikaty/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Placeholder pour image internationale */}
                <div className="w-full h-[500px] bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-miikaty/30 group-hover:border-miikaty/50 transition-colors duration-300">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-miikaty/50 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche avec animations */}
      <section className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-miikaty/5 to-purple-600/5"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-20"
          >
            Comment ça <span className="text-miikaty">Marche</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloc 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-3xl p-8 h-96 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-200/50 dark:border-purple-700/50 relative overflow-hidden bg-cover bg-center bg-no-repeat">
                {/* Placeholder pour illustration Photoshop */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-miikaty/10 to-purple-600/10 rounded-2xl border-2 border-dashed border-miikaty/30 flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-miikaty/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-miikaty/50 text-sm font-medium">Illustration Étape 1</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Bloc 2 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-miikaty to-purple-600 rounded-3xl p-8 h-96 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-300/50 relative overflow-hidden bg-cover bg-center bg-no-repeat">
                {/* Placeholder pour illustration Photoshop */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-white/10 to-purple-600/10 rounded-2xl border-2 border-dashed border-white/30 flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-sm font-medium">Illustration Étape 2</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Bloc 3 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-purple-100 rounded-3xl p-8 h-96 shadow-xl hover:shadow-2xl transition-all duration-500 border border-purple-200/50 relative overflow-hidden bg-cover bg-center bg-no-repeat">
                {/* Placeholder pour illustration Photoshop */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-2xl border-2 border-dashed border-purple-500/30 flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-purple-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-purple-500/50 text-sm font-medium">Illustration Étape 3</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA avec animation */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-miikaty/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
              Prêt pour <span className="text-miikaty">MiCard</span> ?
            </h2>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-miikaty to-purple-600 hover:from-purple-600 hover:to-miikaty text-white font-bold py-6 px-12 rounded-3xl text-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
          >
            Créer ma MiCard
          </motion.button>
        </div>
      </section>
    </div>
  );
} 