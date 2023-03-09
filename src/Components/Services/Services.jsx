import React from 'react'
import './Services.css'
import CoolKoala from '../../img/koalam.png';
import Card from '../Card/Card';
import Crown from '../../img/koalat.png';
import Resume from './Resume-Bobby-Enomate.pdf';
import Peace from '../../img/koalap.png'

const Services = () => {
  return (
    <div className='services'>

        {/*left side*/}
        <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ispum is simply a dummy text of printing of printing 
            <br/> 
            lorem ipsus is also another banger in the hood
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: " skyblue"}}></div>
        </div>


        {/* right side*/}
        <div className='cards'>
           <div style={{left: '40rem'}}>
            <Card
            icon = {CoolKoala}
            heading = {'Design'}
            detail= {"Figma, Adobe, Sketch, Photoshop"}
            />
           </div>
           <div style={{left: '2rem', top: '19rem'}}>
            <Card
            icon = {Crown}
            heading = {'Developer'}
            detail= {"HTML, CSS, Javascript, React"}
            />
           </div>
           <div style={{left: '33.8rem', top: '42rem'}}>
            <Card
            icon = {Peace}
            heading = {"Web Maintainance"}
            detail= {"PageRank, Internet speed Test, Click Counter"}
            />
           </div>
           <div className="blur s-blur2" style={{ background: 'purple'}}></div>
        </div>
    </div>
  )
}

export default Services