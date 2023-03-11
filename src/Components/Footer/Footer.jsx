import React from 'react'
import './Footer.css'
import Foooter from '../../img/wave.png'
import Github from '../../img/github.png';
import Instagram from '../../img/gram.png';
import LinkedIn from '../../img/linked_in.png'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Foooter} alt="footer_wave" style={{width: '100%'}} />
        <div className="f-content">
            <span>bobbyenomate@gmail.com</span>
            <div className="f-icons">
              <img src={Github} alt="github icon" />
              <img src={LinkedIn} alt="linked in  icon" />
              <img src={Instagram} alt="instagram icon" />
              <span>Copyright &copy; 2023 devBE. </span>
            </div>
        </div>
    </div>
  )
}

export default Footer