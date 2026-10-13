import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const BADGE_STYLES = {
  'Bestseller': 'bg-[#1b4332] text-white',
  'Popular':    'bg-emerald-700 text-white',
  'New':        'bg-sky-700 text-white',
  'Hot':        'bg-rose-600 text-white',
  'Organic':    'bg-[#2d7a3e] text-white',
  'Best Value': 'bg-amber-600 text-white',
  'Gluten Free':'bg-teal-700 text-white',
  'Save 20%':   'bg-[#84cc16] text-[#071a10] font-black',
};

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="group bg-[#FAF8F5] rounded-3xl overflow-hidden border border-stone-200/70 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5">

      {/* Image Container with Warm Cream Background matching design */}
      <div className="relative bg-[#f6f2e8] h-48 sm:h-56 overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-contain drop-shadow-md group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = '/crops/pure_pistachio.png';
          }}
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-lg shadow-sm ${BADGE_STYLES[product.badge] || 'bg-stone-800 text-white'}`}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Heart */}
        <button
          onClick={() => setWishlisted((w) => !w)}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xs border border-stone-200/60 hover:border-red-300 transition-all"
          aria-label="Wishlist"
        >
          <Heart className={`w-3.5 h-3.5 stroke-[2] transition-colors ${wishlisted ? 'fill-red-500 text-red-500' : 'text-stone-400 hover:text-red-500'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Title */}
          <Link to={`/product/${product.id}`} className="hover:text-emerald-800 transition-colors">
            <h3 className="font-extrabold text-stone-900 text-sm sm:text-[15px] leading-snug mb-1.5 line-clamp-2">
              {product.name}
            </h3>
          </Link>

          {/* Star ratings */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.round(product.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-stone-200 text-stone-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-[11px] text-stone-400 font-medium">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        {/* Price & Add to Cart button */}
        <div className="space-y-3 pt-2 border-t border-stone-100">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-stone-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-stone-400 line-through font-semibold">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1b4332] hover:bg-[#2d7a3e] active:scale-95 text-white font-extrabold text-xs tracking-wide shadow-sm transition-all duration-200"
            aria-label="Add to Cart"
          >
            <ShoppingCart className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

    </div>
  );
}
