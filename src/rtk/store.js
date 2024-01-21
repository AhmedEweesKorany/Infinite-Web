import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/Cart-slice";
import isAthun from "./slices/isAthun";
import favSlice from "./slices/fav-slice";

export const store = configureStore({
    reducer:{
        cart:CartSlice,
        Auth:isAthun,
        Fav:favSlice
    }
})