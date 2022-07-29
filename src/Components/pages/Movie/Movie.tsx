import  React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './Movie.css'
import { TmdbApiKey,imagesUrlRequest } from '../../utils/data';
import { TmdbUrl } from '../../utils/Axios';
import Youtube from 'react-youtube'

type Props = {}
interface photohs{
    backdrops:[{file_path:string}]
    logos:[{file_path:string}]
}


const Movie = (props: Props) => {
  

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


  useEffect(() =>{
  
    const request = async() =>{
        const Pagedata = await TmdbUrl.get(`https://api.themoviedb.org/3/movie/5?api_key=564ff4ab275baff4372adb3dc85ab368`)        
        SetData(Pagedata.data)
        
        const video = await TmdbUrl.get(`https://api.themoviedb.org/3/movie/5/videos?api_key=564ff4ab275baff4372adb3dc85ab368`)        
        SetVideo(video.data.results[0])
        const photos = await TmdbUrl.get('https://api.themoviedb.org/3/movie/5/images?api_key=564ff4ab275baff4372adb3dc85ab368')
        SetPhotes(photos.data)
      
    }
    request()
  
  },[])


    

  const  onReady = (event:any) => {
    event.target.pauseVideo();
  }

  

  let images = phothos?.backdrops.map((p,index:number) =>{
      return <img key={index} src={`${imagesUrlRequest}/${p.file_path}`} alt="" />
  })

  let logos = phothos?.logos.map((p,index:number) =>{
    return <img key={index} src={`${imagesUrlRequest}/${p.file_path}`} alt="" />
  })

  return (
    <div className='screen container'>
     <div className='padContent flex around'>
        
        <div className=''>
          <img id='poster' src={`${ imagesUrlRequest}/${data.poster_path}`} alt="" />
       </div>
      
      <div className='content'>
          <h1>{data?.title}</h1>
          <hr  className='specing'/>
          <p className='bigText'>{data?.overview}</p> 
           <Youtube videoId={`${video?video.key:''}`} opts={opts} onReady={onReady} className='specing'/>
       </div>
     </div >
     <div className='flex'>

     <div className='grid grid-col-6 small_images flex1' id='glarry'>
        {images}
     </div>
     <div className=' small_images flex2 bg pad flex around align_center' id='glarry'>
            
            <div className='small_images'>
                {data.production_companies?.map((p:any,index:number) =>{
                  
                  return <img className='' key={index} src={`${imagesUrlRequest}/${p.logo_path}`} alt="" />
                })}
            </div>
            <div>
                <p className='bigText'>Vote average:{data.vote_average}</p>
                <p className='bigText'>Original language:{data.original_language}</p>
                <p className='bigText'>Budget:{data.budget}$</p>
                <p className='bigText'>Vote count:{data.vote_count}$</p>
            </div>
            <div>
                <p className='bigText'>Status:{data.status}</p>
                <p className='bigText'>Adult:{data.adult?'true':'false'}</p>
            </div>
     </div>

     </div>
     <div className='flex around small_images pad'>
      {logos}
     </div>
      </div>
    
    
  )
}

export default Movie
