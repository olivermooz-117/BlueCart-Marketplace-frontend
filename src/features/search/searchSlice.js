import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchResults",
  async ({ query, page = 1 }) => {
    const response = await fetch(
      `/api/search?q=${encodeURIComponent(query)}&page=${page}`
    );
    if (!response.ok) throw new Error("Search request failed");
    return response.json();
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    results: [],
    page: 1,
    pages: 1,
    filters: { price: 0.5, rating: 0.3, delivery: 0.2 },
    status: "idle",
    error: null,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.results = action.payload.results;
        state.page = action.payload.page;
        state.pages = action.payload.pages;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setQuery, setFilters } = searchSlice.actions;
export default searchSlice.reducer;
