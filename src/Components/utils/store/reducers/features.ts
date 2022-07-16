import {createSlice} from '@reduxjs/toolkit'
import { RootState } from '../store'
import {Features} from '../../interface' 



const initalState:Features ={
    showSearch:false,
    showActionMenu:true,
    showModal:false
}


const featuresSlice = createSlice({
    name:'features',
    initialState:initalState,
    reducers:{
        ShowSearch(state){
           state.showSearch = !state.showSearch
           state.showActionMenu = false
        },
        ShowActionMenu(state){
            state.showActionMenu = !state.showActionMenu
            state.showSearch = false
        },
        ShowModal(state,actions){
            state.showModal = ! state.showModal
        }
    }
})

export const {ShowSearch,ShowActionMenu,ShowModal} = featuresSlice.actions


export const searchState = (state: RootState) => state.features.showSearch
export const menuState = (state: RootState) => state.features.showActionMenu
export const showModal = (state: RootState) => state.features.showModal

export default featuresSlice