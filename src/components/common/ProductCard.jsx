import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function ProductCard({ product, onQuickView }) {
  const { addToCart } = useCart();

  const formatPrice = (val) => {
    return new Intl.NumberFormat('hu-HU').format(val) + ' Ft';
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-stone-200/80 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 flex flex-col h-full">
      
      {/* Image container */}
      <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-white/95 backdrop-blur-md text-emerald-900 text-xs font-bold rounded-full shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-stone-700 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-emerald-700 hover:text-white transition-all shadow-sm"
          title="Gyors előnézet"
          aria-label="Gyorsnézet"
        >
          <Eye className="w-4 h-4" />
        </button>

        {/* Fiber highlight tag */}
        <div className="absolute bottom-3 left-3 bg-[#1b4332]/90 backdrop-blur-sm text-emerald-100 text-[11px] font-bold px-2.5 py-1 rounded-lg">
          🌿 {product.nutrition.fiber} rost / 100g
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Reviews & Weight */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-1.5">
            <div className="flex items-center gap-1 text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400">({product.reviewsCount})</span>
            </div>
            <span className="font-medium bg-stone-100 px-2 py-0.5 rounded text-stone-600">
              {product.weight}
            </span>
          </div>

          {/* Title */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-emerald-700 transition-colors">
            <h3 className="font-bold text-stone-900 text-base leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-stone-500 mt-1 line-clamp-2">
            {product.subtitle}
          </p>

          {/* Dietary tags */}
          <div className="flex flex-wrap gap-1 mt-2.5">
            {product.dietary.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 bg-emerald-50 text-emerald-800 rounded-md"
              >
                {tag.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom price + Add to Cart */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
          <div>
            <div className="text-base font-extrabold text-stone-900">
              {formatPrice(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-stone-400 line-through">
                {formatPrice(product.originalPrice)}
              </div>
            )}
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs shadow-sm transition-all"
            aria-label="Kosárba rakom"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Kosárba</span>
          </button>
        </div>

      </div>
    </div>
  );
}
