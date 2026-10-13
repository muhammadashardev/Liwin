import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const featuredProducts = [
  {
    id: 'pistachio-almond',
    name: 'Fiber Bar Pistachio & Almond',
    tagline: 'Crunchy. Nutty. Naturally Good.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: ['High in Fiber', 'No Added Sugar', 'Gluten Free', 'Rich in Natural Ingredients'],
    image: '/01_featured_product_visual.jpg',
    accent: '#2d7a3e',
  },
  {
    id: 'chocolate',
    name: 'Fiber Bar Chocolate',
    tagline: 'Rich Dark Cocoa. Pure Indulgence.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: ['High in Fiber', 'No Added Sugar', 'Gluten Free', 'Premium Dark Cocoa'],
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
    accent: '#7b3f1e',
  },
  {
    id: 'cranberry-almond',
    name: 'Fiber Bar Cranberry & Almond',
    tagline: 'Tangy. Sweet. Antioxidant Boost.',
    price: 2.99,
    originalPrice: 3.99,
    benefits: ['High in Fiber', 'No Added Sugar', 'Gluten Free', 'Superfruit Cranberries'],
    image: 'https://images.unsplash.com/photo-1622484216843-c053359d3cfd?w=600&auto=format&fit=crop&q=80',
    accent: '#a62060',
  },
];

export default function FeaturedProductSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const { addToCart } = useCart();
  const product = featuredProducts[activeIdx];

  return (
    <section className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a2c18 0%, #0f3d22 50%, #173d26 100%)' }}
        >
          {/* Subtle grain texture overlay */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }} />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[420px] sm:min-h-[480px]">

            {/* Left: Product image */}
            <div className="relative flex items-center justify-center p-8 sm:p-12 lg:p-16">
              {/* Green radial glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #4ade80 0%, transparent 70%)' }} />
              </div>
              <img
                key={activeIdx}
                src={product.image}
                alt={product.name}
                className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-2xl transition-all duration-500"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', animation: 'floatHero 4s ease-in-out infinite' }}
              />
            </div>

            {/* Right: Product info */}
            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              {/* Label */}
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3">FEATURED PRODUCT</span>

              {/* Name & Tagline */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-snug mb-1">{product.name}</h2>
              <p className="text-stone-400 text-sm mb-5">{product.tagline}</p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#6ec94f] shrink-0" />
                    <span className="text-stone-200 text-sm font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-black text-white">${product.price.toFixed(2)}</span>
                <span className="text-stone-500 line-through text-base font-semibold">${product.originalPrice.toFixed(2)}</span>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, weight: '40g' })}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm text-[#071a10] transition-all hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
                  style={{ background: '#7ed957', boxShadow: '0 8px 24px rgba(126,217,87,0.3)' }}
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                <Link to={`/product/${product.id}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white border border-white/20 hover:border-[#6ec94f]/60 hover:bg-white/5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Pagination dots */}
          <div className="flex justify-center pb-5 pt-1 gap-2.5">
            {featuredProducts.map((_, idx) => (
              <button key={idx} onClick={() => setActiveIdx(idx)} aria-label={`Product ${idx + 1}`}
                className={`rounded-full transition-all duration-300 focus:outline-none ${activeIdx === idx ? 'w-6 h-2.5 bg-[#7ed957]' : 'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'}`} />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes floatHero {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
