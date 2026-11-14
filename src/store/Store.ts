import { configureStore } from "@reduxjs/toolkit";

import ProductListSlice from "./slice/ProductListSlice";
import WishlistSlice from "./slice/WishlistSlice";

export const store = configureStore({
    reducer: {
        products: ProductListSlice,
        wishlist: WishlistSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;