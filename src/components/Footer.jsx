import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { WHATSAPP_FORMATTED, WHATSAPP_NUMBER } from '../data/products';

export default function Footer() {
  return (
    <footer className="text-center py-12 px-6 pb-28 sm:pb-24 border-t border-agbara-border/60 bg-agbara-bg text-agbara-mut text-xs font-serif space-y-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-center gap-2 text-agbara-gold font-bold font-serif text-lg tracking-wider">
        <span>AGBARA</span>
        <span className="text-xs text-agbara-mut font-normal font-mono">— Cotonou, Bénin</span>
      </div>

      <p className="max-w-2xl mx-auto leading-relaxed text-agbara-mut/90">
        Produit réservé aux adultes (18 ans et +). Complément traditionnel : il ne remplace pas un avis médical ni un traitement. 
        Demandez conseil à un professionnel de santé en cas de maladie, de traitement en cours ou de doute.
      </p>

      <p className="text-agbara-mut">
        Le bouton ne s’ouvre pas ? Écris-nous directement sur WhatsApp :{' '}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-agbara-gold font-mono font-bold hover:underline"
        >
          {WHATSAPP_FORMATTED}
        </a>
      </p>

      {/* Operational System Indicator */}
      <div className="pt-4 flex items-center justify-center gap-2 font-mono text-[11px] text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>SERVICE CONSEIL WHATSAPP DISPONIBLE</span>
      </div>

      <p className="pt-2 text-[11px] text-agbara-mut/60 font-mono">
        © {new Date().getFullYear()} AGBARA — Vitalité masculine. Tous droits réservés.
      </p>
    </footer>
  );
}
