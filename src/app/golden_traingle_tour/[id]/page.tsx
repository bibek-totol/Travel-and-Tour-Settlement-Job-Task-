import Section1 from "@/app/component-for-tour-details/Section1";
import { CheckCircle2, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe,Star  } from "lucide-react";
import TripsSection from "@/app/components/TripCard";
import { alltourapidata } from "@/app/fetcApi/alltourapidata";
import BookingForm from "@/app/components/BookingForm";



export async function generateStaticParams() {
  const data = await alltourapidata();
  
  return data.map((tour:{id:string}) => ({
    id: tour.id,
  }));


}


export default async function page({params}:{params:{id:string}}) {
  const data = await alltourapidata();




  const tour = data.find(
    (tour: { id: string }) => tour.id == params.id
  );

  

  const reviews = [
    {
      id: 1,
      name: "okking99",
      date: "07/15/2025",
      rating: 5,
      text: "Interesting read! Transparency in online gaming is HUGE, and platforms like okking99 club seem to be prioritizing that with their blockchain approach. Secure logins & fair games are key for trust! 🤔",
      likes: 0,
    },
    {
      id: 2,
      name: "lovart ai",
      date: "07/08/2025",
      rating: 5,
      text: "Great piece! Casino security needs the same smart automation that tools like Lovart bring to design—streamlining complex workflows without losing creative control.",
      likes: 0,
    },
  ];


  return (
    <div className="min-h-screen relative">
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 ">
            <p className="text-orange-500 ml-0 lg:ml-[160px] p-2 lg:p-4">Home</p>
            <p className="text-orange-500 p-2 lg:p-4">Jaipur</p>
            <p className="p-2 lg:p-4">{tour.title}</p>
        </div>
        <hr className="my-2 text-gray-400 "/>

        <Section1/>



        <div className="p-6 bg-white min-h-auto mx-auto max-w-7xl mt-4 ">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">{tour.title}</h1>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <span className="text-yellow-500">⭐ {tour.rating}/{tour.review}</span>
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col items-center border p-3 rounded-xl shadow-sm">
          <span className="font-semibold">Duration</span>
          <span className="text-gray-600">{tour.duration}</span>
        </div>
        <div className="flex flex-col items-center border p-3 rounded-xl shadow-sm">
          <span className="font-semibold">Tour Type</span>
          <span className="text-gray-600">{tour.tourType}</span>
        </div>
        <div className="flex flex-col items-center border p-3 rounded-xl shadow-sm">
          <span className="font-semibold">Group Size</span>
          <span className="text-gray-600">{tour.groupSize}</span>
        </div>
        <div className="flex flex-col items-center border p-4 rounded-xl shadow-sm">
          <span className="font-semibold">Languages</span>
          <div className="flex justify-center space-x-2 p-2">
          {
            tour.languages.map((lang: string, index: number) => (
              <span  key={index} className="text-gray-600 ">{lang}</span>
            ))
          }
         </div>
        </div>
      </div>




      
      <div className="grid md:grid-cols-2 gap-20">
        
        <div>
          <h2 className="text-xl font-semibold mb-4">About this tour</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
           {tour.about}
          </p>

          <hr className="my-4 w-[90%]  lg:w-1/2" />
          <h2 className="text-xl font-semibold mb-4">HIGHLIGHTS</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {
              tour.highlights.map((highlight: string, index: number) => (
                <li key={index}>{highlight}</li>
              ))
            }
          </ul>
        </div>


         <BookingForm tour={tour} />

        
      </div>
    </div>



    
    <div className="p-6 bg-white max-w-7xl mx-auto relative">
    <hr className="my-4 w-[90%]  lg:w-1/2" />
      <h2 className="text-xl font-semibold mb-2">Included/Excluded</h2>
      <div className="grid md:grid-cols-2 justify-start gap-4  mb-8 p-4 w-full lg:w-1/2 border border-gray-300">


        <div className="flex flex-col  gap-4">

          {
            tour.highlights.map((highlight: string, index: number) => (
              <div className="flex items-center space-x-2 ">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span>{highlight}</span>
        </div>
            ))
          }

        
        </div>



        <div className="flex flex-col gap-4">

        {
            tour.highlightsX.map((highlight: string, index: number) => (
              <div key={index} className="flex items-center space-x-2 ">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <span>{highlight}</span>
        </div>
            ))
          }
        

        </div>

       
      </div>
      <hr className="my-4 w-[90%]  lg:w-1/2" />
     <div className="w-[90%] lg:w-1/2  ">
      <h2 className="text-xl font-semibold mb-4">Itinerary</h2>
      <Accordion type="single" collapsible className="w-full flex flex-col gap-y-4">
        <AccordionItem value="item-1"  className="border border-gray-300 rounded-md px-6">
          <AccordionTrigger>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md font-medium">
              Delhi
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Our Representatives will welcome you at Delhi International airport,
            and then you will be transferred to pre-booked hotel. Take rest and
            Overnight stay at the hotel.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2"  className="border border-gray-300 rounded-md px-6">
          <AccordionTrigger>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md font-medium">
              Delhi–Jaipur
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Travel from Delhi to Jaipur and explore the Pink City with guided
            sightseeing.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3"  className="border border-gray-300 rounded-md px-6">
          <AccordionTrigger>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md font-medium">
              Jaipur
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Full-day sightseeing in Jaipur including Amber Fort, City Palace,
            and local markets.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4"  className="border border-gray-300 rounded-md px-6">
          <AccordionTrigger>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md font-medium">
              Jaipur–Ranthambore
            </span>
          </AccordionTrigger>
          <AccordionContent>
            Drive to Ranthambore National Park, enjoy a safari, and stay
            overnight in the jungle resort.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    </div>




    <div className="p-6 bg-white max-w-7xl mx-auto">
    <hr className="my-4 w-[90%]  lg:w-1/2" />
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      <div className="flex flex-wrap gap-6 mb-10">

        {
          tour.languages.map((language: string, index: number) => (
            <div className="flex items-center space-x-2">
          <Globe className="w-5 h-5 text-gray-600" />
          <span>{language}</span>
        </div>
          ))
        }
        
        
      </div>

      <hr className="my-4 w-[90%]  lg:w-1/2" />
      <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
      <Accordion type="single" collapsible className="w-[90%]  lg:w-1/2  space-y-3">
        <AccordionItem value="item-1" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium">
            Do you arrange airport transfers?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Airport transfers are not included in the price of this tour, however you can book for an arrival transfer in advance. 
            In this case a tour operator representative will be at the airport to greet you. To arrange this please contact our 
            customer service team once you have a confirmed booking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border rounded-lg px-4">
          <AccordionTrigger className="text-left font-medium">
            Nullam quis risus eget urna mollis ornare vel eu leo
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras venenatis euismod malesuada.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>




  
    <div className="p-6 bg-white max-w-7xl mx-auto">
    <hr className="my-4 w-[90%]  lg:w-1/2" />
    <h2 className="text-xl font-semibold mb-4">Reviews</h2>

      
      <div className="flex flex-col md:flex-row justify-between gap-6 w-[90%]  lg:w-1/2">
      
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-2xl">★</span>
            <span className="text-2xl font-bold">{tour.rating}/5</span>
          </div>
          <p className="text-gray-600">Excellent ({tour.reviews} reviews)</p>
        </div>

       
        <div className="flex-1 space-y-2">
          {[
            { label: "Excellent", count: 6 },
            { label: "Very Good", count: 1 },
            { label: "Average", count: 0 },
            { label: "Poor", count: 0 },
            { label: "Terrible", count: 0 },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="w-24">{item.label}</span>
              <div className="flex-1 h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-green-500 rounded"
                  style={{
                    width: `${(item.count / 7) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="w-6 text-sm text-gray-500">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center w-[90%]  lg:w-1/2">
        {tour.reviews} reviews on this Tour – Showing 4 to 6
      </p>

      <hr className="my-4 w-[90%]  lg:w-1/2" />

      
      <div className="space-y-6 w-[90%]  lg:w-1/2">
        {reviews.map((r) => (
          <div key={r.id} className="flex gap-4">
           
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600 font-bold">
                {r.name[0].toUpperCase()}
              </span>
            </div>

           
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">{r.name}</span>
                <span className="text-sm text-gray-500">{r.date}</span>
              </div>

             
              <div className="flex text-yellow-500 my-1">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="gold" stroke="none" />
                ))}
              </div>

              <p className="text-gray-700">{r.text}</p>

           
              <button
               
                className="flex items-center text-gray-500 text-sm mt-2 hover:text-gray-700"
              >
                👍 <span className="ml-1">{r.likes}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>


      <TripsSection/>



    </div>
  )
}
