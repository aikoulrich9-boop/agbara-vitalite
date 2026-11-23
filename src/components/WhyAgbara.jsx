import React from 'react';
import { Sparkles, Package, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function WhyAgbara() {
  const cards = [
    {
      num: "01",
      title: "Tradition Africaine",
      desc: "Des recettes éprouvées, transmises de génération en génération et profondément respectueuses de la pharmacopée africaine ancestrale.",
      icon: Sparkles,
      accentGlow: "from-amber-500/15 via-agbara-gold/10 to-transparent",
    },
    {
      num: "02",
      title: "Deux Formats Complémentaires",
      desc: "La grande bouteille de macération noble pour la maison ou le flacon de poudre active concentrée, pratique à emporter partout.",
      icon: Package,
      accentGlow: "from-agbara-gold/15 via-amber-600/10 to-transparent",
    },
    {
      num: "03",
      title: "Discrétion Absolue",
      desc: "Commande simple, confidentielle et sans intermédiaire, directement par WhatsApp avec emballage neutre et scellé.",
      icon: ShieldCheck,
      accentGlow: "from-emerald-500/15 via-agbara-gold/10 to-transparent",
    }
  ];

  return (
    <section id="pourquoi" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden">
      
      {/* Ambient Lighting Orbs for Glass Refraction */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-agbara-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-700/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Narrative Section Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-14 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-4 drop-shadow-[0_4px_16px_rgba(217,164,65,0.25)]">
          Pourquoi AGBARA ?
        </h2>
        <div className="space-y-3 font-serif text-base sm:text-xl text-agbara-txt/90 leading-relaxed">
          <p>
            Ce n’est pas qu’une affaire de virilité.<br />
            C’est une question de <strong className="text-agbara-gold">dignité</strong>, de <strong className="text-agbara-gold">confiance</strong> et d’<strong className="text-agbara-gold">équilibre intérieur</strong>.
          </p>
          <p className="text-sm sm:text-base text-agbara-mut">
            Fatigue chronique, baisse de libido, manque de tonus, stress accumulé… Beaucoup d’hommes subissent ces signaux en silence.
          </p>
          <p className="text-sm sm:text-base text-agbara-txt/85">
            <strong>Agbara</strong> a été pensé comme une réponse <em>naturelle, puissante et respectueuse de votre corps</em>, 
            inspirée de savoirs traditionnels africains et formulée pour les exigences d’aujourd’hui.
          </p>
        </div>
      </div>

      {/* 3 Modern Glassmorphic Pillar Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="relative group rounded-3xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 60%, rgba(20, 10, 5, 0.4) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              {/* Internal Caustic Glow on Hover */}
              <div 
                className={`absolute -top-16 -right-16 w-44 h-44 rounded-full bg-gradient-to-br ${c.accentGlow} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Top Row: Glass Icon Badge + Index Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-agbara-gold/25 via-white/[0.06] to-transparent border border-white/20 backdrop-blur-xl flex items-center justify-center text-agbara-gold shadow-[0_8px_20px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.4)] group-hover:scale-110 group-hover:border-agbara-gold/80 transition-all duration-300">
                    <Icon className="w-6 h-6 filter drop-shadow-[0_2px_8px_rgba(217,164,65,0.4)]" />
                  </div>

                  <span className="font-mono text-xs font-bold tracking-widest text-agbara-gold/50 group-hover:text-agbara-gold transition-colors">
                    {c.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-agbara-gold transition-colors tracking-tight mb-3">
                  {c.title}
                </h3>

                {/* Description */}
                <p className="font-serif text-sm sm:text-base text-agbara-txt/80 leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Bottom Subtle Glass Indicator */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-agbara-mut group-hover:text-agbara-txt transition-colors">
                  Garantie AGBARA
                </span>
                <span className="w-2 h-2 rounded-full bg-agbara-gold/40 group-hover:bg-agbara-gold group-hover:shadow-[0_0_10px_rgba(217,164,65,0.8)] transition-all" />
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}

