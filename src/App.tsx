import  Axios  from 'axios';
import React,{useEffect,useState} from 'react';
import './App.css';
import {MovieRequest} from './Components/utils/Axios'



let key = '564ff4ab275baff4372adb3dc85ab368'
let url = 'https://api.themoviedb.org/3'


function App() {

  const [movies,SetMovies] = useState([])

  useEffect(() =>{

    const Request = async () =>{

      const Responce = await MovieRequest.get(`/popular?api_key=${key}`)
      console.log(Responce);
      
      SetMovies(Responce.data);
      
    }
    Request()

  },[])

  return (
    <div className="App">
        <h1>First Files</h1>

    </div>
  );
}

export default App;
