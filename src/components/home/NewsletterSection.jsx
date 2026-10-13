import React, { useState } from 'react';
import { CheckCircle2, Gift, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address!', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Successfully subscribed! Use coupon LIWIN10 for 10% off', 'success');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a2317] via-[#0f3220] to-[#143e28] text-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-600/40 text-emerald-200 text-xs font-bold mb-6">
          <Gift className="w-4 h-4 text-[#84cc16]" />
          <span>Instant 10% Off Your First Order</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
          Join the LIWIN Wellness Club
        </h2>

        <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto mt-3 mb-8 leading-relaxed">
          Subscribe to our newsletter and receive expert nutrition guides, delicious fiber recipes, and exclusive seasonal offers.
        </p>

        {subscribed ? (
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/30 max-w-md mx-auto text-center animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-[#84cc16] mx-auto mb-2" />
            <h4 className="font-extrabold text-lg text-white">Thank you for subscribing!</h4>
            <p className="text-xs text-stone-200 mt-1">
              Use code <strong className="text-[#84cc16] font-mono text-sm">LIWIN10</strong> at checkout for 10% off!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-emerald-600/40 placeholder:text-stone-400 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:bg-white/15 transition"
              required
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#84cc16] hover:bg-[#72b012] active:scale-95 text-stone-900 font-extrabold text-sm rounded-2xl shadow-lg transition flex items-center justify-center gap-2 shrink-0"
            >
              <span>Get 10% Off</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <p className="text-[11px] text-stone-400 mt-4">
          No spam, ever. Unsubscribe anytime with a single click.
        </p>

      </div>
    </section>
  );
}
