import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/Cart-slice";

export const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})