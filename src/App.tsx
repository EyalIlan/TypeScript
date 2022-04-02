import React,{useEffect,useState} from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hompage from './Components/pages/HomePage/HomePage';
import Navbar from './Components/Navbar/Navbar'
import Error404 from './Components/pages/404Error/Error';
function App() {


  return (
    <BrowserRouter>
      <div className="App">
          <Navbar></Navbar>
          <Routes>
              <Route path='/' element={<Hompage/>}/>

            <Route path = '/*'  element={<Error404 />}/>
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
