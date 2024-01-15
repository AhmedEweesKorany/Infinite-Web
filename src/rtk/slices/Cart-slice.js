// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    initialState:[],
    name:"CartSlice",
    reducers:{
        addToCart:(state,action)=>{
          if(state == false){
            console.log(state)
            return [...state,action.payload]
          }else{
            let counter = 0;

            state.forEach(item=>{
                if(item.Product_Id == action.payload.Product_Id){
                    counter++
                    item.quantity += 1
                }
            })
            if(counter == 0){
                return [...state,action.payload]
            }
          }
        },
        removeFromCart:(state,action)=>{
            state.shift(action.payload)
            return state
        },
        clearAll:(state,action)=>{
            state = []
            return state
        }
    }
})

export const {addToCart,removeFromCart,clearAll} = CartSlice.actions

export default CartSlice.reducer;