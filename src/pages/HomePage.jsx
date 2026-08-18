import { useState } from "react";
import { trendingSearches } from "../data/mockProducts";
import "./HomePage.css";

export default function HomePage({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim()) onSearch(input.trim());
  };

  return (
    <div className="home-hero">
      <h1>Compare more than price</h1>
      <p className="home-subtext">
        BlueCart ranks the same product across e-shops by price, delivery cost, ratings,
        and payment mode, so a cheaper listing does not automatically win.
      </p>

      <form className="home-search" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Search for a product, e.g. Samsung A51"
        />
        <button type="submit">Search</button>
      </form>

      <div className="trending-chips">
        {trendingSearches.map((term) => (
          <button key={term} className="chip" onClick={() => onSearch(term)}>
            {term}
          </button>
        ))}
      </div>
    </div>
  );
}
