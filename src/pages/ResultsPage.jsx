import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import { mockResults } from "../data/mockProducts";
import "./ResultsPage.css";

export default function ResultsPage({ query }) {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <div className="results-page">
      <div className="results-header">
        <h2>Results for "{query}"</h2>
        <button className="filters-toggle" onClick={() => setFiltersOpen(true)}>
          Filters
        </button>
      </div>

      <div className="results-layout">
        <FilterSidebar className="sidebar-desktop" />
        <div className="results-list">
          {mockResults.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {filtersOpen && (
        <div className="filters-sheet-backdrop" onClick={() => setFiltersOpen(false)}>
          <div className="filters-sheet" onClick={(event) => event.stopPropagation()}>
            <FilterSidebar />
            <button className="filters-close" onClick={() => setFiltersOpen(false)}>
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
