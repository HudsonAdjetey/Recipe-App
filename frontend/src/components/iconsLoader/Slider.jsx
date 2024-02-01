import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { images } from '../../container/images/image';



export default function Slider() {
  return (
    <div className='swiper__container' id='home' >
      <Swiper 
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swipe"
      >
        <SwiperSlide className="sliderContent" >
          <img src={images.slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="sliderContent" >
          <img src={images.slider2} alt="" />
          
        </SwiperSlide>
        <SwiperSlide className="sliderContent" >
          <img src={images.slider3} alt="" />
          
        </SwiperSlide>
  {/*       <SwiperSlide className="sliderContent" >
          <img src={images.slider4} alt="" />
          
        </SwiperSlide> */}

      </Swiper>
    </div>
  );
}
