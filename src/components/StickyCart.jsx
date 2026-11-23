import React from 'react';
import { ShoppingBag, MessageCircle, ArrowRight } from 'lucide-react';
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
      className="fixed bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 sm:max-w-2xl w-auto bg-[#170e09]/95 backdrop-blur-2xl border border-agbara-gold/45 rounded-2xl sm:rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(217,164,65,0.18)] flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Left side: Interactive Cart Preview */}
      <div 
        onClick={onOpenCart}
        className="flex items-center gap-3 cursor-pointer group select-none"
        title="Voir le détail du panier"
      >
        <div className="relative w-10 h-10 rounded-full bg-agbara-gold/15 border border-agbara-gold/50 flex items-center justify-center text-agbara-gold group-hover:bg-agbara-gold group-hover:text-agbara-bg transition-all shadow-inner shrink-0">
          <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
          {totalCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-agbara-gold text-agbara-bg text-[9px] font-mono font-bold flex items-center justify-center shadow">
              {totalCount}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-agbara-mut leading-none group-hover:text-agbara-txt transition-colors">
            {totalCount > 1 ? `${totalCount} articles` : `${totalCount} article`}
          </span>
          <span className="font-serif font-bold text-sm sm:text-base text-agbara-gold leading-tight mt-1 tracking-wide drop-shadow-[0_2px_8px_rgba(217,164,65,0.3)]">
            {totalCount > 0
              ? `Total : ${totalFcfa.toLocaleString('fr-FR')} FCFA`
              : 'Panier vide'}
          </span>
        </div>
      </div>

      {/* Right side: Ultra-Aesthetic WhatsApp Action Button */}
      <div className="flex items-center shrink-0">
        <a
          id="go"
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp relative group px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-serif font-bold flex items-center gap-2 sm:gap-2.5 shadow-[0_8px_24px_rgba(16,185,129,0.35)]"
        >
          {/* Subtle light shimmer bar */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
          
          <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <MessageCircle className="w-3.5 h-3.5 text-white" />
          </span>
          <span className="relative z-10 whitespace-nowrap">Commander sur WhatsApp</span>
          <ArrowRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-1 transition-transform shrink-0 hidden sm:inline-block" />
        </a>
      </div>
    </div>
  );
}

