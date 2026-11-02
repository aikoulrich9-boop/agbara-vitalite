import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';
import { CheckCircle2, MessageCircle, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HowToOrder({ cart }) {
  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    adr: '',
    remarques: '',
  });

  const [ordered, setOrdered] = useState(false);

  // Cart calculation
  const items = Object.entries(cart)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = PRODUCTS.find((prod) => prod.id === id);
      return { ...p, qty };
    });

  const totalFcfa = items.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0);

  const buildWhatsAppUrl = () => {
    let lines = [];
    items.forEach((item) => {
      lines.push(`• ${item.qty} × ${item.name} (${(item.price * item.qty).toLocaleString('fr-FR')} FCFA)`);
    });

    let txt = '';
    if (lines.length) {
      txt = `Bonjour, je souhaite commander :\n` +
        lines.join('\n') +
        `\nTotal : ${totalFcfa.toLocaleString('fr-FR')} FCFA` +
        `\nNom : ${formData.nom || '—'}` +
        `\nLivraison : ${formData.adr || '—'}` +
        (formData.remarques ? `\nNote : ${formData.remarques}` : '');
    } else {
      txt = `Bonjour, je souhaite en savoir plus sur les produits AGBARA.`;
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrdered(true);
    // Redirect to WhatsApp
    window.open(buildWhatsAppUrl(), '_blank');
  };

  return (
    <section id="commander" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* 3 Step Guide from Original HTML */}
      <div className="mb-16">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-agbara-gold text-center mb-8">
          Comment commander
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-agbara-card rounded-2xl p-6 border border-agbara-border shadow-md">
            <span className="font-serif text-2xl font-bold text-agbara-gold block mb-2">1.</span>
            <p className="font-serif text-sm text-agbara-txt/90">
              Choisissez vos produits et vos quantités dans la section ci-dessus.
            </p>
          </div>
          <div className="bg-agbara-card rounded-2xl p-6 border border-agbara-border shadow-md">
            <span className="font-serif text-2xl font-bold text-agbara-gold block mb-2">2.</span>
            <p className="font-serif text-sm text-agbara-txt/90">
              Remplissez vos coordonnées ci-dessous (ou écrivez-nous directement).
            </p>
          </div>
          <div className="bg-agbara-card rounded-2xl p-6 border border-agbara-border shadow-md">
            <span className="font-serif text-2xl font-bold text-agbara-gold block mb-2">3.</span>
            <p className="font-serif text-sm text-agbara-txt/90">
              La commande s’ouvre sur WhatsApp pour confirmer le total et l’adresse de livraison.
            </p>
          </div>
        </div>
      </div>

      {/* Finalize Order Form Card */}
      <div className="bg-agbara-card rounded-3xl p-6 sm:p-10 border border-agbara-border shadow-2xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-agbara-gold mb-2">
            Finaliser votre commande
          </h3>
          <p className="font-serif text-sm text-agbara-txt/80">
            Remplissez vos coordonnées pour recevoir votre sélection en toute discrétion.
          </p>
        </div>

        {/* Selected Products Preview */}
        {items.length > 0 ? (
          <div className="bg-agbara-bg/80 rounded-2xl p-4 border border-agbara-border mb-6 font-mono text-xs max-w-xl mx-auto">
            <div className="flex justify-between font-bold text-agbara-gold mb-2 pb-2 border-b border-agbara-border">
              <span>PRODUITS SÉLECTIONNÉS</span>
              <span>{totalFcfa.toLocaleString('fr-FR')} FCFA</span>
            </div>
            <div className="space-y-1 text-agbara-txt/80">
              {items.map((it) => (
                <div key={it.id} className="flex justify-between">
                  <span>{it.qty} × {it.name}</span>
                  <span>{(it.price * it.qty).toLocaleString('fr-FR')} FCFA</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-xs font-mono text-agbara-mut mb-6">
            Aucun produit sélectionné dans le panier. Sélectionnez au moins un article ci-dessus.
          </div>
        )}

        {/* Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
          <div>
            <label className="block text-xs font-mono text-agbara-mut uppercase mb-1">
              Votre nom complet *
            </label>
            <input
              type="text"
              required
              placeholder="Ex : Moussa K."
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt font-serif text-sm focus:outline-none focus:border-agbara-gold"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-agbara-mut uppercase mb-1">
              Votre numéro de téléphone (WhatsApp) *
            </label>
            <input
              type="tel"
              required
              placeholder="Ex : +229 00 00 00 00"
              value={formData.tel}
              onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt font-serif text-sm focus:outline-none focus:border-agbara-gold"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-agbara-mut uppercase mb-1">
              Votre ville / adresse de livraison *
            </label>
            <input
              type="text"
              required
              placeholder="Ex : Cotonou, Haie Vive ou Akpakpa"
              value={formData.adr}
              onChange={(e) => setFormData({ ...formData, adr: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt font-serif text-sm focus:outline-none focus:border-agbara-gold"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-agbara-mut uppercase mb-1">
              Instructions particulières (facultatif)
            </label>
            <textarea
              rows="2"
              placeholder="Disponibilité horaire, point de repère précis..."
              value={formData.remarques}
              onChange={(e) => setFormData({ ...formData, remarques: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt font-serif text-sm focus:outline-none focus:border-agbara-gold resize-none"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="btn-gold w-full py-4 text-sm sm:text-base font-serif font-bold uppercase tracking-wider"
            >
              <span className="btn-slide" />
              <span className="btn-content flex items-center justify-center gap-2">
                <span>
                  Confirmer ma commande ({totalFcfa.toLocaleString('fr-FR')} FCFA)
                </span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          <div className="text-center pt-2">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#25D366] hover:underline inline-flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ou commandez directement sans remplir le formulaire</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

