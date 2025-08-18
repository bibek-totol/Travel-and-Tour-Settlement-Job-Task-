"use client";
import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div>
      
      <motion.div
        className="fixed left-10 bottom-1/13 z-50 flex items-center space-x-2 cursor-pointer"
      >
        
        <motion.div
          animate={{ scale: [1, 1.20, 0.95, 1] }} 
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="bg-orange-500 text-white rounded-full p-4 shadow-lg flex items-center justify-center hover:bg-orange-600"
        >
          <User className="w-6 h-6" />
        </motion.div>

        {/* Label */}
        <motion.div
          animate={{
            scale: [1, 1.20, 0.95, 1],            
            rotate: [-10, 10, 20, -10]              
          }}
          transition={{
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            },
            rotate: {
              duration: 4,
              times: [0, 0.3, 0.6, 1], 
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="bg-gray-700 text-white text-sm font-medium px-3 py-1 rounded shadow-md -ml-2 origin-left"
        >
          May I Help You!
        </motion.div>
      </motion.div>

      
      <div className="fixed right-4 bottom-1/13 z-50">
        <div className="bg-orange-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-orange-600">
          <MessageCircle className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
