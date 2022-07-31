import  React,{ useState, useEffect } from 'react';
import './Movie.css'
import { TmdbApiKey,imagesUrlRequest } from '../../utils/data';
import { TmdbUrl } from '../../utils/Axios';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Youtube from 'react-youtube'
import { SectionData } from '../../utils/store/reducers/movie';
import { useSelector } from 'react-redux';

type Props = {}
interface photohs{
    backdrops:[{file_path:string}]
    logos:[{file_path:string}]
    profiles?:[{file_path:string}]
}


const Movie = (props:Props) => {
  

  const [data,SetData] = useState<any>([])
  const [video,SetVideo] = useState<any>()
  const [phothos,SetPhotes] = useState<photohs>()

  const SectionType = useSelector(SectionData).sectionType

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


        const Pagedata = await TmdbUrl.get(`https://api.themoviedb.org/3/${SectionType}/${id}?api_key=564ff4ab275baff4372adb3dc85ab368`)        
        SetData(Pagedata.data)
         

        console.log(`https://api.themoviedb.org/3/${SectionType}/${id}/images?api_key=564ff4ab275baff4372adb3dc85ab368`);
        const photos = await TmdbUrl.get(`https://api.themoviedb.org/3/${SectionType}/${id}/images?api_key=564ff4ab275baff4372adb3dc85ab368`)
        SetPhotes(photos.data)
                   
        
        const video = await TmdbUrl.get(`https://api.themoviedb.org/3/${SectionType}/${id}/videos?api_key=564ff4ab275baff4372adb3dc85ab368`)        
        SetVideo(video.data.results[0])
        

        
      
        
        
        
    }
    request()
  
  },[])


  const  onReady = (event:any) => {
    event.target.pauseVideo();
  }
  // console.log(phothos);
  
  
  let images = (phothos?.backdrops || phothos?.profiles || []).map((p,index:number) =>{
    
    return <img key={index} src={`${imagesUrlRequest}/${p.file_path}`} alt="" />

  }).filter((p,index) =>{
    if(index < 6){
      return p
    }
  })

  let logos = (phothos?.logos || []).map((p,index:number) =>{
        return (
          <div key={index}  className='flex justify_center pad'>
            <img  src={`${imagesUrlRequest}/${p.file_path}`} alt="" />
          </div>
        )
  }).filter((p,index) =>{
    if(index < 4){
      return p
    }
  })

  return (

    <div className='screen container'>
     
     <div id='menu-icons' className=' button'>
        <Link to={'/'}><i className="fa-solid fa-arrow-rotate-left icon_container primeColorR"></i></Link>
        <i className="fa-solid fa-heart icon_container "></i>
     </div>
     
     <div className='padContent responsive around'>
        

      <div className='content'>
          <h1>{data?.title || data?.name}</h1>
          <hr  className='specing'/>
          <p className='bigText'>{data?.overview || data?.biography}</p> 
          {SectionType !== 'person'?<Youtube id='youtube' videoId={`${video?video.key:''}`} opts={opts} onReady={onReady} className='specing'/>:<img src='/images/foxLogo.jpg' className='poster specing'></img>}
           <div className='responsive  specing flex around '>
            
            <div className='small_images specing bg'>

            <div>
                {data.production_companies?.map((p:any,index:number) =>{
                if(index<2){ 
                  return( 
                    <div>
                    <img  key={index}  src={`${imagesUrlRequest}/${p.logo_path}`} alt="" />
                   </div>
                  )
                 }  
                
                })}
            </div>
          </div>
            <div className='specing'>
                <p className='bigText'>{data.original_language?`Original language:${data.original_language}`:data.gender===1?`Gender: female`:`Gender: Male`}</p>
                <p className='bigText'>{data.budget?`Budget:${data.budget}$`:`Birthday:${data.birthday}`}</p>
                <p className='bigText'>{data.vote_count?`Vote count:${data.vote_count}`:`Known for department:${data.known_for_department}`}</p>
                <p className='bigText'>{data.vote_average?`Vote average:${data.vote_average}`:data.deathday?`Death day: ${data.deathday}`:`Death day: Alive`}</p>
            </div>
            <div className='specing'>
                <p className='bigText'>{data.status?`Status: ${data.status}`:`Popularity: ${data.popularity}`}</p>
                <p className='bigText'>{data.adult?`Adult:${data.adult}`:`Place of birth: ${data.place_of_birth}`}</p>
            </div>
     </div>
       </div>
       <div className='' >
          <img className='poster'  src={`${ imagesUrlRequest}/${data.poster_path || data.profile_path}`} alt="" />
          <div className='grid grid-col-3 small_images'>
          {images} 
          </div>
     </div >
     </div>

    

     <div>

     <div className='responsive around small_images pad'>
      {logos}
     </div>
      </div>
     </div>
    
    
  )
}

export default Movie
