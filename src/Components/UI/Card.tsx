import React from 'react'
import { imagesUrlRequest } from '../utils/data'
import './Card.css'

type Props = {
    imageUrl?:string
    rating?:number
    descritption?:string
    title?:string

}

 const Card:React.FC<Props> = ({imageUrl,rating,descritption,title}) => {
  
    console.log(imageUrl);
    
    return (
    <div className='card'>
        <img src={imageUrl?`${imagesUrlRequest}/${imageUrl}`:''} alt="poster movie" />
        <div id='card_content' className='flex center primary_color'>
            <h3>{title}</h3>
        </div>
    </div>
  )
}


export default Card