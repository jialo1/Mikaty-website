import React from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      {/* Notre mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-miikaty mb-4">Notre mission</h2>
        <p className="text-miikaty-dark text-lg mb-2">Rendre la finance simple, accessible et sécurisée pour tous, partout, à tout moment.</p>
      </section>
      {/* Notre équipe */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-miikaty mb-4">Notre équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <img src="/images/avatar1.jpg" alt="Fatou D." className="w-28 h-28 rounded-full mb-4 object-cover" />
            <div className="font-bold text-miikaty-dark">Fatou D.</div>
            <div className="text-gray-500 text-sm">CEO & Fondatrice</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <img src="/images/avatar2.jpg" alt="Jean M." className="w-28 h-28 rounded-full mb-4 object-cover" />
            <div className="font-bold text-miikaty-dark">Jean M.</div>
            <div className="text-gray-500 text-sm">CTO</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <img src="/images/avatar3.jpg" alt="Awa S." className="w-28 h-28 rounded-full mb-4 object-cover" />
            <div className="font-bold text-miikaty-dark">Awa S.</div>
            <div className="text-gray-500 text-sm">CMO</div>
          </div>
        </div>
      </section>
      {/* Nos chiffres clés */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-miikaty mb-4">Nos chiffres clés</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-extrabold text-miikaty">2M+</div>
            <div className="text-gray-600">Utilisateurs</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-miikaty">500K+</div>
            <div className="text-gray-600">Transactions/mois</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-miikaty">15</div>
            <div className="text-gray-600">Pays couverts</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-miikaty">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </section>
      {/* Nos valeurs */}
      <section>
        <h2 className="text-3xl font-bold text-miikaty mb-4">Nos valeurs</h2>
        <ul className="list-disc pl-6 text-miikaty-dark text-lg space-y-2">
          <li>Transparence</li>
          <li>Innovation</li>
          <li>Accessibilité</li>
          <li>Sécurité</li>
          <li>Respect de la vie privée</li>
        </ul>
      </section>
      {/* Presse & Récompenses */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-miikaty mb-4">Presse & Récompenses</h2>
        <div className="flex flex-wrap gap-8 items-center mb-6">
          <img src="/images/forbes.png" alt="Forbes" className="h-10" />
          <img src="/images/jeuneafrique.png" alt="Jeune Afrique" className="h-10" />
          <img src="/images/award1.png" alt="Prix Fintech 2024" className="h-10" />
          <img src="/images/award2.png" alt="Prix Innovation" className="h-10" />
        </div>
        <ul className="list-disc pl-6 text-miikaty-dark text-lg space-y-2">
          <li><a href="#" className="text-miikaty underline">“MIikaty, la révolution du paiement mobile”</a> — Forbes</li>
          <li><a href="#" className="text-miikaty underline">“Une fintech qui change la donne en Afrique”</a> — Jeune Afrique</li>
          <li><a href="#" className="text-miikaty underline">Lauréat Prix Fintech 2024</a></li>
          <li><a href="#" className="text-miikaty underline">Prix Innovation 2023</a></li>
        </ul>
      </section>
    </div>
  );
} 