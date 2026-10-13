import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../mock/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, ShieldCheck, Truck, ChevronRight, Check, Leaf } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) || products[0];
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const formatPrice = (val) => new Intl.NumberFormat('hu-HU').format(val) + ' Ft';
  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="py-10 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-stone-500 mb-8 font-medium">
          <Link to="/" className="hover:text-emerald-800">Főoldal</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-emerald-800">Termékek</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-stone-900 font-bold truncate">{product.name}</span>
        </nav>

        {/* Product Details Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-4/3 border border-stone-200/60 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-white/95 backdrop-blur-md text-emerald-900 font-bold text-xs rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-500 mb-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="ml-1 text-stone-800">{product.rating}</span>
                </div>
                <span className="text-stone-400">({product.reviewsCount} valós vásárlói értékelés)</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                {product.name}
              </h1>
              <p className="text-stone-500 text-sm mt-1">{product.subtitle}</p>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-emerald-900">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-stone-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs font-semibold bg-stone-100 text-stone-600 px-2.5 py-1 rounded-lg">
                  {product.weight}
                </span>
              </div>

              {/* Nutrition Highlight */}
              <div className="mt-6 p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block mb-3">
                  Tápértékek 100 grammban:
                </span>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50">
                    <div className="text-base font-extrabold text-emerald-700">{product.nutrition.fiber}</div>
                    <div className="text-[10px] text-stone-400 font-semibold">Rost</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50">
                    <div className="text-base font-extrabold text-stone-800">{product.nutrition.carbs}</div>
                    <div className="text-[10px] text-stone-400 font-semibold">Szénhidrát</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50">
                    <div className="text-base font-extrabold text-stone-800">{product.nutrition.protein}</div>
                    <div className="text-[10px] text-stone-400 font-semibold">Fehérje</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200/50">
                    <div className="text-base font-extrabold text-stone-800">{product.nutrition.calories}</div>
                    <div className="text-[10px] text-stone-400 font-semibold">Kalória</div>
                  </div>
                </div>
              </div>

              {/* Description & Ingredients */}
              <div className="mt-6 space-y-3">
                <p className="text-stone-700 text-sm leading-relaxed">{product.description}</p>
                <div>
                  <span className="text-xs font-bold text-stone-900 block mb-1.5">Összetevők:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cart Actions */}
            <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center border border-stone-300 rounded-2xl overflow-hidden bg-stone-50">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 hover:bg-stone-200 text-stone-700 font-bold"
                >
                  -
                </button>
                <span className="px-4 font-bold text-sm text-stone-900">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 hover:bg-stone-200 text-stone-700 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => addToCart(product, qty)}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/10 transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Kosárba rakom — {formatPrice(product.price * qty)}</span>
              </button>
            </div>

          </div>

        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-black text-stone-900 mb-6">Ajánlott Termékek</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} onQuickView={() => {}} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
