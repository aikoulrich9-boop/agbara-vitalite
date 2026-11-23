import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { Plus, Minus, Check, ShoppingBag, MessageCircle, ArrowRight, Sparkles, Layers } from 'lucide-react';

export default function Products({ cart, updateQuantity, onDirectOrder }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'unit', 'combo'

  const comboProduct = PRODUCTS.find((p) => p.kit);
  const unitProducts = PRODUCTS.filter((p) => !p.kit);

  const comboQty = cart[comboProduct?.id] || 0;

  // Calculate live total of selected items
  const totalAmount = PRODUCTS.reduce((sum, p) => sum + (cart[p.id] || 0) * p.price, 0);
  const totalCount = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <section id="produits" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20 overflow-hidden">
      
      {/* Ambient Lighting Orbs for Section Glassmorphism */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-agbara-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-3 drop-shadow-[0_4px_16px_rgba(217,164,65,0.3)]">
          La Boutique
        </h2>
        <p className="font-serif text-base sm:text-lg text-agbara-txt/85 max-w-2xl mx-auto leading-relaxed">
          Composez votre commande sur mesure : choisissez chaque produit <strong className="text-agbara-gold">séparément</strong> selon vos besoins, ou optez pour le <strong className="text-agbara-gold">Pack Combo Tout-en-un</strong>.
        </p>

        {/* Tab Filters with Frosted Glass Pill */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-lg mt-8 gap-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-[#f5c46b] to-agbara-gold text-agbara-bg font-bold shadow-[0_4px_16px_rgba(217,164,65,0.4)]'
                : 'text-agbara-mut hover:text-white'
            }`}
          >
            Tous les Produits
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('unit')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'unit'
                ? 'bg-gradient-to-r from-[#f5c46b] to-agbara-gold text-agbara-bg font-bold shadow-[0_4px_16px_rgba(217,164,65,0.4)]'
                : 'text-agbara-mut hover:text-white'
            }`}
          >
            À l’Unité (Séparés)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('combo')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'combo'
                ? 'bg-gradient-to-r from-[#f5c46b] to-agbara-gold text-agbara-bg font-bold shadow-[0_4px_16px_rgba(217,164,65,0.4)]'
                : 'text-agbara-mut hover:text-white'
            }`}
          >
            Le Pack Combo
          </button>
        </div>
      </div>

      {/* ========================================================
          1. PRODUITS À L'UNITÉ (GLASSMORPHISM ULTRA MODERNE)
      ======================================================== */}
      {(activeTab === 'all' || activeTab === 'unit') && (
        <div className="relative z-10 mb-16">
          <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-agbara-gold shadow-[0_0_10px_rgba(217,164,65,0.8)]" />
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide">
              Options Disponibles à l’Unité (Prendre séparément)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {unitProducts.map((p) => {
              const qty = cart[p.id] || 0;
              const isSodabi = p.id === 'sodabi';

              return (
                <div
                  key={p.id}
                  className="relative group rounded-3xl p-6 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-2"
                  style={{
                    background: 'linear-gradient(165deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 65%, rgba(18, 9, 5, 0.5) 100%)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
                  }}
                >
                  {/* Subtle caustics glow on hover */}
                  <div className="absolute -top-20 -right-20 w-44 h-44 bg-agbara-gold/15 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Glassmorphic Image Stage */}
                    <div className="w-full h-64 sm:h-72 rounded-2xl mb-5 flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-b from-white/[0.04] via-black/25 to-black/55 border border-white/10 shadow-inner group-hover:border-agbara-gold/40 transition-colors">
                      {/* Ambient sphere behind product */}
                      <div className="absolute w-36 h-36 rounded-full bg-agbara-gold/15 blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                      
                      <img
                        src={p.image}
                        alt={p.name}
                        className={`relative z-10 w-full h-full ${
                          isSodabi ? 'object-cover rounded-xl' : 'object-contain bottle-shadow'
                        } group-hover:scale-105 transition-transform duration-500`}
                      />

                      <div className="absolute top-3 left-3 bg-[#150a05]/85 backdrop-blur-md border border-white/15 text-agbara-gold text-[10px] font-mono font-medium px-3 py-1 rounded-full shadow-lg">
                        {p.tag}
                      </div>
                    </div>

                    {/* Product Info */}
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-agbara-gold transition-colors tracking-tight mb-2">
                      {p.name}
                    </h4>
                    <p className="font-serif text-xs text-agbara-txt/80 leading-relaxed mb-4 min-h-[3rem]">
                      {p.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {p.highlights.slice(0, 3).map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-serif text-agbara-txt/85">
                          <span className="w-4 h-4 rounded-full bg-agbara-gold/15 border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Cart Action */}
                  <div className="relative z-10 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-serif font-bold text-xl sm:text-2xl text-agbara-gold tracking-tight drop-shadow-[0_2px_8px_rgba(217,164,65,0.3)]">
                          {p.priceFormatted}
                        </div>
                        <span className="text-[10px] font-mono text-agbara-mut">
                          ({p.priceEuro})
                        </span>
                      </div>

                      {/* Frosted Quantity Selector */}
                      <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-full p-1 backdrop-blur-md">
                        <button
                          type="button"
                          onClick={() => updateQuantity(p.id, -1)}
                          className="w-7 h-7 rounded-full bg-white/5 hover:bg-agbara-gold hover:text-agbara-bg text-agbara-gold flex items-center justify-center text-xs font-bold transition-all"
                          aria-label="Moins"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-mono font-bold text-xs text-white">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(p.id, 1)}
                          className="w-7 h-7 rounded-full bg-white/5 hover:bg-agbara-gold hover:text-agbara-bg text-agbara-gold flex items-center justify-center text-xs font-bold transition-all"
                          aria-label="Plus"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (qty === 0) updateQuantity(p.id, 1);
                        onDirectOrder(p.id);
                      }}
                      className="w-full py-3 rounded-full text-xs font-serif font-bold uppercase tracking-widest text-agbara-bg transition-all duration-300 shadow-[0_8px_20px_rgba(217,164,65,0.3)] hover:shadow-[0_12px_28px_rgba(217,164,65,0.5)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                      style={{
                        background: 'linear-gradient(135deg, #f5c46b 0%, #d9a441 50%, #b88628 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                      }}
                    >
                      <span>Commander cet article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================
          2. LE PACK COMBO TOUT-EN-UN (GLASSMORPHISM MAJESTUEUX)
      ======================================================== */}
      {(activeTab === 'all' || activeTab === 'combo') && comboProduct && (
        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-agbara-gold shadow-[0_0_10px_rgba(217,164,65,0.8)]" />
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide">
              Le Pack Combo Tout-en-Un (La Gamme Complète)
            </h3>
          </div>

          <div 
            className="rounded-3xl p-6 sm:p-10 border border-agbara-gold/50 shadow-[0_25px_60px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.3)] backdrop-blur-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(160deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.03) 60%, rgba(20, 10, 5, 0.6) 100%)',
            }}
          >
            {/* Ambient Lighting inside Combo */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-agbara-gold/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Image Preview */}
              <div className="md:col-span-5 flex justify-center">
                <div className="max-w-[340px] w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/40 p-2">
                  <img
                    src={comboProduct.image}
                    alt={comboProduct.name}
                    className="w-full h-auto object-cover rounded-xl block filter contrast-105"
                  />
                </div>
              </div>

              {/* Combo Details */}
              <div className="md:col-span-7">
                <span className="bg-agbara-gold text-agbara-bg font-mono font-bold text-[10px] sm:text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3 shadow-md">
                  PACK COMPLET RECOMMANDÉ
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
                  {comboProduct.name}
                </h3>
                <p className="font-serif text-sm sm:text-base text-agbara-txt/90 leading-relaxed mb-4">
                  {comboProduct.description}
                </p>

                {/* What's Inside */}
                <div className="space-y-2 mb-6 text-sm font-serif text-agbara-txt/90 bg-white/[0.04] p-4 sm:p-5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="font-mono text-xs text-agbara-gold uppercase font-bold mb-1">
                    Ce que comprend le Combo :
                  </div>
                  {comboProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-agbara-gold/20 flex items-center justify-center text-agbara-gold shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="font-serif font-bold text-2xl sm:text-3xl text-agbara-gold drop-shadow-[0_2px_10px_rgba(217,164,65,0.35)]">
                      {comboProduct.priceFormatted}
                    </div>
                    <span className="text-xs font-mono text-agbara-mut">
                      Formule complète réunie ({comboProduct.priceEuro})
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-black/40 border border-white/15 rounded-full p-1 backdrop-blur-md">
                      <button
                        type="button"
                        onClick={() => updateQuantity(comboProduct.id, -1)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-agbara-gold hover:text-agbara-bg text-agbara-gold text-base font-bold flex items-center justify-center transition-all"
                        aria-label="Moins"
                      >
                        −
                      </button>
                      <span className="w-7 text-center font-mono font-bold text-base text-white">
                        {comboQty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(comboProduct.id, 1)}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-agbara-gold hover:text-agbara-bg text-agbara-gold text-base font-bold flex items-center justify-center transition-all"
                        aria-label="Plus"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (comboQty === 0) updateQuantity(comboProduct.id, 1);
                        onDirectOrder(comboProduct.id);
                      }}
                      className="btn-gold px-7 py-3.5 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider shadow-xl flex items-center gap-2"
                    >
                      <span className="btn-slide" />
                      <span className="btn-content flex items-center gap-2">
                        <span>Commander le Combo</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
}
