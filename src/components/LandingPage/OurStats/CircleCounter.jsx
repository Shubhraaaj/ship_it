import { motion } from "framer-motion";

export default function CircleCounter({ number, title }){
    return(
        <motion.p 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="h-40 w-40 rounded-full shadow-lg shadow-red-400 bg-gray-700 py-8 mx-auto">
            <span className="text-white text-4xl font-medium block">{number}</span>
            <span className="text-white font-light mx-8 block mt-1">{title}</span>
        </motion.p>
    );
}