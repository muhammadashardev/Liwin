import React, { useState } from 'react';
import { Truck, CreditCard, Banknote, ShieldCheck } from 'lucide-react';

export default function CheckoutForm({ onSubmitOrder, isSubmitting }) {
  const [formData, setFormData] = useState({
    name: 'Boda Piroska',
    email: 'piroska@liwin.hu',
    phone: '+36 30 123 4567',
    address: 'Kossuth Lajos utca 14.',
    city: 'Budapest',
    postalCode: '1052',
    deliveryMethod: 'gls-home',
    paymentMethod: 'barion'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Contact & Shipping Details */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
        <h3 className="text-base font-extrabold text-stone-900 pb-2 border-b border-stone-100">
          1. Szállítási és Számlázási Adatok
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-stone-600 block mb-1">Teljes Név</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-stone-600 block mb-1">E-mail Cím</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-stone-600 block mb-1">Telefonszám</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-stone-600 block mb-1">Irányítószám</label>
            <input
              type="text"
              name="postalCode"
              required
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-stone-600 block mb-1">Város</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
          <div>
            <label className="text-xs font-bold text-stone-600 block mb-1">Utca, házszám, emelet</label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-900 focus:outline-none focus:ring-1 focus:ring-emerald-700"
            />
          </div>
        </div>
      </div>

      {/* Shipping Method */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-3">
        <h3 className="text-base font-extrabold text-stone-900 pb-2 border-b border-stone-100">
          2. Szállítási Mód Kiválasztása
        </h3>

        {[
          { id: 'gls-home', title: 'GLS Házhozszállítás', desc: '1-2 munkanap, futár érkezése előtt SMS', cost: '1 490 Ft' },
          { id: 'gls-point', title: 'GLS CsomagPont / Csomagautomata', desc: 'Rugalmas átvétel a legközelebbi automatából', cost: '1 290 Ft' },
          { id: 'foxpost', title: 'Foxpost Csomagautomata', desc: 'Környezetbarát átvételi pont', cost: '1 190 Ft' },
        ].map((item) => (
          <label
            key={item.id}
            className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
              formData.deliveryMethod === item.id
                ? 'border-emerald-600 bg-emerald-50/50'
                : 'border-stone-200 hover:bg-stone-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="radio"
                name="deliveryMethod"
                value={item.id}
                checked={formData.deliveryMethod === item.id}
                onChange={handleChange}
                className="text-emerald-700 focus:ring-emerald-600"
              />
              <div>
                <span className="text-xs font-bold text-stone-900 block">{item.title}</span>
                <span className="text-[11px] text-stone-500">{item.desc}</span>
              </div>
            </div>
            <span className="text-xs font-extrabold text-stone-800">{item.cost}</span>
          </label>
        ))}
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-3">
        <h3 className="text-base font-extrabold text-stone-900 pb-2 border-b border-stone-100">
          3. Fizetési Mód
        </h3>

        {[
          { id: 'barion', title: 'Online Bankkártyás Fizetés (Barion)', desc: 'Biztonságos, díjmentes azonnali fizetés', icon: CreditCard },
          { id: 'cod', title: 'Utánvét Átvételkor', desc: 'Fizetés készpénzzel vagy kártyával a futárnál (+390 Ft)', icon: Banknote },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <label
              key={item.id}
              className={`flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition ${
                formData.paymentMethod === item.id
                  ? 'border-emerald-600 bg-emerald-50/50'
                  : 'border-stone-200 hover:bg-stone-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={item.id}
                  checked={formData.paymentMethod === item.id}
                  onChange={handleChange}
                  className="text-emerald-700 focus:ring-emerald-600"
                />
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-emerald-700" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">{item.title}</span>
                    <span className="text-[11px] text-stone-500">{item.desc}</span>
                  </div>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-2xl bg-emerald-800 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-base shadow-xl transition flex items-center justify-center gap-2"
      >
        <ShieldCheck className="w-5 h-5 text-emerald-300" />
        <span>{isSubmitting ? 'Rendelés Feldolgozása...' : 'Rendelés Leadása & Fizetés'}</span>
      </button>

    </form>
  );
}
