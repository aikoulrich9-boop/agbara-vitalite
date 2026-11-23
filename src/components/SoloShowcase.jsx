import React from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export default function SoloShowcase({ onDirectOrder }) {
  const scrollToBoutique = () => {
    document.getElementById('produits')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bouteille-solo" className="relative py-14 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Ambient Lighting Orbs for Glass Refraction */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-agbara-gold/15 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Glassmorphic Showcase Card */}
      <div 
        className="relative rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-12 lg:p-14 overflow-hidden transition-all duration-700 shadow-[0_25px_60px_rgba(0,0,0,0.65)]"
        style={{
          background: 'linear-gradient(165deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 65%, rgba(18, 9, 5, 0.6) 100%)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), inset 0 1px 2px rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* Subtle Caustic Lighting within Card */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-agbara-gold/15 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-600/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Side: Frosted Glass Image Frame */}
          <div className="md:col-span-6 relative group">
            <div className="rounded-2xl p-2.5 bg-gradient-to-br from-white/10 via-black/40 to-black/60 border border-white/15 shadow-2xl overflow-hidden backdrop-blur-md">
              <img
                id="solo"
                src="/images/gamme_complete.jpeg"
                alt="La gamme AGBARA : sodabi, bouteille et flacon de poudre"
                className="w-full h-auto object-cover rounded-xl block filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Glass Badge */}
            <div className="absolute bottom-5 right-5 bg-[#140a05]/85 backdrop-blur-md border border-agbara-gold/50 text-agbara-gold text-[10px] font-mono font-bold uppercase px-3.5 py-1.5 rounded-full shadow-2xl flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-agbara-gold" />
              <span>Gamme Complète</span>
            </div>
          </div>

          {/* Right Side: Narrative & Details */}
          <div className="md:col-span-6 flex flex-col justify-center">
            
            {/* Top Pill */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-agbara-gold/90 font-bold px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-agbara-gold" />
                <span>Pièce d'Exception</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              La bouteille <span className="text-agbara-gold drop-shadow-[0_2px_12px_rgba(217,164,65,0.3)]">AGBARA</span>
            </h2>

            {/* Description */}
            <p className="font-serif text-base sm:text-lg text-agbara-txt/85 leading-relaxed mb-6 font-light">
              Une macération d’épices, d’écorces et de racines dans une bouteille en verre à fermeture hermétique. 
              Une belle pièce, pensée pour être offerte ou gardée dignement chez soi.
            </p>

            {/* Glassmorphic Feature Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] backdrop-blur-md transition-all">
                <span className="w-6 h-6 rounded-full bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-serif text-agbara-txt/90">
                  Fermeture mécanique hermétique préservant les arômes
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] backdrop-blur-md transition-all">
                <span className="w-6 h-6 rounded-full bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-serif text-agbara-txt/90">
                  Rechargeable à volonté avec votre liqueur ou boisson préférée
                </span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] backdrop-blur-md transition-all">
                <span className="w-6 h-6 rounded-full bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0 shadow-sm">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span className="text-xs sm:text-sm font-serif text-agbara-txt/90">
                  Présentation valorisante, respectueuse de la virilité
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button
                type="button"
                onClick={scrollToBoutique}
                className="btn-gold px-8 py-3.5 rounded-full font-serif font-bold text-xs sm:text-sm uppercase tracking-widest inline-flex items-center gap-2.5 shadow-[0_10px_30px_rgba(217,164,65,0.35)]"
              >
                <span className="btn-slide" />
                <span className="btn-content flex items-center gap-2">
                  <span>Choisir dans la Boutique</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
