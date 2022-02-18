import { motion } from "framer-motion";
import { FaShippingFast } from "react-icons/fa";

export const Loading = () => {
    return(
            <motion.div className="w-32 mx-auto">
                <motion.div
                    className="absolute w-32 h-32 py-4"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 360 }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeatDelay: 0.5,
                        repeat: Infinity
                    }}
                    >
                    <FaShippingFast className="text-red-400 mx-auto w-16 h-16" />
                    <motion.p className="font-medium text-red-500">Shipit.</motion.p>
                </motion.div>
                <motion.div
                    className="w-32 h-32 border-2 border-red-400 rounded-xl absolute"
                    animate={{
                        scale: [1.2, 1, 1, 1.2, 1.2],
                        rotate: [270, 0, 0, 270, 270],
                        opacity: [0.25, 1, 1, 1, 0.25],
                        borderRadius: ['25%', '25%', '50%', '50%', '25%']
                    }}
                    transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
                />

                <motion.div
                className="w-32 h-32 bg-red-50 rounded-xl absolute"
                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 270, 270, 0, 0],
                    opacity: [1, 0.25, 0.25, 0.25, 1],
                    borderRadius: ['25%', '25%', '50%', '50%', '25%']
                }}
                transition={{
                    ease: 'linear',
                    duration: 3.2,
                    repeat: Infinity
                }}
                />
            </motion.div>
    );
};