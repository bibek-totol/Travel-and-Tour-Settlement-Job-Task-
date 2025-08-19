"use client";

import { useEffect, useState } from "react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { alltourapidata } from "@/lib/alltourapidata";
import { Tour } from "../types/tourdatatype";

export default function Section1() {
  const [apidata, setApidata] = useState<Tour[]>([]);

  useEffect(() => {
    alltourapidata().then((data) => setApidata(data));
  }, []);

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
        {apidata.map((tour, i) =>
          tour.sliderimages.map((src, j) => (
            <SwiperSlide
              key={`${i}-${j}`}
              className="!w-[65%] sm:!w-[65%] lg:!w-[60%] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Tour ${i + 1} - Slide ${j + 1}`}
                className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
