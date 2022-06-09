
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './TopNavbar.css'
import {tmdbUrl} from '../../utils/Axios'
import { TmdbApiKey } from '../../utils/data';
import { useDispatch, useSelector } from 'react-redux';
import {  saveData, SectionData,loaderOn,loaderOff } from '../../utils/store/reducers/movie';
export interface IAppProps {

}

export default function TopNavbar (props: IAppProps) {

  const dispatch = useDispatch()
  const SectionType = useSelector(SectionData)
  
  
  const  SearchHandler = async (e:string) =>{
    dispatch(loaderOn())
    const {data} = await tmdbUrl.get(`search/${SectionType.sectionType}?api_key=${TmdbApiKey}&page=1&query=${e}`)
    dispatch(loaderOff())
    dispatch(saveData(data.results))
  }

  return (
    <div id='top_navbar'>
        <div className='flex between align_center'>
                <div className='flex align_center' id='top_navbar_left'>
                <h2>Ty<span>p</span>eflix</h2>
                  <SearchBar SearchHandler = {SearchHandler}></SearchBar>
                </div>
                <div>
                  <div className='flex align_center'>
                  <i className="fa-solid fa-jedi"></i>
                  <button className='btn btn_tranpernt'>Login</button>
                  </div>
                </div>
        </div>
    </div>
  );
}
