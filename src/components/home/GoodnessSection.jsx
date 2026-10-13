import React from 'react';

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22v-9"/><path d="M12 13a6 6 0 0 1 6-6c0 4-2.5 6-6 6z"/><path d="M12 13a6 6 0 0 0-6-6c0 4 2.5 6 6 6z"/>
      </svg>
    ),
    label: '100% Natural\nIngredients',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/>
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4-.1 5.5.8z"/>
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4.2.9-4.9 2z"/>
      </svg>
    ),
    label: 'High Fiber\nfor Better Digestion',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
      </svg>
    ),
    label: 'No Added\nSugar',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Gluten Free\n& Safe',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    label: 'Better Energy\nAll Day',
  },
];

export default function GoodnessSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: text + icons */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 block mb-2">WHY CHOOSE LIWIN</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 mb-3 leading-tight">
              Goodness in Every Bite
            </h2>
            <p className="text-stone-500 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-md">
              We believe in real ingredients, honest nutrition, and snacks that fuel your everyday life.
            </p>

            {/* 5 benefit icons in a row */}
            <div className="flex flex-wrap gap-x-5 gap-y-5 items-start">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex flex-col items-center text-center w-16 sm:w-20 group cursor-default">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-emerald-200 bg-white shadow-sm flex items-center justify-center text-emerald-700 group-hover:scale-110 group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-all duration-300 mb-2">
                    {b.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-stone-600 leading-tight whitespace-pre-line">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: ingredient bowl image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative "Real Ingredients Real Energy" script */}
            <div className="absolute top-0 right-6 sm:right-12 select-none pointer-events-none z-10" style={{ fontFamily: "'Caveat', cursive", color: '#2d5a3d', transform: 'rotate(-8deg)', transformOrigin: 'top right' }}>
              <div className="text-right text-2xl sm:text-3xl font-bold leading-[1.0]">
                <span className="block">Real</span>
                <span className="block">Ingredients</span>
                <span className="block">Real Energy</span>
              </div>
              {/* Decorative heart */}
              <svg className="w-5 h-5 ml-auto mt-1 text-[#2d5a3d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
              </svg>
            </div>

            {/* Bowl image */}
            <div className="relative w-full max-w-[380px] sm:max-w-[460px]">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/02_nuts_bowl_ingredients.jpg"
                  alt="Mixed Nuts and Ingredients Bowl"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
