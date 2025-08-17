"use client";

import { useState} from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { IoCalendarOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";

import { format } from "date-fns";

const locations = ["Abhaneri", "Delhi", "Goa", "Jaipur", "Pushkar", "Ranthambore"];

export default function SearchBar() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: null as unknown as Date,
      key: "selection",
    },
  ]);


  

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 bg-white shadow-xl rounded-full px-6 py-6 relative z-10">
      
    
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex-1 justify-start text-left rounded-full">
           <CiLocationOn className="w-5 h-5" /> {selectedLocation || "Location"}
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
            {range[0].startDate && range[0].endDate
              ? `${format(range[0].startDate, "dd MMM")} - ${format(range[0].endDate, "dd MMM")}`
              : (
                <div className="flex items-center gap-2 text-gray-500">
          <IoCalendarOutline className="w-5 h-5" />

     
     <div className="p-4 flex flex-col ">
      <h1>Date</h1>
      <p>Add date</p>
      </div>
      
      <FaArrowRightLong className="w-5 h-5" />
      <IoCalendarOutline className="w-5 h-5" />
     
     <div>
      <h1>Check Out</h1>
      <p>Add date</p>
      </div>

    </div>
              )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 rounded-lg shadow-lg">
          <DateRange
            editableDateInputs
            onChange={(item: RangeKeyDict) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            minDate={new Date()}
            direction="horizontal"
            showMonthAndYearPickers
         
          
            rangeColors={
              range[0].startDate && range[0].endDate
                ? ["#F58649"] 
                : ["transparent"] 
            }
            
          />
        </PopoverContent>
      </Popover>

    
      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8">
        Search
      </Button>
    </div>
  );
}
