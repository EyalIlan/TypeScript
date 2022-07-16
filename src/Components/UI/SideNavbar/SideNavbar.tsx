import  React from 'react';
import './SideNavbar.css'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { changeSection,fetchDataFromApi,changeSelectiontype,changeSelectionPage } from '../../utils/store/reducers/movie';
import { menuState,ShowActionMenu } from '../../utils/store/reducers/features';


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

const SideNavbar:React.FC<IProps> = () => {
  

  const dispatch = useDispatch()
  const displaymenu = useSelector(menuState)
  

  

  const getDataFromRequest = async (section:string) =>{
    dispatch(changeSection(section))
    dispatch(changeSelectiontype('popular'))
    dispatch(changeSelectionPage(1))
    dispatch(fetchDataFromApi())
  }
  
  
  const [active,SetActive] = useState<ActiveLinks>({
    activeLink:0,
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
        title:'Tv shows'
        ,linkAction:function(){
          
          getDataFromRequest('tv')

        }
    },
      {
        id:3,
        imgUrl:'/images/actor.png',
        title:'Actors'
        ,linkAction:function(){
          getDataFromRequest('person')
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
    }
  ]
  })
  const toggleActive = (index:number,linkAction:Function):void =>{
    dispatch(ShowActionMenu())
    SetActive({...active,activeLink:index})
    linkAction()
  }
  
  const checkActive = (index:number):string =>{

    if(active.activeLink === index){
        return 'active'
    }else{
       return 'unactive'
    }
  }

  const links = active.links.map((p,index) =>{
  return (
  <div key={index}>
  <div  className='flex navbar_link' onClick={()=>{toggleActive(index,p.linkAction)}}>
      <div>
      <img src={p.imgUrl} className="navbar_Icon" alt="" />
      </div>
      <div className='link_text flex center' >
        <h5>{p.title}</h5>
      </div>
  </div>
      <hr  className={checkActive(index) + ' bottom_border'}/>
  </div>
    )

  })

  return (
   <div>
   <div className='big_screen_size'>
   <div className='navbar_container'>
              <div className='link_text_title'>
                <h2>TypeFlix</h2>
              </div> 
              {links}      
    </div>
    </div>
   <div className='small_screen_size'>
   {displaymenu?<div className='navbar_container'>
              <div className='link_text_title'>
                <h2>TypeFlix</h2>
              </div> 
              {links}      
    </div>:''}
    </div>
    </div>   

  );
}

export default SideNavbar
