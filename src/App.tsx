import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hompage from './Components/pages/HomePage/HomePage';
import SideNavbar from './Components/UI/SideNavbar/SideNavbar'
import Error404 from './Components/pages/404Error/Error404';
import TopNavbar from './Components/UI/TopNavbar/TopNavbar';
import Footer from './Components/UI/footer/footer';
import Movie from './Components/pages/Movie/Movie';
import Favorites from './Components/pages/Favorites/Favorites';
import Statics from './Components/pages/Statics/Statics';
function App() {


  return (
    <BrowserRouter>
      <div className="App">
          <TopNavbar></TopNavbar>
          <SideNavbar></SideNavbar>
          <Routes>
              <Route path='/'  element={<Hompage/>}/>
              <Route path='/movie/:id'  element={<Movie/>}/>
              <Route path='/favorites' element={<Favorites/>}></Route>
              <Route path='/statics' element={<Statics/>}></Route>
              <Route path = '*'  element={<Error404 />}/>

          </Routes>
          <Routes>
          </Routes>
      </div>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
