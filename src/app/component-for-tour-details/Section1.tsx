"use client";

import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Section1() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={"auto"}
        centeredSlides
        loop
        navigation
        scrollbar={{ draggable: true }}
        speed={1200}
        className="w-[90%] mt-10"
      >
        {[
          "https://explorerajasthantours.com/wp-content/uploads/2022/11/varanasi-portrait_tania-chatterjee_3-1.jpg",
          "https://explorerajasthantours.com/wp-content/uploads/2022/11/wwwPW2_0818_2000px-Pietrusiewicz-1-1.jpg",
          "https://explorerajasthantours.com/wp-content/uploads/2022/11/World-Heritage-Rajasthan-1-1.jpg",
          "https://explorerajasthantours.com/wp-content/uploads/2022/11/World-Heritage-Rajasthan-1-1.jpg",
          "https://explorerajasthantours.com/wp-content/uploads/2022/11/World-Heritage-Rajasthan-1-1.jpg",
          "https://explorerajasthantours.com/wp-content/uploads/2022/11/World-Heritage-Rajasthan-1-1.jpg",
        ].map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-[65%] sm:!w-[65%] lg:!w-[60%] rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
