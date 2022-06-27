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
    <div className='flex align_center' id='searchbar_bar'>
        <div className='icon_container'>
          <i className="fa-solid fa-magnifying-glass" onClick={SubmitSearchTerm}></i>
        </div>
        <input className='input' type="text" placeholder='Enter Search Term' onChange={(e) =>{ SetSearchTerm(e.target.value)}} />
    </div>
  )
}

export default SearchBar