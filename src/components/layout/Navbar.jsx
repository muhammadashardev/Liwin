import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function Navbar({ onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Főoldal', path: '/' },
    { name: 'Webshop / Termékek', path: '/shop' },
    { name: 'Miért a Rostok?', path: '/#story' },
    { name: 'Technikai Audit & Terv', path: '/audit', badge: 'Új' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  if (isHome) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs transition-all animate-fadeIn">
      {/* Top Announcement Bar */}
      <div className="bg-[#1b4332] text-emerald-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
        <span>Ingyenes házhozszállítás 15.000 Ft felett! Kuponkód 10% kedvezményhez: <strong className="text-white underline decoration-amber-300 decoration-2">LIWIN10</strong></span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <span className="font-extrabold text-2xl tracking-tight text-stone-900 flex items-center gap-1">
                LIWIN<span className="text-emerald-700">.hu</span>
              </span>
              <p className="text-[10px] text-stone-500 font-semibold tracking-wider uppercase -mt-1">
                Tudatosság szabályok nélkül
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-emerald-800 bg-emerald-50/80 font-bold'
                    : 'text-stone-600 hover:text-emerald-700 hover:bg-stone-50'
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-md bg-amber-100 text-amber-800">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-stone-600 hover:text-emerald-800 hover:bg-stone-100 transition-colors"
              title="Keresés a termékek között"
              aria-label="Keresés"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="relative p-2.5 rounded-full text-stone-700 hover:text-emerald-800 hover:bg-stone-100 transition-colors flex items-center justify-center"
              aria-label="Kosár megtekintése"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-700 text-white font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scaleIn">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link
              to="/audit"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-stone-900 hover:bg-emerald-800 text-white transition-all shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>WooCommerce Audit</span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
              aria-label="Menü kinyitása"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-stone-800 hover:bg-emerald-50 hover:text-emerald-800"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-amber-100 text-amber-800">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/audit"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-white font-bold rounded-xl text-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Teljes Technikai Audit Megtekintése</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
