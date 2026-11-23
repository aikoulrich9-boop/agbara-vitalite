import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity }) {
  if (!isOpen) return null;

  const items = Object.entries(cart)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = PRODUCTS.find((p) => p.id === id);
      return { ...product, qty };
    });

  const totalFcfa = items.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0);

  const generateWhatsAppMessage = () => {
    let msg = `*COMMANDE AGBARA - VITALITÉ MASCULINE*\n\n`;
    items.forEach((item) => {
      msg += `• ${item.qty} × ${item.name} (${(item.price * item.qty).toLocaleString('fr-FR')} FCFA)\n`;
    });
    msg += `\n*TOTAL : ${totalFcfa.toLocaleString('fr-FR')} FCFA*\n`;
    msg += `\nBonjour, je souhaite confirmer ma commande et convenir de la livraison.`;
    return encodeURIComponent(msg);
  };

  const whatsappOrderUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark frosted backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        {/* Glassmorphic Panel Container */}
        <div className="w-screen max-w-md relative flex flex-col justify-between text-agbara-txt overflow-hidden bg-[#140a05]/85 backdrop-blur-2xl border-l border-white/15 shadow-[-20px_0_60px_rgba(0,0,0,0.9)]">
          
          {/* Ambient Lighting Orbs for Glass Refraction */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-agbara-gold/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-700/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

          {/* ======================================================== */}
          {/* Glassmorphism Header                                     */}
          {/* ======================================================== */}
          <div className="relative z-10 px-6 py-5 border-b border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-agbara-gold/25 via-agbara-gold/10 to-transparent border border-agbara-gold/40 flex items-center justify-center text-agbara-gold shadow-[0_4px_16px_rgba(217,164,65,0.25)]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white tracking-wide">
                  Votre Panier AGBARA
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-widest text-agbara-gold/90">
                  {items.length} {items.length > 1 ? 'articles choisis' : 'article choisi'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-agbara-gold hover:text-white transition-all shadow-sm"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* ======================================================== */}
          {/* Cart Content / Glassmorphism Empty State                 */}
          {/* ======================================================== */}
          <div className="relative z-10 flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 py-12">
                
                {/* Glowing Glass Orb Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-agbara-gold/25 rounded-3xl blur-2xl animate-pulse-glow" />
                  <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-white/15 via-white/[0.05] to-transparent border border-white/20 backdrop-blur-2xl flex items-center justify-center text-agbara-gold shadow-[0_12px_35px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <ShoppingBag className="w-10 h-10 filter drop-shadow-[0_4px_10px_rgba(217,164,65,0.4)]" />
                  </div>
                </div>

                <h4 className="font-serif font-bold text-2xl text-white mb-2 tracking-wide drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                  Votre panier est vide
                </h4>
                
                <p className="font-serif text-sm text-agbara-txt/70 max-w-xs leading-relaxed mb-8">
                  Choisissez parmi nos macérations nobles, la grande bouteille ou le flacon de poudre active.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="btn-gold px-8 py-3.5 text-xs font-serif font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(217,164,65,0.35)]"
                >
                  <span className="btn-slide" />
                  <span className="btn-content flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Découvrir la Boutique</span>
                  </span>
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.id} 
                  className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 backdrop-blur-xl transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.4)] flex gap-4 items-center group"
                >
                  {/* Glassmorphic Image Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 via-black/40 to-black/60 border border-white/15 p-1 shrink-0 flex items-center justify-center overflow-hidden shadow-inner">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-white group-hover:text-agbara-gold transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono text-agbara-gold/90 block mt-0.5">
                      {item.priceFormatted}
                    </span>

                    {/* Quantity Pill Controls */}
                    <div className="flex items-center gap-2 mt-2 bg-black/40 border border-white/10 rounded-full px-2 py-0.5 w-max">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-5 h-5 rounded-full text-agbara-gold hover:text-white flex items-center justify-center text-xs transition-colors"
                        aria-label="Diminuer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono text-xs font-bold text-white">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-5 h-5 rounded-full text-agbara-gold hover:text-white flex items-center justify-center text-xs transition-colors"
                        aria-label="Augmenter"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Line Total & Remove */}
                  <div className="text-right flex flex-col items-end justify-between self-stretch">
                    <span className="font-serif font-bold text-sm text-agbara-gold tracking-tight">
                      {(item.price * item.qty).toLocaleString('fr-FR')} F
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -item.qty)}
                      className="p-1.5 rounded-lg text-agbara-mut hover:text-red-400 hover:bg-red-500/10 transition-colors"
                      title="Retirer cet article"
                      aria-label="Supprimer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* ======================================================== */}
          {/* Glassmorphism Footer Actions                             */}
          {/* ======================================================== */}
          {items.length > 0 && (
            <div className="relative z-10 p-6 border-t border-white/10 bg-white/[0.03] backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-agbara-mut">
                  Total Sélection :
                </span>
                <span className="font-serif font-bold text-2xl text-agbara-gold tracking-tight drop-shadow-[0_2px_12px_rgba(217,164,65,0.35)]">
                  {totalFcfa.toLocaleString('fr-FR')} FCFA
                </span>
              </div>

              <div className="text-[11px] font-mono text-agbara-txt/70 bg-white/[0.03] border border-white/10 p-2.5 rounded-xl text-center backdrop-blur-md">
                Livraison discrète à Cotonou & Bénin • Paiement à la réception
              </div>

              {/* Direct WhatsApp Action with Glass Gradient */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-3.5 flex items-center justify-center gap-2.5 text-sm font-serif font-bold tracking-wide uppercase shadow-[0_12px_32px_rgba(16,185,129,0.45)]"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Commander sur WhatsApp</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
