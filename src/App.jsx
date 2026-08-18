import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./components/NavBar";
import LoginModal from "./components/LoginModal";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { mockResults } from "./data/mockProducts";
import "./styles/theme.css";

function AppShell() {
  const [query, setQuery] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [authModal, setAuthModal] = useState(null); // null | "login" | "register"

  const goHome = () => {
    setQuery(null);
    setSelectedProduct(null);
  };

  return (
    <div>
      <NavBar
        onLogoClick={goHome}
        onSignIn={() => setAuthModal("login")}
        onSignUp={() => setAuthModal("register")}
      />

      {selectedProduct ? (
        <ProductDetailPage product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : query ? (
        <ResultsPage
          query={query}
          onSelectProduct={(id) => setSelectedProduct(mockResults.find((p) => p.id === id))}
        />
      ) : (
        <HomePage onSearch={(term) => setQuery(term)} />
      )}

      {authModal && (
        <LoginModal mode={authModal} onClose={() => setAuthModal(null)} onModeChange={setAuthModal} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppShell />
    </Provider>
  );
}