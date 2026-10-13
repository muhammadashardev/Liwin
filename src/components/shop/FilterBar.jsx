import React from 'react';
import { categories, dietaryFilters } from '../../mock/categories';
import { Filter, ArrowUpDown } from 'lucide-react';

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedDietary,
  onSelectDietary,
  sortBy,
  onSortChange,
  totalResults
}) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs mb-8 space-y-6">
      
      {/* Category Pills */}
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
          Termékkategóriák
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-emerald-800 text-white shadow-md shadow-emerald-950/10'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dietary Chips & Sort Bar */}
      <div className="pt-4 border-t border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Dietary Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
          <Filter className="w-4 h-4 text-stone-400 flex-shrink-0" />
          <div className="flex gap-1.5 flex-nowrap sm:flex-wrap">
            {dietaryFilters.map((diet) => {
              const isSelected = selectedDietary === diet.id;
              return (
                <button
                  key={diet.id}
                  onClick={() => onSelectDietary(diet.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition ${
                    isSelected
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-stone-50 text-stone-600 hover:bg-stone-100 border border-stone-200/60'
                  }`}
                >
                  {diet.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort and Count */}
        <div className="flex items-center justify-between md:justify-end gap-3 flex-shrink-0">
          <span className="text-xs text-stone-500 font-medium">
            <strong className="text-stone-900">{totalResults}</strong> termék
          </span>

          <div className="flex items-center gap-1.5 bg-stone-50 border border-stone-200 rounded-xl px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-transparent text-xs font-bold text-stone-700 focus:outline-none cursor-pointer"
            >
              <option value="popular">Legnépszerűbb</option>
              <option value="price-asc">Ár: Alacsonytól</option>
              <option value="price-desc">Ár: Magastól</option>
              <option value="rating">Értékelések</option>
            </select>
          </div>
        </div>

      </div>

    </div>
  );
}
