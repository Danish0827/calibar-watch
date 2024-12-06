import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductVariationState {
  variations: any[];
  selectedVariation: any;
}

const initialState: ProductVariationState = {
  variations: [],
  selectedVariation: {},
};

export const productVariationSlice = createSlice({
  name: "productVariationSlice",
  initialState,
  reducers: {
    setVariations: (state, action: PayloadAction<any[]>) => {
      state.variations = action.payload;
    },
    setSelectedVariation: (state, action: PayloadAction<any[]>) => {
      state.selectedVariation = action.payload;
    },
  },
});

export const { setVariations, setSelectedVariation } =
  productVariationSlice.actions;

export default productVariationSlice.reducer;
