import { configureStore, createSlice } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import FetchItemSlice from "./FetchItemSlice";

const myntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchItems: FetchItemSlice.reducer,
  },
});

export default myntraStore;
