import React from "react";

export default function HeroSection2() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden font-sans">
      {/* Points de fond */}
      <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-end pointer-events-none">
        <div className="w-2/3 h-2/3 bg-[#7C3AED] opacity-80 rounded-3xl absolute right-0 top-24" style={{zIndex:1, clipPath:'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'}}></div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          {[...Array(8)].map((_,i) => <span key={i} className="block w-2 h-2 bg-white/40 rounded-full"></span>)}
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative z-20">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-left md:text-left text-center">
          <h1 className="text-7xl font-extrabold text-miikaty-dark mb-6 drop-shadow-lg md:text-left text-center leading-tight" style={{fontFamily:'Inter, sans-serif'}}>
            <span className="bg-gradient-to-r from-miikaty to-miikaty-dark bg-clip-text text-transparent">
              Payez.<br />Envoyez.<br />Recevez.
            </span>
          </h1>
          <p className="text-base text-miikaty-dark/90 mb-8 md:text-left text-center" style={{fontFamily:'Inter, sans-serif'}}>Transférez de l’argent, payez vos factures, rechargez du crédit, partout, instantanément, sans compte bancaire.</p>
          <div className="flex flex-col md:flex-row md:justify-start justify-center gap-4 mt-8">
            <a href="https://play.google.com/store/apps/details?id=ton.app" target="_blank" rel="noopener noreferrer">
              <img src="/images/google-play-badge.svg" alt="Disponible sur Google Play" className="h-12" />
            </a>
            <a href="https://apps.apple.com/app/idtonappid" target="_blank" rel="noopener noreferrer">
              <img src="/images/app-store-badge.svg" alt="Disponible sur l'App Store" className="h-12" />
            </a>
          </div>
        </div>
        {/* Image à droite */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10">
          <img src="/images/hero-yellow-man.png" alt="Sunshine man" className="w-[28rem] md:w-[40rem] rounded-3xl object-cover bg-transparent" />
        </div>
      </div>
    </section>
  );
} 