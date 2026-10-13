import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  BookOpen, Leaf, Heart, Sparkles, Lightbulb, Utensils, Globe,
  Search, User, ShoppingBag, Menu, X, ArrowRight,
  ChevronLeft, ChevronRight, Clock, Calendar, Share2, CheckCircle2,
  Bookmark, Send
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { blogCategories, featuredArticle, latestArticles } from '../mock/articles';

// Icon map for categories
const CATEGORY_ICONS = {
  BookOpen: BookOpen,
  Leaf: Leaf,
  Heart: Heart,
  Sparkles: Sparkles,
  Lightbulb: Lightbulb,
  Utensils: Utensils,
  Globe: Globe,
};

export default function BlogPage({ onOpenSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { totalItems } = useCart();

  const ARTICLES_PER_PAGE = 6;

  // Filtered articles
  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') {
      return latestArticles;
    }
    return latestArticles.filter((art) => art.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE) || 1;
  const paginatedArticles = useMemo(() => {
    const start = (currentPage - 1) * ARTICLES_PER_PAGE;
    return filteredArticles.slice(start, start + ARTICLES_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentPage(1);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  const handleSidebarSubmit = (e) => {
    e.preventDefault();
    if (sidebarEmail.trim()) {
      setSidebarSubscribed(true);
      setTimeout(() => setSidebarSubscribed(false), 4000);
      setSidebarEmail('');
    }
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen text-stone-800">

      {/* ══════════════════════════════════════════════════
          HERO SECTION (Full scenic mountain lake & nuts background)
      ══════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden bg-[#0a2014] text-white rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] shadow-xl">
        
        {/* Full-res Mountain Lake & Nut Bowl Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/01_blog_hero_mountains.jpg"
            alt="Scenic mountain landscape with nuts and Liwin Fiber Bar"
            className="w-full h-full object-cover object-center lg:object-[center_35%]"
          />
          {/* Deep dark gradient overlay on left for razor-sharp typography */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(6,22,14,0.96) 0%, rgba(6,22,14,0.88) 36%, rgba(6,22,14,0.52) 64%, rgba(6,22,14,0.12) 100%)',
            }}
          />
          {/* Mobile dark overlay */}
          <div className="absolute inset-0 lg:hidden bg-[#06160e]/60" />
        </div>

        {/* ── TOP HEADER / NAVBAR OVER HERO ── */}
        <nav className="relative z-30 w-full flex items-center justify-between px-4 sm:px-6 lg:px-12 pt-6 pb-4">
          
          {/* Logo */}
          <Link to="/" className="group flex flex-col items-start shrink-0">
            <div className="relative inline-flex items-center gap-1.5">
              <svg className="w-5 h-5 text-[#84cc16] group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8 6 6 12 12 18c6-6 4-12 0-16z" />
                <path d="M12 18c-3-2-6-5-5-9 3 0 5 2 5 9z" opacity="0.8" />
              </svg>
              <span className="text-white font-black text-2xl tracking-wider leading-none">LIWIN</span>
              <span className="text-[#84cc16] font-black text-xs -top-1 -right-1 leading-none">®</span>
            </div>
            <span className="text-stone-300 text-[10px] font-semibold tracking-[0.22em] uppercase -mt-0.5">
              Fiber-Rich Foods
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10">
            <Link to="/" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Shop
            </Link>
            <Link to="/#story" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/blog" className="relative text-sm font-bold text-[#84cc16] pb-1">
              Blog
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#84cc16] rounded-full" />
            </Link>
            <Link to="/#contact" className="text-sm font-semibold text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-white/80 hover:text-[#84cc16] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 stroke-[1.8]" />
            </button>

            <button
              className="hidden sm:block p-2.5 text-white/80 hover:text-[#84cc16] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5 stroke-[1.8]" />
            </button>

            <Link
              to="/cart"
              className="relative p-2.5 text-white/80 hover:text-[#84cc16] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#84cc16] text-[#071a10] font-black text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-white hover:text-[#84cc16] rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden relative z-30 mx-4 mb-4 bg-[#071a10]/95 backdrop-blur-xl border border-emerald-700/30 rounded-2xl p-5 space-y-3">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1 border-b border-white/5">
              Home
            </Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1 border-b border-white/5">
              Shop
            </Link>
            <Link to="/#story" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1 border-b border-white/5">
              About
            </Link>
            <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-[#84cc16] py-1 border-b border-white/5">
              Blog
            </Link>
            <Link to="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-white/80 hover:text-[#84cc16] py-1">
              Contact
            </Link>
          </div>
        )}

        {/* ── HERO BANNER CONTENT ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="max-w-xl">
            {/* Tag / Badge */}
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.25em] text-[#84cc16] block mb-3">
              OUR BLOG
            </span>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-4">
              Good Reads for{' '}
              <span
                className="block sm:inline font-['Caveat',cursive] text-[#84cc16] text-5xl sm:text-6xl lg:text-7xl font-bold align-baseline"
                style={{ textShadow: '0 4px 20px rgba(132, 204, 22, 0.3)' }}
              >
                Better Living
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-md mb-5 font-normal">
              Tips, insights, and inspiration for a healthier you and a better tomorrow.
            </p>

            {/* Decorative wavy green brush underline */}
            <div className="w-28 sm:w-36 h-2">
              <svg viewBox="0 0 140 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#84cc16]">
                <path d="M2 7C30 2 60 9 90 4C110 1 128 6 138 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MAIN CONTENT AREA (Sidebar + Articles)
      ══════════════════════════════════════════════════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ──────────────────────────────────────────
              LEFT SIDEBAR (Categories + Stay in Loop)
          ────────────────────────────────────────── */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-8">

            {/* CATEGORIES CARD */}
            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-5 shadow-xs">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#2d5a3c] mb-4">
                CATEGORIES
              </h2>

              <div className="space-y-1.5">
                {blogCategories.map((cat) => {
                  const IconComp = CATEGORY_ICONS[cat.icon] || BookOpen;
                  const isActive = activeCategory === cat.id;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-semibold transition-all duration-200 text-left ${
                        isActive
                          ? 'bg-[#132a1e] text-white shadow-sm font-bold'
                          : 'text-stone-700 hover:text-emerald-900 hover:bg-stone-100/80'
                      }`}
                    >
                      <IconComp
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? 'text-[#84cc16]' : 'text-stone-500'
                        }`}
                      />
                      <span className="truncate">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STAY IN THE LOOP CARD */}
            <div className="bg-[#FAF8F5] border border-stone-200/80 rounded-2xl p-5 shadow-xs overflow-hidden relative">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#2d5a3c] mb-2">
                STAY IN THE LOOP
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                Get the latest health tips, recipes, and offers straight to your inbox.
              </p>

              <form onSubmit={handleSidebarSubmit} className="space-y-2.5">
                <input
                  type="email"
                  value={sidebarEmail}
                  onChange={(e) => setSidebarEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                />
                <button
                  type="submit"
                  className="w-full bg-[#84cc16] hover:bg-[#72b012] text-stone-900 font-extrabold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all hover:shadow"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              {sidebarSubscribed && (
                <div className="mt-3 p-2 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-[11px] font-bold flex items-center gap-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Thank you for subscribing!</span>
                </div>
              )}

              {/* Nut bowl illustration from design */}
              <div className="mt-5 flex justify-center">
                <img
                  src="/blog/sidebar_bowl.jpg"
                  alt="Nut bowl decoration"
                  className="w-36 h-auto object-contain rounded-xl drop-shadow-md"
                  onError={(e) => {
                    e.target.src = '/03_brand_promise_nuts_bowl.jpg';
                  }}
                />
              </div>
            </div>

          </aside>

          {/* ──────────────────────────────────────────
              RIGHT MAIN AREA (Featured Article + Latest Grid)
          ────────────────────────────────────────── */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-10">

            {/* ── FEATURED ARTICLE CARD ── */}
            {activeCategory === 'all' && (
              <div
                className="bg-[#0e271a] rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-xl border border-emerald-900/40"
                style={{
                  background: 'linear-gradient(135deg, #0a2115 0%, #0e291c 50%, #133322 100%)',
                }}
              >
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                  
                  {/* Left Column: Bowl of nuts */}
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative group cursor-pointer" onClick={() => setSelectedArticle(featuredArticle)}>
                      <img
                        src={featuredArticle.image}
                        alt="Featured bowl of nuts"
                        className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-2xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = '/03_brand_promise_nuts_bowl.jpg';
                        }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Text & CTA */}
                  <div className="md:col-span-7 space-y-3.5">
                    
                    {/* Badge & Category */}
                    <div className="flex items-center gap-3">
                      <span className="border border-white/25 bg-white/10 backdrop-blur-xs text-white text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider">
                        FEATURED
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#84cc16]">
                        {featuredArticle.categoryName}
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      onClick={() => setSelectedArticle(featuredArticle)}
                      className="text-2xl sm:text-3xl lg:text-[30px] font-black text-white leading-tight cursor-pointer hover:text-[#84cc16] transition-colors"
                    >
                      {featuredArticle.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                      {featuredArticle.excerpt}
                    </p>

                    {/* Author & Read More Button */}
                    <div className="pt-3 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                      
                      {/* Author & Date */}
                      <div className="flex items-center gap-2 text-xs text-stone-300">
                        <div className="w-6 h-6 rounded-full bg-emerald-800/60 border border-emerald-600/40 flex items-center justify-center text-white">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <span className="font-semibold text-white">{featuredArticle.author}</span>
                          <span className="text-stone-400 text-[11px] block">{featuredArticle.date}</span>
                        </div>
                      </div>

                      {/* Read More button */}
                      <button
                        onClick={() => setSelectedArticle(featuredArticle)}
                        className="bg-[#84cc16] hover:bg-[#72b012] text-stone-900 font-extrabold px-6 py-2.5 rounded-full text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-all hover:shadow-xl hover:translate-x-0.5"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* ── LATEST ARTICLES SECTION ── */}
            <div>
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-black text-stone-900 tracking-tight">
                    Latest Articles
                  </h2>
                  {activeCategory !== 'all' && (
                    <p className="text-xs text-stone-500 font-medium mt-0.5">
                      Showing results for category:{' '}
                      <strong className="text-emerald-800 capitalize">
                        {blogCategories.find((c) => c.id === activeCategory)?.label}
                      </strong>
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleCategoryChange('all')}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group"
                >
                  <span>View All Articles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Articles Grid */}
              {paginatedArticles.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedArticles.map((article) => (
                    <article
                      key={article.id}
                      onClick={() => setSelectedArticle(article)}
                      className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer"
                    >
                      {/* Image container */}
                      <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = '/02_brand_story_lifestyle.jpg';
                          }}
                        />

                        {/* Floating Badge (matching reference) */}
                        <div className="absolute top-3.5 left-3.5">
                          <span className="bg-[#132a1e]/90 backdrop-blur-xs text-[#84cc16] text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm tracking-wider">
                            {article.badge}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                        <div>
                          <h3 className="font-extrabold text-base sm:text-[17px] text-stone-900 leading-snug group-hover:text-emerald-800 transition-colors mb-2 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-xs sm:text-[13px] text-stone-600 line-clamp-2 leading-relaxed">
                            {article.excerpt}
                          </p>
                        </div>

                        {/* Footer info: Date & Read Time */}
                        <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1 font-medium text-stone-600">
                            <Clock className="w-3.5 h-3.5 text-stone-400" />
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center">
                  <BookOpen className="w-12 h-12 text-stone-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-stone-800 mb-1">No articles found</h3>
                  <p className="text-xs text-stone-500 mb-4">No posts available under this category currently.</p>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold hover:bg-emerald-700"
                  >
                    View All Articles
                  </button>
                </div>
              )}

              {/* ── PAGINATION BAR ── */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const pNum = i + 1;
                  const isActive = currentPage === pNum;
                  return (
                    <button
                      key={pNum}
                      onClick={() => setCurrentPage(pNum)}
                      className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#132a1e] text-white shadow-sm'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}

                {totalPages > 4 && <span className="text-stone-400 text-xs px-1">...</span>}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            BOTTOM NEWSLETTER BANNER (Matching reference)
        ══════════════════════════════════════════════════ */}
        <div
          className="mt-16 bg-[#0e271a] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-white shadow-xl border border-emerald-900/40"
          style={{
            background: 'linear-gradient(135deg, #091f14 0%, #0c2b1b 50%, #123723 100%)',
          }}
        >
          {/* Ambient light glow */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-1.5">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Better Insights.<br />Better Choices.<br />Better You.
              </h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm pt-1">
                Join our community and get expert tips, healthy recipes, and exclusive offers.
              </p>
            </div>

            {/* Middle: Integrated Input + Subscribe Button */}
            <div className="lg:col-span-5">
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <div className="bg-white rounded-full p-1.5 pl-4 sm:pl-5 flex items-center shadow-lg border border-white/20">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="bg-transparent text-stone-900 placeholder-stone-400 text-xs sm:text-sm focus:outline-none flex-1 min-w-0 pr-2"
                  />
                  <button
                    type="submit"
                    className="bg-[#84cc16] hover:bg-[#72b012] text-stone-900 font-extrabold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-full flex items-center gap-1.5 transition-all shadow-md shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {newsletterSubscribed && (
                  <div className="absolute -bottom-8 left-4 text-[#84cc16] text-xs font-bold flex items-center gap-1 animate-fadeIn">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Welcome to the LIWIN community!</span>
                  </div>
                )}
              </form>
            </div>

            {/* Far Right: Bowl decor from design */}
            <div className="lg:col-span-2 hidden lg:flex justify-end">
              <img
                src="/blog/banner_bowl.jpg"
                alt="Nut bowl decoration"
                className="w-28 h-auto object-contain drop-shadow-xl"
                onError={(e) => {
                  e.target.src = '/05_bottom_nuts_bowl_decor.jpg';
                }}
              />
            </div>

          </div>
        </div>

      </main>

      {/* ══════════════════════════════════════════════════
          ARTICLE READER MODAL (Interactive Full Post)
      ══════════════════════════════════════════════════ */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 relative animate-scaleIn text-stone-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/01_blog_hero_mountains.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="bg-[#84cc16] text-[#071a10] text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm tracking-wider inline-block mb-2">
                  {selectedArticle.badge || selectedArticle.categoryName}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedArticle.title}
                </h2>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Meta bar */}
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center">
                    {selectedArticle.author ? selectedArticle.author[0] : 'L'}
                  </div>
                  <div>
                    <span className="font-bold text-stone-800 block">{selectedArticle.author || 'LIWIN Team'}</span>
                    <span>{selectedArticle.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 font-medium text-stone-600">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    {selectedArticle.readTime}
                  </span>
                </div>
              </div>

              {/* Excerpt / Lead */}
              <p className="text-base sm:text-lg font-semibold text-stone-700 leading-relaxed italic border-l-4 border-[#84cc16] pl-4">
                {selectedArticle.excerpt}
              </p>

              {/* Formatted Article Content */}
              <div className="text-sm sm:text-[15px] text-stone-700 leading-relaxed space-y-4">
                {selectedArticle.content ? (
                  selectedArticle.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('###')) {
                      return (
                        <h4 key={idx} className="text-lg font-black text-stone-900 pt-2">
                          {paragraph.replace('###', '').trim()}
                        </h4>
                      );
                    }
                    return <p key={idx}>{paragraph.trim()}</p>;
                  })
                ) : (
                  <p>
                    Full article text coming soon. Explore our recipes, nutritional guides, and sustainable ingredient stories.
                  </p>
                )}
              </div>

              {/* Interactive footer: Share and Close */}
              <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                <Link
                  to="/shop"
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#132a1e] text-white hover:bg-emerald-900 font-bold text-xs px-5 py-2.5 rounded-xl transition"
                >
                  Shop Fiber Snacks
                </Link>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="text-stone-500 hover:text-stone-800 text-xs font-bold px-4 py-2"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
