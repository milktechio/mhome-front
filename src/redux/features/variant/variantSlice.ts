import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { authAxios } from "../../../api/config/axios";
import {toast} from 'react-toastify'
// Crear una nueva variante
export const postNewVariant = createAsyncThunk(
  "create/variant",
  async (variantData: any) => {
    const variant = new FormData();


    for(let k in variantData){
      variant.append(k, variantData[k])
    }

    const createNewVariant = await authAxios.post("variant/save", variant);
    toast.success("Creado correctamente", {'theme':"dark"})
    return createNewVariant.data;
  }
);

// Obtener todas las variantes
export const getVariants = createAsyncThunk(
  "getAll/variant",
  async (productId: string) => {
    const variants = await authAxios.get(`variant?product_id=${productId}`);
    return variants.data.data;
  }
);

// Actualizar una variante
export const updateVariant = createAsyncThunk(
  "update/variant",
  async (variantData: { id: string; name?: string; price?: number }) => {
    const updateParams = new URLSearchParams();
    if (variantData.name) updateParams.append("name", variantData.name);
    if (variantData.price) updateParams.append("price", variantData.price.toString());

    const updatedVariant = await authAxios.put(
      "variant/" + variantData.id,
      updateParams
    );
    return updatedVariant.data;
  }
);

// Eliminar una variante
export const deleteVariant = createAsyncThunk(
  "delete/variant",
  async (variantId: string) => {
    const deletedVariant = await authAxios.delete(`variant/${variantId}`);
    return deletedVariant.data;
  }
);

type initialState = {
  successPostVariant: boolean;
  pendingPostVariant: boolean;
  rejectedPostVariant: boolean;

  successGetVariants: boolean;
  pendingGetVariants: boolean;
  rejectedGetVariants: boolean;
  dataGetVariants: any[];

  successUpdateVariant: boolean;
  pendingUpdateVariant: boolean;
  rejectedUpdateVariant: boolean;

  successDeleteVariant: boolean;
  pendingDeleteVariant: boolean;
  rejectedDeleteVariant: boolean;
};

const initialState: initialState = {
  successPostVariant: false,
  pendingPostVariant: false,
  rejectedPostVariant: false,

  successGetVariants: false,
  pendingGetVariants: false,
  rejectedGetVariants: false,
  dataGetVariants: [],

  successUpdateVariant: false,
  pendingUpdateVariant: false,
  rejectedUpdateVariant: false,

  successDeleteVariant: false,
  pendingDeleteVariant: false,
  rejectedDeleteVariant: false,
};

export const variantSlice = createSlice({
  name: "variant",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Crear variante
      .addCase(postNewVariant.fulfilled, (state) => {
        state.successPostVariant = true;
      })
      .addCase(postNewVariant.pending, (state) => {
        state.pendingPostVariant = true;
      })
      .addCase(postNewVariant.rejected, (state) => {
        state.rejectedPostVariant = true;
      })

      // Obtener variantes
      .addCase(getVariants.fulfilled, (state, action) => {
        state.successGetVariants = true;
        state.dataGetVariants = action.payload;
      })
      .addCase(getVariants.pending, (state) => {
        state.pendingGetVariants = true;
      })
      .addCase(getVariants.rejected, (state) => {
        state.rejectedGetVariants = true;
      })

      // Actualizar variante
      .addCase(updateVariant.fulfilled, (state) => {
        state.successUpdateVariant = true;
        state.pendingUpdateVariant = false;
      })
      .addCase(updateVariant.pending, (state) => {
        state.pendingUpdateVariant = true;
      })
      .addCase(updateVariant.rejected, (state) => {
        state.rejectedUpdateVariant = true;
      })

      // Eliminar variante
      .addCase(deleteVariant.fulfilled, (state) => {
        state.successDeleteVariant = true;
        state.pendingDeleteVariant = false;
      })
      .addCase(deleteVariant.pending, (state) => {
        state.pendingDeleteVariant = true;
      })
      .addCase(deleteVariant.rejected, (state) => {
        state.rejectedDeleteVariant = true;
      });
  },
});

export default variantSlice.reducer;
