import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "count",
  initialState: {
    items: ["Burger", "Pizza"],
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    reset: (state) => {
      state.items.length = 0;
    },
  },
});

export const { add, reset } = itemsSlice.actions;

export default itemsSlice.reducer;
