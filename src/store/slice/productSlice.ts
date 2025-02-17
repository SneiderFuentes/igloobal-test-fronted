import { addProductThunk, deleteProductThunk, getProductsThunk, updateProductThunk } from "../thunks/productThunks";
import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
}

const initialState: ProductState = {
 products: [],
 loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(addProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product.id !== action.payload);
      });
  },
});

export default productSlice.reducer;