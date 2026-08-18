import { mockReviews } from "../data/mockReviews";
import "./ProductDetailPage.css";

export default function ProductDetailPage({ product, onBack }) {
  if (!product) return null;

  return (
    <div className="detail-page">
      <button className="back-link" onClick={onBack}>← Back to results</button>

      <h2>{product.name}</h2>
      <span className="detail-category">{product.category}</span>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>E-shop</th>
            <th>Price</th>
            <th>Delivery</th>
            <th>Payment mode</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {product.listings.map((listing) => (
            <tr key={listing.eshop} className={listing.bestValue ? "best-row" : ""}>
              <td>{listing.eshop} {listing.bestValue && <span className="badge">Best value</span>}</td>
              <td>KES {listing.price.toLocaleString()}</td>
              <td>{listing.deliveryCost}</td>
              <td>{listing.paymentMode}</td>
              <td>★ {listing.rating.toFixed(1)} ({listing.ratingCount})</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="reviews-section">
        <h3>Reviews</h3>
        {mockReviews.map((review) => (
          <div key={review.id} className="review-item">
            <div className="review-header">
              <span className="review-user">{review.user}</span>
              <span className="review-stars">{"★".repeat(review.stars)}</span>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}