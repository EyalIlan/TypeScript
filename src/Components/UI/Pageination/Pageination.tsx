import React, { useEffect } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {NumberOfPages,currentPage} from '../../utils/store/reducers/movie'
import './Pageination.css'

interface Props {

}

const Pageination:React.FC<Props> = () => {

    const dispatch = useDispatch()
    const numberOfPages = useSelector(NumberOfPages)
    const page = useSelector(currentPage)
    let pages:number[] = [] 
    let Pages
    
        
        for (let i = 0; i <= 4; i++) {
           
           if(page + i <= numberOfPages ){
                pages.push(page + i)
           }
           if (page -i > 0 && (page-i !== page)) {
               pages.push(page - i )
           } 
    
        }
    
        pages.sort((a,b) =>{
            return a-b
        })
       
        Pages = pages.map((p,index) =>{
            return <button key={index} className='page_select_button btn_click btn_primary'>{p}</button>
        })       
            
     
        

   
    

    return (
    <div className='pages_selection'>
        {Pages}
    </div>
  )
}

export default Pageination