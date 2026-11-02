import React from 'react';
import { ShieldCheck, HeartHandshake, Compass, ArrowRight } from 'lucide-react';

export default function ManVitalityStory() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="bg-agbara-card rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-12 border border-agbara-border shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Confident Masculine Portrait Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-agbara-border shadow-2xl bg-black/50 relative group">
              <img
                src="/images/man_vitality.jpg"
                alt="Homme confiant et serein incarnant la vitalité Agbara"
                className="w-full h-auto object-cover block filter contrast-105 brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-agbara-bg/85 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-agbara-dark/90 backdrop-blur-md p-3.5 rounded-xl border border-agbara-border text-xs font-serif text-agbara-txt">
                <span className="font-bold text-agbara-gold block mb-0.5">SÉRÉNITÉ & FORCE TRANQUILLE</span>
                <span className="text-agbara-mut text-[11px] font-mono">
                  L'assurance d'un homme maître de sa vigueur.
                </span>
              </div>
            </div>
          </div>

          {/* Manifesto & Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agbara-bg border border-agbara-gold/40 text-xs font-mono text-agbara-gold uppercase tracking-wider mb-4 w-fit">
              <Compass className="w-3.5 h-3.5 text-agbara-gold" />
              <span>La Vision Agbara</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-agbara-gold mb-6 leading-tight">
              « Ce n’est pas qu’une affaire de virilité.<br />
              <span className="text-white italic">
                C’est une question de dignité. »
              </span>
            </h2>

            <div className="space-y-4 font-serif text-base sm:text-lg text-agbara-txt/85 leading-relaxed mb-8">
              <p>
                Beaucoup d’hommes subissent en silence les signaux du corps : 
                <strong className="text-agbara-txt"> fatigue chronique</strong>, 
                <strong className="text-agbara-txt"> baisse de désir</strong>, 
                <strong className="text-agbara-txt"> érections hésitantes</strong> ou 
                <strong className="text-agbara-txt"> manque d’endurance</strong> face au stress du quotidien.
              </p>
              <p>
                La société pousse souvent vers des pilules chimiques impersonnelles qui créent de l'angoisse de performance et dégradent la santé cardiovasculaire.
              </p>
              <p className="text-agbara-txt">
                <strong>AGBARA</strong> a été pensé comme une réponse <em>naturelle, puissante et respectueuse de votre organisme</em>. 
                Une formule héritée de nos aïeux pour vous permettre d'aborder votre intimité avec calme, fierté et une endurance souveraine.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#produits"
                className="btn-gold px-7 py-3.5 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span className="btn-slide" />
                <span className="btn-content flex items-center gap-2">
                  <span>Découvrir la cure adaptée</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

