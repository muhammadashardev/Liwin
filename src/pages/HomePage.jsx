import React, { useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoryBanner from '../components/home/CategoryBanner';
import FeaturedProductSection from '../components/home/FeaturedProductSection';
import GoodnessSection from '../components/home/GoodnessSection';
import BrandStory from '../components/home/BrandStory';
import NewsletterSection from '../components/home/NewsletterSection';
import ProductCard from '../components/common/ProductCard';
import QuickViewModal from '../components/common/QuickViewModal';
import { products } from '../mock/products';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HomePage({ onOpenSearch }) {
  const [selectedQuickView, setSelectedQuickView] = useState(null);

  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section — Full Screen with nav */}
      <HeroSection onOpenSearch={onOpenSearch} />

      {/* Categories — "Snacks for Every Mood" */}
      <CategoryBanner />

      {/* Featured Product Card — dark green interactive slider */}
      <FeaturedProductSection />

      {/* Goodness in Every Bite — 5 icons + bowl image */}
      <GoodnessSection />

      {/* Brand Story + Testimonial — full bleed background */}
      <BrandStory />

      {/* Popular Products Grid */}
      <section className="py-14 sm:py-20 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Most Popular</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900">Best Selling Snacks</h2>
            </div>
            <Link
              to="/shop"
              className="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedQuickView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedQuickView}
        onClose={() => setSelectedQuickView(null)}
      />
    </div>
  );
}
