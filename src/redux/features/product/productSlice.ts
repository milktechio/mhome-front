import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "../../../utils/types/product.types";
import axios, { authAxios } from "../../../api/config/axios";

// Crear un nuevo producto
export const postNewProduct = createAsyncThunk(
  "create/product",
  async (productData: { name: string; price: number; image: string }) => {
    const product = new FormData();

    product.append("name", productData.name);
    product.append("price", productData.price.toString());
    product.append("image", productData.image);

    const createNewProduct = await authAxios.post("products/save", product);
    return createNewProduct.data;
  }
);

// Obtener todos los productos
export const getProducts = createAsyncThunk("getAll/product", async () => {
  const products = await authAxios.get("product");
  return products.data.data;
});

// Actualizar un producto
export const updateProduct = createAsyncThunk(
  "update/product",
  async (productData: { id: string; name?: string; price?: number }) => {
    const updateParams = new URLSearchParams();
    if (productData.name) updateParams.append("name", productData.name);
    if (productData.price) updateParams.append("price", productData.price.toString());

    const updatedProduct = await authAxios.put(
      "products/" + productData.id,
      updateParams
    );
    return updatedProduct.data;
  }
);

// Eliminar un producto
export const deleteProduct = createAsyncThunk(
  "delete/product",
  async (productId: string) => {
    const deletedProduct = await authAxios.delete(`products/${productId}`);
    return deletedProduct.data;
  }
);

type initialState = {
  successPostProduct: boolean;
  pendingPostProduct: boolean;
  rejectedPostProduct: boolean;

  successGetProducts: boolean;
  pendingGetProducts: boolean;
  rejectedGetProducts: boolean;
  dataGetProducts: ProductDataType[];

  successUpdateProduct: boolean;
  pendingUpdateProduct: boolean;
  rejectedUpdateProduct: boolean;

  successDeleteProduct: boolean;
  pendingDeleteProduct: boolean;
  rejectedDeleteProduct: boolean;
};

const initialState: initialState = {
  successPostProduct: false,
  pendingPostProduct: false,
  rejectedPostProduct: false,

  successGetProducts: false,
  pendingGetProducts: false,
  rejectedGetProducts: false,
  dataGetProducts: [],

  successUpdateProduct: false,
  pendingUpdateProduct: false,
  rejectedUpdateProduct: false,

  successDeleteProduct: false,
  pendingDeleteProduct: false,
  rejectedDeleteProduct: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Crear producto
      .addCase(postNewProduct.fulfilled, (state) => {
        state.successPostProduct = true;
      })
      .addCase(postNewProduct.pending, (state) => {
        state.pendingPostProduct = true;
      })
      .addCase(postNewProduct.rejected, (state) => {
        state.rejectedPostProduct = true;
      })

      // Obtener productos
      .addCase(getProducts.fulfilled, (state, action) => {
        state.successGetProducts = true;
        state.dataGetProducts = action.payload;
      })
      .addCase(getProducts.pending, (state) => {
        state.pendingGetProducts = true;
      })
      .addCase(getProducts.rejected, (state) => {
        state.rejectedGetProducts = true;
      })

      // Actualizar producto
      .addCase(updateProduct.fulfilled, (state) => {
        state.successUpdateProduct = true;
        state.pendingUpdateProduct = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.pendingUpdateProduct = true;
      })
      .addCase(updateProduct.rejected, (state) => {
        state.rejectedUpdateProduct = true;
      })

      // Eliminar producto
      .addCase(deleteProduct.fulfilled, (state) => {
        state.successDeleteProduct = true;
        state.pendingDeleteProduct = false;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.pendingDeleteProduct = true;
      })
      .addCase(deleteProduct.rejected, (state) => {
        state.rejectedDeleteProduct = true;
      });
  },
});

export default productSlice.reducer;
