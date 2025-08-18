
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="w-full">
    <div className="w-full">
        <iframe
          title="map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14229.17636893865!2d90.40432461171997!3d23.864016261820176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c500720bece3%3A0xb7d7f7cf7510b148!2sRaktch%20Technology%20%26%20Software!5e0!3m2!1sen!2sbd!4v1755526807620!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        
        <div>
          <h2 className="text-2xl font-bold mb-8">Let's Start A Conversation</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">
                D-253–A Devi Marg, Bani Park, Jaipur, Rajasthan 302016
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500 w-5 h-5" />
              <p className="text-gray-700">+91 77279 35309</p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500 w-5 h-5" />
              <p className="text-gray-700">0141 4055839</p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="text-orange-500 w-5 h-5" />
              <p className="text-gray-700">+91 77279 35309</p>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500 w-5 h-5" />
              <p className="text-gray-700">
                explorerajasthantoursindia@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500 w-5 h-5" />
              <p className="text-gray-700">
                info@explorerajasthantoursindia.com
              </p>
            </div>
          </div>
        </div>

    
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-xl font-bold mb-6">Send a message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name*"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Your email*"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-28"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition flex items-center space-x-2"
            >
              <span>Submit</span>
              <span>→</span>
            </button>
          </form>
        </div>
      </div>

    
      
    </div>
  );
};

export default ContactPage;
