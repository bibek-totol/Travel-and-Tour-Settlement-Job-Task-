"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { format } from "date-fns";

const locations = ["Abhaneri", "Delhi", "Goa", "Jaipur", "Pushkar", "Ranthambore"];

export default function SearchBar() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [checkIn, setCheckIn] = useState<Date | undefined>(new Date());
  const [checkOut, setCheckOut] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 bg-white shadow-xl rounded-full px-6 py-4 relative z-10">
      
    
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex-1 justify-start text-left rounded-full">
            {selectedLocation || "Where are you going?"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 rounded-lg shadow-lg">
          <ul>
            {locations.map((loc) => (
              <li
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className="cursor-pointer px-3 py-2 hover:bg-gray-100"
              >
                {loc}
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>

      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex-1 justify-start text-left rounded-full">
            {checkIn ? format(checkIn, "MM/dd/yyyy") : "Check in"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
        </PopoverContent>
      </Popover>

      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex-1 justify-start text-left rounded-full">
            {checkOut ? format(checkOut, "MM/dd/yyyy") : "Check out"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
        </PopoverContent>
      </Popover>


      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
        Search
      </Button>
    </div>
  );
}
