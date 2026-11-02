import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Truck, ShoppingBag } from 'lucide-react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../data/products';

export default function CheckoutModal({ isOpen, onClose, cart, onClearCart }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    nom: '',
    tel: '',
    ville: '',
    remarques: '',
    modePaiement: 'livraison', // 'livraison' | 'momo' | 'whatsapp'
  });

  const [submitted, setSubmitted] = useState(false);

  const items = Object.entries(cart)
    .filter(([_, qty]) => qty > 0)
    .map(([id, qty]) => {
      const p = PRODUCTS.find((prod) => prod.id === id);
      return { ...p, qty };
    });

  const totalFcfa = items.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppConfirmationUrl = () => {
    let msg = `*CONFIRMATION COMMANDE AGBARA*\n\n`;
    msg += `👤 *Client* : ${formData.nom}\n`;
    msg += `📞 *WhatsApp* : ${formData.tel}\n`;
    msg += `📍 *Adresse de livraison* : ${formData.ville}\n`;
    if (formData.remarques) msg += `📝 *Instructions* : ${formData.remarques}\n`;
    msg += `\n*PRODUITS :*\n`;
    items.forEach((item) => {
      msg += `• ${item.qty} × ${item.name} (${(item.price * item.qty).toLocaleString('fr-FR')} FCFA)\n`;
    });
    msg += `\n*TOTAL : ${totalFcfa.toLocaleString('fr-FR')} FCFA*\n`;
    msg += `*RÈGLEMENT* : ${formData.modePaiement === 'livraison' ? 'Paiement à la livraison' : 'Mobile Money / WhatsApp'}\n`;
    msg += `\nMerci de confirmer la prise en charge de ma commande.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-agbara-card w-full max-w-xl rounded-3xl p-6 sm:p-10 text-agbara-txt border border-agbara-gold/50 shadow-[0_20px_60px_rgba(0,0,0,0.9)] z-10 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-agbara-bg text-agbara-gold transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-agbara-gold font-bold">
                Commande Directe & Discrète
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-agbara-gold mt-1">
                Finaliser votre commande
              </h3>
              <p className="text-xs sm:text-sm text-agbara-mut mt-1 font-serif">
                Colis neutre scellé sans mention du contenu. Vos informations restent strictement confidentielles.
              </p>
            </div>

            {/* Order Brief Summary */}
            <div className="bg-agbara-bg/90 rounded-2xl p-4 border border-agbara-border mb-6 text-xs font-mono">
              <div className="flex justify-between items-center mb-2 font-bold text-agbara-gold pb-1 border-b border-agbara-border">
                <span>RÉSUMÉ DU PANIER</span>
                <span className="text-sm">{totalFcfa.toLocaleString('fr-FR')} FCFA</span>
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

            {/* Order Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-serif">
              <div>
                <label className="block text-xs font-mono uppercase text-agbara-mut mb-1">
                  Nom et Prénom *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Moussa K."
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt text-sm focus:outline-none focus:border-agbara-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-agbara-mut mb-1">
                  Numéro de téléphone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex : +229 00 00 00 00"
                  value={formData.tel}
                  onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt text-sm focus:outline-none focus:border-agbara-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-agbara-mut mb-1">
                  Ville & Adresse de livraison *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex : Cotonou, Haie Vive ou autre ville"
                  value={formData.ville}
                  onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt text-sm focus:outline-none focus:border-agbara-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-agbara-mut mb-1">
                  Instructions de livraison (facultatif)
                </label>
                <textarea
                  rows="2"
                  placeholder="Créneau horaire, point de repère précis..."
                  value={formData.remarques}
                  onChange={(e) => setFormData({ ...formData, remarques: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-agbara-dark border border-agbara-border text-agbara-txt text-sm focus:outline-none focus:border-agbara-gold resize-none"
                />
              </div>

              {/* Mode de règlement */}
              <div className="pt-2">
                <label className="block text-xs font-mono uppercase text-agbara-mut mb-2">
                  Mode de règlement
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modePaiement: 'livraison' })}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1 transition-all ${
                      formData.modePaiement === 'livraison'
                        ? 'border-agbara-gold bg-agbara-gold/15 text-agbara-gold font-bold'
                        : 'border-agbara-border bg-agbara-bg text-agbara-mut'
                    }`}
                  >
                    <Truck className="w-4 h-4" />
                    <span>Paiement à la livraison</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modePaiement: 'whatsapp' })}
                    className={`p-3 rounded-xl border text-xs font-mono font-medium flex flex-col items-center gap-1 transition-all ${
                      formData.modePaiement === 'whatsapp'
                        ? 'border-[#25D366] bg-[#25D366]/15 text-[#25D366] font-bold'
                        : 'border-agbara-border bg-agbara-bg text-agbara-mut'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Mobile Money / WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-sm font-serif font-bold uppercase tracking-wider"
                >
                  <span className="btn-slide" />
                  <span className="btn-content">
                    Valider ma commande ({totalFcfa.toLocaleString('fr-FR')} FCFA)
                  </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-6 font-serif">
            <div className="w-16 h-16 rounded-full bg-agbara-gold/20 text-agbara-gold flex items-center justify-center mx-auto mb-4 border border-agbara-gold">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-mono uppercase tracking-widest text-agbara-gold font-bold">
              Commande Prise en Compte
            </span>
            <h3 className="text-3xl font-bold text-agbara-gold mt-1 mb-3">
              Merci, {formData.nom} !
            </h3>
            <p className="text-sm text-agbara-txt/80 max-w-md mx-auto leading-relaxed mb-6">
              Votre commande pour un total de <strong className="text-agbara-gold">{totalFcfa.toLocaleString('fr-FR')} FCFA</strong> a été enregistrée. 
              Cliquez ci-dessous pour finaliser instantanément la confirmation avec notre équipe sur WhatsApp.
            </p>

            <div className="space-y-3">
              <a
                href={getWhatsAppConfirmationUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full py-3.5 px-6 rounded-full font-serif font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-agbara-bg" />
                <span>Ouvrir la confirmation sur WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClearCart();
                  onClose();
                }}
                className="w-full text-xs font-mono uppercase tracking-wider text-agbara-mut hover:text-agbara-gold py-2"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
