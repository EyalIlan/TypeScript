import React, { useEffect } from 'react'
import { imagesUrlRequest } from '../../utils/data'
import {  useNavigate,Link } from "react-router-dom";
import {changeSection} from '../../utils/store/reducers/movie';
import './Card.css'
import { useDispatch } from 'react-redux';

type Props = {
    imageUrl?:string
    rating:number
    descritption?:string
    title?:string
    name?:string
    year?:string
    trending?:string
    ID:number
}

const Card:React.FC<Props> = ({imageUrl,rating,descritption,title,name,year,trending,ID}) => {
   
   const dispatch = useDispatch()
   const navigate = useNavigate()

   let Year = year?.split('-')[0]
   let Title = ''
   if((title !== undefined && title.length>20) || (name !== undefined && name.length>20)){
    Title = title?.substring(0,32)  || name?.substring(0,32)  || '' 
   }



    return (     

        <div className='card' >
        <Link to={`/movie/${ID}`}>
        
        <img src={imageUrl?`${imagesUrlRequest}/${imageUrl}`:'/images/movieNotFound.jpg'} alt="poster" />
        <div className='card_content'>

        <div >
        <div className='flex around'>
            
            <div className='flex'>
            {rating?<i className="fa-solid fa-star yellow mediumText" style={{'margin':'0px 3px'}}></i>:''}
            <p className='mediumText'>{rating}</p> 
            </div>
            
            <p className='mediumText'>{Year}</p>
        </div>
        </div>

        <div id='card_title' className='test'>
            <h4 className='mediumText' style={{'lineHeight':'1.1'}}>{Title?Title:title?title:name}</h4>
        </div>
    
        </div>
        {/* </button> */}
    
    </Link>
    </div>
  )
}


export default Card