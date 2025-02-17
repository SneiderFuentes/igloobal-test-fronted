import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts, addProduct, deleteProduct, updateProduct } from "../../service/api";

export const getProductsThunk = createAsyncThunk("products/getProducts", async () => {
  const response = await getProducts();
  return response.data.data;
});

export const addProductThunk = createAsyncThunk(
  "products/addProoduct",
  async (product: { name: string; description: string; price: number }) => {
    const response = await addProduct(product);
    return response.data.data;
  }
);

// Editar producto
export const updateProductThunk = createAsyncThunk(
  "products/updateProduct",
  async (product: { id: number; name: string; description: string; price: number }) => {
    const response = await updateProduct(product);
    return response.data.data;
  }
);

// Eliminar producto
export const deleteProductThunk = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    await deleteProduct(id);
    return id;
  }
);
