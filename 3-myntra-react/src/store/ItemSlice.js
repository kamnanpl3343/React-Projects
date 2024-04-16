import { createSlice } from "@reduxjs/toolkit";
const ItemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItems: (state, action) => {
      // console.log("data recieved", state, action);
      return action.payload;
    },
    
  },
});
export const itemsActions = ItemSlice.actions;
export default ItemSlice;
