import  React from 'react';
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { changeSection,fetchDataFromApi } from '../utils/store/reducers/movie';
import './Navbar.css'

export interface IProps {

}

interface ActiveLinks{
  activeLink:null | number
  links:{
  id:number
  title:string
  imgUrl:string
  linkAction():void
  }[]
}

const Navbar:React.FC<IProps> = () => {
  

  const dispatch = useDispatch()

  const getDataFromRequest = async (section:string) =>{

    dispatch(changeSection(section))
    dispatch(fetchDataFromApi())
  
  }
  
  
  const [active,SetActive] = useState<ActiveLinks>({
    activeLink:null,
    links:[
      {
        id:1,
        imgUrl:'/images/video-player.png',
        title:'Movies'
        ,linkAction:function(){
          getDataFromRequest('movie')
        }
      }
      ,{
        id:2,
        imgUrl:'/images/tv-show.png',
        title:'Tv_shows'
        ,linkAction:function(){
          
          getDataFromRequest('tv')

        }
    },
      {
        id:3,
        imgUrl:'/images/actor.png',
        title:'Actors'
        ,linkAction:function(){

        }
    },
      {
        id:4,
        imgUrl:'/images/star.png',
        title:'Favorites'
        ,linkAction:function(){

        }
    },
      {
        id:5,
        imgUrl:'/images/bar-graph.png',
        title:'Statics'
        ,linkAction:function(){

        }
    },
      {
        id:6,
        imgUrl:'/images/magnifier.png',
        title:'Search'
        ,linkAction:function(){

        }
    },
  ]
  })
  
  

  const toggleActive = (index:number,linkAction:Function):void =>{
    SetActive({...active,activeLink:index})
    linkAction()
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
  <div key={index} className={ checkActive(index)} onClick={()=>{toggleActive(index,p.linkAction)}}>
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
