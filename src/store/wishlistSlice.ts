import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface WishlistState {
    ids: string[]
}

const initialState: WishlistState = { ids: [] }

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        toggleWishlist(state, action: PayloadAction<string>) {
            const index = state.ids.indexOf(action.payload)
            if (index >= 0) {
                state.ids.splice(index, 1)
            } else {
                state.ids.push(action.payload)
            }
        },
    },
})

export const { toggleWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
