import React from 'react';
import { uiImprovements } from '../../mock/auditData';
import { Sparkles, ArrowRight, Eye, Layout, ShoppingCart, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UiImprovementsList() {
  const icons = [
    <Layout className="w-5 h-5 text-emerald-700" />,
    <Eye className="w-5 h-5 text-amber-700" />,
    <Sparkles className="w-5 h-5 text-indigo-700" />,
    <CreditCard className="w-5 h-5 text-emerald-700" />
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs mb-12">
      
      <div className="pb-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
            UI / UX Audit & Megoldási Javaslatok
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900">
            A Meglévő Webshop Felület Fejlesztési Pontjai
          </h2>
        </div>
        <div className="text-xs text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl font-medium">
          Márkaidentitás megőrzése mellett
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {uiImprovements.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/70 hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white shadow-2xs flex items-center justify-center">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="font-extrabold text-stone-900 text-base">
                  {item.area}
                </h3>
              </div>

              {/* Current issue */}
              <div className="p-3 bg-rose-50/80 rounded-xl border border-rose-200/60 mb-3">
                <span className="text-[10px] font-extrabold uppercase text-rose-800 tracking-wider block">
                  Azonosított probléma:
                </span>
                <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
                  {item.currentIssue}
                </p>
              </div>

              {/* Proposed solution */}
              <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200/60">
                <span className="text-[10px] font-extrabold uppercase text-emerald-800 tracking-wider block">
                  Javasolt korszerűsítés:
                </span>
                <p className="text-xs text-stone-700 mt-0.5 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Link
                to={idx === 1 ? '/shop' : idx === 2 ? '/product/lw-01' : idx === 3 ? '/cart' : '/'}
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 hover:text-emerald-700 hover:underline"
              >
                <span>Prototípus megtekintése</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
