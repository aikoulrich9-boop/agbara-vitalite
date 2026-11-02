import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function SoloShowcase({ onDirectOrder }) {
  return (
    <section id="bouteille-solo" className="py-12 sm:py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="agbara-radial rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 border border-[#6b4520] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Exact image from the original HTML: alt="La gamme AGBARA : sodabi, bouteille et flacon de poudre" */}
          <div className="md:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-agbara-border shadow-2xl bg-black/40">
              <img
                id="solo"
                src="/images/gamme_complete.jpeg"
                alt="La gamme AGBARA : sodabi, bouteille et flacon de poudre"
                className="w-full h-auto object-cover block filter contrast-[1.05]"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-agbara-gold text-agbara-bg text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full shadow-lg">
              GAMME COMPLÈTE
            </div>
          </div>

          {/* Text content from original HTML */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-widest text-agbara-gold font-bold mb-2">
              Pièce d'Exception
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-agbara-gold mb-4 leading-tight">
              La bouteille AGBARA
            </h2>
            <p className="font-serif text-base sm:text-lg text-agbara-txt/90 leading-relaxed mb-6">
              Une macération d’épices, d’écorces et de racines dans une bouteille en verre à fermeture hermétique. 
              Une belle pièce, pensée pour être offerte ou gardée dignement à la maison.
            </p>

            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 text-sm font-serif text-agbara-txt/80">
                <span className="w-5 h-5 rounded-full bg-agbara-gold/20 flex items-center justify-center text-agbara-gold shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Fermeture mécanique hermétique préservant les arômes</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-serif text-agbara-txt/80">
                <span className="w-5 h-5 rounded-full bg-agbara-gold/20 flex items-center justify-center text-agbara-gold shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Rechargeable à volonté avec votre liqueur ou boisson préférée</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-serif text-agbara-txt/80">
                <span className="w-5 h-5 rounded-full bg-agbara-gold/20 flex items-center justify-center text-agbara-gold shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Présentation valorisante, respectueuse de la virilité</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onDirectOrder('bouteille')}
                className="btn-gold px-8 py-3.5 rounded-full font-serif font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span className="btn-slide" />
                <span className="btn-content flex items-center gap-2">
                  <span>Commander la Bouteille (10 000 FCFA)</span>
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
