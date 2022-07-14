import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { search,fetchDataFromApi } from '../../utils/store/reducers/movie'
import './SearchBar.css'
type Props = {

}

const SearchBar:React.FC<Props> = () => {
  
  const [searchTerm,SetSearchTerm] = useState('')  

  const dispatch = useDispatch()


  const SubmitSearchTerm = ()=>{
    dispatch(search(searchTerm))
    dispatch(fetchDataFromApi())
  }

  return (
    <div className='flex align_center ' id='searchbar_bar'>
         <button disabled={searchTerm.length>0?false:true} onClick={SubmitSearchTerm} className={`icon_container ${searchTerm.length===0?'disable':'btn_primary'}`}><i className="fa-solid fa-magnifying-glass" ></i></button>
          <input className='input' type="text" placeholder='Enter Search Term' onChange={(e) =>{ SetSearchTerm(e.target.value)}} />
    </div>
  )
}

export default SearchBar