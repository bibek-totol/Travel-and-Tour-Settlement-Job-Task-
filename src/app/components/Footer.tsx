import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-6">
    
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        
       
        <div>
          <h4 className="font-semibold mb-3">Golden Triangle Tours</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Golden Triangle Tour With Pushkar
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Golden Triangle Tour With Varanasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Golden Triangle Tour With Ranthambore
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Community Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Careers
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Partnerships
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Get in touch
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold mb-3">Social</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-pink-600 hover:text-white transition">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-200 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        
       
        <p className="text-center md:text-left mb-3 md:mb-0">
          Copyright © Explore Rajasthan Tours 2022 | Developed By Growth Inkk.
        </p>

       
        <div className="flex space-x-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png"
            alt="MasterCard"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Discover_Card_logo.svg"
            alt="Discover"
            className="h-5"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/JCB_logo.svg"
            alt="JCB"
            className="h-5"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
