import React from 'react';
import { REVIEWS } from '../data/reviews';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="avis" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-agbara-gold font-bold">
          Retours d'Expérience
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mt-2 mb-3">
          Ce que disent les hommes
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-agbara-mut">
          Témoignages authentiques de clients réguliers au Bénin, en Côte d’Ivoire, au Togo et dans la diaspora.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="bg-agbara-card rounded-2xl p-6 sm:p-7 border border-agbara-border shadow-lg flex flex-col justify-between hover:border-agbara-gold/50 transition-colors"
          >
            <div>
              {/* Star rating & verified badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-agbara-border/60">
                <div className="flex items-center text-agbara-gold gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#25D366]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Achat Vérifié</span>
                </div>
              </div>

              {/* Review Comment */}
              <p className="font-serif text-sm sm:text-base text-agbara-txt/90 leading-relaxed mb-6 italic">
                « {rev.comment} »
              </p>
            </div>

            {/* Author info */}
            <div className="pt-3 border-t border-agbara-border/40 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="font-bold text-agbara-gold block font-serif text-sm">
                  {rev.name} ({rev.age})
                </span>
                <span className="text-agbara-mut">{rev.location}</span>
              </div>

              <div className="text-right text-[11px] text-agbara-mut/80">
                <span className="block text-agbara-gold">{rev.product}</span>
                <span>{rev.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

