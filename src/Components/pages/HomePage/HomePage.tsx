
import  React,{useState,useEffect} from 'react';
import Card from '../../UI/Card';
import {MovieRequest} from '../../utils/Axios'
import { TmdbApiKey } from '../../utils/data';
import './HomePage.css'
import { movieIF } from '../../utils/interface';
export interface IProps {


}

const Hompage:React.FC<IProps> =  (props)=> {
  
  
    const [movies,SetMovies] = useState<movieIF[]>([])

    useEffect(() =>{
  
      const Request = async () =>{
  
        const Responce = await MovieRequest.get(`/popular?api_key=${TmdbApiKey}`)
        console.log(Responce.data.results);
        
        SetMovies(Responce.data.results);
        
      }
      Request()
  
    },[])
    
    // console.log(movies[0].original_title);
    
    const data = movies.map(p =>{
      return <Card imageUrl = {p.poster_path}  title={p.title}></Card>
    })
  
    return (
    <div className='homepage'>
        <div className='grid grid-col-5'>
          {data}
        </div>
    </div>
  );
}

export default Hompage;