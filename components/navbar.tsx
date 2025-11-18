'use client'
import {useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

export default function Navbar() {
    const {scrollY} = useScroll();
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const unsub = scrollY.on("change", (y) => {
            setRevealed(y > 1);
        })
        return () => unsub();
    }, [scrollY])
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mt-2 flex justify-center bg-transparent">
            <div
                className="relative flex items-center gap-10 justify-between rounded-full px-8 py-4 text-sm font-bold overflow-hidden transition-all duration-300 ease-in-out"
                style={{color: revealed ? "var(--color-background)" : "var(--color-foreground)"}}>

                {/* Animated background reveal */}
                <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{scale: 0}}
                    animate={{scale: revealed ? 1 : 0}}
                    transition={{
                        duration: 0.6,
                        ease: "circInOut"
                    }}
                    style={{
                        borderRadius: "9999px",
                        transformOrigin: "center center"
                    }}
                />

                <div className="relative z-10 flex items-center gap-10 font-bold">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#contacts">CONTACT</a>
                </div>
            </div>
        </nav>
    );
}
