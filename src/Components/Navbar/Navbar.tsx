import  React from 'react';
import { useState } from 'react';
import './Navbar.css'

export interface IProps {
}

interface ActiveLinks{
  activeLink:null | number
  links:{
  id:number
  title:string
  imgUrl:string
  }[]
}

const Navbar:React.FC<IProps> = () => {
  

  const [active,SetActive] = useState<ActiveLinks>({
    activeLink:null,
    links:[
      {
        id:1,
        imgUrl:'/images/video-player.png',
        title:'Movies'
      },
      {
        id:2,
        imgUrl:'/images/tv-show.png',
        title:'Tv_shows'
    },
      {
        id:3,
        imgUrl:'/images/actor.png',
        title:'Actors'
    },
      {
        id:4,
        imgUrl:'/images/star.png',
        title:'Favorites'
    },
      {
        id:5,
        imgUrl:'/images/bar-graph.png',
        title:'Statics'
    },
      {
        id:6,
        imgUrl:'/images/magnifier.png',
        title:'Search'
    },
  ]
  })


  

  const toggleActive = (index:number):void =>{
    SetActive({...active,activeLink:index})
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
  <div key={index} className={ checkActive(index)} onClick={()=>{toggleActive(index)}}>
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
