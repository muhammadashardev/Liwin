import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, ArrowRight } from 'lucide-react';

const testimonial = {
  text: '"These fiber bars are amazing! Tasty, healthy and keep me full for hours. I love them!"',
  name: 'Sarah M.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  rating: 5,
};

export default function BrandStorySection() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left: Lifestyle Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/4] rounded-3xl overflow-hidden shadow-lg border border-stone-200/60">
              <img
                src="/02_brand_story_lifestyle.jpg"
                alt="Active healthy lifestyle with Liwin"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Center: Story Text */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs sm:text-[13px] font-black uppercase tracking-[0.22em] text-[#2d7a3e] block">
              OUR STORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 leading-tight tracking-tight">
              More Than Just a Snack
            </h2>
            <p className="text-stone-600 text-sm sm:text-[15px] leading-relaxed">
              At LIWIN, we're passionate about creating delicious, nutritious snacks that fit your lifestyle. Our fiber-rich products are made with natural ingredients, so you can feel good about every bite.
            </p>
            <div className="pt-2">
              <Link
                to="/#story"
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full font-extrabold text-xs sm:text-sm bg-[#132a1e] hover:bg-[#2d7a3e] text-white transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right: Testimonial Card */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="bg-[#0c2619] border border-emerald-800/40 rounded-3xl p-6 sm:p-7 max-w-[320px] w-full shadow-xl text-white space-y-4">
              {/* Quote mark */}
              <div className="text-[#84cc16] text-3xl font-serif leading-none select-none">“</div>

              <p className="text-stone-200 text-xs sm:text-[13px] leading-relaxed italic">
                {testimonial.text}
              </p>

              {/* Reviewer info */}
              <div className="flex items-center justify-between pt-3 border-t border-emerald-900/60">
                <div className="flex items-center gap-2.5">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-8 h-8 rounded-full object-cover border border-[#84cc16]/60"
                  />
                  <div>
                    <p className="text-white font-bold text-xs">{testimonial.name}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-6 h-6 rounded-full bg-emerald-950/80 flex items-center justify-center text-[#84cc16]">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
