import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "../translations";

export default function FAQ({ lang = 'fr' }) {
  const t = useTranslation(lang);
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