import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoloShowcase from './components/SoloShowcase';
import Products from './components/Products';
import WhyAgbara from './components/WhyAgbara';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { PRODUCTS, WHATSAPP_NUMBER } from './data/products';

export default function App() {
  // Cart state: { [productId]: quantity }
  const [cart, setCart] = useState({
    kit: 1, // Pre-select Combo AGBARA
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const updateQuantity = (productId, delta) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const handleDirectOrder = (productId) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    const qty = (cart[productId] && cart[productId] > 0) ? cart[productId] : 1;
    const msg = `Bonjour AGBARA, je souhaite commander :\n• ${qty} × ${product ? product.name : 'Produit AGBARA'} (${product ? ((product.price * qty).toLocaleString('fr-FR') + ' FCFA') : ''})\n\nMerci de me préciser les modalités de livraison.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <div className="relative min-h-screen bg-agbara-bg text-agbara-txt font-serif selection:bg-agbara-gold selection:text-agbara-bg">
      {/* Subtle organic noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Header */}
      <Navbar
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* 1. Hero Section (Crisp HD bottle, text on both sides, no price, Commander CTA) */}
        <Hero onDirectOrder={handleDirectOrder} />

        {/* 2. La Bouteille AGBARA (Description du produit conservée) */}
        <SoloShowcase onDirectOrder={handleDirectOrder} />

        {/* 3. La Boutique (Options séparées + Pack Combo) */}
        <Products
          cart={cart}
          updateQuantity={updateQuantity}
          onDirectOrder={handleDirectOrder}
        />

        {/* 4. Pourquoi AGBARA ? */}
        <WhyAgbara />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
      />
    </div>
  );
}
