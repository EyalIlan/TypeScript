import React from 'react'
import { imagesUrlRequest } from '../../utils/data'
import './Card.css'

type Props = {
    imageUrl?:string
    rating:number
    descritption?:string
    title?:string
    name?:string
    year?:string
}

 const Card:React.FC<Props> = ({imageUrl,rating,descritption,title,name,year}) => {
    return (
    
    <div className='card'>
        <img src={imageUrl?`${imagesUrlRequest}/${imageUrl}`:'/images/movieNotFound.jpg'} alt="poster" />
        <div className='card_content'>

        <div className='flex around align_center'>
            <div className='flex'>
           {rating?<i className="fa-solid fa-star yellow" style={{'margin':'0px 3px'}}></i>:''}
            <p>{rating}</p> 
            </div>
            <p>{year}</p>
        </div>
        <div id='card_title' className='flex justify_center align_center'>
            <h4 style={{'lineHeight':'1.1'}}>{title?title:name}</h4>
        </div>
    
        </div>
    </div>
  )
}


export default Card