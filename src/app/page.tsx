
import Banner from "./components/Banner";
import FeatureIcons from "./components/FeatureIcons";
import SpecialOffers from "./components/SpecialOffers";
import Testimonials from "./components/Testimonials";
import TripsSection from "./components/TripCard";


export default function Home() {
  return (
    <main className="relative min-h-screen">
    
      
     <Banner/>
      <FeatureIcons />
      <TripsSection/>
      <Testimonials/>
      <SpecialOffers/>
    </main>
  );
}
