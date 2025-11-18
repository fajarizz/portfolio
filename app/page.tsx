import Image from "next/image";
import Bars from "@/components/bars";
import {IconGalaxy} from "@tabler/icons-react";
import Hero from "@/components/hero";
import GlitchOverlay from "@/components/glitch-overlay";
import CursorSpotlight from "@/components/cursor-spotlight";
import Spline from '@splinetool/react-spline/next';


export default function Home() {
    return (
        <>
            <CursorSpotlight/>
            <Bars/>
            <GlitchOverlay/>
            <Hero/>
            <main className="h-screen">

            </main>
        </>
    );
}
