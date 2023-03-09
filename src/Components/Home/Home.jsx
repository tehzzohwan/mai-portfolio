import React from 'react';
import './Home.css';
import Github from '../../img/github.png';
import Instagram from '../../img/gram.png';
import LinkedIn from '../../img/linked_in.png';
import Bobby from '../../img/bobby.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Crown from '../../img/crown.png';
import Cool from '../../img/koala.png';
import Details from '../../img/details.png';
import Hero from '../../img/hero-bg.png';

const Home = () => {
  return (
    <div className="home">
        <div className='i-left'>
            <div className='i-name'>
                <span>Hy! I Am</span>
                <span>Bobby Enomate</span>
                <span>A Web Developer</span>
                <span>good in critical thinking and offering <br/>
                problem solving abilities for client's best experience which keeps me <br/>
                motivated to continue to learn and grow as a<br/>
                web development professional.</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img ClassName="gt"src={Github} alt="github icon" />
                <img src={LinkedIn} alt="linked in  icon" />
                <img src={Instagram} alt="instagram icon" />
            </div>
        </div>

        {/*right side*/}
        <div className='i-right'>
          <img src={Bobby} alt="bobby's  img" />
          <img className='cool' src={Cool} alt="cool koala" />
          <img src={Hero} alt='bg' />
          <div className='ball'></div>
          <div className='ball2'></div>
          <div className='ball3'></div>
          <div className='ball4'></div>

          <div className='crown floating-div'>
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
          </div>
          <div className='deet floating-div'>
          <FloatingDiv image={Details} txt1='Designs with' txt2='Distinct Details'/>
          </div>
          {/*blur divs */}
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div className='blur' style={{
            background: '#0cc7ec',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
            
          }}>
          </div>
        </div>
    </div>
  )
}

export default Home