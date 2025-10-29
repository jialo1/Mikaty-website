import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { useTranslation } from "../translations";

export default function FAQ({ lang = 'fr' }) {
  // const t = useTranslation(lang); // TODO: Ajouter les traductions
  const [, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const categories = [
    { id: "general", name: "Général", icon: "ℹ️" },
    { id: "compte", name: "Compte", icon: "👤" },
    { id: "transferts", name: "Transferts", icon: "🔄" },
    { id: "micard", name: "MiCard", icon: "💳" },
    { id: "paiements", name: "Paiements", icon: "💸" },
    { id: "securite", name: "Sécurité", icon: "🔒" },
    { id: "frais", name: "Frais", icon: "💰" }
  ];

  const faqData = {
    general: [
      {
        id: "general1",
        question: "Qu'est-ce que Mikaty ?",
        answer: "Mikaty est une plateforme financière digitale qui révolutionne la façon dont les Sénégalais et les Africains gèrent leur argent. Nous offrons des services de transfert d'argent, de paiement, de carte virtuelle et bien plus encore, le tout depuis votre smartphone."
      },
      {
        id: "general2",
        question: "Mikaty est-il une banque ?",
        answer: "Mikaty est une institution de monnaie électronique agréée par la Banque Centrale des États de l'Afrique de l'Ouest (BCEAO). Nous offrons des services financiers sécurisés et conformes aux réglementations en vigueur."
      },
      {
        id: "general3",
        question: "Comment Mikaty est-il différent des autres services financiers ?",
        answer: "Mikaty se distingue par sa simplicité d'utilisation, ses frais compétitifs, sa sécurité de pointe et son approche centrée sur l'utilisateur. Nous n'avons pas de succursales physiques, ce qui nous permet d'offrir des services plus rapides et moins chers."
      },
      {
        id: "general4",
        question: "Dans quels pays Mikaty est-il disponible ?",
        answer: "Mikaty est actuellement disponible au Sénégal et nous étendons progressivement nos services à d'autres pays d'Afrique de l'Ouest. Restez connectés pour les annonces de nouveaux marchés."
      }
    ],
    compte: [
      {
        id: "compte1",
        question: "Comment ouvrir un compte Mikaty ?",
        answer: "Ouvrir un compte Mikaty est très simple : téléchargez l'application, entrez votre numéro de téléphone, vérifiez votre identité avec un code SMS, et créez votre mot de passe. Votre compte sera actif en quelques minutes."
      },
      {
        id: "compte2",
        question: "Quels documents sont nécessaires pour ouvrir un compte ?",
        answer: "Vous aurez besoin de votre carte d'identité nationale, d'un numéro de téléphone valide et d'une adresse email. Pour des limites plus élevées, vous devrez fournir des documents d'identité supplémentaires."
      },
      {
        id: "compte3",
        question: "Y a-t-il un âge minimum pour ouvrir un compte ?",
        answer: "Vous devez avoir au moins 18 ans pour ouvrir un compte Mikaty. Les mineurs peuvent utiliser Mikaty sous la supervision d'un tuteur légal."
      },
      {
        id: "compte4",
        question: "Puis-je avoir plusieurs comptes Mikaty ?",
        answer: "Non, un seul compte Mikaty est autorisé par personne. Cela garantit la sécurité et la conformité avec les réglementations anti-blanchiment."
      }
    ],
    transferts: [
      {
        id: "transfert1",
        question: "Comment envoyer de l'argent avec Mikaty ?",
        answer: "Pour envoyer de l'argent, ouvrez l'application, sélectionnez 'Envoyer', entrez le numéro de téléphone du destinataire, saisissez le montant et confirmez la transaction. L'argent arrive instantanément."
      },
      {
        id: "transfert2",
        question: "Puis-je envoyer de l'argent à des personnes qui n'ont pas Mikaty ?",
        answer: "Oui, vous pouvez envoyer de l'argent à n'importe qui au Sénégal, même s'ils n'ont pas encore Mikaty. Ils recevront un SMS avec les instructions pour récupérer l'argent."
      },
      {
        id: "transfert3",
        question: "Quels sont les délais de traitement des transferts ?",
        answer: "Les transferts entre utilisateurs Mikaty sont instantanés. Les transferts vers d'autres services peuvent prendre quelques minutes à quelques heures selon le service de destination."
      },
      {
        id: "transfert4",
        question: "Y a-t-il des limites sur les montants de transfert ?",
        answer: "Oui, il y a des limites quotidiennes et mensuelles qui dépendent du niveau de vérification de votre compte. Ces limites peuvent être augmentées en complétant votre profil."
      }
    ],
    micard: [
      {
        id: "micard1",
        question: "Qu'est-ce que MiCard ?",
        answer: "MiCard est notre carte virtuelle qui vous permet de payer en ligne et en magasin. Elle est liée à votre compte Mikaty et vous donne accès à vos fonds partout où les cartes sont acceptées."
      },
      {
        id: "micard2",
        question: "Comment obtenir une MiCard ?",
        answer: "La MiCard est disponible directement dans l'application Mikaty. Il suffit de la demander depuis votre tableau de bord et elle sera activée instantanément sur votre compte."
      },
      {
        id: "micard3",
        question: "MiCard est-elle acceptée partout ?",
        answer: "MiCard est acceptée partout où les cartes Visa sont acceptées, que ce soit en ligne ou dans les magasins physiques au Sénégal et à l'international."
      },
      {
        id: "micard4",
        question: "Puis-je retirer de l'argent avec MiCard ?",
        answer: "Oui, vous pouvez retirer de l'argent aux distributeurs automatiques qui acceptent les cartes Visa. Des frais peuvent s'appliquer selon l'établissement."
      }
    ],
    paiements: [
      {
        id: "paiement1",
        question: "Comment payer mes factures avec Mikaty ?",
        answer: "Dans l'application, sélectionnez 'Paiements', choisissez le type de facture (électricité, eau, téléphone, etc.), entrez vos informations et confirmez le paiement. C'est simple et sécurisé."
      },
      {
        id: "paiement2",
        question: "Quels types de factures puis-je payer ?",
        answer: "Vous pouvez payer vos factures d'électricité (Senelec), d'eau (SDE), de téléphone (Orange, Free, Expresso), d'internet et bien d'autres services."
      },
      {
        id: "paiement3",
        question: "Les paiements de factures sont-ils instantanés ?",
        answer: "La plupart des paiements de factures sont traités instantanément. Certains services peuvent prendre quelques minutes pour être confirmés."
      },
      {
        id: "paiement4",
        question: "Puis-je programmer des paiements automatiques ?",
        answer: "Oui, vous pouvez programmer des paiements automatiques pour vos factures récurrentes, ce qui vous évite les oublis et les frais de retard."
      }
    ],
    securite: [
      {
        id: "securite1",
        question: "Mon argent est-il en sécurité avec Mikaty ?",
        answer: "Absolument. Mikaty utilise un chiffrement de niveau bancaire et est conforme aux standards internationaux de sécurité. Vos fonds sont protégés par les meilleures technologies de sécurité."
      },
      {
        id: "securite2",
        question: "Que faire si je perds mon téléphone ?",
        answer: "Contactez immédiatement notre service client. Nous bloquerons votre compte et vous aiderons à le récupérer sur un nouveau téléphone. Votre argent reste en sécurité."
      },
      {
        id: "securite3",
        question: "Comment protéger mon compte Mikaty ?",
        answer: "Utilisez un mot de passe fort, activez l'authentification à deux facteurs, ne partagez jamais vos codes de vérification et déconnectez-vous toujours de l'application après utilisation."
      },
      {
        id: "securite4",
        question: "Mikaty partage-t-il mes informations personnelles ?",
        answer: "Non, Mikaty ne partage jamais vos informations personnelles avec des tiers sans votre consentement explicite. Nous respectons strictement votre vie privée et les réglementations sur la protection des données."
      }
    ],
    frais: [
      {
        id: "frais1",
        question: "Quels sont les frais de Mikaty ?",
        answer: "Mikaty offre des transferts gratuits entre utilisateurs Mikaty. Les autres services ont des frais compétitifs et transparents, affichés clairement avant chaque transaction."
      },
      {
        id: "frais2",
        question: "Y a-t-il des frais cachés ?",
        answer: "Non, Mikaty s'engage à la transparence totale. Tous les frais sont clairement affichés avant chaque transaction. Il n'y a jamais de frais cachés ou de surprises."
      },
      {
        id: "frais3",
        question: "Comment Mikaty gagne-t-il de l'argent ?",
        answer: "Mikaty gagne de l'argent grâce aux frais de transaction sur certains services, aux commissions sur les paiements de factures et aux services premium. Nous ne gagnons jamais d'argent sur vos dépôts."
      },
      {
        id: "frais4",
        question: "Puis-je voir l'historique de mes frais ?",
        answer: "Oui, vous pouvez consulter l'historique détaillé de tous vos frais dans la section 'Historique' de l'application, avec une répartition claire par type de transaction."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#2d1a4d]">

      {/* FAQ Content */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
            <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
              <div className="bg-white dark:bg-white/10 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Navigation</h3>
                <nav className="space-y-2">
            {categories.map((category) => (
                    <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                  activeCategory === category.id
                          ? 'bg-[#563491] text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5'
                }`}
              >
                      <span className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                {category.name}
                      </span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#563491] dark:text-[#d8a5ff] mb-4">
                  Questions fréquemment posées - {categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Questions que les gens nous posent souvent :
                </p>
          </div>

              {/* FAQ Questions */}
              <div className="space-y-6">
                {faqData[activeCategory]?.map((item, index) => (
              <motion.div
                key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-white/10 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                      <h3 className="text-lg font-semibold text-[#563491] dark:text-[#d8a5ff] pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openQuestions[item.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                        <svg className="w-6 h-6 text-[#563491]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: openQuestions[item.id] ? 'auto' : 0,
                        opacity: openQuestions[item.id] ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.answer}
                        </p>
                      </div>
                    </motion.div>
              </motion.div>
            ))}
          </div>

              {/* Contact Support */}
              <div className="mt-16 text-center">
                <div className="bg-[#f8f7ff] dark:bg-white/5 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Vous ne trouvez pas votre question ?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Notre équipe support est disponible 24h/24 pour vous aider
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                      className="px-8 py-3 bg-[#563491] text-white rounded-lg hover:bg-[#4a2c7a] transition-colors font-semibold"
              >
                Nous contacter
              </Link>
                    <a 
                      href="mailto:support@mikaty.com" 
                      className="px-8 py-3 border-2 border-[#563491] text-[#563491] rounded-lg hover:bg-[#563491] hover:text-white transition-colors font-semibold"
                    >
                      support@mikaty.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.402 3.635 1.37 2.668 2.337 2.396 3.51 2.338 4.788.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.33 2.45 1.297 3.417.967.967 2.14 1.239 3.417 1.297C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.33 3.417-1.297.967-.967 1.239-2.14 1.297-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.33-2.45-1.297-3.417-.967-.967-2.14-1.239-3.417-1.297C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
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