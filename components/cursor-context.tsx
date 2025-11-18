"use client";
import {createContext, useContext, useState} from "react";

const CursorContext = createContext<any>(null);

export function CursorProvider({children}: { children: React.ReactNode }) {
    const [overText, setOverText] = useState(false);

    return (
        <CursorContext.Provider value={{overText, setOverText}}>
            {children}
        </CursorContext.Provider>
    );
}

export function useCursor() {
    return useContext(CursorContext);
}
