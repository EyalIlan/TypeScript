
import  React,{useState,useEffect} from 'react';
import {MovieRequest} from '../../utils/Axios'
import { TmdbApiKey } from '../../utils/data';


export interface IProps {


}

const Hompage:React.FC<IProps> =  (props)=> {
  
  
    const [movies,SetMovies] = useState([])

    useEffect(() =>{
  
      const Request = async () =>{
  
        const Responce = await MovieRequest.get(`/popular?api_key=${TmdbApiKey}`)
        console.log(Responce);
        
        SetMovies(Responce.data);
        
      }
      Request()
  
    },[])
  
  
    return (
    <div>
        {/* <h1>HomePage</h1> */}
    </div>
  );
}

export default Hompage;