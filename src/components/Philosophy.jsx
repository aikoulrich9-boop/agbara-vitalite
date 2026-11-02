import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef1.current, {
        scrollTrigger: {
          trigger: textRef1.current,
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(textRef2.current, {
        scrollTrigger: {
          trigger: textRef2.current,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophie"
      className="relative w-full py-28 sm:py-36 bg-charcoal text-cream overflow-hidden"
    >
      {/* Parallaxing Organic Texture Background at Low Opacity */}
      <div className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
          alt="Texture végétale et écorce sauvage"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-cream/90 text-xs font-mono uppercase tracking-widest mb-12 border border-white/10">
          <Compass className="w-3.5 h-3.5 text-clay" />
          <span>Le Manifeste Agbara</span>
        </div>

        {/* Statement 1: The Common Industry Approach (neutral, smaller) */}
        <div ref={textRef1} className="mb-14">
          <p className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-widest text-cream/50 mb-3">
            La plupart des stimulants modernes se concentrent sur :
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-sans text-cream/80 max-w-3xl mx-auto leading-relaxed">
            des molécules chimiques éphémères, des palpitations cardiaques, une dépendance psychologique 
            et l'oubli total de votre équilibre hormonal sous-jacent.
          </p>
        </div>

        {/* Divider accent */}
        <div className="w-16 h-1 bg-clay mx-auto rounded-full mb-14 opacity-75" />

        {/* Statement 2: The Differentiated Agbara Approach (Massive Drama Serif Italic) */}
        <div ref={textRef2}>
          <p className="text-sm sm:text-base md:text-lg font-mono uppercase tracking-widest text-clay font-bold mb-4">
            Agbara restaure :
          </p>
          <h3 className="font-drama italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white max-w-4xl mx-auto">
            « La force originelle de l'homme, enracinée dans la{' '}
            <span className="text-clay underline decoration-clay/40 underline-offset-8">
              pureté des plantes sauvages
            </span>
            , l'afflux vasculaire naturel et la dignité souveraine. »
          </h3>

          <p className="mt-8 text-cream/70 font-sans text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Fatigue chronique, baisse de libido, stress accumulé... Beaucoup d'hommes subissent ces signaux en silence. 
            Il est temps de retrouver une vitalité dense, inépuisable et respectueuse de votre organisme.
          </p>
        </div>
      </div>
    </section>
  );
}

