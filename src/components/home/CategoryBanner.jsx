import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'fiber-bars',
    name: 'Fiber Bars',
    image: '/crops/cat_prod_bars.jpg',
    fallback: '/04_product_promotion_photo.jpg',
    description: 'Crisp & crunchy whole-grain bars',
  },
  {
    id: 'granola',
    name: 'Granola',
    image: '/crops/cat_prod_granola.jpg',
    fallback: '/crops/cat_granola.jpg',
    description: 'Toasted oats, berries & wild honey',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    image: '/crops/cat_prod_snacks.jpg',
    fallback: '/crops/cat_snacks.jpg',
    description: 'Slow-roasted almonds & seeds',
  },
  {
    id: 'bundles',
    name: 'Bundles',
    image: '/crops/cat_prod_bundles.jpg',
    fallback: '/crops/cat_bundles.jpg',
    description: 'Curated gift boxes & variety packs',
  },
];

export default function CategoryBanner() {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header matching reference */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#2d7a3e] block mb-2.5">
            OUR CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Snacks for Every Mood
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2.5 max-w-lg mx-auto leading-relaxed">
            Choose from our delicious range of fiber-rich snacks, crafted with natural ingredients.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group bg-[#f7f3ea] border border-stone-200/70 hover:border-emerald-300/80 rounded-3xl p-4 sm:p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between hover:-translate-y-1.5"
            >
              {/* Product Visual Container */}
              <div className="w-full h-32 sm:h-44 flex items-center justify-center p-2 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="max-h-full max-w-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-500 rounded-xl"
                  onError={(e) => {
                    e.target.src = cat.fallback;
                  }}
                />
              </div>

              {/* Title & Arrow Pill */}
              <div className="w-full flex items-center justify-center gap-2 pt-3 border-t border-stone-200/50">
                <span className="font-extrabold text-stone-900 text-sm sm:text-base group-hover:text-emerald-800 transition-colors">
                  {cat.name}
                </span>
                <div className="w-7 h-7 rounded-full bg-[#1b4332] group-hover:bg-[#2d7a3e] group-hover:scale-105 flex items-center justify-center text-white transition-all shadow-xs shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
