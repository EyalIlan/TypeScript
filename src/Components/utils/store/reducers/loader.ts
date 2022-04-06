import { createSlice } from "@reduxjs/toolkit";
import {RootState } from '../store'




const LoaderSlice = createSlice({
    name:'loader',
    initialState:{value:false},
    reducers:{
        activeLoader:(state)  =>{
            state.value = true
        },
        loaderOff:(state) =>{
            state.value= false
        }
    
    }
})
export const {activeLoader,loaderOff} = LoaderSlice.actions




export const loaderState = (state:RootState) => state.loader.value

export default LoaderSlice