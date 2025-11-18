"use client"
import {IconGalaxy, IconMoodHappy} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {useCursor} from "@/components/cursor-context";
import Spline from "@splinetool/react-spline/next";

export default function Hero() {
    const [active, setActive] = useState(false);
    const {scrollYProgress} = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const {overText, setOverText} = useCursor();
    const [skeleton, setSkeleton] = useState(false);

    const fontList = [
        'Basheq', 'Bemirs', 'Gradzy', 'Landmark', 'Landmark', 'Sarasvati', 'Sterion', "Supercharge", "Tronix", 'Video'
    ]

    setTimeout(() => setActive(true), 2250);

    useEffect(() => {
        console.log(setOverText);
    }, [setOverText]);


    return (
        <main className="h-screen flex items-start justify-start px-6 py-6">
            <div className="flex flex-row h-full items-end justify-between w-full">
                <div
                    className=" leading-[0.8] cursor-none pt-25"
                    onMouseEnter={() => setOverText(true)}
                    onMouseLeave={() => setOverText(false)}
                >

                    <p className={"text-[12rem]"}
                       style={{opacity: active ? '100' : '0', fontFamily: 'Sarasvati'}}>RAFA</p>
                    <p className={"text-[12rem]"}
                       style={{opacity: active ? '100' : '0', fontFamily: 'Landmark'}}>FAJARI</p>
                </div>
                <div className={"flex flex-col items-end justify-between"}>
                    <div className="h-120 w-90 cursor-none"
                         onMouseEnter={() => setOverText(true)}
                         onMouseLeave={() => setOverText(false)}>
                    </div>
                    <motion.div
                        style={{rotate}}
                    >
                        <IconGalaxy size={"8rem"}/>
                    </motion.div>
                </div>
            </div>
            <div
                className="pointer-events-none fixed inset-0 z-[998]"
                style={{
                    WebkitMaskImage:
                        'radial-gradient(circle at var(--x, -9999px) var(--y, -9999px), #000 calc((var(--spotEnabled, 0) * var(--spotSize, 0px)) / 2), transparent calc((var(--spotEnabled, 0) * var(--spotSize, 0px)) / 2 + 1px))',
                    maskImage:
                        'radial-gradient(circle at var(--x, -9999px) var(--y, -9999px), #000 calc((var(--spotEnabled, 0) * var(--spotSize, 0px)) / 2), transparent calc((var(--spotEnabled, 0) * var(--spotSize, 0px)) / 2 + 1px))'
                }}
            >
                <div className="absolute right-0 bottom-40">
                    <img style={{opacity: active ? '100' : '0'}} src="/nokia.png" alt=""/>
                </div>
                <p style={{opacity: active ? '100' : '0', fontFamily: 'Bemirs'}}
                   className={"absolute left-7 bottom-83 text-7xl mb-5"}>
                    Web Developer
                </p>
                <div style={{opacity: active ? '100' : '0'}} className="absolute bottom-60 left-120 -rotate-z-45">
                    <IconMoodHappy size={'4rem'} className={""}/>
                </div>
            </div>
        </main>
    );
}
