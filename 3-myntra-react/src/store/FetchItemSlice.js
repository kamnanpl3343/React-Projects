import { createSlice } from "@reduxjs/toolkit";

const FetchItemSlice = createSlice({
  name: "fetchItems",
  initialState: { fetchStatusVal: false, currentStatus: false },
  reducers: {
    markfetchStatus: (state) => {
      state.fetchStatusVal = true;
    },
    markfetchingStarted: (state) => {
      state.currentStatus = true;
    },
    markfetchingEnded: (state) => {
      state.currentStatus = false;
    },
  },
});

export const FetchItemAction = FetchItemSlice.actions;
export default FetchItemSlice;
