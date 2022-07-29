
import React,{useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './TopNavbar.css'
import { useDispatch, useSelector} from 'react-redux';
import { searchState,ShowSearch,ShowActionMenu } from '../../utils/store/reducers/features';

export interface IAppProps {

}

export default function TopNavbar (props: IAppProps) {
  

  const dispatch = useDispatch()
  const displaySearch = useSelector(searchState)  
  
  
  return (
    <div id='top_navbar'>
    <div className='primeColor'>
        <div className='flex between align_center big_screen_size'>
                <div className='flex align_center' id='top_navbar_left'>
                <h2 className='bigText'>Ty<span>p</span>eflix</h2>
                <SearchBar ></SearchBar>
                </div>
                <div>
                  <div className='flex align_center'>
                  <i className="fa-solid fa-jedi"></i>
                  <button className='btn btn_tranpernt'>Login</button>
                  </div>
                </div>
        </div>

        <div className='small_screen_size'>
            <div className='flex around align_center'>
             
                  <button className='button transpernt' onClick={()=>{dispatch(ShowActionMenu())}}>
                  <i className="fas fa-bars icon_container icon_click_color"></i>
                  </button>
                  <img src="/icons/superman.png" alt="img" className='icon_container' />
                  <button className='button transpernt' onClick={()=>{dispatch(ShowSearch())}}>
                  <i className="fa-solid fa-magnifying-glass icon_container icon_click_color" ></i>
                  </button>
                  
                  <button className='button transpernt'><i className="far fa-user icon_container icon_click_color"></i></button>                    
                
             </div>
        </div>
    </div>
            <div className='small_screen_size'>
                {displaySearch?<SearchBar></SearchBar>:''}
            </div>
    </div>
  );
}
