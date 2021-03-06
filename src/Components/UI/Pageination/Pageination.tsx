import React, { useEffect } from 'react'

import {useDispatch,useSelector} from 'react-redux'
import {NumberOfPages,currentPage,changeSelectionPage,fetchDataFromApi} from '../../utils/store/reducers/movie'
import './Pageination.css'

interface Props {
    footer:boolean
}




const Pageination:React.FC<Props> = ({footer}) => {
 
    
    const dispatch = useDispatch()
    const numberOfPages = useSelector(NumberOfPages)
    const page = useSelector(currentPage)
    let pages:number[] = [] 
    let Pages
    
    const changePageHandler = (pageNumber:number) =>{
        dispatch(changeSelectionPage(pageNumber))
        dispatch(fetchDataFromApi())
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
       
    
    }
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

            if(footer){
                return (<button key={index} className={ page === p?'active page_select_button mediumText':'page_select_button    btn_secondary mediumText'} onClick={() =>{changePageHandler(p)}}>{p}</button>)
            }else{
                return (<button key={index} className={ page === p?'active page_select_button mediumText':'page_select_button   btn_primary mediumText'} onClick={() =>{changePageHandler(p)}}>{p}</button>)
            }

        })       
            
     
        

   
    

    return (
    <div className='pages_selection specing'>
        {Pages}
    </div>
  )
}

export default Pageination