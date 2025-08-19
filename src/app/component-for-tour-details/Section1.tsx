"use client";

import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { alltourapidata } from "@/lib/alltourapidata";

export default async function Section1() {
  const apidata = await alltourapidata();
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
        {apidata.sliderimages.map((src, i) => (
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
