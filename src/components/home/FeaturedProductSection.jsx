import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const featuredList = [
  {
    id: 'pistachio-almond',
    name: 'Fiber Bar Pistachio & Almond',
    tagline: 'Crunchy. Nutty. Naturally Good.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: [
      'High in Fiber',
      'No Added Sugar',
      'Gluten Free',
      'Rich in Natural Ingredients',
    ],
    image: '/crops/clean_featured_pistachio.jpg',
    weight: '40g',
  },
  {
    id: 'chocolate',
    name: 'Fiber Bar Chocolate',
    tagline: 'Rich Dark Cocoa. Pure Indulgence.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: [
      'High in Fiber',
      'No Added Sugar',
      'Gluten Free',
      'Rich in Natural Ingredients',
    ],
    image: '/crops/clean_featured_pistachio.jpg',
    weight: '40g',
  },
  {
    id: 'cranberry-almond',
    name: 'Fiber Bar Cranberry & Almond',
    tagline: 'Tangy. Sweet. Antioxidant Boost.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: [
      'High in Fiber',
      'No Added Sugar',
      'Gluten Free',
      'Rich in Natural Ingredients',
    ],
    image: '/crops/clean_featured_pistachio.jpg',
    weight: '40g',
  },
  {
    id: 'blueberry-almond',
    name: 'Fiber Bar Blueberry & Almond',
    tagline: 'Sweet Wild Berry. Lasting Vitality.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: [
      'High in Fiber',
      'No Added Sugar',
      'Gluten Free',
      'Rich in Natural Ingredients',
    ],
    image: '/crops/clean_featured_pistachio.jpg',
    weight: '40g',
  },
];

export default function FeaturedProductSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { addToCart } = useCart();
  const product = featuredList[activeIdx];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-950/40"
          style={{
            background: 'linear-gradient(135deg, #092316 0%, #0d2a1b 50%, #123523 100%)',
          }}
        >
          {/* Ambient light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* 2-Column Split: Image fills entire left side properly */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[520px] items-stretch">
            
            {/* ── LEFT SIDE: Full-width / full-height image container ── */}
            <div className="lg:col-span-6 relative flex items-center justify-center min-h-[360px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-[#071c12]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
                style={{
                  filter: 'drop-shadow(0 15px 35px rgba(0,0,0,0.4))',
                }}
              />
              {/* Soft overlay gradient on right edge of image for seamless blend into text area */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#0d2a1b]/60 pointer-events-none" />
            </div>

            {/* ── RIGHT SIDE: Product details & Add to Cart ── */}
            <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-center text-white space-y-4 sm:space-y-5">
              
              {/* Category / Badge */}
              <div>
                <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.22em] text-[#84cc16] block">
                  FEATURED PRODUCT
                </span>
              </div>

              {/* Product Title & Tagline */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                  {product.name}
                </h2>
                <p className="text-stone-300 text-sm sm:text-base font-normal mt-1.5">
                  {product.tagline}
                </p>
              </div>

              {/* 4 Benefit Checkmarks */}
              <ul className="space-y-2.5 py-2">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#84cc16] shrink-0" />
                    <span className="text-stone-200 text-xs sm:text-sm font-semibold tracking-wide">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price row */}
              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-stone-400 line-through text-base sm:text-lg font-bold">
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => addToCart(product, 1)}
                  className="bg-[#84cc16] hover:bg-[#72b012] text-stone-900 font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all hover:shadow-xl hover:translate-x-0.5"
                >
                  <ShoppingCart className="w-4 h-4 stroke-[2.4]" />
                  <span>Add to Cart</span>
                </button>

                <Link
                  to={`/product/${product.id}`}
                  className="w-11 h-11 rounded-full border border-white/20 hover:border-[#84cc16] hover:text-[#84cc16] flex items-center justify-center text-white transition-all"
                  aria-label="View product details"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Slider dots */}
              <div className="pt-4 flex items-center gap-2">
                {featuredList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    aria-label={`Featured slide ${idx + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      activeIdx === idx
                        ? 'w-6 h-2 bg-[#84cc16]'
                        : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
