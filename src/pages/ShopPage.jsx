import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../mock/products';
import ProductCard from '../components/common/ProductCard';
import FilterBar from '../components/shop/FilterBar';
import QuickViewModal from '../components/common/QuickViewModal';
import { Sparkles } from 'lucide-react';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCat);
  const [selectedDietary, setSelectedDietary] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesDietary = selectedDietary === 'all' || product.dietary.includes(selectedDietary);
        return matchesCategory && matchesDietary;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return b.reviewsCount - a.reviewsCount;
      });
  }, [selectedCategory, selectedDietary, sortBy]);

  return (
    <div className="py-10 bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Liwin.hu Termékkatalógus</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Rostban Gazdag Élelmiszerek & Keverékek
          </h1>
          <p className="text-stone-600 text-sm mt-2 max-w-2xl">
            Tudatos választás a bélflóra egészségéért. Magas rosttartalmú, alacsony szénhidráttartalmú prémium termékek.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          selectedDietary={selectedDietary}
          onSelectDietary={setSelectedDietary}
          sortBy={sortBy}
          onSortChange={setSortBy}
          totalResults={filteredProducts.length}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
            <h3 className="text-lg font-bold text-stone-800">Nem található ilyen termék</h3>
            <p className="text-sm text-stone-500 mt-1">Próbáld meg a szűrők visszaállítását.</p>
            <button
              onClick={() => {
                handleCategoryChange('all');
                setSelectedDietary('all');
              }}
              className="mt-4 px-5 py-2.5 bg-emerald-800 text-white font-bold text-xs rounded-xl hover:bg-emerald-700"
            >
              Szűrők törlése
            </button>
          </div>
        )}

        {/* Quick View Modal */}
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />

      </div>
    </div>
  );
}
