"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence, useMotionValue, animate} from "framer-motion";
import {useCursor} from "@/components/cursor-context";

export default function CursorSpotlight() {
    const [pos, setPos] = useState({x: 0, y: 0});
    const [active, setActive] = useState(false);
    const {overText} = useCursor();

    // Use a motion value for size so the visual circle and the CSS mask stay perfectly in sync
    const initialSize = overText ? 120 : 60;
    const sizeMv = useMotionValue<number>(initialSize);

    useEffect(() => {
        let timeout;

        const move = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            setPos({x, y});

            // update css variables for mask
            document.documentElement.style.setProperty("--x", x + "px");
            document.documentElement.style.setProperty("--y", y + "px");

            setActive(true);

            clearTimeout(timeout);
            timeout = setTimeout(() => setActive(false), 900);
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    const size = overText ? 120 : 60;

    // Animate the motion value to match the overText-driven size
    useEffect(() => {
        const controls = animate(sizeMv, size, {
            duration: 0.25,
            ease: "circOut"
        });
        return controls.stop;
    }, [size, sizeMv]);

    // Reflect the animated size into the CSS variable on every frame for perfect sync with the mask
    useEffect(() => {
        const unsub = sizeMv.on("change", (v) => {
            document.documentElement.style.setProperty("--spotSize", `${v}px`);
        });
        // Initialize once on mount in case motion value doesn't emit immediately
        document.documentElement.style.setProperty("--spotSize", `${sizeMv.get()}px`);
        return unsub;
    }, [sizeMv]);

    // expose active state to CSS so other components can react (e.g., hide/show with spotlight)
    useEffect(() => {
        document.documentElement.style.setProperty("--spotEnabled", active ? "1" : "0");
    }, [active]);

    return (
        <AnimatePresence>
            {active && (
                <motion.div
                    key="spot"
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: pos.x - size / 2,
                        y: pos.y - size / 2
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: pos.x - size / 2,
                        y: pos.y - size / 2,
                        transition: {
                            x: {duration: 0.15, ease: "circOut"},
                            y: {duration: 0.15, ease: "circOut"},
                            opacity: {duration: 0.15},
                            scale: {duration: 0.25, ease: "circOut"}
                        }
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0,
                        transition: {duration: 0.2}
                    }}
                    className="pointer-events-none fixed z-[999] bg-white rounded-full mix-blend-difference"
                    style={{
                        width: sizeMv,
                        height: sizeMv
                    }}
                />
            )}
        </AnimatePresence>
    );
}
