import React from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { Plus, Minus, Check, Star, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';

export default function Products({ cart, updateQuantity, onDirectOrder }) {
  const kitProduct = PRODUCTS.find((p) => p.kit);
  const otherProducts = PRODUCTS.filter((p) => !p.kit);

  const kitQty = cart[kitProduct?.id] || 0;

  return (
    <section id="produits" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-3">
          Nos Produits
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-agbara-mut max-w-xl mx-auto">
          Livraison à Cotonou et dans tout le Bénin • Expédition internationale • 
          Paiement à la livraison ou par Mobile Money, confirmé sur WhatsApp.
        </p>
      </div>

      {/* Grid of Individual Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {otherProducts.map((p) => {
          const qty = cart[p.id] || 0;
          const isSodabi = p.id === 'sodabi';

          return (
            <div
              key={p.id}
              className="bg-agbara-card rounded-2xl p-5 border border-agbara-border shadow-xl hover:border-agbara-gold/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Frame with Original Gold Radial Shader */}
                <div
                  className="w-full h-64 sm:h-72 rounded-xl mb-4 flex items-center justify-center p-3 relative overflow-hidden"
                  style={{
                    background:
                      'radial-gradient(ellipse at 50% 38%, rgba(217,164,65,.5), transparent 62%), repeating-linear-gradient(45deg, rgba(217,164,65,.07) 0 2px, transparent 2px 18px), linear-gradient(160deg, #4a2a14, #120905)',
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className={`w-full h-full ${
                      isSodabi ? 'object-cover rounded-lg' : 'object-contain bottle-shadow'
                    }`}
                  />
                  <div className="absolute top-2.5 left-2.5 bg-agbara-bg/80 border border-agbara-gold/40 text-agbara-gold text-[10px] font-mono px-2.5 py-0.5 rounded-full">
                    {p.badge}
                  </div>
                </div>

                {/* Product Name & Details */}
                <h3 className="font-serif text-xl font-bold text-agbara-gold mb-1">
                  {p.name}
                </h3>
                <p className="font-serif text-xs text-agbara-txt/80 leading-relaxed mb-4">
                  {p.description}
                </p>
              </div>

              {/* Price & Quantity Controls */}
              <div className="pt-3 border-t border-agbara-border flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-lg text-agbara-gold">
                    {p.priceFormatted}
                  </div>
                  <span className="text-[10px] font-mono text-agbara-mut">
                    ({p.priceEuro})
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(p.id, -1)}
                    className="w-9 h-9 rounded-full border border-agbara-gold bg-transparent text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-lg font-bold flex items-center justify-center transition-colors"
                    aria-label="Moins"
                  >
                    −
                  </button>
                  <span className="w-7 text-center font-serif font-bold text-base text-agbara-txt">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(p.id, 1)}
                    className="w-9 h-9 rounded-full border border-agbara-gold bg-transparent text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-lg font-bold flex items-center justify-center transition-colors"
                    aria-label="Plus"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================
          KIT AGBARA SPECIAL OFFER CARD (The Pop Card from Original HTML)
      ======================================================== */}
      {kitProduct && (
        <div className="agbara-kit-radial rounded-3xl p-6 sm:p-10 border-2 border-agbara-gold shadow-[0_20px_50px_rgba(217,164,65,0.2)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Kit Image */}
            <div className="md:col-span-5 flex justify-center">
              <div className="max-w-[280px] w-full">
                <img
                  src={kitProduct.image}
                  alt={kitProduct.name}
                  className="w-full h-auto object-contain bottle-shadow"
                />
              </div>
            </div>

            {/* Kit Text & Order Details */}
            <div className="md:col-span-7">
              <span className="badge bg-agbara-gold text-agbara-bg font-sans font-bold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                OFFRE KIT EXCLUSIF
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-agbara-gold mb-2">
                {kitProduct.name}
              </h3>
              <p className="font-serif text-base text-agbara-txt/90 leading-relaxed mb-4">
                {kitProduct.description}
              </p>

              <div className="space-y-1.5 mb-6 text-sm font-serif text-agbara-txt/80">
                {kitProduct.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-agbara-gold shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-agbara-gold/30">
                <div>
                  <div className="font-serif font-bold text-2xl sm:text-3xl text-agbara-gold">
                    {kitProduct.priceFormatted}
                  </div>
                  <span className="text-xs font-mono text-agbara-mut">
                    Économique • Kit complet 2 en 1 ({kitProduct.priceEuro})
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-agbara-bg/60 rounded-full border border-agbara-gold/40 p-1">
                    <button
                      type="button"
                      onClick={() => updateQuantity(kitProduct.id, -1)}
                      className="w-9 h-9 rounded-full border border-agbara-gold bg-transparent text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-lg font-bold flex items-center justify-center transition-colors"
                      aria-label="Moins"
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-serif font-bold text-lg text-agbara-txt">
                      {kitQty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(kitProduct.id, 1)}
                      className="w-9 h-9 rounded-full border border-agbara-gold bg-transparent text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-lg font-bold flex items-center justify-center transition-colors"
                      aria-label="Plus"
                    >
                      +
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (kitQty === 0) updateQuantity(kitProduct.id, 1);
                      onDirectOrder(kitProduct.id);
                    }}
                    className="btn-gold px-6 py-3 rounded-full text-xs font-serif font-bold uppercase tracking-wider"
                  >
                    <span className="btn-slide" />
                    <span className="btn-content">Commander le Kit</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
