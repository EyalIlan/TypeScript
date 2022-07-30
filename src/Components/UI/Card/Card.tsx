import React from 'react'
import { imagesUrlRequest } from '../../utils/data'
import { Link } from "react-router-dom";
import './Card.css'

type Props = {
    imageUrl?:string
    rating:number
    descritption?:string
    title?:string
    name?:string
    year?:string
    ID:number
}

 const Card:React.FC<Props> = ({imageUrl,rating,descritption,title,name,year,ID}) => {
   
   
   let Year = year?.split('-')[0]
   let Title = ''
   if((title !== undefined && title.length>20) || (name !== undefined && name.length>20)){
    Title = title?.substring(0,32)  || name?.substring(0,32)  || '' 
   }


    return (
    <div className='card'>
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
    </Link>
    </div>
  )
}


export default Card