
import  React,{useState,useEffect} from 'react';
import Card from '../../UI/Card';
import {MovieRequest} from '../../utils/Axios'
import { TmdbApiKey } from '../../utils/data';
import './HomePage.css'
import { movieIF } from '../../utils/interface';
import {useDispatch, useSelector} from 'react-redux'
import { moviesData, saveData } from '../../utils/store/reducers/movie';
import { log } from 'console';
export interface IProps {


}

const Hompage:React.FC<IProps> =  (props)=> {
  
    
  
    const dispatch = useDispatch();

    

    // const [movies,SetMovies] = useState<movieIF[]>([])
    
   


    useEffect(() =>{
  
      const Request = async () =>{
  
        const Responce = await MovieRequest.get(`/popular?api_key=${TmdbApiKey}`)
        dispatch(saveData(Responce.data.results))
        
      }
      Request()
      
    },[])


 

  
  
  
  
  
    let movies =  useSelector(moviesData)
    const data = movies.map((p,index) =>{
      return <Card key={index} imageUrl = {p.poster_path}  title={p.title}></Card>
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