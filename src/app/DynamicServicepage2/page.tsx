
import pic1 from "../../../public/assets/2.webp"
export default function DynamicServicepage2() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      
        <div className="lg:col-span-2">
      
          <img
            src={pic1.src}
            alt="Rajasthan Tour"
            className="rounded-lg shadow-md w-full"
          />
  
        
          <h1 className="text-2xl font-bold text-orange-600 mt-6">
            Rajasthan Tour
          </h1>
  
    
          <div className="flex items-center text-gray-500 text-sm mt-2 space-x-3">
            <span>By ERTACCESS</span>
            <span>•</span>
            <span>October 30, 2022 8:30 PM</span>
            <span>•</span>
            <span>No Comment</span>
          </div>
  
        
          <p className="text-gray-700 mt-4 leading-relaxed">
            These are organized by Golden India Travel and have large ranges from
            golden triangle, rajasthan and destinations from all over the India.
            Rajasthan Wildlife Tour No Review 7 Nights / 6 Days from ₹0,00,
            Rajasthan Royal Tour No Review 8 Nights / 7 Days from ₹0,00, Rajasthan
            Heritage Tour No Review 6 Nights / 5 […]
          </p>
        </div>
  
  
        <aside className="space-y-8">
      
          <div>
            <h3 className="text-lg font-semibold mb-2">Search</h3>
            <div className="flex border rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search ..."
                className="flex-1 px-3 py-2 outline-none"
              />
              <button className="px-4 bg-gray-200 hover:bg-gray-300">
                🔍
              </button>
            </div>
          </div>
  
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Popular posts</h3>
            <div className="space-y-4">
              {[
                "Meet the Steve Jobs of the Travel Industry",
                "The Ultimate Cheat Sheet on Travel",
                "The Best Kept Secrets About Travel",
              ].map((title, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <img
                    src="https://via.placeholder.com/60"
                    alt="post thumbnail"
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700 hover:text-orange-600 cursor-pointer">
                      {title}
                    </p>
                    <span className="text-xs text-gray-500">April 28, 2022</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
        
          <div>
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="text-red-500 font-semibold">BOOKING</span>4
              </li>
              <li>
                <span className="text-blue-500 font-semibold">HOTEL</span>5
              </li>
              <li>
                <span className="text-yellow-500 font-semibold">STAYS</span>2
              </li>
              <li>
                <span className="text-green-500 font-semibold">TRAVEL</span>5
              </li>
              <li>
                <span className="text-gray-500 font-semibold">Uncategorized</span>
                0
              </li>
            </ul>
          </div>
  
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {["Tour", "Booking", "Jaipur", "Rajasthan", "Delhi", "Agra"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="text-sm px-3 py-1 border rounded-md cursor-pointer hover:bg-orange-100"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </aside>
      </div>
    );
  }
  