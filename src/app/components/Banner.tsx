"use client"; 
import { Pagination, Scrollbar, A11y,Autoplay, EffectCoverflow } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-flip";
import SearchBar from './SearchBar';
import Image from 'next/image';


function Banner() {
  return (
   
    <div className="relative  z-1">
    <Swiper
    
      modules={[Autoplay,EffectCoverflow, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 1500 }}
      speed={2000} 
    
      loop
      effect="coverflow"
      className="absolute h-[70vh] bg-cover bg-center"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}

    >
      <SwiperSlide>
        <img className="w-full" src="https://explorerajasthantours.com/wp-content/uploads/2022/11/varanasi-portrait_tania-chatterjee_3-1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full" src="https://explorerajasthantours.com/wp-content/uploads/2022/11/wwwPW2_0818_2000px-Pietrusiewicz-1-1.jpg" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
      <img className="w-full" src="https://explorerajasthantours.com/wp-content/uploads/2022/11/World-Heritage-Rajasthan-1-1.jpg" alt="Slide 1" />
      </SwiperSlide>
     


     
     
    </Swiper>

    <div className="absolute z-10 bottom-[100px] inset-0  flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Love where you're going
          </h1>
          <p className="text-lg text-white mb-8">
            Book incredible things to do around the world.
          </p>
          <SearchBar />
        </div>

        </div>
      
  )
}

export default Banner