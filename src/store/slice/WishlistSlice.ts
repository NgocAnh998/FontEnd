import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
    items: string[];
}

const initialState: WishlistState = {
    items: []
};

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<string>) => {
            if (!state.items.includes(action.payload)) {
                state.items.push(action.payload);
            }
        },

        removeFromWishlist: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (id) => id !== action.payload
            );
        },

        toggleWishlist: (state, action: PayloadAction<string>) => {
            const index = state.items.indexOf(action.payload);

            if (index === -1) {
                state.items.push(action.payload);
            } else {
                state.items.splice(index, 1);
            }
        }
    }
});

export const {
    addToWishlist,
    removeFromWishlist,
    toggleWishlist
} = WishlistSlice.actions;

export default WishlistSlice.reducer;