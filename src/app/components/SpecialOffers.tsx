

const SpecialOffers = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-cente bg-gray-50  shadow-xl">
    
      <div>
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
          alt="Special Offers"
          className="rounded-lg shadow"
        />
      </div>

      
      <div className=" p-8 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Get special offers, and more from ERT
        </h2>
        <p className="text-gray-600">
          Contact us to see secret deals prices drop the moment you sign up!
        </p>
      </div>
    </div>
  );
};

export default SpecialOffers;
