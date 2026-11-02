import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowRight, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);

  const steps = [
    {
      num: "01",
      title: "Préparation & Drainage Vasculaire",
      sub: "Tisane Agbara • Infusion Racine & Écorces",
      desc: "Nettoie les toxines hépatiques et réouvre la micro-circulation périphérique. Le terrain physiologique est purifié pour accueillir l'afflux d'énergie.",
      timing: "CHAQUE SOIR • INFUSION 10 MIN",
      accent: "from-moss-dark to-moss",
      type: "helix"
    },
    {
      num: "02",
      title: "Amplification Hormonale & Densité",
      sub: "Poudre Agbara • Concentré Micronisé Pur",
      desc: "Libère les principes phyto-androgènes, soutient la tonicité musculaire caverneuse et amplifie la résistance physique et sexuelle sur la durée.",
      timing: "CHAQUE MATIN • 1 CUILLÈRE ACTIVE",
      accent: "from-charcoal to-moss-deep",
      type: "laser"
    },
    {
      num: "03",
      title: "Élan Immédiat & Vigueur Souveraine",
      sub: "Sirop Agbara • Élixir Miel Sauvage Brut",
      desc: "Biodisponibilité immédiate par transport sublingual. Coup de fouet puissant, réactivité instantanée et maintien d'une érection ferme et contrôlée.",
      timing: "À LA DEMANDE • 45 MIN AVANT L'ACTE",
      accent: "from-clay-dark to-charcoal",
      type: "ekg"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            pin: true,
            pinSpacing: false,
            endTrigger: containerRef.current,
            end: 'bottom bottom',
            onUpdate: (self) => {
              const progress = self.progress;
              // underneath card scales down, blurs and fades as specified
              gsap.to(card, {
                scale: 1 - progress * 0.1,
                filter: `blur(${progress * 15}px)`,
                opacity: 1 - progress * 0.5,
                duration: 0.2,
                overwrite: 'auto',
              });
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            pin: true,
            pinSpacing: true,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="protocole" className="relative bg-cream py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-16 text-center">
        <span className="text-xs font-mono tracking-widest uppercase text-clay font-bold">
          Protocole 30 Jours
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans text-charcoal mt-2">
          L'Archive Vivante de votre Régénération.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
          Chaque étape s'empile pour créer une synergie métabolique complète. 
          Découvrez la cinétique des trois phases Agbara.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {steps.map((step, idx) => (
          <div
            key={step.num}
            className={`protocol-card relative w-full min-h-[85vh] sm:min-h-[80vh] rounded-[3rem] p-8 sm:p-14 mb-16 shadow-2xl flex flex-col justify-between overflow-hidden bg-gradient-to-br ${step.accent} text-cream border border-white/10`}
          >
            {/* Top metadata */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-clay">
                  ÉTAPE {step.num}
                </span>
                <span className="text-xs font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/10">
                  {step.timing}
                </span>
              </div>
              <span className="hidden sm:inline text-xs font-mono text-white/50">
                PHASE PHARMACO-BOTANIQUE
              </span>
            </div>

            {/* Middle Section: Graphic / Animation Canvas + Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center my-auto py-8">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-clay font-bold">
                  {step.sub}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold font-sans text-white mt-2 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-6 font-normal">
                  {step.desc}
                </p>

                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-clay bg-white/5 px-4 py-2 rounded-xl border border-clay/20">
                  <Shield className="w-4 h-4 text-clay" />
                  <span>Savoir traditionnel validé par usage séculaire</span>
                </div>
              </div>

              {/* Unique Canvas/SVG Animation per card as mandated */}
              <div className="h-64 sm:h-72 w-full rounded-2xl bg-black/40 border border-white/10 p-6 flex items-center justify-center relative overflow-hidden">
                {/* 1. Slowly rotating geometric motif (double-helix / concentric circles) */}
                {step.type === 'helix' && (
                  <div className="relative w-48 h-48 flex items-center justify-center animate-[spin_18s_linear_infinite]">
                    <svg className="w-full h-full text-clay" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                      <circle cx="50" cy="50" r="35" fill="none" stroke="#2E4036" strokeWidth="2" opacity="0.8" />
                      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 3" />
                      <circle cx="50" cy="50" r="14" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />
                      <circle cx="50" cy="50" r="5" fill="#CC5833" />
                      {/* Radiating nodes */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                        <circle
                          key={deg}
                          cx={50 + 35 * Math.cos((deg * Math.PI) / 180)}
                          cy={50 + 35 * Math.sin((deg * Math.PI) / 180)}
                          r="2.5"
                          fill="#F2F0E9"
                        />
                      ))}
                    </svg>
                    <span className="absolute text-[9px] font-mono tracking-widest text-white/70 uppercase">
                      DRAINAGE
                    </span>
                  </div>
                )}

                {/* 2. Scanning horizontal laser-line moving across dot/cell grid */}
                {step.type === 'laser' && (
                  <div className="relative w-full h-full flex flex-col justify-center">
                    <div className="grid grid-cols-8 gap-3 p-4 opacity-50">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full bg-clay/60 mx-auto" />
                      ))}
                    </div>
                    {/* Scanning Laser Line */}
                    <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-clay to-transparent shadow-[0_0_15px_#CC5833] animate-[bounce_3s_ease-in-out_infinite]" />
                    <span className="absolute bottom-3 right-4 text-[10px] font-mono tracking-widest text-clay font-bold">
                      SCAN DENSITÉ BIO-HORMONALE
                    </span>
                  </div>
                )}

                {/* 3. Pulsing EKG-style SVG path animation with stroke-dashoffset */}
                {step.type === 'ekg' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg className="w-full h-32 text-clay" viewBox="0 0 500 150">
                      <path
                        d="M 0,75 L 80,75 L 110,30 L 130,110 L 150,50 L 170,85 L 200,75 L 280,75 L 310,20 L 330,130 L 350,40 L 370,85 L 400,75 L 500,75"
                        fill="none"
                        stroke="#CC5833"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="1000"
                        strokeDashoffset="1000"
                        className="animate-[dash_3.5s_linear_infinite]"
                      />
                    </svg>
                    <span className="absolute bottom-3 left-4 text-[10px] font-mono tracking-widest text-white/70">
                      PULSION VIGUEUR ACTIVE
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-white/60">
              <span>AGBARA PROTOCOL STEP {step.num}/03</span>
              <span className="text-clay font-bold">CURE SOUTENUE RECOMMANDÉE</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

