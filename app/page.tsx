import Image from "next/image";

export default function Home() {
    return (
        <div className={"flex flex-col h-[100vh] flex-1 pr-4 py-5 gap-5"}>
            <div className={"h-3/4 bg-gray-400"}></div>
            <div className={"flex flex-col items-end"}>
                <p className={"text-xl font-semibold tracking-tight"}>WEB DEVELOPER</p>
                <p className={"text-9xl font-extrabold tracking-tight text-balance"}>RAFA FAJARI</p>
            </div>
        </div>
    );
}
