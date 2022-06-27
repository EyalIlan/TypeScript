import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../store'
import { CardIF } from '../../interface'
import { TmdbApiKey } from "../../data";
import { TmdbUrl } from "../../Axios";
// {section:'movie',trendingType:'popular',page:0}
export const fetchDataFromApi = createAsyncThunk('movie/fetchData', async (payload, { dispatch, getState }) => {

    const state: any = getState()
    let { page, trendingType, sectionType,search,query } = state.data.section

    console.log(`${search}${sectionType}${trendingType}?api_key=${TmdbApiKey}&page=${page}`);
    
    try {
                            // TmdbUrl.get(`search/${SectionType.sectionType}?api_key=${TmdbApiKey}&page=${page}&query=${e}`)
        const { data } = await TmdbUrl.get(`${search}${sectionType}${trendingType}?api_key=${TmdbApiKey}&page=${page}&query=${query}`)
        return data
    }
    catch (e) {
        return e
    }
})

interface initalStateTyep {
    value: CardIF[]
    section: {
        search:string
        query:string
        sectionType: string
        trendingType: string
        page: number
    }
    loader: boolean,
    numberOfPages:number,
}

const initalState: initalStateTyep = {
    value: [],
    section: {
        search:'',
        sectionType: 'movie',
        trendingType: '/popular',
        query:'',
        page: 1
    },
    loader:false,
    numberOfPages:0,
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

            state.section.trendingType = '/' + action.payload 
            state.section.query = ''
            state.section.search = ''
            state.section.page  = 1  
        },
        changeSection:(state,action) =>{
            state.section.search = ''
            state.section.query = ''
            state.section.sectionType =  action.payload 
            state.section.page  = 1     
        },
        loaderOn:(state) =>{
            state.loader = true
        },
        loaderOff:(state) =>{
            state.loader = false
        },
        removeData: (state) => {
            state.value = []
        },
        search:(state,action) =>{
            state.section.trendingType = ''
            state.section.query = action.payload
            state.section.search = 'search/'
            state.section.page = 1
        }
    },
    //
    extraReducers: {
        [fetchDataFromApi.pending.toString()]: (state, action) => {
            state.loader = true
        },
        [fetchDataFromApi.fulfilled.toString()]: (state, action) => {
            state.numberOfPages = action.payload.total_pages
            state.value = action.payload.results
            state.loader = false
        },
        [fetchDataFromApi.rejected.toString()]: (state, action) => {
            state.loader = false
        }
     
    }
})

export const { saveData, removeData,changeSelectionPage,changeSelectiontype,changeSection,loaderOn,loaderOff,search} = dataSlice.actions


export const SectionData = (state: RootState) => state.data.section
export const moviesData = (state: RootState) => state.data.value
export const LoaderState = (state: RootState) => state.data.loader
export const NumberOfPages = (state:RootState) => state.data.numberOfPages
export const currentPage = (state:RootState) => state.data.section.page

export default dataSlice