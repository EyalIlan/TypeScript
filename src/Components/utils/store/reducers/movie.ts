import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {RootState } from '../store'

import {movieIF} from '../../interface'

interface initalStateTyep {
    value:movieIF[] 
}

const initalState:initalStateTyep = {
    value:[]
}


const movieSlice = createSlice({
    name:'movie',
    initialState:initalState,
    reducers:{
        saveData:(state,action:PayloadAction<movieIF[]>)  =>{
            state.value = action.payload
        }
    }
})
export const {saveData} = movieSlice.actions




export const moviesData = (state:RootState) => state.movie.value

export default movieSlice