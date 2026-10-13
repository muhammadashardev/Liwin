import React from 'react';
import AuditHero from '../components/audit/AuditHero';
import PerformanceComparison from '../components/audit/PerformanceComparison';
import PhaseRoadmap from '../components/audit/PhaseRoadmap';
import UiImprovementsList from '../components/audit/UiImprovementsList';
import { Mail, Phone, Calendar, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuditPage() {
  return (
    <div className="py-12 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Audit Hero & Client Scope */}
        <AuditHero />

        {/* Speed & Benchmarking Performance */}
        <PerformanceComparison />

        {/* 3-Phase Roadmap (Phase 1, Phase 2, Phase 3) */}
        <PhaseRoadmap />

        {/* UI / UX Audit & Solutions */}
        <UiImprovementsList />

        {/* Commercial Terms & SLA Assurance Banner */}
        <div className="bg-gradient-to-r from-emerald-900 to-stone-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-2">
              Kereskedelmi Feltételek & Garanciák
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Készen állunk a Liwin.hu Megvalósítására!
            </h2>
            <p className="text-stone-300 text-sm mt-3 leading-relaxed">
              Számlaképes egyéni vállalkozói/céges háttér, munkaidős elérhetőség (H-P 09:00 - 17:00), 2 órán belüli garantált SLA reakcióidő, és több mint 6 év professzionális WooCommerce & webshop optimalizálási referencia.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs">
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hivatalos e-számla kiállítás</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Nulla leállás (Staging tesztkörnyezet)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Hosszútávú havi karbantartási szerződés</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:fejleszto@liwin.hu?subject=Liwin.hu WooCommerce Megbízás Egyeztetés"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Ajánlat Elfogadása & Start Megbeszélése</span>
              </a>

              <Link
                to="/shop"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2 border border-white/20"
              >
                <span>Prototípus Webshop Megtekintése</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
