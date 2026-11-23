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

  const getWhatsAppCartUrl = () => {
    const selected = PRODUCTS.filter((p) => (cart[p.id] || 0) > 0);
    if (!selected.length) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20AGBARA%2C%20je%20souhaite%20commander%20vos%20produits.`;
    }
    const lines = selected.map((p) => `• ${cart[p.id]} × ${p.name} (${(p.price * cart[p.id]).toLocaleString('fr-FR')} FCFA)`);
    const txt = `Bonjour AGBARA, je souhaite commander :\n${lines.join('\n')}\nTotal : ${totalAmount.toLocaleString('fr-FR')} FCFA`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
  };

  return (
    <section id="produits" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-3">
          La Boutique
        </h2>
        <p className="font-serif text-base sm:text-lg text-agbara-txt/85 max-w-2xl mx-auto">
          Composez votre commande sur mesure : choisissez chaque produit <strong className="text-agbara-gold">séparément</strong> selon vos besoins, ou optez pour le <strong className="text-agbara-gold">Pack Combo Tout-en-un</strong>.
        </p>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'all'
                ? 'bg-agbara-gold text-agbara-bg font-bold shadow-lg'
                : 'bg-agbara-card text-agbara-mut hover:text-agbara-txt border border-agbara-border'
            }`}
          >
            Tous les Produits
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('unit')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'unit'
                ? 'bg-agbara-gold text-agbara-bg font-bold shadow-lg'
                : 'bg-agbara-card text-agbara-mut hover:text-agbara-txt border border-agbara-border'
            }`}
          >
            À l’Unité (Séparés)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('combo')}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'combo'
                ? 'bg-agbara-gold text-agbara-bg font-bold shadow-lg'
                : 'bg-agbara-card text-agbara-mut hover:text-agbara-txt border border-agbara-border'
            }`}
          >
            Le Pack Combo
          </button>
        </div>
      </div>

      {/* ========================================================
          1. PRODUITS À L'UNITÉ (LA BOUTEILLE À BOIRE, LE SOTO, LA POUDRE)
      ======================================================== */}
      {(activeTab === 'all' || activeTab === 'unit') && (
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-agbara-border/60">
            <span className="w-2.5 h-2.5 rounded-full bg-agbara-gold" />
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              Options Disponibles à l’Unité (Prendre séparément)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {unitProducts.map((p) => {
              const qty = cart[p.id] || 0;
              const isSodabi = p.id === 'sodabi';

              return (
                <div
                  key={p.id}
                  className="bg-agbara-card rounded-2xl p-5 border border-agbara-border hover:border-agbara-gold/60 transition-all duration-300 flex flex-col justify-between shadow-xl group"
                >
                  <div>
                    {/* Image Box */}
                    <div
                      className="w-full h-64 sm:h-72 rounded-xl mb-4 flex items-center justify-center p-3 relative overflow-hidden"
                      style={{
                        background:
                          'radial-gradient(ellipse at 50% 38%, rgba(217,164,65,.45), transparent 62%), repeating-linear-gradient(45deg, rgba(217,164,65,.05) 0 2px, transparent 2px 18px), linear-gradient(160deg, #3a2012, #120905)',
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className={`w-full h-full ${
                          isSodabi ? 'object-cover rounded-lg' : 'object-contain bottle-shadow'
                        }`}
                      />
                      <div className="absolute top-2.5 left-2.5 bg-agbara-bg/85 border border-agbara-gold/50 text-agbara-gold text-[10px] font-mono px-2.5 py-0.5 rounded-full shadow-md">
                        {p.tag}
                      </div>
                    </div>

                    {/* Product Info */}
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-agbara-gold mb-1">
                      {p.name}
                    </h4>
                    <p className="font-serif text-xs text-agbara-txt/80 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-5 text-[11px] font-serif text-agbara-mut">
                      {p.highlights.slice(0, 3).map((h, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-agbara-gold shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & Cart Action */}
                  <div className="pt-3 border-t border-agbara-border/70">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-serif font-bold text-xl text-agbara-gold">
                          {p.priceFormatted}
                        </div>
                        <span className="text-[10px] font-mono text-agbara-mut">
                          ({p.priceEuro})
                        </span>
                      </div>

                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 bg-agbara-bg/80 rounded-full border border-agbara-gold/40 p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(p.id, -1)}
                          className="w-8 h-8 rounded-full border border-agbara-gold/60 text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-base font-bold flex items-center justify-center transition-colors"
                          aria-label="Moins"
                        >
                          −
                        </button>
                        <span className="w-6 text-center font-serif font-bold text-sm text-agbara-txt">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(p.id, 1)}
                          className="w-8 h-8 rounded-full border border-agbara-gold/60 text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-base font-bold flex items-center justify-center transition-colors"
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
                      className="w-full py-2.5 rounded-full text-xs font-serif font-bold uppercase tracking-wider bg-agbara-gold/15 text-agbara-gold border border-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg transition-all"
                    >
                      Commander cet article
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================
          2. LE PACK COMBO TOUT-EN-UN (BOUTEILLE + POUDRE + SOTO)
      ======================================================== */}
      {(activeTab === 'all' || activeTab === 'combo') && comboProduct && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6 pb-2 border-b border-agbara-border/60">
            <span className="w-2.5 h-2.5 rounded-full bg-agbara-gold" />
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              Le Pack Combo Tout-en-Un (La Gamme Complète)
            </h3>
          </div>

          <div className="agbara-kit-radial rounded-3xl p-6 sm:p-10 border-2 border-agbara-gold shadow-[0_20px_50px_rgba(217,164,65,0.25)] relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Image Preview */}
              <div className="md:col-span-5 flex justify-center">
                <div className="max-w-[340px] w-full rounded-2xl overflow-hidden border border-agbara-border shadow-2xl bg-black/40">
                  <img
                    src={comboProduct.image}
                    alt={comboProduct.name}
                    className="w-full h-auto object-cover block filter contrast-105"
                  />
                </div>
              </div>

              {/* Combo Details */}
              <div className="md:col-span-7">
                <span className="badge bg-agbara-gold text-agbara-bg font-mono font-bold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                  PACK COMPLET RECOMMANDÉ
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-agbara-gold mb-2">
                  {comboProduct.name}
                </h3>
                <p className="font-serif text-sm sm:text-base text-agbara-txt/90 leading-relaxed mb-4">
                  {comboProduct.description}
                </p>

                {/* What's Inside */}
                <div className="space-y-2 mb-6 text-sm font-serif text-agbara-txt/85 bg-black/30 p-4 rounded-xl border border-agbara-border/60">
                  <div className="font-mono text-xs text-agbara-gold uppercase font-bold mb-1">
                    Ce que comprend le Combo :
                  </div>
                  {comboProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-agbara-gold shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-agbara-gold/30">
                  <div>
                    <div className="font-serif font-bold text-2xl sm:text-3xl text-agbara-gold">
                      {comboProduct.priceFormatted}
                    </div>
                    <span className="text-xs font-mono text-agbara-mut">
                      Formule complète réunie ({comboProduct.priceEuro})
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-agbara-bg/80 rounded-full border border-agbara-gold/40 p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(comboProduct.id, -1)}
                        className="w-9 h-9 rounded-full border border-agbara-gold bg-transparent text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-lg font-bold flex items-center justify-center transition-colors"
                        aria-label="Moins"
                      >
                        −
                      </button>
                      <span className="w-8 text-center font-serif font-bold text-lg text-agbara-txt">
                        {comboQty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(comboProduct.id, 1)}
                        className="w-9 h-9 rounded-full border border-agbara-gold bg-transparent text-agbara-gold hover:bg-agbara-gold hover:text-agbara-bg text-lg font-bold flex items-center justify-center transition-colors"
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
                      className="btn-gold px-7 py-3.5 rounded-full text-xs sm:text-sm font-serif font-bold uppercase tracking-wider shadow-xl"
                    >
                      <span className="btn-slide" />
                      <span className="btn-content">Commander le Combo</span>
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
