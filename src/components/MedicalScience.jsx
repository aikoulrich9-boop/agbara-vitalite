import React from 'react';
import { Activity, ShieldCheck, HeartPulse, Dna, Sparkles, Check } from 'lucide-react';

export default function MedicalScience() {
  const mechanisms = [
    {
      num: "01",
      title: "Vasodilatation & Afflux Caverneux",
      desc: "Les tanins et polyphénols bio-actifs issus des écorces sauvages stimulent la libération naturelle d'oxyde nitrique (NO). Les micro-vaisseaux pelviens se détendent, permettant un afflux sanguin optimal et une érection rigide et durable.",
      icon: HeartPulse
    },
    {
      num: "02",
      title: "Soutien Androgène Naturel",
      desc: "Les principes phyto-androgènes des racines de savane activent les précurseurs hormonaux endogènes. Votre testostérone libre est soutenue de manière physiologique, restaurant un désir spontané et une vigueur constante.",
      icon: Dna
    },
    {
      num: "03",
      title: "Endurance & Récupération Rapide",
      desc: "L'action adaptogène régule le cortisol (l'hormone du stress et de la fatigue chronique). Vous conservez une énergie continue pendant l'acte, tout en réduisant considérablement le délai réfractaire entre les moments d'intimité.",
      icon: Activity
    }
  ];

  return (
    <section id="science" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="agbara-radial rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 border border-agbara-border shadow-2xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agbara-dark border border-agbara-gold/40 text-xs font-mono text-agbara-gold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-agbara-gold" />
            <span>Biomécanique & Pharmacopée</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-4">
            La Précision Botanique au Service de Votre Corps
          </h2>
          <p className="font-serif text-base sm:text-lg text-agbara-txt/85 leading-relaxed">
            Pourquoi les solutions chimiques échouent-elles sur la durée ? Parce qu'elles forcent le cœur sans réparer le terrain. 
            AGBARA opère une régénération globale et respectueuse de votre physiologie.
          </p>
        </div>

        {/* Content Grid: Medical Glassware Illustration + Mechanism List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Medical & Botanical Glassware Illustration Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-agbara-border shadow-2xl bg-black/60 relative group">
              <img
                src="/images/medical_botanical.jpg"
                alt="Science Médicale et Botanique Agbara"
                className="w-full h-auto object-cover block filter contrast-110 brightness-95 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agbara-bg/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-agbara-card/90 backdrop-blur-md p-3 rounded-xl border border-agbara-border/70 text-xs font-mono text-agbara-txt">
                <span className="text-agbara-gold font-bold block mb-0.5">EXTRACTION SÉLECTIVE</span>
                <span>Plantes et racines récoltées à pleine maturité active.</span>
              </div>
            </div>
          </div>

          {/* Mechanisms list */}
          <div className="lg:col-span-7 space-y-6">
            {mechanisms.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-agbara-card/80 rounded-2xl p-6 border border-agbara-border/80 hover:border-agbara-gold/60 transition-all flex gap-4 sm:gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-agbara-gold/15 border border-agbara-gold/30 flex items-center justify-center text-agbara-gold shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-agbara-gold">
                        {m.num}.
                      </span>
                      <h4 className="font-serif font-bold text-lg sm:text-xl text-agbara-gold">
                        {m.title}
                      </h4>
                    </div>
                    <p className="font-serif text-sm text-agbara-txt/85 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Safety Comparison Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#120905] border border-agbara-border grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-serif">
          <div className="space-y-2">
            <span className="font-mono text-agbara-gold font-bold uppercase tracking-wider block">
              Ce que vous évitez (Comprimés chimiques) :
            </span>
            <ul className="space-y-1.5 text-agbara-txt/70">
              <li className="flex items-center gap-2">✕ Palpitations cardiaques et accélération du pouls</li>
              <li className="flex items-center gap-2">✕ Maux de tête violents et congestion faciale</li>
              <li className="flex items-center gap-2">✕ Dépendance psychologique et baisse d'efficacité au fil du temps</li>
            </ul>
          </div>

          <div className="space-y-2 border-t md:border-t-0 md:border-l border-agbara-border/60 pt-4 md:pt-0 md:pl-6">
            <span className="font-mono text-[#25D366] font-bold uppercase tracking-wider block">
              La garantie AGBARA (100% Végétal Ancestral) :
            </span>
            <ul className="space-y-1.5 text-agbara-txt/90">
              <li className="flex items-center gap-2">✓ Équilibre cardiovasculaire préservé et doux</li>
              <li className="flex items-center gap-2">✓ Énergie durable, bien-être physique et mental</li>
              <li className="flex items-center gap-2">✓ Résultats cumulatifs sur 30 jours pour une autonomie totale</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

