import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../../types/product";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: []
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existing = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        increaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action: PayloadAction<string>) => {
            const item = state.items.find((i) => i.id === action.payload);

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        setQuantity: (
            state,
            action: PayloadAction<{ id: string; quantity: number }>
        ) => {
            const item = state.items.find((i) => i.id === action.payload.id);

            if (item && action.payload.quantity >= 1) {
                item.quantity = action.payload.quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    setQuantity,
    clearCart
} = CartSlice.actions;

export default CartSlice.reducer;