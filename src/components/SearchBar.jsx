import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery, fetchSearchResults } from "../features/search/searchSlice";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setQuery(input));
    dispatch(fetchSearchResults({ query: input, page: 1 }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Search for a product, e.g. Samsung A51"
      />
      <button type="submit">Search</button>
    </form>
  );
}
