import React, { useState } from 'react';
import { auditPhases } from '../../mock/auditData';
import { CheckCircle2, Circle, Clock, Check, Layers } from 'lucide-react';

export default function PhaseRoadmap() {
  const [phasesState, setPhasesState] = useState(auditPhases);

  const toggleItem = (phaseIdx, itemIdx) => {
    setPhasesState((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      next[phaseIdx].items[itemIdx].done = !next[phaseIdx].items[itemIdx].done;
      return next;
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs mb-12">
      
      {/* Title */}
      <div className="pb-6 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
            Munkaterv & Szakaszok
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-700" />
            <span>3 Lépcsős Megvalósítási Ütemterv (Roadmap)</span>
          </h2>
        </div>
        <span className="text-xs text-stone-400 font-medium">
          Kattints a feladatokra a státusz teszteléséhez
        </span>
      </div>

      {/* 3 Phases Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
        {phasesState.map((phase, pIdx) => {
          const completedCount = phase.items.filter((i) => i.done).length;
          const progressPercent = Math.round((completedCount / phase.items.length) * 100);

          return (
            <div
              key={pIdx}
              className="rounded-2xl bg-stone-50 border border-stone-200/70 p-5 flex flex-col justify-between"
            >
              <div>
                {/* Phase header */}
                <div className="pb-4 border-b border-stone-200/60">
                  <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 inline-block mb-2">
                    Fázis {pIdx + 1}
                  </span>
                  <h3 className="text-base font-extrabold text-stone-900 leading-snug">
                    {phase.phase}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">{phase.subtitle}</p>

                  {/* Progress bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-[11px] font-semibold text-stone-600 mb-1">
                      <span>Haladás</span>
                      <span className="text-emerald-700">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Items checklist */}
                <div className="mt-4 space-y-3">
                  {phase.items.map((item, iIdx) => (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(pIdx, iIdx)}
                      className="cursor-pointer p-3 rounded-xl bg-white border border-stone-200/60 hover:border-emerald-400 hover:shadow-2xs transition-all flex items-start gap-2.5 group"
                    >
                      <button
                        className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 transition ${
                          item.done
                            ? 'bg-emerald-700 text-white'
                            : 'border-2 border-stone-300 group-hover:border-emerald-600 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </button>
                      <div className="flex-1 min-w-0">
                        <h4
                          className={`text-xs font-bold leading-snug ${
                            item.done ? 'line-through text-stone-400' : 'text-stone-900'
                          }`}
                        >
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-stone-500 mt-0.5 leading-tight">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer for each phase */}
              <div className="mt-4 pt-3 border-t border-stone-200/50 flex items-center justify-between text-[11px] text-stone-500">
                <span>{completedCount} / {phase.items.length} befejezve</span>
                <span className="text-emerald-700 font-bold">
                  {progressPercent === 100 ? 'Kész' : 'Folyamatban'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
