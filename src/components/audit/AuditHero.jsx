import React from 'react';
import { clientProjectInfo } from '../../mock/auditData';
import { ShieldCheck, Server, RefreshCw, FileText, Globe, CheckCircle2 } from 'lucide-react';

export default function AuditHero() {
  return (
    <div className="bg-gradient-to-br from-[#12281e] via-[#1a3d2e] to-[#0d1d16] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-900/60 relative overflow-hidden mb-12">
      
      {/* Decorative background circle */}
      <div className="absolute -top-12 -right-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-emerald-800/60">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">
                WooCommerce Szakmai Jelentés
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Liwin.hu Technikai Audit & Karbantartási Terv
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-emerald-950/80 px-4 py-2 rounded-2xl border border-emerald-700/50 text-xs font-semibold text-emerald-300">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Státusz: {clientProjectInfo.status}</span>
          </div>
        </div>

        {/* Client details card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-stone-400 block">Ügyfél neve:</span>
            <span className="font-bold text-white text-base mt-0.5 block">{clientProjectInfo.clientName}</span>
          </div>
          
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-stone-400 block">Éles Weboldal:</span>
            <a
              href={clientProjectInfo.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-400 hover:underline text-base mt-0.5 flex items-center gap-1.5"
            >
              <Globe className="w-4 h-4" />
              <span>{clientProjectInfo.websiteUrl}</span>
            </a>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-stone-400 block">Webshop Platform:</span>
            <span className="font-bold text-white text-base mt-0.5 block">{clientProjectInfo.platform}</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-stone-400 block">Projekt Típus:</span>
            <span className="font-bold text-amber-300 text-sm mt-0.5 block">Kezdeti Frissítés + Havi Karbantartás</span>
          </div>
        </div>

        {/* Objective notice */}
        <div className="mt-6 p-4 rounded-2xl bg-emerald-900/40 border border-emerald-600/40 text-xs sm:text-sm text-emerald-100 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Megbízási Cél:</strong> A meglévő márkaidentitás és dizájn megtartása mellett a WooCommerce webáruház motorjának, bővítményeinek, adatbázisának és biztonságának teljes technikai korszerűsítése, a betöltési sebesség drasztikus növelése és folyamatos karbantartási partnerség kialakítása hivatalos számlázással.
          </p>
        </div>

      </div>
    </div>
  );
}
