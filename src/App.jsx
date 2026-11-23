import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoloShowcase from './components/SoloShowcase';
import Products from './components/Products';
import WhyAgbara from './components/WhyAgbara';
import HowToOrder from './components/HowToOrder';
import Footer from './components/Footer';
import StickyCart from './components/StickyCart';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { PRODUCTS } from './data/products';

export default function App() {
  // Cart state: { [productId]: quantity }
  const [cart, setCart] = useState({
    kit: 1, // Pre-select Combo AGBARA for easy checkout
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

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
    if (!cart[productId] || cart[productId] === 0) {
      setCart((prev) => ({ ...prev, [productId]: 1 }));
    }
    setIsCheckoutOpen(true);
  };

  const totalItems = Object.values(cart).reduce((sum, q) => sum + q, 0);

  return (
    <div className="relative min-h-screen bg-agbara-bg text-agbara-txt font-serif selection:bg-agbara-gold selection:text-agbara-bg">
      {/* Subtle organic noise texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Header (clean, without top 24h ticker) */}
      <Navbar
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="pb-16">
        {/* 1. Hero Section (Crisp HD bottle, text on both sides, no price, Commander CTA) */}
        <Hero onDirectOrder={handleDirectOrder} />

        {/* 2. La Bouteille AGBARA (Description du produit conservée) */}
        <SoloShowcase onDirectOrder={handleDirectOrder} />

        {/* 3. La Boutique (Juste après la description : options séparées + combo) */}
        <Products
          cart={cart}
          updateQuantity={updateQuantity}
          onDirectOrder={handleDirectOrder}
        />

        {/* 4. Pourquoi AGBARA ? */}
        <WhyAgbara />

        {/* 5. Comment Commander & Formulaire WhatsApp */}
        <HowToOrder cart={cart} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Cart Bar */}
      <StickyCart
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onClearCart={clearCart}
      />
    </div>
  );
}
