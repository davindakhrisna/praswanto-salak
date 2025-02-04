import Navbar from "./components/navbar";
import Hero from "./components/hero"
import About from "./components/about";
import Faq from "./components/faq";

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Faq />
        </>
    );
}