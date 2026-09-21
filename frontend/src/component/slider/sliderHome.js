import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import "./slide.css"

// import required modules
import { Pagination } from 'swiper/modules';
function SliderHome() {
    
return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
         autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
        
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='sliderData'>
                <div className='image'>
                <img src='assets/slider2.jpg'/>
                  </div>
                <div className='details'>
                    <h2>Shine with Confidence</h2>
                    <p>
                    Elevate your style with stunning jewelry that blends modern elegance with timeless beauty. Perfect for every occasion, every day.</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide><div className='sliderData'>
                <div className='details'>
                    <h2>Shine with Confidence</h2>
                    <p>
                    Elevate your style with stunning jewelry that blends modern elegance with timeless beauty. Perfect for every occasion, every day.</p>
                    <button>Shop Now</button>
                </div>
                <div className='image'>
                <img src='assets/slide1.jfif'/>
                  </div>
            </div></SwiperSlide>
        <SwiperSlide>
            <div className='sliderData'>
                <div className='image'>
                <img src='assets/slider3.jpg'/>
                  </div>
                <div className='details'>
                    <h2>Shine with Confidence</h2>
                    <p>
                    Elevate your style with stunning jewelry that blends modern elegance with timeless beauty. Perfect for every occasion, every day.</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      fff
    </>
  );
}

export default SliderHome
