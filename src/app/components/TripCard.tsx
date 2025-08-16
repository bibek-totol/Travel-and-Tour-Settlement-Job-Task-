import React from "react";
import { Star, Clock, Zap, Heart, User } from "lucide-react";

const trips = [
  {
    title: "Delhi Goa Weekend Tour Package",
    image:
      "https://images.unsplash.com/photo-1600783241324-0e46f30bc41d?auto=format&fit=crop&w=800&q=80",
    review: "1 Review",
    rating: 5,
    duration: "1 Nights / 2 Days",
    price: "₹0,00",
  },
  {
    title: "Delhi Sightseeing Tour",
    image:
      "https://images.unsplash.com/photo-1585476401875-34a38c4652dd?auto=format&fit=crop&w=800&q=80",
    review: "1 Review",
    rating: 5,
    duration: "1 Nights / 1 Days",
    price: "₹0,00",
  },
  {
    title: "Golden Triangle Tour With Pushkar",
    image:
      "https://images.unsplash.com/photo-1587394202003-f6a6a2c8f6f5?auto=format&fit=crop&w=800&q=80",
    review: "6 Reviews",
    rating: 5,
    duration: "5 days",
    price: "₹0,00",
  },
  {
    title: "Golden Triangle Tour With Ranthambore",
    image:
      "https://images.unsplash.com/photo-1603565819357-95a8b819addf?auto=format&fit=crop&w=800&q=80",
    review: "3 Reviews",
    rating: 5,
    duration: "7 Nights / 6 Days",
    price: "₹0,00",
  },
  {
    title: "Golden Triangle Tour With Udaipur",
    image:
      "https://images.unsplash.com/photo-1582192723627-9b2b62d249b1?auto=format&fit=crop&w=800&q=80",
    review: "No Review",
    rating: 0,
    duration: "7 Nights / 6 Days",
    price: "₹0,00",
  },
  {
    title: "Golden Triangle Tour With Varanasi",
    image:
      "https://images.unsplash.com/photo-1549270340-5c6b0e5c948e?auto=format&fit=crop&w=800&q=80",
    review: "No Review",
    rating: 0,
    duration: "7 Nights / 6 Days",
    price: "₹0,00",
  },
  {
    title: "Jaipur Abhaneri Weekend Tour Package",
    image:
      "https://images.unsplash.com/photo-1581338834647-b0fbba837b41?auto=format&fit=crop&w=800&q=80",
    review: "No Review",
    rating: 0,
    duration: "1 Nights / 2 Days",
    price: "₹0,00",
  },
  {
    title: "Jaipur Ranthambore Same Day Tour",
    image:
      "https://images.unsplash.com/photo-1588422333075-0c9e8342b2ac?auto=format&fit=crop&w=800&q=80",
    review: "No Review",
    rating: 0,
    duration: "1 Nights / 1 Days",
    price: "₹0,00",
  },
];

const TripCard = ({ trip }: { trip: any }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-2">
      <div className="relative">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-48 object-cover rounded-lg"
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
          {[...Array(trip.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-500" />
          ))}
          <span className="text-gray-500 ml-1">{trip.review}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {trip.duration}
          </span>
          <span className="flex items-center gap-1">
            <Zap className="w-4 h-4 text-yellow-500" /> from {trip.price}
          </span>
        </div>
      </div>
    </div>
  );
};

const TripsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Get inspired for your next trip
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trips.map((trip, index) => (
          <TripCard key={index} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default TripsSection;
