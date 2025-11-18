import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import LenisProvider from "@/components/lenis-provider";
import {CursorProvider} from "@/components/cursor-context";

export const metadata: Metadata = {
    title: "Fajarizz",
    description: "Rafa Fajari Fareldy Ramadhan Portfolio Website",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased`}
            >
                <Navbar/>
                <LenisProvider>
                    <CursorProvider>
                        {children}
                    </CursorProvider>
                </LenisProvider>
            </body>
        </html>
    );
}
