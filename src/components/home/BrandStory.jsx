import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const testimonial = {
  text: '"These fiber bars are amazing! Tasty, healthy and keep me full for hours. I love them!"',
  name: 'Sarah M.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  rating: 5,
};

export default function BrandStorySection() {
  return (
    <section className="py-0 overflow-hidden">
      {/* Full-bleed panoramic section */}
      <div className="relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex items-center">

        {/* Background lifestyle image */}
        <img
          src="/03_lifestyle_background.jpg"
          alt="Active lifestyle"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(5,20,12,0.75) 0%, rgba(5,20,12,0.55) 50%, rgba(5,20,12,0.15) 100%)' }} />

        {/* Content row */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            {/* Left: brand story text */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 block">OUR STORY</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                More Than Just a Snack
              </h2>
              <p className="text-stone-200 text-sm sm:text-[15px] leading-relaxed max-w-md">
                At LIWIN, we're passionate about creating delicious, nutritious snacks that fit your lifestyle. Our fiber-rich products are made with natural ingredients, so you can feel good about every bite.
              </p>
              <Link to="/shop"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full font-bold text-sm bg-white text-stone-900 hover:bg-[#7ed957] hover:text-[#071a10] transition-all duration-300 shadow-md"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: Testimonial card */}
            <div className="flex justify-start lg:justify-end">
              <div className="bg-[#0d2e1c]/90 backdrop-blur-md border border-emerald-700/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 max-w-[320px] w-full shadow-2xl">
                {/* Quote icon */}
                <div className="text-emerald-400 text-4xl font-serif leading-none mb-2 select-none">"</div>

                <p className="text-stone-100 text-sm leading-relaxed mb-4 italic">
                  {testimonial.text}
                </p>

                {/* Reviewer */}
                <div className="flex items-center justify-between pt-3 border-t border-emerald-800/50">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-9 h-9 rounded-full object-cover border-2 border-emerald-600/60"
                    />
                    <div>
                      <p className="text-white font-bold text-sm">{testimonial.name}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-emerald-600/30 hover:bg-emerald-600 flex items-center justify-center text-emerald-300 hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
