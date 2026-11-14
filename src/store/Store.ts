import { configureStore } from "@reduxjs/toolkit";
import ProductListSlice from "./slice/ProductListSlice";

export const store = configureStore({
    reducer: {
        products: ProductListSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;