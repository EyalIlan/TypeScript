
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './TopNavbar.css'
import { useDispatch} from 'react-redux';
import { search,fetchDataFromApi } from '../../utils/store/reducers/movie';
export interface IAppProps {

}

export default function TopNavbar (props: IAppProps) {
  
  const dispatch = useDispatch()
  const SearchHandler = async (term:string) =>{
    dispatch(search(term))
    dispatch(fetchDataFromApi())
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
