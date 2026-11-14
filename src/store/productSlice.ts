import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { PriceRangeKey, ProductFilter, SortOption } from '../types/product'
import { ALL_CATEGORY } from '../utils/productFilter'

const initialState: ProductFilter = {
    keyword: '',
    category: ALL_CATEGORY,
    priceRange: 'all',
    sortBy: 'default',
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setKeyword(state, action: PayloadAction<string>) {
            state.keyword = action.payload
        },
        setCategory(state, action: PayloadAction<string>) {
            state.category = action.payload
        },
        setPriceRange(state, action: PayloadAction<PriceRangeKey>) {
            state.priceRange = action.payload
        },
        setSortBy(state, action: PayloadAction<SortOption>) {
            state.sortBy = action.payload
        },
        resetFilters() {
            return initialState
        },
    },
})

export const {
    setKeyword,
    setCategory,
    setPriceRange,
    setSortBy,
    resetFilters,
} = productSlice.actions
export default productSlice.reducer
