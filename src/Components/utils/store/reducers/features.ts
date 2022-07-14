import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../store'
import {Features} from '../../interface' 



const initalState:Features ={
    showSearch:false,
    showActionMenu:false,
    showModal:false
}


const featuresSlice = createSlice({
    name:'features',
    initialState:initalState,
    reducers:{
        ShowSearch(state){
           state.showSearch = !state.showSearch
        },
        ShowActionMenu(state,actions){
            state.showActionMenu = !state.showActionMenu
        },
        ShowModal(state,actions){
            state.showModal = ! state.showModal
        }
    }
})

export const {ShowSearch,ShowActionMenu,ShowModal} = featuresSlice.actions


export const searchState = (state: RootState) => state.features.showSearch
export const showActionMenu = (state: RootState) => state.features.showActionMenu
export const showModal = (state: RootState) => state.features.showModal

export default featuresSlice