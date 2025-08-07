import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (questionId) => {
    setOpenQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const categories = [
    { id: "general", name: "Général", icon: "🏠" },
    { id: "account", name: "Compte", icon: "👤" },
    { id: "payments", name: "Paiements", icon: "💳" },
    { id: "security", name: "Sécurité", icon: "🔒" },
    { id: "technical", name: "Technique", icon: "⚙️" }
  ];

  const faqData = {
    general: [
      {
        id: "gen1",
        question: "Qu'est-ce que Mikaty ?",
        answer: "Mikaty est une application de paiement mobile qui permet de transférer de l'argent, payer des factures, acheter du crédit mobile et bien plus encore. Notre mission est de rendre les services financiers accessibles à tous en Afrique."
      },
      {
        id: "gen2",
        question: "Mikaty est-il gratuit ?",
        answer: "L'application Mikaty est gratuite à télécharger et à utiliser. Certaines transactions peuvent avoir des frais minimes, mais les transferts entre utilisateurs Mikaty sont généralement gratuits."
      },
      {
        id: "gen3",
        question: "Dans quels pays Mikaty est-il disponible ?",
        answer: "Mikaty est actuellement disponible dans 15 pays d'Afrique, incluant le Sénégal, la Côte d'Ivoire, le Mali, le Burkina Faso, et d'autres pays de la région."
      },
      {
        id: "gen4",
        question: "Comment contacter le support Mikaty ?",
        answer: "Vous pouvez nous contacter via notre page Contact, par email à support@mikaty.com, ou par téléphone au +221 33 XXX XX XX. Notre équipe est disponible 24/7."
      }
    ],
    account: [
      {
        id: "acc1",
        question: "Comment créer un compte Mikaty ?",
        answer: "Téléchargez l'application, entrez votre numéro de téléphone, recevez un code de vérification par SMS, et créez votre mot de passe. C'est tout !"
      },
      {
        id: "acc2",
        question: "Faut-il un compte bancaire pour utiliser Mikaty ?",
        answer: "Non, vous n'avez pas besoin de compte bancaire. Mikaty fonctionne uniquement avec votre numéro de téléphone mobile."
      },
      {
        id: "acc3",
        question: "Comment modifier mes informations personnelles ?",
        answer: "Allez dans Paramètres > Profil dans l'application pour modifier vos informations personnelles. Certaines modifications peuvent nécessiter une vérification."
      },
      {
        id: "acc4",
        question: "Comment supprimer mon compte ?",
        answer: "Contactez notre support client pour demander la suppression de votre compte. Assurez-vous d'avoir retiré tous vos fonds avant la suppression."
      }
    ],
    payments: [
      {
        id: "pay1",
        question: "Comment recharger mon compte Mikaty ?",
        answer: "Vous pouvez recharger via nos partenaires (Orange Money, Wave, etc.), par carte bancaire, ou par virement mobile. Allez dans l'onglet 'Recharger' de l'application."
      },
      {
        id: "pay2",
        question: "Quels sont les frais de transaction ?",
        answer: "Les transferts entre utilisateurs Mikaty sont gratuits. Les autres opérations (recharges, paiements de factures) ont des frais minimes, généralement entre 50 et 200 FCFA."
      },
      {
        id: "pay3",
        question: "Comment payer mes factures d'électricité et d'eau ?",
        answer: "Allez dans l'onglet 'Paiements' > 'Factures', sélectionnez votre fournisseur, entrez votre numéro de compteur et le montant à payer."
      },
      {
        id: "pay4",
        question: "Combien de temps pour un transfert d'argent ?",
        answer: "Les transferts entre utilisateurs Mikaty sont instantanés. Les transferts vers des comptes bancaires prennent généralement 24-48 heures."
      },
      {
        id: "pay5",
        question: "Comment acheter du crédit mobile ?",
        answer: "Allez dans 'Paiements' > 'Crédit mobile', sélectionnez votre opérateur, entrez le numéro et le montant de crédit souhaité."
      }
    ],
    security: [
      {
        id: "sec1",
        question: "Mes données sont-elles sécurisées ?",
        answer: "Absolument. Mikaty utilise les technologies de cryptage les plus avancées pour protéger vos données personnelles et vos transactions."
      },
      {
        id: "sec2",
        question: "Que faire si j'ai perdu mon téléphone ?",
        answer: "Contactez immédiatement notre support pour bloquer votre compte. Vous pourrez le réactiver avec un nouveau téléphone après vérification."
      },
      {
        id: "sec3",
        question: "Comment changer mon mot de passe ?",
        answer: "Allez dans Paramètres > Sécurité > Changer le mot de passe. Vous devrez entrer votre mot de passe actuel puis le nouveau."
      },
      {
        id: "sec4",
        question: "Mikaty est-il réglementé ?",
        answer: "Oui, Mikaty est agréé par les autorités de régulation financière dans tous les pays où nous opérons, garantissant la sécurité de vos fonds."
      }
    ],
    technical: [
      {
        id: "tech1",
        question: "L'application ne se lance pas, que faire ?",
        answer: "Vérifiez votre connexion internet, redémarrez l'application, ou réinstallez-la depuis l'App Store/Google Play. Si le problème persiste, contactez le support."
      },
      {
        id: "tech2",
        question: "Je ne reçois pas le code de vérification SMS",
        answer: "Vérifiez que votre numéro est correct, attendez quelques minutes, ou demandez un nouveau code. Assurez-vous d'avoir une couverture réseau."
      },
      {
        id: "tech3",
        question: "L'application est lente, comment l'améliorer ?",
        answer: "Fermez les autres applications, vérifiez votre connexion internet, ou mettez à jour l'application vers la dernière version disponible."
      },
      {
        id: "tech4",
        question: "Quelles sont les versions d'Android/iOS supportées ?",
        answer: "Mikaty nécessite Android 6.0+ ou iOS 12.0+. Assurez-vous que votre appareil est à jour pour une expérience optimale."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenu à gauche */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              >
                Questions <span className="text-miikaty">Fréquentes</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Trouvez rapidement les réponses à vos questions sur Mikaty
              </motion.p>
            </motion.div>
            
            {/* Espace pour image à droite */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center"
            >
              <div className="w-full h-96 bg-gradient-to-br from-miikaty/20 to-purple-600/20 rounded-2xl border-2 border-dashed border-miikaty/30 flex items-center justify-center">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <div className="text-4xl mb-2">📸</div>
                  <p className="text-lg">Votre image ici</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Catégories */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-miikaty text-white shadow-lg'
                    : 'bg-white/80 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-miikaty/10 dark:hover:bg-white/20'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-4">
            {faqData[activeCategory].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 dark:hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openQuestions[item.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-5 h-5 text-miikaty" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openQuestions[item.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Notre équipe est là pour vous aider. Contactez-nous directement !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-miikaty hover:bg-miikaty-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Nous contacter
              </Link>
              <Link 
                to="/services"
                className="border-2 border-miikaty text-miikaty hover:bg-miikaty hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos services
              </Link>
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
    </div>
  );
} 