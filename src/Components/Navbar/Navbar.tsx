import React from 'react';
import './Navbar.css'
export interface IProps {
}

const Navbar:React.FC<IProps> = () => {
  return (
        
        <div className='navbar_container'>
          <div id='navbar_links' className='flex around flex_col '>
            
            <div className='flex navbar_link'>
                {/* <img src="/images/movieIcon.png" alt="" /> */}
                <div className='link_text'>
                  <h2>MoviePlay</h2>
                </div>
            </div>
            <div className='flex navbar_link'>
                <img src="/images/video-player.png" alt="" />
                <div className='link_text'>
                  <h2>Movies</h2>
                </div>
            </div>
            <div className='flex navbar_link'>
                <img src="/images/tv-show.png" alt="" />
                <div className='link_text'>
                  <h2>Tv_shows</h2>
                </div>
            </div>
            <div className='flex navbar_link'>
                <img src="/images/actor.png" alt="" />
                <div className='link_text'>
                  <h2>Actors</h2>
                </div>
            </div>
            <div className='flex navbar_link'>
                <img src="/images/star.png" alt="" />
                <div className='link_text'>
                  <h2>Favorites</h2>
                </div>
            </div>
            <div className='flex navbar_link'>
                <img src="/images/bar-graph.png" alt="" />
                <div className='link_text'>
                  <h2>Statics</h2>
                </div>
            </div>
            <div className='flex navbar_link'>
                <img src="/images/magnifier.png" alt="" />
                <div className='link_text'>
                  <h2>Search</h2>
                </div>
            </div>
              
              
              
              
              
              {/* <h2>Logo</h2>
              <h2>Movies</h2>
              <h2>Tv_shows</h2>
              <h2>Actors</h2>
              <h2>Favorites</h2>
              <h2>Statics</h2>
              <h2>Search</h2> */}
          </div>
        </div>

  );
}

export default Navbar
