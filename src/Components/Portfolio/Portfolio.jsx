import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Awo from '../../img/femi.png'
import Suv from '../../img/suv form.png'

const Portfolio = () => {
  return (
    <div className="portfolio">

        {/* heading */}
        <span>Recent Project</span>
        <span>Portfolio</span>

        {/* swiper */}
        <Swiper>
            <SwiperSlide>
               <img src={Awo} alt="" /> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Suv} alt="" /> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Awo} alt="" /> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Awo} alt="" /> 
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio