import React from 'react';
import { TIMELINE_STEPS } from '../data/reviews';
import { Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export default function Timeline() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-agbara-gold font-bold">
          Chronologie des Résultats
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mt-2 mb-3">
          Ce que vous allez ressentir sur 30 jours
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-agbara-mut max-w-xl mx-auto">
          L'action d'AGBARA est à la fois immédiate dès les premières prises et cumulative au fil des semaines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {TIMELINE_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="bg-agbara-card rounded-2xl p-6 sm:p-7 border border-agbara-border shadow-xl flex flex-col justify-between relative group hover:border-agbara-gold/60 transition-all duration-300"
          >
            <div>
              {/* Badge Period */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-agbara-border/60">
                <span className="text-xs font-mono font-bold text-agbara-gold bg-agbara-bg/80 px-2.5 py-1 rounded-full border border-agbara-border">
                  {step.period}
                </span>
                <span className="text-[10px] font-mono text-agbara-mut uppercase">
                  {step.tag}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-agbara-gold mb-2.5">
                {step.title}
              </h3>
              <p className="font-serif text-sm text-agbara-txt/85 leading-relaxed">
                {step.desc}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-agbara-border/40 flex items-center gap-2 text-xs font-serif text-agbara-mut">
              <CheckCircle2 className="w-4 h-4 text-agbara-gold shrink-0" />
              <span>Effet biologique progressif</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

