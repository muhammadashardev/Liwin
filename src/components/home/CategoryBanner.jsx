import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const cats = [
  {
    id: 'fiber-bars',
    name: 'Fiber Bars',
    image: '/01_featured_product_visual.jpg',
  },
  {
    id: 'granola',
    name: 'Granola',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'snacks',
    name: 'Snacks',
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=300&auto=format&fit=crop&q=80',
  },
  {
    id: 'bundles',
    name: 'Bundles',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&auto=format&fit=crop&q=80',
  },
];

export default function CategoryBanner() {
  return (
    <section className="py-14 sm:py-20 bg-[#f9f6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 block mb-2">OUR CATEGORIES</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900">Snacks for Every Mood</h2>
          <p className="text-stone-500 text-sm sm:text-base mt-2 max-w-md mx-auto">
            Choose from our delicious range of fiber-rich snacks, crafted with natural ingredients.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {cats.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${cat.id}`}
              className="group flex flex-col items-center text-center bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-stone-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Image */}
              <div className="w-full aspect-square overflow-hidden bg-stone-50 flex items-center justify-center p-3">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Label + Arrow */}
              <div className="flex items-center justify-center gap-1.5 py-3 px-4 w-full">
                <span className="font-bold text-stone-800 text-sm group-hover:text-emerald-700 transition-colors">{cat.name}</span>
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center group-hover:bg-emerald-700 transition-colors shrink-0">
                  <ChevronRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
