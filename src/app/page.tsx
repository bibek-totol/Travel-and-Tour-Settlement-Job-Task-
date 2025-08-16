import FeatureIcons from "./components/FeatureIcons";
import SearchBar from "./components/SearchBar";
import TripsSection from "./components/TripCard";


export default function Home() {
  return (
    <main className="relative min-h-screen">
    
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center px-4">
          <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
            Love where you're going
          </h1>
          <p className="text-lg text-white mb-8">
            Book incredible things to do around the world.
          </p>
          <SearchBar />
        </div>
      </div>

  
      <FeatureIcons />
      <TripsSection/>
    </main>
  );
}
