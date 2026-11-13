import {configureStore} from "@reduxjs/toolkit";
import ProductListSlice from "./slice/ProductListSlice.ts";

export const store = configureStore({
    reducer: {
        products: ProductListSlice,
    }
})