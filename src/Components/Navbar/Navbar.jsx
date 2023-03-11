import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className='n-name'>devBE</div>
            <span>toggle</span>
        </div>
        <div className='n-right'>
            <div className="n-link" id='my-n-link'>
               <a href='#home'>Home</a>
               <a href='#about'>About</a>
               <a href='#portfolio'>Portfolio</a>
               <a href='#contact'>Contact</a>
            </div>
            <div id="menu">
              <div id="menu-bar" onclick="menuOnClick()">
                <div id="bar1" class="bar"></div>
                <div id="bar2" class="bar"></div>
                <div id="bar3" class="bar"></div>
              </div>
              <div class="nav" id="nav">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div> 
            </div>
            <div class="menu-bg" id="menu-bg"></div>
        </div>
    </div>
  )
}

export default Navbar 