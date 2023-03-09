import React from 'react'
import './Footer.css'
import Foooter from '../../img/footer.png'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Foooter} alt="footer_wave" style={{width: '100%'}} />
        <div className="f-content">
            <span>Bobby Enomate</span>
            <div className="f-icons">

            </div>
        </div>
    </div>
  )
}

export default Footer