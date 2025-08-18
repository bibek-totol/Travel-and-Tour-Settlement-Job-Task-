
import { Star, Clock, Zap, Heart, User } from "lucide-react";
import Image from "next/image";
import { alltourapidata } from "../fetcApi/alltourapidata";
import Link from "next/link";

// const trips = [
//   {
//     title: "Delhi Goa Weekend Tour Package",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/10/Untitled-design-1-450x300.png",
//     review: "1 Review",
//     rating: 5,
//     duration: "1 Nights / 2 Days",
//     price: "₹0,00",
//   },
//   {
//     title: "Delhi Sightseeing Tour",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/10/3-6-450x300.png",
//     review: "1 Review",
//     rating: 5,
//     duration: "1 Nights / 1 Days",
//     price: "₹0,00",
//   },
//   {
//     title: "Golden Triangle Tour With Pushkar",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/04/Pushkar_Lake_Rajasthan-800x445-1-450x300.jpg",
//     review: "6 Reviews",
//     rating: 5,
//     duration: "5 days",
//     price: "₹0,00",
//   },
//   {
//     title: "Golden Triangle Tour With Ranthambore",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/10/Ranthambore-National-Park-safari-1-2-450x300.jpg",
//     review: "3 Reviews",
//     rating: 5,
//     duration: "7 Nights / 6 Days",
//     price: "₹0,00",
//   },
//   {
//     title: "Golden Triangle Tour With Udaipur",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/10/3-2-450x300.png",
//     review: "No Review",
//     rating: 0,
//     duration: "7 Nights / 6 Days",
//     price: "₹0,00",
//   },
//   {
//     title: "Golden Triangle Tour With Varanasi",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/11/varanasi-portrait_tania-chatterjee_3-1-450x300.jpg",
//     review: "No Review",
//     rating: 0,
//     duration: "7 Nights / 6 Days",
//     price: "₹0,00",
//   },
//   {
//     title: "Jaipur Abhaneri Weekend Tour Package",
//     image:
//       "https://explorerajasthantours.com/wp-content/uploads/2022/10/panoramic-view-chand-baori-stepwell-famous-village-abhaneri-rajasthan-india-111637598-450x300.jpg",
//     review: "No Review",
//     rating: 0,
//     duration: "1 Nights / 2 Days",
//     price: "₹0,00",
//   },
//   {
//     title: "Jaipur Ranthambore Same Day Tour",
//     image:
//  "https://explorerajasthantours.com/wp-content/uploads/2022/10/2-5-450x300.png",
//     review: "No Review",
//     rating: 0,
//     duration: "1 Nights / 1 Days",
//     price: "₹0,00",
//   },
// ];

const TripCard  =  ({ trip }: { trip: any }) => {

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-2">
      <div className="relative">
        <Image
          src={trip?.image}
          alt={trip.title}
          width={450}
          height={300}
         
          className="object-cover rounded-lg"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
        <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow">
          <User className="w-5 h-5 text-gray-700" />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-gray-800 font-semibold">{trip.title}</h3>
        <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
  {Array.from({ length: trip.rating }).map((_, i) => (
    <Star key={i} className="w-4 h-4 fill-yellow-500" />
  ))}
  <span className="text-gray-500 ml-1">
    {trip.reviews} Reviews
  </span>
</div>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {trip.duration}
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-500" /> from "₹0,00"
          </span>
        </div>
      </div>
    </div>
  );
};

const  TripsSection = async() => {
  const trips = await alltourapidata()
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Get inspired for your next trip
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trips.map((trip:any, index:number) => (
          <Link href={`/golden_traingle_tour/${trip.id}`}>
           <TripCard key={index} trip={trip} />
          </Link>
         
        ))}
      </div>
    </div>
  );
};

export default TripsSection;
