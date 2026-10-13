import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { products } from '../../mock/products';
import { Link } from 'react-router-dom';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchTerm.trim() === ''
    ? []
    : products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.dietary.some((d) => d.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-stone-900/60 backdrop-blur-sm">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-100">
        
        {/* Header Search Input */}
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-stone-400 absolute left-4" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Keress termékre, pl. Kenyér, Kása, Rost, Keto..."
            className="w-full pl-12 pr-12 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white transition"
          />
          <button
            onClick={onClose}
            className="absolute right-3 p-1.5 rounded-full hover:bg-stone-200 text-stone-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results */}
        <div className="mt-4 max-h-80 overflow-y-auto divide-y divide-stone-100">
          {searchTerm.trim() === '' ? (
            <div className="py-8 text-center text-stone-400 text-sm">
              <p>Kezdj el gépelni a kereséshez...</p>
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {['Kenyérkeverék', 'Kása', 'Kréker', 'Gluténmentes', 'Keto'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="text-xs px-2.5 py-1 bg-stone-100 text-stone-600 rounded-lg hover:bg-emerald-50 hover:text-emerald-800"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-4 py-3 hover:bg-stone-50 px-2 rounded-xl transition group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-700 truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-stone-500">{product.weight} • {product.price} Ft</p>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-700 transition" />
              </Link>
            ))
          ) : (
            <div className="py-8 text-center text-stone-400 text-sm">
              Nem találtunk terméket erre a kifejezésre: "{searchTerm}"
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
