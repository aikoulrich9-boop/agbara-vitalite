import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';

export default function StickyCart({ cart, onOpenCart }) {
  const items = Object.entries(cart)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = PRODUCTS.find((prod) => prod.id === id);
      return { ...p, qty };
    });

  const totalCount = items.reduce((sum, item) => sum + item.qty, 0);
  const totalFcfa = items.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0);

  const generateWhatsAppUrl = () => {
    let lines = [];
    items.forEach((item) => {
      lines.push(`• ${item.qty} × ${item.name} (${(item.price * item.qty).toLocaleString('fr-FR')} FCFA)`);
    });

    let txt = lines.length
      ? `Bonjour, je souhaite commander :\n` +
        lines.join('\n') +
        `\nTotal : ${totalFcfa.toLocaleString('fr-FR')} FCFA\nMerci de me préciser les modalités de livraison.`
      : `Bonjour, je souhaite en savoir plus sur les produits AGBARA.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
  };

  return (
    <div
      id="cart"
      className="fixed bottom-0 inset-x-0 z-50 bg-[#241610] border-t-2 border-agbara-gold px-4 sm:px-8 py-3.5 flex items-center justify-between gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
      style={{ paddingBottom: 'calc(14px + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onOpenCart}
          className="w-10 h-10 rounded-full bg-agbara-card border border-agbara-border flex items-center justify-center text-agbara-gold hover:border-agbara-gold transition-colors"
          aria-label="Voir le panier"
        >
          <ShoppingBag className="w-5 h-5" />
        </button>

        <div>
          <div className="font-serif font-bold text-sm text-agbara-txt leading-none">
            {totalCount} {totalCount > 1 ? 'articles' : 'article'}
          </div>
          <div className="font-serif font-bold text-base text-agbara-gold mt-1">
            {totalCount > 0
              ? `Total : ${totalFcfa.toLocaleString('fr-FR')} FCFA`
              : 'Prix à confirmer'}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          id="go"
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-5 sm:px-7 py-3 text-xs sm:text-sm font-serif font-bold flex items-center gap-2 shadow-lg"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Commander sur WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

