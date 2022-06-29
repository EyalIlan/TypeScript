import React,{ useState } from 'react'

import './SearchBar.css'

type Props = {
  SearchHandler:Function
}

const SearchBar:React.FC<Props> = ({SearchHandler}) => {
  
  const [searchTerm,SetSearchTerm] = useState('')  
  const SubmitSearchTerm = ()=>{
    SearchHandler(searchTerm)
  }

  return (
    <div className='flex align_center ' id='searchbar_bar'>
         <button disabled={searchTerm.length>0?false:true} onClick={SubmitSearchTerm} className={`icon_container ${searchTerm.length===0?'disable':'btn_primary'}`}><i className="fa-solid fa-magnifying-glass" ></i></button>
          <input className='input' type="text" placeholder='Enter Search Term' onChange={(e) =>{ SetSearchTerm(e.target.value)}} />
    </div>
  )
}

export default SearchBar