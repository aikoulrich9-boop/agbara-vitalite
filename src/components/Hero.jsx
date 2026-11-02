import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Star, Check, Zap, CheckCircle2, Flame, Droplets, Clock, PackageCheck } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';

export default function Hero({ onDirectOrder }) {
  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20AGBARA%2C%20je%20souhaite%20commander%20la%20Bouteille%20AGBARA.`;

  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-agbara-bg text-agbara-txt overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
      
      {/* Ambient Radial Amber Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] lg:w-[750px] h-[450px] bg-agbara-gold/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] h-[280px] bg-amber-600/20 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-agbara-bg/30 via-agbara-bg/70 to-agbara-bg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        
        {/* Mobile / Tablet Header (Title visible on top for small screens) */}
        <div className="lg:hidden text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agbara-card border border-agbara-gold/50 text-[11px] font-mono text-agbara-gold uppercase tracking-wider mb-3 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-agbara-gold" />
            <span>Savoir Ancestral Africain • 100% Racines</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-2">
            Vitalité masculine.<br />
            <span className="text-agbara-gold font-serif italic drop-shadow-[0_4px_16px_rgba(217,164,65,0.4)]">
              La force de l’homme.
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-agbara-txt/80">
            <div className="flex items-center text-agbara-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span><strong>4.9/5</strong> • Plus de 340 hommes satisfaits</span>
          </div>
        </div>

        {/* 3-Column Flanking Architecture: Text Left — Bottle Center — Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* ======================================================== */}
          {/* 1. LEFT COLUMN: Brand Copy, Headline & CTAs              */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col items-start text-left order-2 lg:order-1">
            
            {/* Pharmacopoeia Badge (Desktop) */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agbara-card border border-agbara-gold/50 text-xs font-mono text-agbara-gold uppercase tracking-wider mb-5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-agbara-gold" />
              <span>Savoir Ancestral • Racines & Écorces</span>
            </div>

            {/* Main Headline (Desktop) */}
            <h1 className="hidden lg:block font-serif text-3xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4">
              Vitalité masculine.<br />
              <span className="text-agbara-gold font-serif italic drop-shadow-[0_4px_16px_rgba(217,164,65,0.4)]">
                La force de l’homme.
              </span>
            </h1>

            {/* Social proof stars (Desktop) */}
            <div className="hidden lg:flex items-center gap-2.5 mb-5">
              <div className="flex items-center text-agbara-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono text-agbara-txt/80">
                <strong className="text-agbara-gold">4.9/5</strong> • 340+ clients satisfaits
              </span>
            </div>

            {/* Description */}
            <p className="font-serif text-sm sm:text-base text-agbara-txt/85 leading-relaxed mb-6">
              Une macération noble d’exception préparée avec soin à base de plantes, racines denses et d’écorces sauvages du Bénin. 
              Une réponse puissante, naturelle et respectueuse de votre corps pour réveiller une fermeté souveraine.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 w-full mb-6">
              <button
                type="button"
                onClick={() => onDirectOrder('bouteille')}
                className="btn-gold px-6 py-3.5 text-xs sm:text-sm font-serif font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl"
              >
                <span className="btn-slide" />
                <span className="btn-content flex items-center gap-2">
                  <span>Commander (10 000 F)</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-5 py-3.5 text-xs font-mono flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-agbara-bg" />
                <span>Conseil WhatsApp</span>
              </a>
            </div>

            {/* Trust pills */}
            <div className="space-y-2 pt-2 border-t border-agbara-border/40 w-full text-xs font-mono text-agbara-mut">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-agbara-gold shrink-0" />
                <span>Paiement sécurisé à la livraison</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-agbara-gold shrink-0" />
                <span>Livraison discrète à Cotonou & tout le Bénin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-agbara-gold shrink-0" />
                <span>Mobile Money (MTN / Moov) & Espèces</span>
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* 2. CENTER COLUMN: The Centered Majestic Bottle Image     */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 relative flex flex-col justify-center items-center order-1 lg:order-2 my-2 lg:my-0">
            
            {/* Ambient Circular Gold Glow behind the bottle */}
            <div className="absolute w-[260px] sm:w-[320px] lg:w-[360px] h-[260px] sm:h-[320px] lg:h-[360px] rounded-full bg-agbara-gold/25 blur-[80px] pointer-events-none animate-pulse-glow" />
            
            {/* Floating Botanical Leaf 1 (Top Left) */}
            <div className="absolute top-2 left-4 sm:left-6 z-20 pointer-events-none animate-float">
              <img
                src="/images/leaf2.png"
                alt="Feuille botanique AGBARA"
                className="w-6 sm:w-8 h-auto filter drop-shadow-[0_8px_14px_rgba(0,0,0,0.8)] opacity-95 -rotate-12"
              />
            </div>

            {/* Floating Botanical Leaf 2 (Mid Left) */}
            <div className="absolute top-1/2 -left-2 sm:left-2 z-20 pointer-events-none animate-float-slow">
              <img
                src="/images/leaf1.png"
                alt="Feuille botanique AGBARA"
                className="w-7 sm:w-9 h-auto filter drop-shadow-[0_10px_18px_rgba(0,0,0,0.8)] opacity-95 rotate-45"
              />
            </div>

            {/* Floating Botanical Leaf 3 (Bottom Right) */}
            <div className="absolute bottom-8 right-2 sm:right-6 z-20 pointer-events-none animate-float">
              <img
                src="/images/leaf3.png"
                alt="Feuille botanique AGBARA"
                className="w-5 sm:w-7 h-auto filter drop-shadow-[0_8px_14px_rgba(0,0,0,0.8)] opacity-90 rotate-12"
              />
            </div>

            {/* Floating Badge Top-Right */}
            <div className="absolute top-2 right-1 sm:right-3 z-20 bg-agbara-card/95 backdrop-blur-md border border-agbara-gold/60 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono text-agbara-gold shadow-2xl flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-agbara-gold" />
              <span>Bouteille 750ml</span>
            </div>

            {/* The Ultra-HD Centered Bottle: Stopper and Base 100% visible */}
            <div 
              className="relative z-10 flex items-center justify-center transition-transform duration-700 hover:scale-[1.03] cursor-pointer"
              onClick={() => onDirectOrder('bouteille')}
              title="Cliquer pour commander la bouteille AGBARA"
            >
              <img
                src="/images/hero_bottle_clean.png"
                alt="Bouteille AGBARA : Macération d'épices, d'écorces et de racines"
                className="h-[360px] sm:h-[420px] md:h-[460px] lg:h-[490px] xl:h-[530px] max-h-[58vh] w-auto max-w-full object-contain bottle-shadow select-none"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                }}
              />
            </div>

            {/* Price Pill positioned cleanly BELOW the bottle without covering it */}
            <div className="relative z-20 mt-2 bg-[#120905]/95 backdrop-blur-md border border-agbara-border/90 px-4 py-1.5 rounded-full text-center shadow-xl">
              <span className="font-bold text-agbara-gold text-xs sm:text-sm tracking-wide">10 000 FCFA</span>
              <span className="text-[10px] text-agbara-mut font-mono ml-2">• Macération d’épices</span>
            </div>

          </div>

          {/* ======================================================== */}
          {/* 3. RIGHT COLUMN: Action Pillars, Benefits & Ritual Specs */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-3.5 order-3">
            
            {/* Header for Right Column */}
            <div className="border-b border-agbara-border/50 pb-2 w-full">
              <span className="text-xs font-mono text-agbara-gold uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-agbara-gold" />
                <span>Action & Bienfaits Ciblés</span>
              </span>
            </div>

            {/* Benefit Card 1: Vasodilatation & Flux */}
            <div className="w-full p-4 rounded-2xl bg-agbara-card/75 border border-agbara-border/60 backdrop-blur-sm transition-all hover:border-agbara-gold/50 group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-sm group-hover:text-agbara-gold transition-colors">
                    Vasodilatation Naturelle
                  </h3>
                  <p className="text-xs text-agbara-txt/80 leading-relaxed mt-1">
                    Stimule le flux sanguin et l'afflux caverneux sans accélération cardiaque ni maux de tête.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Card 2: Fermeté & Endurance */}
            <div className="w-full p-4 rounded-2xl bg-agbara-card/75 border border-agbara-border/60 backdrop-blur-sm transition-all hover:border-agbara-gold/50 group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-sm group-hover:text-agbara-gold transition-colors">
                    Rigidité Ferme & Endurance
                  </h3>
                  <p className="text-xs text-agbara-txt/80 leading-relaxed mt-1">
                    Maintien d'une fermeté souveraine dans la durée, avec récupération rapide entre les rapports.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit Card 3: Macération Rechargeable */}
            <div className="w-full p-4 rounded-2xl bg-agbara-card/75 border border-agbara-border/60 backdrop-blur-sm transition-all hover:border-agbara-gold/50 group">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-sm group-hover:text-agbara-gold transition-colors">
                    Rechargeable 3 Fois
                  </h3>
                  <p className="text-xs text-agbara-txt/80 leading-relaxed mt-1">
                    La bouteille en verre noble se recharge jusqu'à 3 fois avec du Sodabi ou spiritueux de votre choix.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="w-full p-3.5 rounded-xl bg-[#120905]/80 border border-agbara-border/50 flex items-center justify-between text-[11px] font-mono text-agbara-mut">
              <div className="flex items-center gap-1.5">
                <PackageCheck className="w-4 h-4 text-agbara-gold" />
                <span>Colis 100% Anonyme</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-agbara-gold" />
                <span>Livraison 24h - 48h</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
