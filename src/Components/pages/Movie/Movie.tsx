import  React,{ useState, useEffect } from 'react';
import './Movie.css'
import { TmdbApiKey,imagesUrlRequest } from '../../utils/data';
import { TmdbUrl } from '../../utils/Axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Youtube from 'react-youtube'

type Props = {}
interface photohs{
    backdrops:[{file_path:string}]
    logos:[{file_path:string}]
}


const Movie = (props:Props) => {
  

  const [data,SetData] = useState<any>([])
  const [video,SetVideo] = useState<any>()
  const [phothos,SetPhotes] = useState<photohs>()

  const opts = {
    height: '300',
    width: '600',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  
  
  
  const Id = useParams()
  
  
  // const urlParams = new URLSearchParams(queryString);
  
  useEffect(() =>{
    let id = Id.id
    const request = async() =>{
        const Pagedata = await TmdbUrl.get(`https://api.themoviedb.org/3/movie/${id}?api_key=564ff4ab275baff4372adb3dc85ab368`)        
        SetData(Pagedata.data)
        
        const video = await TmdbUrl.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368`)        
        SetVideo(video.data.results[0])
        const photos = await TmdbUrl.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=564ff4ab275baff4372adb3dc85ab368`)
        SetPhotes(photos.data)
      
    }
    request()
  
  },[])


    

  const  onReady = (event:any) => {
    event.target.pauseVideo();
  }

  

  let images = phothos?.backdrops.map((p,index:number) =>{
    if(index <3){
      return <img key={index} src={`${imagesUrlRequest}/${p.file_path}`} alt="" />
    }else{
      return ''
    }
  })

  let logos = phothos?.logos.map((p,index:number) =>{
    if(index<4){
      return <img key={index} src={`${imagesUrlRequest}/${p.file_path}`} alt="" />
    }
  else{
    return ''
  }
  })

  return (

    <div className='screen container'>
     
     <div id='menu-icons' className=' button'>
        <Link to={'/'}><i className="fa-solid fa-arrow-rotate-left icon_container primeColorR"></i></Link>
        <i className="fa-solid fa-heart icon_container "></i>
     </div>
     
     <div className='padContent responsive around '>
        

      <div className='content'>
          <h1>{data?.title}</h1>
          <hr  className='specing'/>
          <p className='bigText'>{data?.overview}</p> 
           <Youtube  id='youtube' videoId={`${video?video.key:''}`} opts={opts} onReady={onReady} className='specing'/>
           <div className='responsive  specing flex around '>
            
            <div className='small_images specing'>
                {data.production_companies?.map((p:any,index:number) =>{
                if(index<2){ 
                  return( 
                    <div className='flex justify_center bg' key={index} >
                    <img   src={`${imagesUrlRequest}/${p.logo_path}`} alt="" />
                    </div>
                  )
                 }else{
                  return ''
                 }  
                
                })}
            
          </div>
            <div className='specing'>
                <p className='bigText'>Vote average:{data.vote_average}</p>
                <p className='bigText'>Original language:{data.original_language}</p>
                <p className='bigText'>Budget:{data.budget}$</p>
                <p className='bigText'>Vote count:{data.vote_count}</p>
            </div>
            <div className='specing'>
                <p className='bigText'>Status:{data.status}</p>
                <p className='bigText'>Adult:{data.adult?'true':'false'}</p>
            </div>
     </div>
       </div>
       <div className='' >
          <img id='poster'  src={`${ imagesUrlRequest}/${data.poster_path}`} alt="" />
          <div className='grid grid-col-3 small_images'>
          {images} 
          </div>
     </div >
     </div>

    

     
     <div className='flex around small_images pad'>
      {logos}
     </div>
      </div>
    
    
  )
}

export default Movie
