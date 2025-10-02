import React from 'react';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#1a1a1a] dark:to-[#2d1a4d]">
      <div className="pt-28 pb-20 bg-gradient-to-b from-[#f8f7ff] to-white dark:from-[#563491] dark:to-[#2d1a4d]">
        <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Termes et Conditions
          </h1>

          <div className="bg-white dark:bg-white/10 dark:backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-none text-gray-900 dark:text-white space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Bienvenue sur Mikaty. En utilisant notre application et nos services, vous acceptez les présentes conditions générales d'utilisation. Veuillez les lire attentivement avant d'utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">2. Acceptation des Conditions</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                En accédant et en utilisant Mikaty, vous acceptez d'être lié par ces termes et conditions. Si vous n'acceptez pas ces termes, veuillez ne pas utiliser nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">3. Utilisation du Service</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Mikaty est une plateforme de paiement mobile qui vous permet de :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li>Envoyer et recevoir de l'argent</li>
                <li>Payer vos factures</li>
                <li>Recharger votre crédit téléphonique</li>
                <li>Effectuer des paiements en ligne et sans contact</li>
                <li>Gérer vos finances avec les poches</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">4. Compte Utilisateur</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Pour utiliser Mikaty, vous devez :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li>Créer un compte avec des informations exactes et à jour</li>
                <li>Maintenir la sécurité de votre compte et de votre mot de passe</li>
                <li>Être âgé d'au moins 18 ans ou avoir l'autorisation d'un tuteur légal</li>
                <li>Ne pas partager votre compte avec d'autres personnes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">5. Sécurité et Confidentialité</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Nous prenons la sécurité de vos données très au sérieux. Vos informations personnelles et financières sont protégées par un chiffrement de bout en bout. Toutes vos données sont traitées de manière confidentielle et sécurisée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">6. Transactions Financières</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Toutes les transactions effectuées via Mikaty sont soumises aux conditions suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li>Les transactions sont généralement instantanées</li>
                <li>Des frais peuvent s'appliquer selon le type de transaction</li>
                <li>Vous êtes responsable de vérifier les détails avant de confirmer une transaction</li>
                <li>Les transactions ne peuvent être annulées une fois confirmées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">7. Frais et Tarifs</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Les transferts entre utilisateurs Mikaty sont gratuits. D'autres services peuvent être soumis à des frais. Consultez notre page <a href="/tarifs" className="text-miikaty hover:underline">Tarifs</a> pour plus d'informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">8. Utilisation Acceptable</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Vous vous engagez à ne pas utiliser Mikaty pour :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li>Des activités illégales ou frauduleuses</li>
                <li>Le blanchiment d'argent ou le financement du terrorisme</li>
                <li>Violer les droits d'autrui</li>
                <li>Envoyer du spam ou du contenu malveillant</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">9. Limitation de Responsabilité</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Mikaty ne peut être tenu responsable des pertes indirectes, accidentelles ou consécutives résultant de l'utilisation ou de l'impossibilité d'utiliser nos services, sauf dans les cas prévus par la loi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">10. Modifications des Conditions</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Les modifications seront effectives dès leur publication sur cette page. Nous vous recommandons de consulter régulièrement cette page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">11. Résiliation</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Nous nous réservons le droit de suspendre ou de résilier votre compte en cas de violation de ces conditions ou pour toute autre raison légitime, avec ou sans préavis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">12. Loi Applicable</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Ces conditions sont régies par les lois françaises et sénégalaises. Tout litige sera soumis à la juridiction exclusive des tribunaux compétents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">13. Contact</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Pour toute question concernant ces termes et conditions, veuillez nous contacter via notre <a href="/contact" className="text-miikaty hover:underline">page de contact</a> ou par email à <a href="mailto:legal@mikaty.com" className="text-miikaty hover:underline">legal@mikaty.com</a>.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/20">
              <p className="text-gray-500 dark:text-white/60 text-sm text-center">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </motion.div>
        </div>
      </div>

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

