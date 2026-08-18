const cardStyle = {
  background: "var(--color-surface)",
  borderRadius: "var(--radius-card)",
  border: "1px solid #EDE6D6",
  padding: "1.25rem",
  marginBottom: "1rem",
};

const rowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "0.75rem 0",
  borderTop: "1px solid #F1EBDD",
  flexWrap: "wrap",
};

function Badge({ children }) {
  return (
    <span
      style={{
        background: "var(--color-accent)",
        color: "#5A3300",
        fontSize: "12px",
        fontWeight: 500,
        padding: "3px 10px",
        borderRadius: "999px",
      }}
    >
      {children}
    </span>
  );
}

export default function ProductCard({ product }) {
  return (
    <div style={cardStyle}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h3 style={{ fontSize: "17px", color: "var(--color-primary)" }}>{product.name}</h3>
        <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{product.category}</span>
      </div>

      {product.listings.map((listing) => (
        <div key={listing.eshop} style={rowStyle}>
          <div style={{ minWidth: "90px", fontWeight: 500 }}>{listing.eshop}</div>

          <div style={{ minWidth: "110px" }}>
            <div style={{ fontWeight: 500 }}>KES {listing.price.toLocaleString()}</div>
            <div style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
              +{listing.deliveryCost} delivery
            </div>
          </div>

          <div style={{ minWidth: "120px", fontSize: "13px", color: "var(--color-text-muted)" }}>
            {listing.paymentMode}
          </div>

          <div style={{ minWidth: "90px", fontSize: "13px" }}>
            ★ {listing.rating.toFixed(1)}{" "}
            <span style={{ color: "var(--color-text-muted)" }}>({listing.ratingCount})</span>
          </div>

          <div style={{ minWidth: "90px", textAlign: "right" }}>
            {listing.bestValue && <Badge>Best value</Badge>}
          </div>
        </div>
      ))}
    </div>
  );
}
