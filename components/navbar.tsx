export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 mt-2 flex justify-center bg-transparent">
            <div className="flex items-center gap-10 justify-between bg-foreground  text-background backdrop-blur-lg rounded-full px-8 py-4 text-sm font-bold">
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#projects">PROJECTS</a>
                <a href="#contacts">CONTACT</a>
            </div>
        </nav>
    );
}
