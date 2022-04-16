import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store'
import { CardIF } from '../../interface'
import axios from "axios";
import { TmdbApiKey } from "../../data";
// {section:'movie',trendingType:'popular',page:0}
export const fetchDataFromApi = createAsyncThunk('movie/fetchData', async (payload, { dispatch, getState }) => {

    const state: any = getState()
    let { page, trendingType, sectionType } = state.data.section

    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${sectionType}/${trendingType}?api_key=${TmdbApiKey}&page=${page}`)
        return data
    }
    catch (e) {
        return e
    }
})

interface initalStateTyep {
    value: CardIF[]
    section: {
        sectionType: string
        trendingType: string
        page: number
    }
    loader: boolean
}

const initalState: initalStateTyep = {
    value: [],
    section: {
        sectionType: 'movie',
        trendingType: 'popular',
        page: 1
    },
    loader:false
}


const dataSlice = createSlice({
    name: 'data',
    initialState: initalState,

    reducers: {
        saveData: (state, action: PayloadAction<CardIF[]>) => {
            state.value = action.payload
        },
         
        changeSelectionPage:(state,action) =>{

            state.section.page =  action.payload

        },
        changeSelectiontype:(state,action) =>{

            state.section.trendingType =  action.payload
            state.section.page  = 1  
        },
        changeSection:(state,action) =>{

            state.section.sectionType =  action.payload
            state.section.page  = 1     
        },



        removeData: (state) => {
            state.value = []
        }
    },
    extraReducers: {
        [fetchDataFromApi.pending.toString()]: (state, action) => {
            state.loader = true
        },
        [fetchDataFromApi.fulfilled.toString()]: (state, action) => {
            state.value = action.payload.results
            state.loader = false
        },
        [fetchDataFromApi.rejected.toString()]: (state, action) => {
            state.loader = false
        }
     
    }
})

export const { saveData, removeData,changeSelectionPage,changeSelectiontype,changeSection} = dataSlice.actions


export const SectionData = (state: RootState) => state.data.section
export const moviesData = (state: RootState) => state.data.value
export const LoaderState = (state: RootState) => state.data.loader


export default dataSlice