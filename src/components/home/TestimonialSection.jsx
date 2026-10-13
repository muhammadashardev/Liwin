import React from 'react';
import { testimonials } from '../../mock/testimonials';
import { Star, CheckCircle, Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
            Valós Vásárlói Vélemények
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900">
            Amit a LIWIN közösség mond rólunk
          </h2>
          <p className="text-stone-500 text-sm mt-2">
            Több ezer elégedett vásárló, akik újra felfedezték a könnyed emésztés és finom ételek örömét.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-[#FAF8F5] border border-stone-200/80 flex flex-col justify-between hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                <p className="text-sm text-stone-700 italic leading-relaxed mb-4">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-stone-500">{item.role}</p>
                  </div>
                  {item.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      <span>Ellenőrzött</span>
                    </span>
                  )}
                </div>

                <div className="mt-2 text-[11px] text-stone-400 font-medium">
                  Termék: <span className="text-stone-600">{item.product}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
