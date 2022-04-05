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
        <img src={imageUrl?`${imagesUrlRequest}/${imageUrl}`:''} alt="poster movie" />
        <div id='card_content' className='flex center primary_color'>
            <h3>{title?title:name}</h3>
        </div>
    </div>
  )
}


export default Card