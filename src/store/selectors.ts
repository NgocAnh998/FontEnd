import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export const selectProducts = (state: RootState) => state.products;

export const selectWishlistIds = (state: RootState) => state.wishlist.items;

export const selectWishlistCount = (state: RootState) =>
    state.wishlist.items.length;

export const selectIsFavorite = (id: string) => (state: RootState) =>
    state.wishlist.items.includes(id);

export const selectProductById = (id?: string) => (state: RootState) =>
    state.products.find((product) => product.id === id);

export const selectFavoriteProducts = createSelector(
    [selectProducts, selectWishlistIds],
    (products, ids) => products.filter((product) => ids.includes(product.id))
);

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = createSelector([selectCartItems], (items) =>
    items.reduce((sum, item) => sum + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);