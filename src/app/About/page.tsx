import { Award, BookOpen, Users } from "lucide-react";
import pic1 from "../../../public/assets/4.webp"
export default function About() {
    return (
        <div>
      <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
        
        <div className="rounded-2xl overflow-hidden shadow-lg mb-10">
          <img
            src="https://explorerajasthantours.com/wp-content/uploads/2022/09/rajasthan-tourism-deals-1-1.jpg"
            alt="Jal Mahal Jaipur"
            className="w-full h-80 object-cover"
          />
        </div>
  
        
        <div className="max-w-4xl mx-auto text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            About Us
          </h2>
          <p className="mb-4 leading-relaxed">
            From the peak of the Himalayas in the north to the depth of the beaches
            in south India is signalized by various culture, diverse festival and
            historical monuments which are exceptional. One can also experience the
            variety of delicious food as like the different culture of India, every
            state or culture has its own copyright sweets and dishes.
          </p>
          <p className="mb-4 leading-relaxed">
            India is the land of mystery, there are mighty rivers, dense forest,
            huge forts, bustling cities, balmy beaches and deserts. That’s why
            India is the major hub around the world for tourists and there is
            nothing surprising in it. This huge country is filled with interesting
            and exciting places to explore and visit.
          </p>
          <p className="leading-relaxed">
            Every Indian city has a different culture and they offer something new
            which is enjoyable. Golden India Travels takes the honour to make you
            get that incredible experience of this astonishing country. If someone
            wants to give a classic introduction to incredible India then the best
            example is golden triangle tour which is a fusion of three cities tour.
            This tour package covers three pre-eminent cities of India: Delhi, Agra
            and Jaipur for tourists.
          </p>
        </div>
        
      </section>





<section className="px-6 py-12 md:px-16 lg:px-24 ">
      
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why choose us</h2>
          <p className="text-gray-700 leading-relaxed">
            Many choose our tours because it makes travel so much easier. We will
            manage the tour according to your needs and budget. We aim to provide
            you with all the good quality and excellent services. We have dedicated
            staff with deeply knowledge of tourism field and our friendly and
            approachable staffs have extensive regional knowledge we have own fleet
            transport and well educated drivers with excellent knowledge of
            historical monuments.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Safety Is the Priority</h2>
          <p className="text-gray-700 leading-relaxed">
            We will solve all the uncertainty that exists in your mind when you plan
            to visit Rajasthan or India. Therefore, we pay special attention to the
            shelter when inbound and outbound tourists plan a trip to India or
            outside India. Our tour experts are well aware of the inborn character of
            all the tourist places in Rajasthan, India. We make prior adjustments of
            best tour packages, tour guide and for the safety without compromising on
            their pleasure at the same time for our guests.
          </p>
        </div>
      </div>

      
      <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What our clients say</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          The quality services provided by us have helped our clients find efficient
          and permanent solutions to their travel plans, have helped us remain on the
          top among providers of best travel services in the industry. Last but not
          the least, the reasonable prices at which we are providing best travel
          services in Rajasthan are unimaginable and have managed to satisfy our
          clients all over.
        </p>

        
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <p className="text-gray-700 mb-4 leading-relaxed">
            I have been dealing with Explore Rajasthan Tours for seven years. They
            have arranged my trips to exotic places as well as luxury tours to famous
            sites. India is a place where one should always have such a reliable
            established travel company to handle unforeseen problems.
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-gray-900">Dr. Kenneth Robbins</p>
              <p className="text-sm text-gray-500">Washington, USA</p>
            </div>
            <div className="flex text-yellow-500">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="px-6 py-12 md:px-16 lg:px-24 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
    
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={ pic1.src }
            alt="Rajasthan Tour"
            className="w-full h-full object-cover"
          />
        </div>

    
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500 font-semibold">
            Explore Rajasthan Tours
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted & Expert Tour Manager
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Budget Rajasthan tour packages from an experienced tour operator
            for beautiful hassle-free holidays.
          </p>

        
          <ul className="space-y-4 text-gray-700">
            {[
              "Best and affordable Pricing",
              "Completely managed tour packages",
              "Trouble free online booking",
              "Multi language speaking drivers",
              "Best service guaranteed",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-orange-500 text-lg mr-3">➤</span>
                {item}
              </li>
            ))}
          </ul>

          
          <div className="mt-8">
            <a
              href="https://wa.me/919999999999" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>



    (
    <section>
    
      <div className="relative w-full h-[400px] bg-gray-600">
       
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
            Rajasthan –{" "}
            <span className="text-orange-400 italic">Next destination</span>
          </h1>
          <a
            href="#book-tour"
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Book Your Tour
          </a>
        </div>
      </div>

      
      <div className="px-6 py-16 md:px-16 lg:px-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Awards & Certification
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
          Quality and trust are the backbone of our business, along with our other
          core values. dignissim ipsumodio scelerisque felis egetese ore
          euismodivamus blandit vehicula suorbi dsteiqcondimentum tincidunt dui
          vitae. Egeteuismod quis neqemporodn porta dignissim ipsumodio scelerisque
          felis eget euismod purus quamet antenrcunec utdui idpurus elementum rutrum
          et rutrum sapamus.
        </p>

    
        <div className="grid md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
              <Award size={32} />
            </div>
            <h3 className="font-semibold text-lg">
              Certified travel Service–Quality System
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="font-semibold text-lg">
              Authorized By Tourist Board
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
              <Users size={32} />
            </div>
            <h3 className="font-semibold text-lg">
              Member of the Travel Industry Association
            </h3>
          </div>
        </div>
      </div>
    </section>
    )



    </div>
    );
  }
  