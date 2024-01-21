// const { createSlice } = require("@reduxjs/toolkit");

import { createSlice } from "@reduxjs/toolkit";

const FavSlice = createSlice({
    initialState:[],
    name:"FavSlice",
    reducers:{
        addToFav:(state,action)=>{
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
        removeFromFav:(state,action)=>{
            state.shift(action.payload)
            return state
        },
        clearFav:(state,action)=>{
            state = []
            return state
        }
    }
})

export const {addToFav,removeFromFav,clearFav} = FavSlice.actions

export default FavSlice.reducer;