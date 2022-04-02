
import  React,{useState,useEffect} from 'react';
import {MovieRequest} from '../../utils/Axios'
import { TmdbApiKey } from '../../utils/data';
import './HomePage.css'

export interface IProps {


}

const Hompage:React.FC<IProps> =  (props)=> {
  
  
    const [movies,SetMovies] = useState([])

    useEffect(() =>{
  
      const Request = async () =>{
  
        const Responce = await MovieRequest.get(`/popular?api_key=${TmdbApiKey}`)
        console.log(Responce.data);
        
        SetMovies(Responce.data);
        
      }
      Request()
  
    },[])
  
  
    return (
    <div className='homepage'>
        <div className='grid grid-col-5'>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
        </div>
    </div>
  );
}

export default Hompage;