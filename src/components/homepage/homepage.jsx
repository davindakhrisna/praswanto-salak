import Navbar from "./components/navbar";
import Navbarb from "./components/navbarb"
import Hero from "./components/hero";
import About from "./components/about";
import Carousel from "./components/carousel";
import Service from "./components/service";
import Faq from "./components/faq";
import Letter from "./components/letter";
import Footer from "./components/footer";

export default function Homepage() {
  return (
    <>
      <Navbarb />
      <Hero />
      <About />
      <Carousel />
      <Service />
      <Faq />
      <Letter />
      <Footer />
    </>
  );
}
