import React, { useState, useEffect } from 'react';
import { ShoppingBag, MessageCircle, Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/products';

export default function Navbar({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "La Bouteille", href: "#bouteille-solo" },
    { name: "La Boutique", href: "#produits" },
    { name: "Pourquoi AGBARA", href: "#pourquoi" },
    { name: "Commander", href: "#commander" },
    { name: "FAQ", href: "#faq" },
  ];

  const whatsappDirectUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20AGBARA%2C%20je%20souhaite%20des%20informations%20sur%20vos%20produits%20de%20vitalit%C3%A9.`;

  return (
    <>
      {/* Floating Pill Header (Top 24h announcement ticker removed as requested) */}
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 md:gap-8 max-w-5xl w-full border ${
            scrolled
              ? 'bg-[#1f120c]/95 backdrop-blur-xl border-agbara-gold/40 shadow-2xl shadow-black/80 text-agbara-txt'
              : 'bg-[#2a1911]/90 backdrop-blur-md border-[#5a3b1c] text-agbara-txt shadow-xl'
          }`}
        >
          {/* Brand Logo with Extracted Bottle Emblem */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-agbara-dark border border-agbara-gold/50 flex items-center justify-center p-1 shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/images/agbara_logo_badge.png"
                alt="Logo AGBARA"
                className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(217,164,65,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold tracking-wider text-xl text-agbara-gold leading-none">
                AGBARA
              </span>
              <span className="text-[9px] tracking-widest font-mono uppercase text-agbara-mut">
                Vitalité Masculine
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-serif tracking-wider uppercase text-agbara-txt/80 hover:text-agbara-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {/* WhatsApp Direct Pill */}
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conseiller WhatsApp"
              className="px-3 py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#25D366] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-mono font-medium flex items-center gap-1.5 bg-agbara-dark border border-agbara-border text-agbara-txt hover:border-agbara-gold transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-agbara-gold" />
              <span className="hidden sm:inline">Panier</span>
              {cartCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-agbara-gold text-agbara-bg text-[10px] font-bold flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-white/10 text-agbara-gold"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-agbara-bg/95 backdrop-blur-2xl flex flex-col justify-center items-center px-8 text-agbara-txt">
          <div className="flex flex-col gap-6 text-center text-xl font-serif tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-agbara-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3.5 w-full max-w-xs">
            <a
              href="#produits"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full text-center py-3 rounded-full font-serif font-bold uppercase text-sm shadow-xl"
            >
              <span className="btn-slide" />
              <span className="btn-content">Accéder à la Boutique</span>
            </a>
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full text-center py-3 rounded-full font-mono text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Commander sur WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 text-xs font-mono uppercase tracking-widest text-agbara-mut hover:text-agbara-gold"
          >
            Fermer ✕
          </button>
        </div>
      )}
    </>
  );
}
