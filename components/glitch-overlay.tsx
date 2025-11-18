"use client";

import { useEffect, useState } from "react";

export default function GlitchOverlay() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        // Bars end at 1.8s, +1 second = 2.8s delay
        const startGlitch = setTimeout(() => {
            setActive(true);
        }, 2200);

        const endGlitch = setTimeout(() => {
            setActive(false);
        }, 2200 + 150); // glitch lasts 0.5s

        return () => {
            clearTimeout(startGlitch);
            clearTimeout(endGlitch);
        };
    }, []);

    if (!active) return null;

    return (
        <div className="glitch-fast fixed inset-0 z-[9999] pointer-events-none bg-white mix-blend-difference"/>
    );
}
