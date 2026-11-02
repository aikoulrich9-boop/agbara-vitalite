import React from 'react';
import { Compass, Sparkles, Package, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function WhyAgbara() {
  const cards = [
    {
      title: "Tradition Africaine",
      desc: "Des recettes éprouvées, transmises de génération en génération et profondément respectueuses de la pharmacopée africaine ancestrale.",
      icon: Sparkles
    },
    {
      title: "Deux Formats Complémentaires",
      desc: "La grande bouteille de macération noble pour la maison ou le flacon de poudre active concentrée, pratique à emporter partout.",
      icon: Package
    },
    {
      title: "Discrétion Absolue",
      desc: "Commande simple, confidentielle et sans intermédiaire, directement par WhatsApp avec emballage neutre et scellé.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="pourquoi" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Narrative Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-4">
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

      {/* 3 Pillar Cards from Original HTML */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={i}
              className="bg-agbara-card rounded-2xl p-6 border border-agbara-border shadow-lg flex flex-col justify-between hover:border-agbara-gold/50 transition-colors"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-agbara-gold/15 flex items-center justify-center text-agbara-gold mb-4 border border-agbara-gold/30">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-agbara-gold mb-2">
                  {c.title}
                </h3>
                <p className="font-serif text-sm text-agbara-txt/80 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Exact Image from Original HTML: alt="AGBARA" */}
      <div className="flex justify-center">
        <div className="w-full max-w-[440px] rounded-2xl overflow-hidden border border-agbara-border shadow-2xl bg-black/40">
          <img
            src="/images/agbara_tradition.jpeg"
            alt="AGBARA"
            className="w-full h-auto object-cover block filter contrast-105"
          />
        </div>
      </div>
    </section>
  );
}

