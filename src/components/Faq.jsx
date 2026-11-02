import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_NUMBER } from '../data/products';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold mb-3">
          Questions fréquentes
        </h2>
        <p className="font-serif italic text-base text-agbara-mut">
          Toutes les précisions sur l'utilisation et la réception de votre commande.
        </p>
      </div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="bg-agbara-card rounded-2xl border border-agbara-border overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif font-bold text-base sm:text-lg text-agbara-gold">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-agbara-gold transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 font-serif text-sm sm:text-base text-agbara-txt/85 leading-relaxed border-t border-agbara-border/40">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Direct WhatsApp Callout */}
      <div className="mt-10 p-5 rounded-2xl bg-[#1f120c] border border-agbara-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="font-serif font-bold text-agbara-gold text-base">
            Une question particulière avant de commander ?
          </h4>
          <p className="font-serif text-xs sm:text-sm text-agbara-txt/70">
            Échangez directement avec nous en toute confidentialité.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20AGBARA%2C%20j'ai%20une%20question%20avant%20de%20commander.`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp px-6 py-2.5 text-xs font-mono shrink-0 flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Poser ma question</span>
        </a>
      </div>
    </section>
  );
}
