import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  title: string;
  slug: string;
  brand: string;
  model: string;
  casediameter: string;
  casematerial: string;
  dialcolor: string;
  dialtype: string;
  bezel: string;
  bracelet: string;
  movement: string;
  waterresistance: string;
  main_image_primary: string;
  main_image_secondary?: string | null;
}

interface Pagination {
  totalProducts: number;
  totalPages: number;
  currentPage: number;
}

interface ProductState {
  products: Product[];
  pagination: Pagination;
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  pagination: {
    totalProducts: 0,
    totalPages: 0,
    currentPage: 1,
  },
  loading: false,
};

export const productSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
      console.log(action.payload, "Danish");
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
