import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div className="w-screen max-w-md bg-agbara-bg text-agbara-txt shadow-2xl flex flex-col justify-between border-l border-agbara-border">
          
          {/* Header */}
          <div className="p-6 border-b border-agbara-border flex items-center justify-between bg-agbara-card">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-agbara-gold/20 border border-agbara-gold flex items-center justify-center text-agbara-gold">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-agbara-gold">Votre Panier AGBARA</h3>
                <span className="text-xs font-mono text-agbara-mut">
                  {items.length} {items.length > 1 ? 'articles choisis' : 'article choisi'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-agbara-bg text-agbara-gold transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-agbara-border/60">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-agbara-card border border-agbara-border flex items-center justify-center text-agbara-gold/50 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif font-bold text-lg text-agbara-gold mb-1">Votre panier est vide</h4>
                <p className="font-serif text-sm text-agbara-mut max-w-xs mb-6">
                  Choisissez parmi nos macérations, la grande bouteille ou le flacon de poudre.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-gold px-6 py-2.5 text-xs font-serif font-bold uppercase tracking-wider"
                >
                  <span className="btn-slide" />
                  <span className="btn-content">Voir les Produits</span>
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl bg-agbara-card border border-agbara-border p-1 shrink-0 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-agbara-gold truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs font-mono text-agbara-mut block">
                      {item.priceFormatted}
                    </span>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-full border border-agbara-gold text-agbara-gold flex items-center justify-center text-xs hover:bg-agbara-gold hover:text-agbara-bg"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-mono text-xs font-bold text-agbara-txt">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-full border border-agbara-gold text-agbara-gold flex items-center justify-center text-xs hover:bg-agbara-gold hover:text-agbara-bg"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-mono font-bold text-sm text-agbara-gold block">
                      {(item.price * item.qty).toLocaleString('fr-FR')} F
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, -item.qty)}
                      className="text-xs text-agbara-mut hover:text-red-400 mt-2 inline-flex items-center gap-1"
                      aria-label="Supprimer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-agbara-border bg-agbara-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm uppercase text-agbara-mut">
                  Total Estimé :
                </span>
                <span className="font-serif font-bold text-2xl text-agbara-gold">
                  {totalFcfa.toLocaleString('fr-FR')} FCFA
                </span>
              </div>

              <div className="text-[11px] font-serif text-agbara-mut bg-agbara-bg/80 p-3 rounded-xl border border-agbara-border text-center">
                Livraison discrète à Cotonou et dans tout le Bénin • Paiement à la livraison
              </div>

              {/* Direct WhatsApp Action */}
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-4 flex items-center justify-center gap-2 text-sm font-serif font-bold shadow-xl"
              >
                <MessageCircle className="w-5 h-5 text-agbara-bg" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
