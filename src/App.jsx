import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Toast from './components/common/Toast';
import SearchModal from './components/common/SearchModal';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import BlogPage from './pages/BlogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuditPage from './pages/AuditPage';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        {/* Outer frame: full viewport width, prevents horizontal overflow */}
        <div
          className="w-full overflow-x-hidden"
          style={{ minWidth: 320 }}
        >
          {/* Inner frame: max-width 1600px centered, feels like a framed app */}
          <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans w-full mx-auto" style={{ maxWidth: '1600px' }}>
            {/* Header */}
            <Navbar onOpenSearch={() => setSearchOpen(true)} />

            {/* Main Content Pages */}
            <main className="flex-1 w-full">
              <Routes>
                <Route path="/" element={<HomePage onOpenSearch={() => setSearchOpen(true)} />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/blog" element={<BlogPage onOpenSearch={() => setSearchOpen(true)} />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/audit" element={<AuditPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />

            {/* Overlays & Modals */}
            <Toast />
            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
          </div>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
