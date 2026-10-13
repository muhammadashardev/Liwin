import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function QuickViewModal({ product, onClose }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAdd = () => {
    addToCart(product, qty);
    onClose();
  };

  const formatPrice = (val) => new Intl.NumberFormat('hu-HU').format(val) + ' Ft';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-100 flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition"
          aria-label="Bezárás"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image side */}
        <div className="md:w-1/2 bg-stone-100 relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover min-h-[260px] md:min-h-full"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 font-bold text-xs text-emerald-900 rounded-full shadow-sm">
              {product.badge}
            </span>
          )}
        </div>

        {/* Content side */}
        <div className="p-6 md:w-1/2 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold mb-2">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400">({product.reviewsCount} vélemény)</span>
            </div>

            <h3 className="text-xl font-extrabold text-stone-900 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-stone-500 mt-1">{product.subtitle}</p>

            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-black text-emerald-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-stone-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Nutrients per 100g */}
            <div className="mt-4 p-3 bg-stone-50 rounded-2xl border border-stone-200/60">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-2">
                Tápérték adatok (100g-ban):
              </span>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-white p-2 rounded-xl shadow-xs">
                  <div className="font-extrabold text-emerald-700">{product.nutrition.fiber}</div>
                  <div className="text-[10px] text-stone-400">Rost</div>
                </div>
                <div className="bg-white p-2 rounded-xl shadow-xs">
                  <div className="font-extrabold text-stone-700">{product.nutrition.carbs}</div>
                  <div className="text-[10px] text-stone-400">CH</div>
                </div>
                <div className="bg-white p-2 rounded-xl shadow-xs">
                  <div className="font-extrabold text-stone-700">{product.nutrition.protein}</div>
                  <div className="text-[10px] text-stone-400">Fehérje</div>
                </div>
                <div className="bg-white p-2 rounded-xl shadow-xs">
                  <div className="font-extrabold text-stone-700">{product.nutrition.calories}</div>
                  <div className="text-[10px] text-stone-400">Energia</div>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-600 mt-3 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Action bottom */}
          <div className="mt-6 pt-4 border-t border-stone-100 space-y-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-1.5 hover:bg-stone-100 text-stone-600 font-bold"
                >
                  -
                </button>
                <span className="px-3 font-semibold text-sm">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-1.5 hover:bg-stone-100 text-stone-600 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-bold rounded-xl text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Kosárba rakom</span>
              </button>
            </div>

            <div className="text-center">
              <Link
                to={`/product/${product.id}`}
                onClick={onClose}
                className="text-xs font-semibold text-emerald-800 hover:underline"
              >
                Teljes termékadatlap megtekintése →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
