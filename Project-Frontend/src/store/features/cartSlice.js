import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        books:[]
    },
    reducers: {
        addToCart: (state,action) => {
            state.value += 1
            state.books.push(action.payload)
        },
        handleValue:(state,action) => {
            state.value = action.payload
        },
        
    }
})

export const { addToCart,handleValue } = cartSlice.actions

export default cartSlice.reducer


