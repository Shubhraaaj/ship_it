import { motion } from "framer-motion";

export default function ImageHeadTextCard({ title, description, imageurl }){
    return(
        <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="flex justify-center m-4">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="h-24 mx-auto my-4" src={imageurl} alt=""/>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </motion.div>
    );
}

/**
 * Pages
 * Components - Combination of elements
 * Elements
 * 
 */