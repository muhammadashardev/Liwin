import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const featureIcons = [
  {
    label: 'High Fiber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M12 22v-9" /><path d="M12 13a6 6 0 0 1 6-6c0 4-2.5 6-6 6z" /><path d="M12 13a6 6 0 0 0-6-6c0 4 2.5 6 6 6z" />
      </svg>
    ),
  },
  {
    label: 'No Added Sugar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <circle cx="12" cy="12" r="9" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  {
    label: 'Gluten Free',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" />
      </svg>
    ),
  },
  {
    label: 'Healthy Ingredients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 sm:w-5 sm:h-5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
];

export default function HeroSection({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <section
      className="relative w-full overflow-hidden text-white rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] shadow-2xl"
      style={{ minHeight: '540px' }}
    >
      {/* ── FULL BACKGROUND: products visual with mountain/nature scene ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/01_hero_products_visual.jpg"
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: '70% center' }}
        />
        {/* Desktop: strong left gradient, clear on right to show products */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block"
          style={{
            background:
              'linear-gradient(to right, rgba(5,20,11,0.98) 0%, rgba(5,20,11,0.95) 25%, rgba(5,20,11,0.75) 45%, rgba(5,20,11,0.25) 65%, rgba(5,20,11,0.0) 100%)',
          }}
        />
        {/* Mobile: heavier overlay so text is readable */}
        <div
          className="absolute inset-0 lg:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(5,20,11,0.97) 0%, rgba(5,20,11,0.90) 40%, rgba(5,20,11,0.75) 70%, rgba(5,20,11,0.60) 100%)',
          }}
        />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="relative z-30 w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 pt-6 pb-4">

        {/* Brand Logo */}
        <Link to="/" className="group flex flex-col items-start shrink-0">
          <div className="relative inline-flex items-center gap-1.5">
            <svg className="w-5 h-5 text-[#84cc16] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 6 6 12 12 18c6-6 4-12 0-16z" />
              <path d="M12 18c-3-2-6-5-5-9 3 0 5 2 5 9z" opacity="0.8" />
            </svg>
            <span className="text-white font-black text-2xl tracking-wider leading-none">LIWIN</span>
            <span className="text-[#84cc16] font-black text-xs -top-1 -right-1 leading-none">®</span>
          </div>
          <span className="text-stone-300 text-[10px] font-semibold tracking-[0.22em] uppercase -mt-0.5">
            Fiber-Rich Foods
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10">
          <Link to="/" className="relative text-sm font-bold text-[#84cc16] pb-1">
            Home
            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#84cc16] rounded-full" />
          </Link>
          <Link to="/shop" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
            Shop
          </Link>
          <Link to="/#story" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
            About
          </Link>
          <Link to="/blog" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
            Blog
          </Link>
          <Link to="/#contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="p-2.5 text-white/80 hover:text-[#84cc16] hover:bg-white/10 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="w-5 h-5 stroke-[1.8]" />
          </button>

          <button
            className="hidden sm:block p-2.5 text-white/80 hover:text-[#84cc16] hover:bg-white/10 rounded-full transition-colors"
            aria-label="Account"
          >
            <User className="w-5 h-5 stroke-[1.8]" />
          </button>

          <Link
            to="/cart"
            className="relative p-2.5 text-white/80 hover:text-[#84cc16] hover:bg-white/10 rounded-full transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#84cc16] text-[#071a10] font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center shadow">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-white hover:text-[#84cc16] rounded-lg"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-30 mx-4 mb-4 bg-[#071a10]/95 backdrop-blur-xl border border-emerald-700/30 rounded-2xl p-5 space-y-3">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-[#84cc16] py-1 border-b border-white/5">
            Home
          </Link>
          <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1 border-b border-white/5">
            Shop
          </Link>
          <Link to="/#story" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1 border-b border-white/5">
            About
          </Link>
          <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1 border-b border-white/5">
            Blog
          </Link>
          <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1">
            Contact
          </Link>
        </div>
      )}

      {/* ── HERO CONTENT (left side only) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-20 sm:pt-12 sm:pb-28 lg:pt-14 lg:pb-32">
        <div className="max-w-lg space-y-5 sm:space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/35 bg-black/30 backdrop-blur-sm shadow-sm">
            <span className="text-[#a7f3d0] text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase">
              🌿 NATURAL • HEALTHY • DELICIOUS
            </span>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-white leading-[1.05] tracking-tight drop-shadow-lg">
              Good Snacks{' '}
              <span
                className="block font-['Caveat',cursive] text-[#84cc16] text-5xl sm:text-6xl lg:text-7xl font-bold"
                style={{ textShadow: '0 4px 24px rgba(132,204,22,0.45)' }}
              >
                Better You
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-normal drop-shadow">
            Fiber-rich snacks made for your active lifestyle.<br className="hidden sm:inline" />
            More fiber. More energy. A healthier you.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              to="/shop"
              id="hero-shop-now-btn"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: '#84cc16',
                color: '#071a10',
                boxShadow: '0 8px 28px rgba(132,204,22,0.45)',
              }}
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 stroke-[2.8]" />
            </Link>
          </div>

          {/* Feature Icons Row */}
          <div className="pt-4 flex flex-wrap gap-x-5 sm:gap-x-7 gap-y-3 items-center">
            {featureIcons.map((f) => (
              <div key={f.label} className="flex items-center gap-2 group cursor-default">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-emerald-500/40 bg-black/30 backdrop-blur-sm flex items-center justify-center text-[#84cc16] group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-stone-300 tracking-wide drop-shadow">
                  {f.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
