
import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        value: 0,
        books:[]
    },
    reducers: {
        addToFavorite: (state,action) => {
            state.value += 1
            state.books.push(action.payload)
        }
    }
})

export const {addToFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer