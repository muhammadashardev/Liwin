import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import OrderSummaryCard from '../components/checkout/OrderSummaryCard';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, totalItems } = useCart();
  const navigate = useNavigate();

  const formatPrice = (val) => new Intl.NumberFormat('hu-HU').format(val) + ' Ft';

  return (
    <div className="py-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-stone-900">Kosár Tartalma</h1>
            <p className="text-xs text-stone-500 mt-1">
              {totalItems > 0 ? `${totalItems} db termék található a kosaradban` : 'A kosarad jelenleg üres'}
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Vissza a vásárláshoz</span>
          </Link>
        </div>

        {cart.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs divide-y divide-stone-100">
              {cart.map((item) => (
                <div key={item.id} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-center gap-4">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-2xl object-cover bg-stone-100 flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-bold text-stone-900 text-sm hover:text-emerald-700 transition"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-stone-400 mt-0.5">{item.weight}</p>
                    <p className="text-xs font-extrabold text-emerald-800 mt-1">
                      {formatPrice(item.price)} / db
                    </p>
                  </div>

                  {/* Stepper */}
                  <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden bg-stone-50">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-stone-200 text-stone-600 transition"
                      aria-label="Csökkentés"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-bold text-stone-900">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-stone-200 text-stone-600 transition"
                      aria-label="Növelés"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right min-w-[90px]">
                    <div className="text-sm font-black text-stone-900">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-stone-400 hover:text-rose-600 transition rounded-lg hover:bg-rose-50"
                    title="Törlés"
                    aria-label="Törlés"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Sidebar */}
            <div className="lg:col-span-4">
              <OrderSummaryCard
                showCheckoutButton={true}
                onProceed={() => navigate('/checkout')}
              />
            </div>

          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200/80 max-w-md mx-auto shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-stone-900">A kosarad jelenleg üres</h2>
            <p className="text-xs text-stone-500 mt-1 mb-6">
              Fedezd fel bélflóra-barát prémium rostkészítményeinket és kezdj el vásárolni!
            </p>
            <Link
              to="/shop"
              className="px-6 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl inline-flex items-center gap-2 shadow-md transition"
            >
              <span>Termékek megtekintése</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
