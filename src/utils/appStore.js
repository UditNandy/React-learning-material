import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./slices/itemSlice";

const appStore = configureStore({ reducer: { items: ItemReducer } });

export default appStore;
