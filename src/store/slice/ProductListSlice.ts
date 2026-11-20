import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";
import { products } from "../../data/products";

const ProductListSlice = createSlice({
    initialState: products as Product[],
    name: "products",
    reducers: {
        load: (state, action: PayloadAction<Product[]>) => {
            return action.payload;
        }
    }
});

export const { load } = ProductListSlice.actions;

export default ProductListSlice.reducer;