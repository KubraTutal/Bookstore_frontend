import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favoriteReducer from "./features/favoriteSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        favorite:favoriteReducer
        
        
    }
}) 