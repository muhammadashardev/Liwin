import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const slides = [
  {
    id: 'pistachio',
    badge: '🌿 NATURAL • HEALTHY • DELICIOUS',
    heading1: 'Good Snacks',
    heading2: 'Better You',
    desc: 'Fiber-rich snacks made for your active lifestyle.\nMore fiber. More energy. A healthier you.',
    accent: '#6ec94f',
  },
  {
    id: 'chocolate',
    badge: '🍫 RICH COCOA • HIGH FIBER • NO SUGAR',
    heading1: 'Pure Chocolate',
    heading2: 'Real Goodness',
    desc: 'Indulge in rich dark chocolate fiber bars with\nno added sugar and natural ingredients.',
    accent: '#b5651d',
  },
  {
    id: 'cranberry',
    badge: '🍒 CRANBERRY • ANTIOXIDANTS • ENERGY',
    heading1: 'Vibrant Berries',
    heading2: 'Happy You',
    desc: 'Tangy cranberry and almond fiber bars bursting\nwith natural antioxidants and superfruit goodness.',
    accent: '#e24d86',
  },
];

const featureIcons = [
  {
    label: 'High Fiber',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22v-9"/><path d="M12 13a6 6 0 0 1 6-6c0 4-2.5 6-6 6z"/><path d="M12 13a6 6 0 0 0-6-6c0 4 2.5 6 6 6z"/>
      </svg>
    ),
  },
  {
    label: 'No Added Sugar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
  },
  {
    label: 'Gluten Free',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4-.1 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4.2.9-4.9 2z"/>
      </svg>
    ),
  },
  {
    label: 'Healthy\nIngredients',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
  },
];

export default function HeroSection({ onOpenSearch }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const { totalItems } = useCart();
  const autoRef = useRef(null);

  const goToSlide = (idx) => {
    if (idx === activeSlide || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveSlide(idx);
      setAnimating(false);
    }, 350);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col" style={{ background: 'linear-gradient(135deg, #0a2518 0%, #0f3a24 40%, #173d28 70%, #1a4a2e 100%)' }}>

      {/* Background landscape image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/01_shop_hero_background.jpg"
          alt="Natural background"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Deep dark vignette overlay for text legibility */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(5,20,12,0.97) 0%, rgba(5,20,12,0.92) 35%, rgba(5,20,12,0.6) 60%, rgba(5,20,12,0.1) 100%)' }} />
        <div className="absolute inset-0 lg:hidden" style={{ background: 'rgba(5,20,12,0.72)' }} />
        {/* Ambient green glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-64 opacity-20" style={{ background: 'radial-gradient(ellipse, #4ade80 0%, transparent 70%)' }} />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="relative z-30 w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-16 pt-5 pb-4">
        {/* Logo */}
        <Link to="/" className="group flex flex-col items-start shrink-0">
          <div className="relative inline-flex items-center gap-1">
            <svg className="w-5 h-5 text-[#6ec94f] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 6 6 12 12 18c6-6 4-12 0-16z"/><path d="M12 18c-3-2-6-5-5-9 3 0 5 2 5 9z" opacity="0.8"/>
            </svg>
            <span className="text-white font-black text-2xl sm:text-3xl tracking-wider leading-none">LIWIN</span>
            <span className="text-[#6ec94f] font-black text-xs absolute -top-1.5 -right-1 leading-none">®</span>
          </div>
          <span className="text-stone-400 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase -mt-0.5">Fiber-Rich Foods</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-9">
          {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item, i) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : item === 'Shop' ? '/shop' : `/#${item.toLowerCase()}`}
              className={`relative text-sm lg:text-[15px] font-semibold pb-1 transition-colors group ${i === 0 ? 'text-[#6ec94f]' : 'text-white/80 hover:text-[#6ec94f]'}`}
            >
              {item}
              {i === 0 && <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#6ec94f] rounded-full" />}
              {i !== 0 && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6ec94f] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />}
            </Link>
          ))}
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button onClick={onOpenSearch} className="p-2.5 text-white/75 hover:text-[#6ec94f] hover:bg-white/10 rounded-full transition-colors" aria-label="Search">
            <Search className="w-5 h-5 stroke-[1.7]" />
          </button>
          <button className="hidden sm:block p-2.5 text-white/75 hover:text-[#6ec94f] hover:bg-white/10 rounded-full transition-colors" aria-label="Account">
            <User className="w-5 h-5 stroke-[1.7]" />
          </button>
          <Link to="/cart" className="relative p-2.5 text-white/75 hover:text-[#6ec94f] hover:bg-white/10 rounded-full transition-colors" aria-label="Cart">
            <ShoppingBag className="w-5 h-5 stroke-[1.7]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#6ec94f] text-[#071a10] font-black text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2.5 text-white hover:text-[#6ec94f] rounded-full" aria-label="Menu">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-30 mx-4 mb-2 bg-[#071a10]/95 backdrop-blur-xl border border-emerald-700/30 rounded-2xl p-4 space-y-3">
          {['Home', 'Shop', 'About', 'Blog', 'Contact'].map((item, i) => (
            <Link key={item} to={item === 'Home' ? '/' : item === 'Shop' ? '/shop' : `/#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base font-semibold py-1.5 border-b border-white/5 last:border-0 ${i === 0 ? 'text-[#6ec94f]' : 'text-white hover:text-[#6ec94f]'} transition-colors`}>
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-6 sm:py-10 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[520px] lg:min-h-[580px]">

            {/* Left: Text */}
            <div className={`space-y-5 sm:space-y-6 text-left transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 backdrop-blur-sm shadow-inner">
                <span className="text-[#a7f3d0] text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase">{slide.badge}</span>
              </div>

              {/* Headlines */}
              <div>
                <h1 className="text-[40px] sm:text-[54px] lg:text-[62px] xl:text-[72px] font-black text-white leading-[1.05] tracking-tight">
                  {slide.heading1}
                </h1>
                <div className="font-script text-[50px] sm:text-[66px] lg:text-[78px] xl:text-[88px] font-bold leading-[0.9]"
                  style={{ color: slide.accent, textShadow: `0 4px 24px ${slide.accent}55`, fontFamily: "'Caveat', cursive" }}>
                  {slide.heading2}
                </div>
              </div>

              {/* Description */}
              <p className="text-stone-300 text-sm sm:text-[15px] lg:text-base leading-relaxed max-w-md whitespace-pre-line font-normal">
                {slide.desc}
              </p>

              {/* CTA */}
              <div>
                <Link to="/shop"
                  className="inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full font-black text-sm sm:text-base tracking-wide group transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{ background: '#7ed957', color: '#071a10', boxShadow: '0 10px 30px rgba(126,217,87,0.35)' }}>
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.8] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Feature Icons row */}
              <div className="pt-2 flex flex-wrap gap-x-5 gap-y-4 items-start">
                {featureIcons.map((f) => (
                  <div key={f.label} className="flex flex-col items-center text-center group cursor-default w-14">
                    <div className="w-11 h-11 rounded-full border border-emerald-500/40 bg-emerald-950/50 backdrop-blur-sm flex items-center justify-center text-[#6ec94f] group-hover:scale-110 group-hover:border-[#6ec94f] transition-all duration-300 mb-1.5">
                      {f.icon}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold text-stone-300 leading-tight whitespace-pre-line text-center">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Product Image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* "Real Ingredients Real Energy" script callout */}
              <div className="hidden lg:block absolute top-0 right-0 z-20 select-none pointer-events-none" style={{ transform: 'rotate(-10deg)', transformOrigin: 'top right' }}>
                <div style={{ fontFamily: "'Caveat', cursive", color: '#1a4a2e', fontSize: 28, fontWeight: 700, lineHeight: 0.95, textAlign: 'right' }}>
                  <span className="block">Real</span>
                  <span className="block">Ingredients</span>
                  <span className="block">Real Energy</span>
                </div>
              </div>

              {/* Product cutout image */}
              <div className={`relative w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[580px] xl:max-w-[640px] transition-all duration-700 ${animating ? 'opacity-0 scale-95 translate-y-4' : 'opacity-100 scale-100 translate-y-0'}`}
                style={{ animation: animating ? 'none' : 'floatHero 5s ease-in-out infinite' }}>
                <img
                  src="/02_hero_product_visual.png"
                  alt="LIWIN Fiber Bars - Pistachio, Chocolate, Cranberry"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))' }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── PAGINATION DOTS ── */}
      <div className="relative z-20 flex items-center justify-center pb-8 pt-2">
        <div className="flex items-center gap-2.5 bg-black/25 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          {slides.map((s, idx) => (
            <button key={s.id} onClick={() => goToSlide(idx)} aria-label={`Slide ${idx + 1}`}
              className={`rounded-full transition-all duration-300 focus:outline-none ${activeSlide === idx ? 'w-6 h-2.5' : 'w-2.5 h-2.5 bg-stone-500/60 hover:bg-stone-300/70'}`}
              style={activeSlide === idx ? { backgroundColor: slide.accent, boxShadow: `0 0 10px ${slide.accent}90`, width: 24, height: 10 } : {}} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatHero {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}
