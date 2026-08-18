import { useSelector } from "react-redux";

export default function ResultsList() {
  const { results, status, error } = useSelector((state) => state.search);

  if (status === "loading") return <p>Searching...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <ul>
      {results.map((product) => (
        <li key={product.id}>
          <strong>{product.name}</strong>
          <ul>
            {product.listings.map((listing, i) => (
              <li key={i}>
                {listing.price} + {listing.delivery_cost} delivery — rating{" "}
                {listing.rating} ({listing.rating_count})
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
