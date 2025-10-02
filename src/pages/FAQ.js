import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("compte");
  const [openQuestions, setOpenQuestions] = useState({});

  useEffect(() => {
    // Délai pour s'assurer que le composant est complètement monté
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
    { id: "compte", name: "Compte", icon: "👤" },
    { id: "carte", name: "Carte", icon: "💳" },
    { id: "virements", name: "Virements", icon: "🔄" },
    { id: "paiements", name: "Paiements", icon: "💸" },
    { id: "factures", name: "Factures", icon: "📋" },
    { id: "deposer", name: "Déposer de l'argent", icon: "💰" },
    { id: "envoyer", name: "Envoyer de l'argent", icon: "📤" },
    { id: "economiser", name: "Economiser de l'argent", icon: "🏦" },
    { id: "mshop", name: "MShop", icon: "🛍️" }
  ];

  const faqData = {
    compte: [
      {
        id: "compte1",
        question: "Comment ouvrir un compte ?",
        answer: "Téléchargez l'application Mikaty, entrez votre numéro de téléphone, recevez un code de vérification par SMS, et créez votre mot de passe. C'est simple et rapide !"
      },
      {
        id: "compte2",
        question: "Quels documents faut-il pour valider mon identité ?",
        answer: "Pour valider votre identité, vous aurez besoin de votre carte d'identité nationale, votre passeport ou votre permis de conduire. Une photo de vous sera également requise."
      },
      {
        id: "compte3",
        question: "Ma pièce a été refusée, pourquoi ?",
        answer: "Votre pièce peut être refusée si elle est illisible, expirée, ou si les informations ne correspondent pas à celles de votre compte. Vérifiez que votre document est valide et lisible."
      },
      {
        id: "compte4",
        question: "Comment mettre à jour mes infos d'identification ?",
        answer: "Allez dans Paramètres > Profil > Informations personnelles. Vous pourrez modifier vos coordonnées et télécharger de nouveaux documents d'identité si nécessaire."
      },
      {
        id: "compte5",
        question: "Mon compte est bloqué, comment le débloquer ?",
        answer: "Contactez notre support client via l'application ou par téléphone. Nous vous aiderons à identifier la cause du blocage et à le résoudre rapidement."
      },
      {
        id: "compte6",
        question: "Comment modifier mon code de sécurité ?",
        answer: "Allez dans Paramètres > Sécurité > Code de sécurité. Vous devrez entrer votre ancien code puis définir un nouveau code à 4 chiffres."
      },
      {
        id: "compte7",
        question: "Quels sont les frais liés au compte ?",
        answer: "L'ouverture et la tenue de compte sont gratuites. Seules certaines transactions (recharges, transferts externes) peuvent avoir des frais minimes."
      }
    ],
    carte: [
      {
        id: "carte1",
        question: "Comment obtenir une carte ?",
        answer: "Une fois votre compte validé, vous pouvez commander votre carte depuis l'application. Elle sera livrée à votre adresse en 3-5 jours ouvrés."
      },
      {
        id: "carte2",
        question: "Combien coûte la carte ?",
        answer: "La première carte est gratuite. En cas de perte ou de vol, une nouvelle carte coûte 1000 FCFA. La livraison est incluse dans le prix."
      },
      {
        id: "carte3",
        question: "Comment activer ma carte ?",
        answer: "Votre carte s'active automatiquement dès réception. Vous recevrez un SMS de confirmation. Vous pouvez aussi l'activer manuellement dans l'application."
      },
      {
        id: "carte4",
        question: "Comment bloquer/débloquer ma carte ?",
        answer: "Dans l'application, allez dans Carte > Gérer ma carte. Vous pouvez bloquer temporairement votre carte et la débloquer quand vous le souhaitez."
      },
      {
        id: "carte5",
        question: "Comment remplacer ma carte ?",
        answer: "En cas de perte ou de vol, bloquez immédiatement votre carte dans l'application, puis commandez une nouvelle carte. L'ancienne sera automatiquement désactivée."
      },
      {
        id: "carte6",
        question: "Quels sont les plafonds de ma carte ?",
        answer: "Les plafonds varient selon votre niveau de vérification : 50 000 FCFA/jour pour les comptes basiques, 200 000 FCFA/jour pour les comptes vérifiés, et 500 000 FCFA/jour pour les comptes premium."
      }
    ],
    virements: [
      {
        id: "virement1",
        question: "Comment recharger ma carte par virement bancaire ?",
        answer: "Utilisez votre RIB Mikaty pour recevoir des virements. Allez dans Recharger > Virement bancaire pour obtenir vos coordonnées bancaires complètes."
      },
      {
        id: "virement2",
        question: "Quels sont les délais pour recevoir un virement ?",
        answer: "Les virements SEPA sont généralement traités en 24-48h ouvrées. Les virements internes entre banques sénégalaises sont généralement instantanés ou traités le jour même."
      },
      {
        id: "virement3",
        question: "Puis-je recevoir un virement de l'étranger ?",
        answer: "Oui, vous pouvez recevoir des virements internationaux. Les délais varient selon le pays d'origine (2-5 jours ouvrés) et des frais de change peuvent s'appliquer."
      },
      {
        id: "virement4",
        question: "Puis-je envoyer de l'argent vers un compte bancaire ?",
        answer: "Oui, vous pouvez envoyer de l'argent vers un compte bancaire sénégalais ou européen. Les frais et délais varient selon la destination et le montant."
      },
      {
        id: "virement5",
        question: "Comment obtenir un RIB ?",
        answer: "Votre RIB est disponible dans l'application sous Recharger > Virement bancaire. Vous pouvez le télécharger ou le copier pour le partager."
      }
    ],
    paiements: [
      {
        id: "paiement1",
        question: "Comment faire un paiement en ligne ?",
        answer: "Sélectionnez l'option 'Paiement en ligne' dans l'application, entrez les informations de votre carte, confirmez le montant et validez. Vous recevrez une confirmation par SMS."
      },
      {
        id: "paiement2",
        question: "Comment faire un paiement TPE ?",
        answer: "Présentez votre carte Mikaty au terminal de paiement, entrez votre code secret à 4 chiffres, et confirmez le montant. Le paiement sera traité instantanément."
      },
      {
        id: "paiement3",
        question: "Comment annuler un abonnement ?",
        answer: "Allez dans Paiements > Abonnements actifs, sélectionnez l'abonnement à annuler et confirmez. L'annulation prendra effet à la fin de la période en cours."
      },
      {
        id: "paiement4",
        question: "Comment fonctionne le token Mikaty ?",
        answer: "Le token Mikaty est un code de sécurité unique généré pour chaque transaction. Il est envoyé par SMS et doit être saisi pour confirmer les opérations sensibles."
      }
    ],
    factures: [
      {
        id: "facture1",
        question: "Comment acheter du crédit téléphonique ?",
        answer: "Allez dans Factures > Téléphonie, sélectionnez votre opérateur, entrez votre numéro et le montant de recharge. Le crédit sera ajouté instantanément."
      },
      {
        id: "facture2",
        question: "Comment acheter une recharge Rapido ?",
        answer: "Dans Factures > Transport, sélectionnez Rapido, entrez votre numéro de carte et le montant. La recharge sera disponible immédiatement sur votre carte."
      },
      {
        id: "facture3",
        question: "Comment acheter une recharge Woyofal ?",
        answer: "Sélectionnez Woyofal dans Factures > Transport, entrez votre numéro de carte et le montant. Votre carte sera rechargée instantanément."
      },
      {
        id: "facture4",
        question: "Comment régler sa facture Senelec ?",
        answer: "Allez dans Factures > Électricité, sélectionnez Senelec, entrez votre numéro de compteur et le montant à payer. Le paiement sera traité en temps réel."
      },
      {
        id: "facture5",
        question: "Comment régler sa facture Sen' Eau ?",
        answer: "Dans Factures > Eau, sélectionnez Sen' Eau, entrez votre numéro de compteur et le montant. Votre facture sera réglée immédiatement."
      }
    ],
    deposer: [
      {
        id: "deposer1",
        question: "Comment recharger ma carte par Wave ?",
        answer: "Allez dans Recharger > Wave, entrez votre numéro Wave et le montant. Confirmez la transaction et votre carte sera rechargée instantanément."
      },
      {
        id: "deposer2",
        question: "Comment recharger ma carte par Orange money ?",
        answer: "Sélectionnez Orange Money dans Recharger, entrez votre numéro Orange et le montant. Validez la transaction pour recharger votre carte."
      },
      {
        id: "deposer3",
        question: "Comment recharger ma carte par Yas ?",
        answer: "Dans Recharger > Yas, entrez votre numéro Yas et le montant. Confirmez la transaction pour recharger votre carte Mikaty."
      },
      {
        id: "deposer4",
        question: "Comment recharger ma carte par virement bancaire ?",
        answer: "Utilisez votre RIB Mikaty pour recevoir des virements. Les fonds seront automatiquement ajoutés à votre carte une fois le virement traité par votre banque."
      },
      {
        id: "deposer5",
        question: "Comment recharger ma carte par mon coffre ?",
        answer: "Allez dans Coffre > Transférer vers carte, sélectionnez le montant et confirmez. L'argent sera instantanément transféré de votre coffre vers votre carte."
      },
      {
        id: "deposer6",
        question: "Puis-je recharger ma carte via mon RIB Mikaty ?",
        answer: "Oui, vous pouvez utiliser votre RIB Mikaty pour recevoir des virements qui rechargeront automatiquement votre carte une fois traités."
      },
      {
        id: "deposer7",
        question: "Puis-je recevoir un virement de l'étranger ?",
        answer: "Oui, vous pouvez recevoir des virements internationaux sur votre RIB Mikaty. Les délais et frais varient selon le pays d'origine."
      }
    ],
    envoyer: [
      {
        id: "envoyer1",
        question: "Comment envoyer de l'argent vers Wave ?",
        answer: "Allez dans Envoyer > Wave, entrez le numéro Wave du destinataire et le montant. Confirmez la transaction et l'argent sera envoyé instantanément."
      },
      {
        id: "envoyer2",
        question: "Comment envoyer de l'argent vers Orange ?",
        answer: "Sélectionnez Orange dans Envoyer, entrez le numéro Orange du destinataire et le montant. Validez la transaction pour envoyer l'argent."
      },
      {
        id: "envoyer3",
        question: "Comment envoyer de l'argent vers Yas ?",
        answer: "Dans Envoyer > Yas, entrez le numéro Yas du destinataire et le montant. Confirmez la transaction pour envoyer l'argent."
      },
      {
        id: "envoyer4",
        question: "Quels sont les frais ?",
        answer: "Les transferts vers Wave, Orange et Yas sont gratuits pour les montants jusqu'à 50 000 FCFA. Au-delà, des frais de 100 FCFA s'appliquent."
      },
      {
        id: "envoyer5",
        question: "Comment annuler un transfert ?",
        answer: "Les transferts sont instantanés et ne peuvent pas être annulés. En cas d'erreur, contactez immédiatement notre support client."
      },
      {
        id: "envoyer6",
        question: "Puis-je envoyer de l'argent à l'étranger ?",
        answer: "Oui, vous pouvez envoyer de l'argent à l'étranger. Les délais, frais et limites varient selon le pays de destination."
      }
    ],
    economiser: [
      {
        id: "economiser1",
        question: "Qu'est-ce qu'un coffre ?",
        answer: "Un coffre est un compte d'épargne séparé de votre carte principale. Il vous permet de mettre de l'argent de côté avec un taux d'intérêt avantageux."
      },
      {
        id: "economiser2",
        question: "Comment programmer des dépôts réguliers ?",
        answer: "Allez dans Coffre > Programmer, choisissez la fréquence (hebdomadaire, mensuelle), le montant et la date de début. Les dépôts seront automatiques."
      },
      {
        id: "economiser3",
        question: "Comment retirer de l'argent de mon coffre ?",
        answer: "Dans Coffre > Retirer, sélectionnez le montant et confirmez. L'argent sera transféré vers votre carte principale en quelques secondes."
      },
      {
        id: "economiser4",
        question: "Comment bloquer/débloquer un coffre ?",
        answer: "Allez dans Coffre > Gérer > Bloquer/Débloquer. Un coffre bloqué ne peut pas recevoir de nouveaux dépôts mais permet toujours les retraits."
      }
    ],
    mshop: [
      {
        id: "mshop1",
        question: "C'est quoi MShop ?",
        answer: "MShop est notre plateforme de commerce en ligne intégrée à Mikaty. Elle permet aux commerçants de créer des boutiques et aux clients de faire des achats en ligne."
      },
      {
        id: "mshop2",
        question: "Quels sont les frais ?",
        answer: "MShop propose différents forfaits : gratuit pour les débutants, 2% de commission sur les ventes pour les boutiques standard, et 1.5% pour les boutiques premium."
      },
      {
        id: "mshop3",
        question: "Comment créer ma boutique ?",
        answer: "Allez dans MShop > Créer ma boutique, remplissez les informations requises, téléchargez vos documents et attendez la validation (24-48h)."
      },
      {
        id: "mshop4",
        question: "Comment suivre mes commandes ?",
        answer: "Dans votre tableau de bord MShop, allez dans Commandes pour voir toutes vos ventes, leur statut et gérer les expéditions."
      },
      {
        id: "mshop5",
        question: "Comment recevoir les paiements de mes clients ?",
        answer: "Les paiements de vos clients sont automatiquement crédités sur votre compte Mikaty. Vous pouvez les transférer vers votre carte ou votre coffre."
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
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                <li><a href="/cgu" className="hover:text-miikaty transition">Conditions Générales d'Utilisation</a></li>
                <li><a href="/termes-et-conditions" className="hover:text-miikaty transition">Termes et Conditions</a></li>
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