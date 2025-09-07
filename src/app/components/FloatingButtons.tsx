"use client";
import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";

const wiggle = {
  animate: {
    scale: [0.8, 0.8, 1.2, 1.2, 1.2, 1.2, 0.8],
    rotate: [0, 0, 10, -10, 10, -10, 10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      repeatDelay: 1,
    },
  },
};

export default function FloatingButtons() {
  return (
    <div>
      <div className="fixed left-10 bottom-1/13 z-50 flex items-center space-x-2 cursor-pointer">
        
        
        <motion.div
          variants={wiggle}
          animate="animate"
          className="bg-orange-500 rounded-full p-4 text-white shadow-lg flex items-center justify-center hover:bg-orange-600"
        >
          <User className="w-6 h-6" />
        </motion.div>

        
        <motion.div
          variants={wiggle}
          animate="animate"
          className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded shadow-md -ml-4 origin-left"
        >
          May I Help You!
        </motion.div>
      </div>

  
      <div className="fixed right-4 bottom-1/13 z-50">
        <div className="bg-orange-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-orange-600">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
