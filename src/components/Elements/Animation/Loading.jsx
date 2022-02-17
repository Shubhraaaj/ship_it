import { motion } from "framer-motion";

export const Loading = () => {
    return(
        <div className="w-screen h-screen">
            <motion.img 
                src="https://i.ibb.co/5jtnQC8/refresh.png"
                className="w-20 h-20 m-auto"
                animate={{
                    scale: [0.8, 1],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    times: [0, 1],
                    repeat: Infinity
                }}/>
            <motion.p
                className="text-lg font-medium mt-4 text-red-400"
                animate={{
                    scale: [1, 1.2]
                }}
                transition={{
                    duration: 0.6,
                    ease:"easeInOut",
                    times: [0, 1],
                    repeat: Infinity
                }}
                >
                Loading...
            </motion.p>
        </div>
    );
};