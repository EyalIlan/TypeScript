import React from 'react'
import { imagesUrlRequest } from '../../utils/data'
import './Card.css'

type Props = {
    imageUrl?:string
    rating?:number
    descritption?:string
    title?:string
    name?:string
}

 const Card:React.FC<Props> = ({imageUrl,rating,descritption,title,name}) => {
    
    
    return (
    <div className='card'>
        <img src={imageUrl?`${imagesUrlRequest}/${imageUrl}`:'/images/movieNotFound.jpg'} alt="poster" />
        <div id='card_content' className='flex justify_center align_center'>
            <h5>{title?title:name}</h5>
        </div>
    </div>
  )
}


export default Card