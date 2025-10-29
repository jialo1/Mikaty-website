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
      <footer className="bg-miikaty-dark text-white pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
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
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">À propos</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/about" className="hover:text-miikaty transition">Qui sommes-nous</a></li>
              <li><a href="/about" className="hover:text-miikaty transition">Notre mission</a></li>
              <li><a href="/carrieres" className="hover:text-miikaty transition">Carrières</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">Produits</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/services" className="hover:text-miikaty transition">Application mobile</a></li>
              <li><a href="/tarifs" className="hover:text-miikaty transition">Tarifs</a></li>
              <li><a href="/securite" className="hover:text-miikaty transition">Sécurité</a></li>
              <li><a href="/faq" className="hover:text-miikaty transition">FAQ</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <div className="font-bold mb-4 text-miikaty">Support</div>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="/contact" className="hover:text-miikaty transition">Contact</a></li>
              <li><a href="/aide" className="hover:text-miikaty transition">Centre d'aide</a></li>
              <li><a href="/support" className="hover:text-miikaty transition">Assistance 24/7</a></li>
            </ul>
          </div>
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
    </div>
  );
}