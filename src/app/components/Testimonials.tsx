import React from "react";
import { Star } from "lucide-react";
import image1 from "../../../public/assets/Screenshot_11.jpg";
import image2 from "../../../public/assets/Screenshot_10.jpg";
import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-[1250px] h-[250px]">
        <Image
          src={image2}
          alt="Tour Background"
          fill
          className="w-full h-full object-cover   rounded-md"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            40,000+ SATISFIED CUSTOMERS
          </h2>
          <p className="text-white mt-3 max-w-2xl">
            Need help in planning a private tour to India? Maybe you need help
            with planning your family holiday, honeymoon, sightseeing tour,
            private day tours or a full Indian holiday itinerary? Whatever you
            need, we can help!
          </p>
          <button className="mt-4 bg-white text-black px-5 py-2 rounded-lg shadow font-medium hover:bg-gray-200">
            Book Your Tour
          </button>
        </div>
      </div>

      <div className="px-6 py-10 max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Our happy clients</h3>

        <div className="bg-white rounded-xl shadow p-6 max-w-md">
   
          <div className="flex items-center gap-3">
            <Image
              src={image1}
              alt="Client"
              width={100}
              height={100}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold">Mike Smith</h4>
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="gold" />
                ))}
              </div>
            </div>
          </div>

      
          <p className="text-gray-600 mt-4">
            “We booked a private holiday trip to India and everything was
            arranged perfectly. The driver and guide were professional, the
            hotels were great, and the itinerary was well planned. Highly
            recommended!”
          </p>
        </div>
      </div>
    </div>
  );
}
