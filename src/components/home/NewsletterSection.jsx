import React, { useState } from 'react';
import { Send, CheckCircle2, Gift, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Kérjük, adj meg egy érvényes email címet!', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Sikeres feliratkozás! A 10%-os kuponkódod: LIWIN10', 'success');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#1b4332] via-[#225740] to-[#122b20] text-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-800/80 border border-emerald-600/50 text-emerald-200 text-xs font-bold mb-6">
          <Gift className="w-4 h-4 text-amber-300" />
          <span>Azonnali 10% Kedvezmény az Első Rendelésedhez</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Csatlakozz a LIWIN Egészség Klubhoz!
        </h2>

        <p className="text-emerald-100/80 text-sm sm:text-base max-w-xl mx-auto mt-3 mb-8 leading-relaxed">
          Iratkozz fel hírlevelünkre, és küldjük az orvosilag lektorált rost recepteket, tippeket a bélflóra helyreállításához és exkluzív akcióinkat!
        </p>

        {subscribed ? (
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/30 max-w-md mx-auto text-center animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-amber-300 mx-auto mb-2" />
            <h4 className="font-extrabold text-lg text-white">Köszönjük a feliratkozást!</h4>
            <p className="text-xs text-emerald-100 mt-1">
              Használd a pénztárnál a <strong className="text-amber-300 font-mono text-sm">LIWIN10</strong> kuponkódot a 10% azonnali kedvezményhez!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Add meg az email címed..."
              className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-emerald-600/50 placeholder:text-emerald-200/50 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 focus:bg-white/20 transition"
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-stone-900 font-extrabold text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <span>Kérem a kupont</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-emerald-200/60 mt-4">
          Nem küldünk spamet. Bármikor leiratkozhatsz egyetlen kattintással.
        </p>

      </div>
    </section>
  );
}
