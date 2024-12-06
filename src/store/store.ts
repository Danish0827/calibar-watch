import { configureStore } from "@reduxjs/toolkit";
import productVariationReducer from "./slice/productVariationSlice";
import productDataReducer from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    productVariation: productVariationReducer,
    productData: productDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
