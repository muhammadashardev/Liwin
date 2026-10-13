import React, { useState } from 'react';
import { auditMetrics } from '../../mock/auditData';
import { Gauge, Zap, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

export default function PerformanceComparison() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs mb-12">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-stone-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
            Mért Eredmények & Célok
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
            <Gauge className="w-6 h-6 text-emerald-700" />
            <span>Sebesség & Teljesítmény Audit Benchmark</span>
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span>Kritikus sebességjavítás javasolt</span>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {auditMetrics.map((metric, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 hover:border-emerald-300 transition duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span
                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                    metric.status === 'critical'
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {metric.status === 'critical' ? 'Kritikus' : 'Optimalizálandó'}
                </span>
              </div>

              {/* Values */}
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-[11px] text-stone-400 block">Jelenlegi érték:</span>
                  <span className="text-2xl font-black text-rose-600">
                    {metric.current} {metric.unit || ''}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-400 block">Cél érték (Fázis 1):</span>
                  <span className="text-2xl font-black text-emerald-700">
                    {metric.target} {metric.unit || ''}
                  </span>
                </div>
              </div>
            </div>

            {/* Visual comparison bar */}
            <div>
              <div className="h-2.5 w-full bg-stone-200 rounded-full overflow-hidden flex">
                <div
                  className="bg-rose-500 h-full rounded-full transition-all duration-500"
                  style={{ width: typeof metric.current === 'number' ? `${metric.current}%` : '40%' }}
                  title="Jelenlegi érték"
                />
              </div>
              <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-medium">
                <span>Elavult állapot</span>
                <span className="text-emerald-700 font-bold">Optimalizált cél</span>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Optimization highlights */}
      <div className="mt-8 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-emerald-950">Várható Hatás a Forgalomra:</h4>
            <p className="text-xs text-emerald-800">
              A betöltési idő 1 másodperc alá szorításával a kosárelhagyás 20-35%-kal csökkenhet WooCommerce felületen.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 shadow-2xs whitespace-nowrap">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
          <span>+28% Átlagos Konverzió</span>
        </div>
      </div>

    </div>
  );
}
