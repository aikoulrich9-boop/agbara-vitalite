import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MedicalScience from './components/MedicalScience';
import SoloShowcase from './components/SoloShowcase';
import Timeline from './components/Timeline';
import Products from './components/Products';
import ManVitalityStory from './components/ManVitalityStory';
import WhyAgbara from './components/WhyAgbara';
import Testimonials from './components/Testimonials';
import HowToOrder from './components/HowToOrder';
import Faq from './components/Faq';
import Footer from './components/Footer';
import StickyCart from './components/StickyCart';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import { PRODUCTS } from './data/products';

export default function App() {
  // Cart state: { [productId]: quantity }
  const [cart, setCart] = useState({
    kit: 1, // Pre-select Kit AGBARA for optimal conversion
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

      {/* Header & Delivery Ticker */}
      <Navbar
        cartCount={totalItems}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="pb-16">
        {/* 1. Hero Section with Interactive Visualizer */}
        <Hero onDirectOrder={handleDirectOrder} />

        {/* 2. La Bouteille AGBARA Showcase */}
        <SoloShowcase onDirectOrder={handleDirectOrder} />

        {/* 3. Medical & Botanical Science */}
        <MedicalScience />

        {/* 4. Timeline 30 Jours */}
        <Timeline />

        {/* 5. Catalogue Complet des Produits (Kit, Bouteille, Sodabi, Poudre) */}
        <Products
          cart={cart}
          updateQuantity={updateQuantity}
          onDirectOrder={handleDirectOrder}
        />

        {/* 6. L'Histoire & La Dignité Masculine Retrouvée */}
        <ManVitalityStory />

        {/* 7. Pourquoi AGBARA ? */}
        <WhyAgbara />

        {/* 8. Témoignages Clients Vérifiés */}
        <Testimonials />

        {/* 9. Comment Commander & Formulaire de Commande Directe */}
        <HowToOrder cart={cart} />

        {/* 10. Questions Fréquentes */}
        <Faq />
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
