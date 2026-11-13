import { createSlice } from "@reduxjs/toolkit";

const ProductListSlice = createSlice({
    initialState:[],
    name: "products",
    reducers:{
        load:(state,action)=>{
            return action.payload;
        }
    }
})
export const {load} = ProductListSlice.actions;
export default ProductListSlice.reducer;