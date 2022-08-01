import  React, { useEffect,useState } from 'react';
import Card from '../../UI/Card/Card';
import {CardIF} from '../../utils/interface'
import {Link} from 'react-router-dom'
import './Favorites.css'
import { useDispatch } from 'react-redux';
import { changeSection } from '../../utils/store/reducers/movie';

export interface IAppProps {
    
}

interface Favor extends CardIF{
    Section:string 
}



const  Favorites = (props: IAppProps) => {

    const [favorite,SetFavorite] = useState<Favor[]>([])
    const dispatch = useDispatch()

    useEffect(() =>{

        let favorites = localStorage.getItem("data")
       
        if(favorites){
          let Favorites = JSON.parse(favorites)
          SetFavorite(Favorites)
           
        }
       
        
        
    },[])

    const NavigateHandler = (p:string) =>{
        dispatch(changeSection(p))
   }
    
    
    let Favorite = favorite.map((p,index) =>{
       
        return (
           
                <div key={index} onClick={((event)=>{NavigateHandler(p.Section)})} className='flex'>
                <Card    imageUrl={p.poster_path || p.profile_path} title={p.title} rating={p.vote_average} name={p.name} year={p.release_date || p.first_air_date} trending={p.Section} ID={p.id}>

                </Card> 
                </div>
         
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