"use client";
import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div>
      
      <motion.div
        className="fixed left-10 bottom-1/13 z-50 flex items-center space-x-2 cursor-pointer"
        animate={{ scale: [0.8,0.8,0.8,1.20,1.20,1.20,0.8], rotate:[0,0,-10,10,5,10,0] }} 
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay:1,
          times: [0, 0.2, 0.45, 0.48, 0.5, 0.52, 1]

        
        }}
      >
        
        <div
         
          className="bg-orange-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-orange-600"
        >
          <User className="w-6 h-6" />
        </div>

        {/* Label */}
        <div
          
          className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded shadow-md -ml-2 origin-left"
        >
          May I Help You!
        </div>
      </motion.div>


      
      <div className="fixed right-4 bottom-1/13 z-50">
        <div className="bg-orange-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-orange-600">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
