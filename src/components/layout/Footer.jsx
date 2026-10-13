import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-[#0b1d13] text-stone-300 pt-14 pb-10 border-t border-emerald-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">

          {/* Col 1: Brand Info & Socials (span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex flex-col items-start group">
              <div className="relative inline-flex items-center gap-1.5">
                <svg className="w-5 h-5 text-[#84cc16] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 6 6 12 12 18c6-6 4-12 0-16z" />
                  <path d="M12 18c-3-2-6-5-5-9 3 0 5 2 5 9z" opacity="0.8" />
                </svg>
                <span className="text-white font-black text-2xl tracking-wider leading-none">LIWIN</span>
                <span className="text-[#84cc16] font-black text-xs -top-1 -right-1 leading-none">®</span>
              </div>
              <span className="text-stone-400 text-[10px] font-semibold tracking-[0.22em] uppercase -mt-0.5">
                Fiber-Rich Foods
              </span>
            </Link>

            <p className="text-xs sm:text-[13px] text-stone-400 leading-relaxed max-w-sm">
              Making fiber-rich snacks with real ingredients for better energy, better choices, and a better you.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:text-[#84cc16] hover:border-[#84cc16] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:text-[#84cc16] hover:border-[#84cc16] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:text-[#84cc16] hover:border-[#84cc16] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-stone-300 hover:text-[#84cc16] hover:border-[#84cc16] transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Shop (span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Shop</h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-stone-400">
              <li>
                <Link to="/shop" className="hover:text-[#84cc16] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?category=fiber-bars" className="hover:text-[#84cc16] transition-colors">
                  Fiber Bars
                </Link>
              </li>
              <li>
                <Link to="/shop?category=granola" className="hover:text-[#84cc16] transition-colors">
                  Granola
                </Link>
              </li>
              <li>
                <Link to="/shop?category=snacks" className="hover:text-[#84cc16] transition-colors">
                  Snacks
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bundles" className="hover:text-[#84cc16] transition-colors">
                  Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Explore (span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Explore</h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-stone-400">
              <li>
                <Link to="/#story" className="hover:text-[#84cc16] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#goodness" className="hover:text-[#84cc16] transition-colors">
                  Our Ingredients
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className={`transition-colors font-semibold ${
                    location.pathname === '/blog' ? 'text-[#84cc16]' : 'hover:text-[#84cc16]'
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-[#84cc16] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="hover:text-[#84cc16] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/audit" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                  Technical Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">Contact</h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-stone-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#84cc16] shrink-0" />
                <a href="mailto:hello@liwinfoods.com" className="hover:text-[#84cc16] transition-colors">
                  hello@liwinfoods.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#84cc16] shrink-0" />
                <a href="tel:+11234567890" className="hover:text-[#84cc16] transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#84cc16] shrink-0 mt-0.5" />
                <span>123 Nature Way, Wellness City, USA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} LIWIN Fiber-Rich Foods. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#terms" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
