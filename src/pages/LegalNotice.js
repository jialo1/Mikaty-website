import React from 'react';
import { motion } from 'framer-motion';

export default function LegalNotice() {
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
            Mentions Légales
          </h1>

          <div className="bg-white dark:bg-white/10 dark:backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg dark:shadow-none text-gray-900 dark:text-white space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">1. Éditeur du site</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Le site Mikaty est édité par :
              </p>
              <ul className="list-none text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li><strong>Raison sociale :</strong> MIikaty SASU</li>
                <li><strong>Forme juridique :</strong> Société par Actions Simplifiée Unipersonnelle</li>
                <li><strong>Capital social :</strong> 10 000 €</li>
                <li><strong>SIRET :</strong> 123 456 789 00012</li>
                <li><strong>RCS :</strong> Paris B 123 456 789</li>
                <li><strong>Numéro TVA :</strong> FR12 123456789</li>
                <li><strong>Siège social :</strong> 12 rue de la Fintech, 75000 Paris, France</li>
                <li><strong>Email :</strong> <a href="mailto:contact@mikaty.com" className="text-miikaty hover:underline">contact@mikaty.com</a></li>
                <li><strong>Téléphone :</strong> +33 (0)1 23 45 67 89</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">2. Directeur de la publication</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Le directeur de la publication est : <strong>M. [Nom du Directeur]</strong>, Président de MIikaty SASU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">3. Hébergement</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Le site est hébergé par :
              </p>
              <ul className="list-none text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li><strong>Hébergeur :</strong> Vercel Inc.</li>
                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-miikaty hover:underline">vercel.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">4. Propriété intellectuelle</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, etc.) est la propriété exclusive de MIikaty SASU, sauf mention contraire.
              </p>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de MIikaty SASU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">5. Marques et logos</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Les marques « Mikaty », « MIikaty », ainsi que tous les logos et visuels associés sont des marques déposées et protégées. Toute utilisation non autorisée de ces marques constitue une contrefaçon susceptible d'engager la responsabilité civile et pénale de son auteur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">6. Protection des données personnelles</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez de droits sur vos données personnelles. Pour plus d'informations, consultez notre <a href="/politique-de-confidentialite" className="text-miikaty hover:underline">Politique de Confidentialité</a>.
              </p>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mt-4">
                <strong>Responsable du traitement des données :</strong> MIikaty SASU<br/>
                <strong>Délégué à la protection des données :</strong> <a href="mailto:dpo@mikaty.com" className="text-miikaty hover:underline">dpo@mikaty.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">7. Cookies</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Ce site utilise des cookies pour améliorer votre expérience de navigation, analyser l'utilisation du site et personnaliser le contenu. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">8. Responsabilité</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                MIikaty SASU s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, MIikaty SASU ne peut garantir :
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li>L'exactitude, la précision ou l'exhaustivité des informations disponibles sur le site</li>
                <li>L'absence d'interruption ou d'erreur dans le fonctionnement du site</li>
                <li>L'absence de virus ou d'autres composants nuisibles</li>
              </ul>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mt-4">
                MIikaty SASU décline toute responsabilité en cas de dommages directs ou indirects résultant de l'accès au site ou de l'utilisation de celui-ci.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">9. Liens hypertextes</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Le site peut contenir des liens vers d'autres sites. MIikaty SASU n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La présence de ces liens ne crée aucune solidarité de responsabilité entre MIikaty SASU et les propriétaires de ces sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">10. Agrément et régulation</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                MIikaty est un établissement de paiement agréé et régulé par :
              </p>
              <ul className="list-none text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li><strong>Autorité de contrôle prudentiel et de résolution (ACPR)</strong></li>
                <li>4 Place de Budapest, CS 92459, 75436 Paris Cedex 09</li>
                <li>Numéro d'agrément : [À compléter]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">11. Médiation</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                En cas de litige, vous pouvez recourir à un médiateur de la consommation. Pour plus d'informations, contactez-nous à <a href="mailto:mediation@mikaty.com" className="text-miikaty hover:underline">mediation@mikaty.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">12. Loi applicable</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris, France.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-miikaty dark:text-white mb-4">13. Contact</h2>
              <p className="text-gray-700 dark:text-white/90 leading-relaxed mb-4">
                Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
              </p>
              <ul className="list-none text-gray-700 dark:text-white/90 space-y-2 ml-4">
                <li>📧 Email : <a href="mailto:contact@mikaty.com" className="text-miikaty hover:underline">contact@mikaty.com</a></li>
                <li>📱 Via notre <a href="/contact" className="text-miikaty hover:underline">page de contact</a></li>
                <li>📍 Adresse : 12 rue de la Fintech, 75000 Paris, France</li>
                <li>📞 Téléphone : +33 (0)1 23 45 67 89</li>
              </ul>
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

