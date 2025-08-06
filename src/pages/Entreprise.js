import React from "react";
import { motion } from "framer-motion";

export default function Entreprise() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Notre <span className="text-miikaty">Entreprise</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Une fintech innovante qui révolutionne les paiements en Afrique
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-miikaty hover:bg-miikaty-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Découvrir notre histoire
            </button>
            <button className="border-2 border-miikaty text-miikaty hover:bg-miikaty hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Rejoindre l'équipe
            </button>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 px-4 bg-white/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Fondée en 2020, Mikaty est née de la vision de démocratiser l'accès aux services financiers en Afrique. 
                Notre mission est de rendre les paiements simples, sécurisés et accessibles à tous.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                De nos débuts modestes à Dakar, nous avons grandi pour devenir une plateforme de référence 
                dans le domaine des paiements mobiles, touchant des millions d'utilisateurs à travers l'Afrique.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-miikaty">2020</div>
                  <div className="text-gray-500 dark:text-gray-400">Fondation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-miikaty">2022</div>
                  <div className="text-gray-500 dark:text-gray-400">1M+ utilisateurs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-miikaty">2024</div>
                  <div className="text-gray-500 dark:text-gray-400">15 pays</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-miikaty to-purple-600 rounded-2xl p-8 h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold mb-2">Innovation Continue</h3>
                  <p className="text-lg opacity-90">Nous repoussons constamment les limites de la technologie</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Les principes qui guident chacune de nos décisions et actions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤝",
                title: "Confiance",
                description: "La transparence et la fiabilité sont au cœur de nos relations"
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Nous repoussons les limites pour créer des solutions révolutionnaires"
              },
              {
                icon: "🌍",
                title: "Impact",
                description: "Chaque action vise à améliorer la vie de nos utilisateurs"
              },
              {
                icon: "🔒",
                title: "Sécurité",
                description: "La protection de vos données est notre priorité absolue"
              }
            ].map((valeur, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="text-4xl mb-4">{valeur.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{valeur.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{valeur.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 px-4 bg-white/50 dark:bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Notre Équipe</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Des experts passionnés qui partagent la vision d'une Afrique financièrement inclusive
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Fatou Diallo",
                role: "CEO & Fondatrice",
                description: "Visionnaire et entrepreneure passionnée par l'inclusion financière",
                image: "/images/avatar1.jpg"
              },
              {
                name: "Jean Moussa",
                role: "CTO",
                description: "Expert en technologie avec 15 ans d'expérience dans la fintech",
                image: "/images/avatar2.jpg"
              },
              {
                name: "Awa Sall",
                role: "CMO",
                description: "Spécialiste du marketing digital et de l'expérience utilisateur",
                image: "/images/avatar3.jpg"
              }
            ].map((membre, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/90 dark:hover:bg-white/10 transition-all duration-300 shadow-lg dark:shadow-none"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-miikaty to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl text-white">
                  {membre.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{membre.name}</h3>
                <p className="text-miikaty font-semibold mb-3">{membre.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{membre.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Chiffres Clés */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Nos Chiffres Clés</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              L'impact de notre mission en quelques chiffres
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { nombre: "2M+", label: "Utilisateurs actifs" },
              { nombre: "500K+", label: "Transactions/mois" },
              { nombre: "15", label: "Pays couverts" },
              { nombre: "24/7", label: "Support client" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-miikaty mb-2">{stat.nombre}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-20 px-4 bg-white/50 dark:bg-white/5">
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Rejoignez l'Aventure</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Vous souhaitez faire partie de notre mission ? Découvrez nos opportunités de carrière
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-miikaty hover:bg-miikaty-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Voir nos offres
              </button>
              <button className="border-2 border-miikaty text-miikaty hover:bg-miikaty hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Nous contacter
              </button>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
} 