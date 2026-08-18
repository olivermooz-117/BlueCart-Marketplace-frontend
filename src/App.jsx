import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import "./styles/theme.css";

function AppShell() {
  const [query, setQuery] = useState(null);

  return (
    <div>
      <NavBar onLogoClick={() => setQuery(null)} />
      {query ? (
        <ResultsPage query={query} />
      ) : (
        <HomePage onSearch={(term) => setQuery(term)} />
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
