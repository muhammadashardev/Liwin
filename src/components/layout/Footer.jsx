import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Truck, RefreshCw, Heart, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#12281e] text-stone-300 pt-16 pb-12 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-emerald-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/40 flex items-center justify-center text-emerald-400">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Gyors GLS Kiszállítás</h4>
              <p className="text-xs text-stone-400">1-2 munkanap az országban</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/40 flex items-center justify-center text-emerald-400">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Biztonságos Fizetés</h4>
              <p className="text-xs text-stone-400">Barion & bankkártyás védelem</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/40 flex items-center justify-center text-emerald-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% Rost Minőség</h4>
              <p className="text-xs text-stone-400">Természetes, tiszta forrás</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/40 flex items-center justify-center text-emerald-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Magyar Vállalkozás</h4>
              <p className="text-xs text-stone-400">Boda Piroska & LIWIN</p>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-extrabold text-lg">
                L
              </div>
              <span className="text-xl font-extrabold text-white">LIWIN<span className="text-emerald-400">.hu</span></span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Tudatosság szabályok nélkül. Rostban gazdag kásák, kenyérkeverékek és sós ropogtatnivalók az egészséges bélflóráért.
            </p>
            <div className="pt-2">
              <Link
                to="/audit"
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-900/50 text-emerald-300 border border-emerald-700/50 hover:bg-emerald-800/60 transition"
              >
                <span>🛠️ Fejlesztői Portál & Audit Riport</span>
              </Link>
            </div>
          </div>

          {/* Webshop links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Webáruház</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><Link to="/shop" className="hover:text-emerald-400 transition">Összes Termék</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition">Rost Kenyérkeverékek</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition">Almás & Csokis Kásák</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition">Keto Rozmaringos Krékerek</Link></li>
              <li><Link to="/shop" className="hover:text-emerald-400 transition">Akciós Csomagok</Link></li>
            </ul>
          </div>

          {/* Customer support */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Ügyfélszolgálat</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>info@liwin.hu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+36 (30) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Magyarország / EU</span>
              </li>
              <li className="pt-2 text-xs text-stone-400">
                Nyitvatartás: H-P: 09:00 - 17:00
              </li>
            </ul>
          </div>

          {/* Legal and certs */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Információk</h3>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li><a href="#aszf" className="hover:text-emerald-400 transition">Általános Szerződési Feltételek</a></li>
              <li><a href="#adatkezeles" className="hover:text-emerald-400 transition">Adatkezelési Tájékoztató (GDPR)</a></li>
              <li><a href="#szallitas" className="hover:text-emerald-400 transition">Szállítás & Fizetés</a></li>
              <li><a href="#elallas" className="hover:text-emerald-400 transition">Elállási jog & Garancia</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} LIWIN.hu - Minden jog fenntartva. Üzemeltető: Boda Piroska E.V.</p>
          <p className="flex items-center gap-2">
            <span>WooCommerce & Tech Modernizáció</span>
            <span className="text-emerald-500">•</span>
            <span className="text-stone-400">Biztonságos & Karbantartott</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
