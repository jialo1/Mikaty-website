import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { useTranslation } from "../translations";

export default function Careers({ lang = 'fr' }) {
  // const t = useTranslation(lang); // TODO: Ajouter les traductions
  const [, setIsLoaded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const locations = [
    { id: "all", name: "Tous les lieux" },
    { id: "senegal", name: "Sénégal" },
    { id: "remote", name: "Télétravail" }
  ];

  const jobTypes = [
    { id: "all", name: "Tous les types" },
    { id: "full-time", name: "Temps plein" },
    { id: "part-time", name: "Temps partiel" },
    { id: "contract", name: "Contrat" }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Développeur Full Stack",
      location: "Sénégal",
      type: "Temps plein",
      department: "Ingénierie",
      description: "Rejoignez notre équipe d'ingénierie pour développer les solutions financières de demain.",
      requirements: ["3+ ans d'expérience", "React, Node.js", "Base de données", "API REST"],
      posted: "Il y a 2 jours"
    },
    {
      id: 2,
      title: "Product Manager",
      location: "Sénégal",
      type: "Temps plein",
      department: "Produit",
      description: "Dirigez la stratégie produit et l'évolution de nos services financiers.",
      requirements: ["5+ ans d'expérience", "Gestion de produit", "Analytics", "Leadership"],
      posted: "Il y a 1 semaine"
    },
    {
      id: 3,
      title: "UX/UI Designer",
      location: "Télétravail",
      type: "Temps plein",
      department: "Design",
      description: "Créez des expériences utilisateur exceptionnelles pour nos applications mobiles et web.",
      requirements: ["3+ ans d'expérience", "Figma, Sketch", "Design mobile", "Prototypage"],
      posted: "Il y a 3 jours"
    },
    {
      id: 4,
      title: "Analyste Financier",
      location: "Sénégal",
      type: "Temps plein",
      department: "Finance",
      description: "Analysez les données financières et contribuez à la stratégie de l'entreprise.",
      requirements: ["2+ ans d'expérience", "Excel avancé", "Analyse financière", "Reporting"],
      posted: "Il y a 5 jours"
    },
    {
      id: 5,
      title: "Spécialiste Marketing Digital",
      location: "Télétravail",
      type: "Temps partiel",
      department: "Marketing",
      description: "Développez et exécutez des campagnes marketing digital pour promouvoir Mikaty.",
      requirements: ["2+ ans d'expérience", "Google Ads, Facebook", "Analytics", "Créativité"],
      posted: "Il y a 1 semaine"
    },
    {
      id: 6,
      title: "Développeur Mobile",
      location: "Sénégal",
      type: "Contrat",
      department: "Ingénierie",
      description: "Développez nos applications mobiles iOS et Android avec les dernières technologies.",
      requirements: ["4+ ans d'expérience", "React Native, Flutter", "iOS, Android", "API Integration"],
      posted: "Il y a 2 semaines"
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const locationMatch = selectedLocation === "all" || 
      (selectedLocation === "senegal" && job.location === "Sénégal") ||
      (selectedLocation === "remote" && job.location === "Télétravail");
    
    const typeMatch = selectedType === "all" || 
      (selectedType === "full-time" && job.type === "Temps plein") ||
      (selectedType === "part-time" && job.type === "Temps partiel") ||
      (selectedType === "contract" && job.type === "Contrat");
    
    return locationMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#2d1a4d]">
      {/* Hero Section */}
      <div className="pt-28 pb-8 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumbs */}
            <nav className="mb-3">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <span className="hover:text-[#563491] cursor-pointer">Aperçu</span>
                <span className="mx-2">&gt;</span>
                <span className="text-[#563491]">Toutes les offres</span>
              </div>
            </nav>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#563491] dark:text-[#d8a5ff]">
              Toutes les offres d'emploi chez Mikaty
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <section className="pb-8 px-4 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Rechercher un poste ou un mot-clé"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#563491] focus:border-transparent"
                  />
                </div>
              </div>
              
              {/* Location Dropdown */}
              <div className="md:w-48">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#563491] focus:border-transparent appearance-none"
                  >
                    {locations.map(location => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Type Dropdown */}
              <div className="md:w-48">
                <div className="relative">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#563491] focus:border-transparent appearance-none"
                  >
                    {jobTypes.map(type => (
                      <option key={type.id} value={type.id}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4 bg-white dark:bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-white/10 rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span className="flex items-center gap-1">
                            <span className="w-4 h-3 bg-green-500 rounded-sm"></span>
                            {job.location}
                          </span>
                          {job.type !== "Temps plein" && (
                            <span className="text-gray-500 dark:text-gray-400">
                              {job.type}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Aucun résultat trouvé
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Nous n'avons pas trouvé ce que vous cherchiez. Vous pouvez consulter d'autres offres d'emploi chez Mikaty.
                </p>
                <button
                  onClick={() => {
                    setSelectedLocation("all");
                    setSelectedType("all");
                  }}
                  className="px-6 py-3 bg-[#563491] text-white rounded-lg hover:bg-[#4a2c7a] transition-colors"
                >
                  Voir toutes les offres
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Candidature spontanée
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Vous ne trouvez pas le poste qui vous correspond ? Rejoignez notre équipe.
              </p>
              <button className="px-6 py-3 bg-[#563491] text-white rounded-lg hover:bg-[#4a2c7a] transition-colors font-medium">
                Envoyer ma candidature
              </button>
            </motion.div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/images/logomauve.svg" alt="Logo Mikaty" className="h-8 mb-4" />
              <p className="text-gray-400 text-sm">
                Révolutionner la finance digitale en Afrique et dans le monde.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produits</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/services" className="hover:text-white transition">Services</a></li>
                <li><a href="/micard" className="hover:text-white transition">MiCard</a></li>
                <li><a href="/about" className="hover:text-white transition">À propos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="/carrieres" className="hover:text-white transition">Carrières</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/termes-et-conditions" className="hover:text-white transition">Termes et Conditions</a></li>
                <li><a href="/cgu" className="hover:text-white transition">CGU</a></li>
                <li><a href="/mentions-legales" className="hover:text-white transition">Mentions Légales</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Mikaty. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}