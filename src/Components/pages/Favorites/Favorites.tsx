import  React, { useEffect,useState } from 'react';
import Card from '../../UI/Card/Card';
import {CardIF} from '../../utils/interface'
import './Favorites.css'

export interface IAppProps {
}




const  Favorites = (props: IAppProps) => {

    const [favorite,SetFavorite] = useState<CardIF[]>([])

    useEffect(() =>{

        let favorites = localStorage.getItem("data")
       
        if(favorites){
          let Favorites = JSON.parse(favorites)
          SetFavorite(Favorites)
           
        }
       
        
        
    },[])

    console.log(favorite);
    
    
    
    let Favorite = favorite.map((p,index) =>{
       
        return (
            <Card ID={p.id}  key={index} imageUrl={p.poster_path || p.profile_path} title={p.title} rating={p.vote_average} name={p.name} year={p.release_date || p.first_air_date}></Card>
          )
    })
   


    return (
    <div className='flex'>
        <div className='container'>
        <div className='padContent specing'>
            <div className='grid grid-gap grid-col-7'>
                {Favorite}
            </div>
        </div>

        </div>
    </div>
  );
}

export default Favorites