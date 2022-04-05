import  React from 'react';
import { useState } from 'react';
import {MovieRequest,TvShowRequest} from '../utils/Axios'
import { TmdbApiKey } from '../utils/data';
import {useDispatch} from 'react-redux'
import { saveData } from '../utils/store/reducers/movie';

import './Navbar.css'

export interface IProps {
}

interface ActiveLinks{
  activeLink:null | number
  links:{
  id:number
  title:string
  imgUrl:string
  getData():void
  }[]
}

const Navbar:React.FC<IProps> = () => {
  

  const dispatch = useDispatch();
  
  
  const [active,SetActive] = useState<ActiveLinks>({
    activeLink:null,
    links:[
      {
        id:1,
        imgUrl:'/images/video-player.png',
        title:'Movies'
        ,getData:async function() {
          const Responce = await MovieRequest.get(`/popular?api_key=${TmdbApiKey}`)
          dispatch(saveData(Responce.data.results)) 
        }
      },
      {
        id:2,
        imgUrl:'/images/tv-show.png',
        title:'Tv_shows'
        ,getData:async function(){
          const Responce = await TvShowRequest.get(`/popular?api_key=${TmdbApiKey}`)
          dispatch(saveData(Responce.data.results)) 
        }
    },
      {
        id:3,
        imgUrl:'/images/actor.png',
        title:'Actors'
        ,getData:function(){

        }
    },
      {
        id:4,
        imgUrl:'/images/star.png',
        title:'Favorites'
        ,getData:function(){

        }
    },
      {
        id:5,
        imgUrl:'/images/bar-graph.png',
        title:'Statics'
        ,getData:function(){

        }
    },
      {
        id:6,
        imgUrl:'/images/magnifier.png',
        title:'Search'
        ,getData:function(){

        }
    },
  ]
  })
  
  

  const toggleActive = (index:number,getData:Function):void =>{
    SetActive({...active,activeLink:index})
    getData()
  }
  
  const checkActive = (index:number):string =>{
    
    
    if(active.activeLink === index){
        return 'active flex navbar_link'
    }else{
      return 'flex navbar_link'
    }
  }

  const links = active.links.map((p,index) =>{
  return (
  <div key={index} className={ checkActive(index)} onClick={()=>{toggleActive(index,p.getData)}}>
      <img src={p.imgUrl} alt="" />
      <div className='link_text flex center' >
        <h3>{p.title}</h3>
      </div>
  </div>
    )

  })

  return (    
        <div className='navbar_container'>
          <div id='navbar_links' className='flex around flex_col primary_color'>
            
         
           {links}
      
          </div>
        </div>

  );
}

export default Navbar
