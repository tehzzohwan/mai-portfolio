import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Awo from '../../img/femi.png'
import Suv from '../../img/suv form.png'
import Music from '../../img/musicapp.png'
import Hoc from '../../img/hoc.png'
import 'swiper/css'
const Portfolio = () => {
  return (
    <div className="portfolio">

        {/* heading */}
        <span>Recent Project</span>
        <span>Portfolio</span>

        {/* slider */}
        <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
               <img src={Awo} alt="" height={238} /> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Suv} alt="" height={238} /> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Music} alt="" /> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Hoc} alt="" /> 
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio