import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hompage from './Components/pages/HomePage/HomePage';
import SideNavbar from './Components/UI/SideNavbar/SideNavbar'
import Error404 from './Components/pages/404Error/Error404';
import TopNavbar from './Components/UI/TopNavbar/TopNavbar';
function App() {


  return (
    <BrowserRouter>
      <div className="App">
          
          
          <TopNavbar></TopNavbar>
          {/* <div className='grid grid_content_sidenav'> */}
          <SideNavbar></SideNavbar>
          <Routes>
              <Route path='/'  element={<Hompage/>}/>
              <Route path = '*'  element={<Error404 />}/>
          </Routes>
          {/* </div> */}
          
          <Routes>
          </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
