import  React, { useEffect,useState } from 'react';
import Card from '../../UI/Card/Card';
import {CardIF} from '../../utils/interface'
import {Link} from 'react-router-dom'
import './Favorites.css'

export interface IAppProps {
    
}

interface Favor extends CardIF{
    Section:string 
}



const  Favorites = (props: IAppProps) => {

    const [favorite,SetFavorite] = useState<Favor[]>([])


    useEffect(() =>{

        let favorites = localStorage.getItem("data")
       
        if(favorites){
          let Favorites = JSON.parse(favorites)
          SetFavorite(Favorites)
           
        }
       
        
        
    },[])
    const routeHandler = () =>{
        
    }

    // <Link to={`/movie/${p.id}`}>
    
    console.log(favorite);
    

    let Favorite = favorite.map((p,index) =>{
       
        return (
          <Card  key={index} imageUrl={p.poster_path || p.profile_path} title={p.title} rating={p.vote_average} name={p.name} year={p.release_date || p.first_air_date} trending={p.Section} ID={p.id}></Card> 
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