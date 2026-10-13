

import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../mock/products';
import ProductCard from '../components/common/ProductCard';
import QuickViewModal from '../components/common/QuickViewModal';
import {
  SlidersHorizontal, X, ChevronDown, LayoutGrid, List,
  ArrowRight, ChevronLeft, ChevronRight
} from 'lucide-react';

/* ─────────────────────────────────────────────
   FILTER SIDEBAR DATA
───────────────────────────────────────────── */
const categoryFilters = [
  { id: 'fiber-bars', label: 'Fiber Bars', count: 4 },
  { id: 'granola',    label: 'Granola',    count: 1 },
  { id: 'snacks',     label: 'Snacks',     count: 2 },
  { id: 'bundles',    label: 'Bundles',    count: 1 },
];

const dietaryFilters = [
  { id: 'gluten-free',    label: 'Gluten Free',    count: 6 },
  { id: 'no-added-sugar', label: 'No Added Sugar', count: 5 },
  { id: 'vegan',          label: 'Vegan',          count: 3 },
  { id: 'high-fiber',     label: 'High Fiber',     count: 7 },
];

const priceRanges = [
  { id: 'under10',  label: 'Under $10',  count: 4 },
  { id: '10to20',   label: '$10 – $20',  count: 2 },
  { id: '20to30',   label: '$20 – $30',  count: 1 },
  { id: 'over30',   label: 'Over $30',   count: 1 },
];

const sortOptions = [
  { id: 'popular',    label: 'Most Popular' },
  { id: 'rating',     label: 'Top Rated' },
  { id: 'price-asc',  label: 'Price: Low → High' },
  { id: 'price-desc', label: 'Price: High → Low' },
];

const ITEMS_PER_PAGE = 8;

const TOP_CATS = [
  {
    id: 'all',
    label: 'All Products',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22v-9"/><path d="M12 13a6 6 0 0 1 6-6c0 4-2.5 6-6 6z"/><path d="M12 13a6 6 0 0 0-6-6c0 4 2.5 6 6 6z"/>
      </svg>
    ),
    image: null,
  },
  { id: 'fiber-bars', label: 'Fiber Bars', image: '/01_featured_product_visual.jpg' },
  { id: 'granola',    label: 'Granola',    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=200&auto=format&fit=crop&q=80' },
  { id: 'snacks',     label: 'Snacks',     image: '/03_brand_promise_nuts_bowl.jpg' },
  { id: 'bundles',    label: 'Bundles',    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&auto=format&fit=crop&q=80' },
];

/* ─────────────────────────────────────────────
   SHOP PAGE
───────────────────────────────────────────── */
export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';

  const [activeTopCat, setActiveTopCat]       = useState(initialCat);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDietary, setSelectedDietary] = useState([]);
  const [priceRange, setPriceRange]           = useState('');
  const [sortBy, setSortBy]                   = useState('popular');
  const [viewMode, setViewMode]               = useState('grid'); // 'grid' | 'list'
  const [page, setPage]                       = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sidebarOpen, setSidebarOpen]         = useState(false);

  const handleTopCat = (catId) => {
    setActiveTopCat(catId);
    setSelectedCategories([]);
    setPage(1);
    if (catId === 'all') searchParams.delete('category');
    else searchParams.set('category', catId);
    setSearchParams(searchParams);
  };

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
    setPage(1);
  };

  const toggleDietary = (id) => {
    setSelectedDietary((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
    setPage(1);
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedDietary([]);
    setPriceRange('');
    setActiveTopCat('all');
    setPage(1);
  };

  const hasFilters = selectedCategories.length > 0 || selectedDietary.length > 0 || priceRange;

  const filtered = useMemo(() => {
    return products
      .filter((p) => {
        const topCatMatch = activeTopCat === 'all' || p.category === activeTopCat;
        const catMatch    = selectedCategories.length === 0 || selectedCategories.includes(p.category);
        const dietMatch   = selectedDietary.length === 0 || selectedDietary.some((d) => p.dietary.includes(d));
        let priceMatch    = true;
        if (priceRange === 'under10')  priceMatch = p.price < 10;
        if (priceRange === '10to20')   priceMatch = p.price >= 10 && p.price < 20;
        if (priceRange === '20to30')   priceMatch = p.price >= 20 && p.price < 30;
        if (priceRange === 'over30')   priceMatch = p.price >= 30;
        return topCatMatch && catMatch && dietMatch && priceMatch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc')  return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating')     return b.rating - a.rating;
        return b.reviewsCount - a.reviewsCount;
      });
  }, [activeTopCat, selectedCategories, selectedDietary, priceRange, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated  = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="bg-[#f9f6f0] min-h-screen">

      {/* ══════════════════════════════════════
          SHOP HERO BANNER
      ══════════════════════════════════════ */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: 260 }}>
        {/* Background */}
        <img src="/01_shop_hero_background.jpg" alt="Shop background"
          className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(5,22,13,0.96) 0%, rgba(5,22,13,0.88) 38%, rgba(5,22,13,0.55) 65%, rgba(5,22,13,0.05) 100%)' }} />

        {/* "Natural Goodness Every Bite" script */}
        <div className="hidden md:block absolute top-8 right-8 xl:right-16 select-none pointer-events-none z-10"
          style={{ fontFamily: "'Caveat', cursive", color: '#c8e8c0', transform: 'rotate(-8deg)', textAlign: 'right', fontSize: 26, fontWeight: 700, lineHeight: 1.05 }}>
          Natural<br />Goodness<br />Every Bite
        </div>

        {/* Product image right side */}
        <div className="hidden sm:block absolute right-0 bottom-0 h-full" style={{ maxWidth: '50%' }}>
          <img src="/01_hero_products_visual.jpg" alt="Products"
            className="h-full w-auto object-contain object-right-bottom"
            style={{ filter: 'drop-shadow(0 8px 30px rgba(0,0,0,0.4))' }} />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-400 block mb-2">OUR PRODUCTS</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-3 max-w-sm">
            Shop Healthy<br />Live Better
          </h1>
          <p className="text-stone-300 text-sm sm:text-[15px] max-w-xs leading-relaxed mb-2">
            Discover our delicious range of fiber-rich snacks,<br className="hidden sm:inline" />crafted with natural ingredients for your healthy lifestyle.
          </p>
          <div className="w-12 h-1 bg-[#7ed957] rounded-full mt-4" />
        </div>
      </div>

      {/* ══════════════════════════════════════
          TOP CATEGORY TABS
      ══════════════════════════════════════ */}
      <div className="bg-white border-b border-stone-100 shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-hide py-3 sm:py-4">
            {TOP_CATS.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleTopCat(cat.id)}
                className={`shrink-0 flex flex-col items-center gap-1.5 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all duration-200 group focus:outline-none ${
                  activeTopCat === cat.id
                    ? 'bg-[#1b4332] text-white shadow-md'
                    : 'bg-stone-50 text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200'
                }`}
              >
                {cat.image ? (
                  <img src={cat.image} alt={cat.label}
                    className="w-10 h-10 object-contain rounded-lg group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center">
                    {cat.icon}
                  </div>
                )}
                <span className="text-xs font-bold whitespace-nowrap">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── MOBILE TOOLBAR: Filter toggle + Sort + View mode in one row ── */}
        <div className="flex lg:hidden items-center justify-between gap-3 mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-700 font-semibold text-sm hover:border-emerald-400 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {hasFilters && (
              <span className="ml-1 w-5 h-5 bg-emerald-600 text-white rounded-full text-[10px] font-black flex items-center justify-center">
                {selectedCategories.length + selectedDietary.length + (priceRange ? 1 : 0)}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2">
            {/* Sort select mobile */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
                className="pl-3 pr-7 py-2 text-xs font-semibold text-stone-700 border border-stone-200 rounded-xl bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
              >
                {sortOptions.map((o) => (
                  <option key={o.id} value={o.id}>{o.label}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-stone-400 pointer-events-none" />
            </div>
            {/* Grid / List toggle */}
            <div className="flex items-center gap-1 border border-stone-200 rounded-xl p-1 bg-white">
              <button onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#1b4332] text-white' : 'text-stone-400 hover:text-stone-700'}`}>
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#1b4332] text-white' : 'text-stone-400 hover:text-stone-700'}`}>
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE FILTER PANEL (collapsible, full width above products) ── */}
        {sidebarOpen && (
          <div className="lg:hidden mb-5 bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-stone-100">
              <div className="flex items-center gap-2 font-bold text-stone-800 text-sm">
                <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
                <span>Filters</span>
              </div>
              <div className="flex items-center gap-3">
                {hasFilters && (
                  <button onClick={clearAll} className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                    <X className="w-3 h-3" /> Clear All
                  </button>
                )}
                <button onClick={() => setSidebarOpen(false)} className="text-stone-400 hover:text-stone-700">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-4">
              {/* Category */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2">Category</h4>
                <div className="space-y-2">
                  {categoryFilters.map((c) => (
                    <label key={c.id} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedCategories.includes(c.id)} onChange={() => toggleCategory(c.id)}
                        className="w-3.5 h-3.5 accent-emerald-700 cursor-pointer" />
                      <span className={`text-xs font-medium ${selectedCategories.includes(c.id) ? 'text-emerald-800 font-bold' : 'text-stone-600'}`}>{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Dietary */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2">Dietary</h4>
                <div className="space-y-2">
                  {dietaryFilters.map((d) => (
                    <label key={d.id} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={selectedDietary.includes(d.id)} onChange={() => toggleDietary(d.id)}
                        className="w-3.5 h-3.5 accent-emerald-700 cursor-pointer" />
                      <span className={`text-xs font-medium ${selectedDietary.includes(d.id) ? 'text-emerald-800 font-bold' : 'text-stone-600'}`}>{d.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Price */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((r) => (
                    <label key={r.id} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="price-mobile" checked={priceRange === r.id}
                        onChange={() => { setPriceRange(r.id); setPage(1); }}
                        className="w-3.5 h-3.5 accent-emerald-700 cursor-pointer" />
                      <span className={`text-xs font-medium ${priceRange === r.id ? 'text-emerald-800 font-bold' : 'text-stone-600'}`}>{r.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── DESKTOP LAYOUT: Sidebar + Products side by side ── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* ── DESKTOP SIDEBAR ── */}
          <aside className="hidden lg:block w-56 xl:w-64 shrink-0">
            <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden sticky top-24">

              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-stone-100">
                <div className="flex items-center gap-2 font-bold text-stone-800 text-sm">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-700" />
                  <span>Filters</span>
                </div>
                {hasFilters && (
                  <button onClick={clearAll} className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1">
                    <X className="w-3 h-3" /> Clear All
                  </button>
                )}
              </div>

              <div className="p-4 space-y-5">

                {/* Category */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2.5">Category</h4>
                  <div className="space-y-2">
                    {categoryFilters.map((c) => (
                      <label key={c.id} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={selectedCategories.includes(c.id)}
                            onChange={() => toggleCategory(c.id)}
                            className="w-3.5 h-3.5 accent-emerald-700 cursor-pointer" />
                          <span className={`text-[13px] font-medium transition-colors ${selectedCategories.includes(c.id) ? 'text-emerald-800 font-bold' : 'text-stone-600 group-hover:text-stone-900'}`}>
                            {c.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-400 font-medium">{c.count}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-stone-100" />

                {/* Dietary */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2.5">Dietary</h4>
                  <div className="space-y-2">
                    {dietaryFilters.map((d) => (
                      <label key={d.id} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" checked={selectedDietary.includes(d.id)}
                            onChange={() => toggleDietary(d.id)}
                            className="w-3.5 h-3.5 accent-emerald-700 cursor-pointer" />
                          <span className={`text-[13px] font-medium transition-colors ${selectedDietary.includes(d.id) ? 'text-emerald-800 font-bold' : 'text-stone-600 group-hover:text-stone-900'}`}>
                            {d.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-400 font-medium">{d.count}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-stone-100" />

                {/* Price Range */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2.5">Price Range</h4>
                  <div className="space-y-2">
                    {priceRanges.map((r) => (
                      <label key={r.id} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center gap-2">
                          <input type="radio" name="price-desktop" checked={priceRange === r.id}
                            onChange={() => { setPriceRange(r.id); setPage(1); }}
                            className="w-3.5 h-3.5 accent-emerald-700 cursor-pointer" />
                          <span className={`text-[13px] font-medium transition-colors ${priceRange === r.id ? 'text-emerald-800 font-bold' : 'text-stone-600 group-hover:text-stone-900'}`}>
                            {r.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-stone-400 font-medium">{r.count}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-stone-100" />

                {/* Sort By (desktop sidebar) */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.14em] text-stone-500 mb-2.5">Sort By</h4>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
                      className="w-full pl-3 pr-8 py-2 text-sm font-semibold text-stone-700 border border-stone-200 rounded-xl bg-stone-50 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                    >
                      {sortOptions.map((o) => (
                        <option key={o.id} value={o.id}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
                  </div>
                </div>

                {/* Promo Card */}
                <div className="relative rounded-2xl overflow-hidden mt-2">
                  <img src="/03_brand_promise_nuts_bowl.jpg" alt="Good Food Good Mood"
                    className="w-full h-32 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2518]/90 via-[#0a2518]/40 to-transparent flex flex-col justify-end p-3">
                    <p className="text-white font-black text-sm leading-tight" style={{ fontFamily: "'Caveat', cursive", fontSize: 20 }}>
                      Good Food<br />Good Mood
                    </p>
                    <button className="mt-2 w-7 h-7 rounded-full bg-[#7ed957] flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-[#071a10]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </aside>

          {/* ── PRODUCTS AREA ── */}
          <div className="flex-1 min-w-0">

            {/* Desktop Toolbar */}
            <div className="hidden lg:flex items-center justify-between mb-5 flex-wrap gap-3">
              <p className="text-sm text-stone-500 font-medium">
                Showing <span className="font-bold text-stone-700">{(page - 1) * ITEMS_PER_PAGE + 1}–{Math.min(page * ITEMS_PER_PAGE, filtered.length)}</span> of <span className="font-bold text-stone-700">{filtered.length}</span> products
              </p>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value); setPage(1); }}
                    className="pl-3 pr-8 py-2 text-sm font-semibold text-stone-700 border border-stone-200 rounded-xl bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.id} value={o.id}>Sort by: {o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
                </div>
                <div className="flex items-center gap-1 border border-stone-200 rounded-xl p-1 bg-white">
                  <button onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#1b4332] text-white' : 'text-stone-400 hover:text-stone-700'}`}>
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#1b4332] text-white' : 'text-stone-400 hover:text-stone-700'}`}>
                    <List className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile product count */}
            <p className="lg:hidden text-xs text-stone-500 font-medium mb-4">
              Showing <span className="font-bold text-stone-700">{Math.min(page * ITEMS_PER_PAGE, filtered.length)}</span> of <span className="font-bold text-stone-700">{filtered.length}</span> products
            </p>

            {/* Products Grid */}
            {paginated.length > 0 ? (
              <div className={viewMode === 'grid'
                ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5'
                : 'flex flex-col gap-4'}>
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4">
                  <SlidersHorizontal className="w-7 h-7 text-stone-400" />
                </div>
                <h3 className="text-lg font-bold text-stone-700 mb-1">No products found</h3>
                <p className="text-sm text-stone-400 mb-4">Try adjusting your filters</p>
                <button onClick={clearAll} className="px-5 py-2.5 rounded-full bg-[#1b4332] text-white font-bold text-sm hover:bg-emerald-700 transition-colors">
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="w-9 h-9 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-9 h-9 rounded-full text-sm font-bold transition-all ${
                      page === i + 1
                        ? 'bg-[#1b4332] text-white shadow-md'
                        : 'border border-stone-200 bg-white text-stone-600 hover:border-emerald-400 hover:text-emerald-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="w-9 h-9 rounded-full border border-stone-200 bg-white flex items-center justify-center text-stone-600 hover:border-emerald-400 hover:text-emerald-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM "FUEL YOUR DAY" BANNER
      ══════════════════════════════════════ */}
      <div className="mt-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a2518 0%, #0f3a22 60%, #163322 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">

            {/* Left: Script + bowl image */}
            <div className="flex flex-col items-center sm:items-start gap-4">
              <div style={{ fontFamily: "'Caveat', cursive", color: '#c8e8c0', fontSize: 30, fontWeight: 700, lineHeight: 1.0 }}>
                Real<br />Ingredients<br />Real Energy
              </div>
              <img src="/03_brand_promise_nuts_bowl.jpg" alt="Nuts bowl"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl shadow-xl border-2 border-emerald-700/40" />
            </div>

            {/* Center: Main text */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Fuel Your Day<br />
                <span style={{ color: '#7ed957' }}>Naturally</span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-[15px] leading-relaxed">
                Better snacks. Better choices. A healthier you.
              </p>
              <Link to="/shop"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-black text-sm tracking-wide transition-all hover:-translate-y-0.5 group"
                style={{ background: '#7ed957', color: '#071a10', boxShadow: '0 8px 24px rgba(126,217,87,0.35)' }}>
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right: Product photo */}
            <div className="flex justify-center sm:justify-end">
              <img src="/04_product_promotion_photo.jpg" alt="Fiber Bar promotion"
                className="w-48 sm:w-56 h-auto object-cover rounded-2xl shadow-2xl border-2 border-emerald-800/40"
                style={{ filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.5))' }} />
            </div>

          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
