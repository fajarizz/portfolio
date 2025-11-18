'use client'

import {motion} from "framer-motion";

export default function Bars() {
    const bars = [0, 1, 2, 3, 4]
    return (
        <div className="fixed inset-0 flex z-50 pointer-events-none">
            {bars.map((i) => (
                <motion.div
                    key={i}
                    initial={{height: "100vh"}}
                    animate={{height: 0}}
                    transition={{duration: 1, delay: i * 0.2, ease: "circInOut"}}
                    className="flex-1 bg-foreground"
                ></motion.div>
            ))}
        </div>
    )
}