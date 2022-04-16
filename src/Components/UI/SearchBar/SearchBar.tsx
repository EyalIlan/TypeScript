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
    <div className='flex align_center' id='searchbar_input'>
        <img src="/images/magnifier.png" alt="" className='icon' onClick={SubmitSearchTerm}/>
        <input id='searchbar_input' type="text" placeholder='Enter key words...' onChange={(e) =>{ SetSearchTerm(e.target.value)}} />
    </div>
  )
}

export default SearchBar