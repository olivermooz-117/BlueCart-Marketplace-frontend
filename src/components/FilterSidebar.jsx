import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../features/search/searchSlice";

function FilterSlider({ label, keyName, value, onChange }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
        <span>{label}</span>
        <span style={{ color: "var(--color-text-muted)" }}>{Math.round(value * 100)}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="1"
        step="0.05"
        value={value}
        onChange={(event) => onChange(keyName, parseFloat(event.target.value))}
        style={{ width: "100%", accentColor: "var(--color-accent)" }}
      />
    </div>
  );
}

export default function FilterSidebar({ className = "" }) {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.search.filters);

  const handleChange = (keyName, value) => {
    dispatch(setFilters({ [keyName]: value }));
  };

  return (
    <aside
      className={className}
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-card)",
        border: "1px solid #EDE6D6",
        padding: "1.25rem",
        height: "fit-content",
      }}
    >
      <h3 style={{ fontSize: "15px", marginBottom: "1rem", color: "var(--color-primary)" }}>
        Adjust what matters to you
      </h3>
      <FilterSlider label="Price" keyName="price" value={filters.price} onChange={handleChange} />
      <FilterSlider label="Rating" keyName="rating" value={filters.rating} onChange={handleChange} />
      <FilterSlider label="Delivery cost" keyName="delivery" value={filters.delivery} onChange={handleChange} />
    </aside>
  );
}
