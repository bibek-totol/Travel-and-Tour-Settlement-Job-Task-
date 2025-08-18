"use client";

import { useState } from "react";

const BookingForm = ({ tour }: { tour: any }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    people: "",
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.people.trim() || isNaN(Number(formData.people))) {
      newErrors.people = "Enter number of people";
    }
    if (!formData.country.trim()) newErrors.country = "Country is required";

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log("Form submitted:", formData);
      // you can call API here
    }
  };

  return (
    <div className="sticky top-24 self-start">
      <div className="border rounded-2xl shadow-md p-6 max-w-md">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">From: ₹0,00</span>
          <span className="text-yellow-500">⭐ {tour.rating}/{tour.reviews}</span>
        </div>

        {submitted && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
            ✅ Booking request submitted successfully!
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-2">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full border rounded-lg p-2"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="w-full border rounded-lg p-2"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email*"
              className="w-full border rounded-lg p-2"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="flex space-x-2">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Peoples"
                className="w-full border rounded-lg p-2"
                value={formData.people}
                onChange={(e) =>
                  setFormData({ ...formData, people: e.target.value })
                }
              />
              {errors.people && (
                <p className="text-red-500 text-sm">{errors.people}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Country Of Resider"
                className="w-full border rounded-lg p-2"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>
          </div>

          <textarea
            placeholder="Any Message"
            className="w-full border rounded-lg p-2 h-20"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-semibold py-2 rounded-full hover:bg-orange-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
