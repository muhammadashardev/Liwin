import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Tag, Sparkles, Check, Truck } from 'lucide-react';

export default function OrderSummaryCard({ showCheckoutButton = true, onProceed }) {
  const {
    cart,
    subtotal,
    discountAmount,
    coupon,
    applyCoupon,
    freeShipping,
    shippingFee,
    shippingThreshold,
    totalPrice
  } = useCart();

  const [inputCode, setInputCode] = useState('');

  const formatPrice = (val) => new Intl.NumberFormat('hu-HU').format(val) + ' Ft';
  const remainingForFreeShipping = Math.max(0, shippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / shippingThreshold) * 100));

  const handleApply = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      applyCoupon(inputCode);
      setInputCode('');
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-6">
      <h3 className="text-lg font-extrabold text-stone-900 pb-3 border-b border-stone-100">
        Rendelés Összesítő
      </h3>

      {/* Free shipping bar */}
      <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/60">
        <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-2">
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-emerald-700" />
            <span>
              {freeShipping
                ? 'Gratulálunk! Ingyenes a szállításod! 🎉'
                : `Még ${formatPrice(remainingForFreeShipping)} az ingyenes szállításhoz`}
            </span>
          </div>
          <span className="text-emerald-700">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
          <div
            className="bg-emerald-600 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Coupon input */}
      <form onSubmit={handleApply} className="flex gap-2">
        <div className="relative flex-1">
          <Tag className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="Kuponkód (pl. LIWIN10)"
            className="w-full pl-9 pr-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs font-medium text-stone-800 uppercase focus:outline-none focus:ring-1 focus:ring-emerald-700"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 bg-stone-800 hover:bg-stone-900 active:scale-95 text-white text-xs font-bold rounded-xl transition"
        >
          Alkalmaz
        </button>
      </form>

      {coupon && (
        <div className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg flex items-center justify-between">
          <span className="flex items-center gap-1">
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kupon aktív ({coupon.code}): -{coupon.discountPercent}%</span>
          </span>
          <span className="font-bold">-{formatPrice(discountAmount)}</span>
        </div>
      )}

      {/* Price Breakdown */}
      <div className="space-y-2.5 text-sm pt-2">
        <div className="flex justify-between text-stone-600">
          <span>Részösszeg:</span>
          <span className="font-semibold text-stone-900">{formatPrice(subtotal)}</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex justify-between text-emerald-700">
            <span>Kedvezmény:</span>
            <span className="font-bold">-{formatPrice(discountAmount)}</span>
          </div>
        )}

        <div className="flex justify-between text-stone-600">
          <span>Szállítási díj:</span>
          <span>
            {freeShipping ? (
              <span className="font-bold text-emerald-700">INGYENES</span>
            ) : (
              formatPrice(shippingFee)
            )}
          </span>
        </div>

        <div className="pt-3 border-t border-stone-100 flex justify-between text-base font-black text-stone-900">
          <span>Fizetendő összeg:</span>
          <span className="text-xl text-emerald-900">{formatPrice(totalPrice)}</span>
        </div>
      </div>

      {showCheckoutButton && (
        <button
          onClick={onProceed}
          disabled={cart.length === 0}
          className="w-full py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-emerald-950/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Tovább a Pénztárhoz
        </button>
      )}

    </div>
  );
}
