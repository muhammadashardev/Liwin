import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutForm from '../components/checkout/CheckoutForm';
import OrderSummaryCard from '../components/checkout/OrderSummaryCard';
import { CheckCircle2, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, clearCart, totalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [completedOrderNumber, setCompletedOrderNumber] = useState('');
  const navigate = useNavigate();

  const handleOrderSubmit = (formData) => {
    setIsSubmitting(true);
    setTimeout(() => {
      const orderNum = 'LW-' + Math.floor(100000 + Math.random() * 900000);
      setCompletedOrderNumber(orderNum);
      setIsSubmitting(false);
      setOrderComplete(true);
      clearCart();
    }, 1200);
  };

  const formatPrice = (val) => new Intl.NumberFormat('hu-HU').format(val) + ' Ft';

  return (
    <div className="py-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-stone-900">Biztonságos Pénztár</h1>
            <p className="text-xs text-stone-500 mt-1">
              Gyors rendeléskezelés Barion & GLS integrációval
            </p>
          </div>
          <Link
            to="/cart"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Vissza a kosárhoz</span>
          </Link>
        </div>

        {orderComplete ? (
          <div className="bg-white rounded-3xl p-10 max-w-xl mx-auto text-center border border-stone-200/80 shadow-lg animate-scaleIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Rendelés Sikeresen Rögzítve!
            </span>
            <h2 className="text-2xl font-black text-stone-900 mt-1 mb-2">
              Köszönjük a vásárlást, Boda Piroska!
            </h2>
            <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
              Rendelés azonosító: <strong className="text-stone-900 font-mono text-sm">{completedOrderNumber}</strong>. 
              Visszaigazoló e-mailt küldtünk a csomagküldés és számlázás adataival.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-left space-y-1.5">
              <div className="flex justify-between text-stone-600">
                <span>Végösszeg:</span>
                <span className="font-extrabold text-stone-900">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Szállítás:</span>
                <span className="font-semibold text-emerald-800">GLS Házhozszállítás</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Számla:</span>
                <span className="font-semibold text-stone-900">Elektronikus számla kiállítva</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/shop"
                className="px-6 py-3 bg-emerald-800 text-white font-bold text-xs rounded-xl hover:bg-emerald-700 transition"
              >
                Vissza a Webáruházba
              </Link>
              <Link
                to="/audit"
                className="px-6 py-3 bg-stone-100 text-stone-800 font-bold text-xs rounded-xl hover:bg-stone-200 transition"
              >
                Technikai Terv Ellenőrzése
              </Link>
            </div>
          </div>
        ) : cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center max-w-md mx-auto border border-stone-200">
            <h3 className="text-lg font-bold text-stone-900">A kosarad jelenleg üres</h3>
            <p className="text-xs text-stone-500 mt-1 mb-4">
              A pénztár használatához kérjük tegyél terméket a kosárba.
            </p>
            <Link
              to="/shop"
              className="px-5 py-2.5 bg-emerald-800 text-white text-xs font-bold rounded-xl"
            >
              Vásárlás
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <CheckoutForm
                onSubmitOrder={handleOrderSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
            <div className="lg:col-span-5">
              <OrderSummaryCard showCheckoutButton={false} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
