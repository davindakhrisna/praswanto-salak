import Header from "./components/header";
import Footer from "../footer";
import Navbar from "../navbar";
import Left from "./components/left";
import Right from "./components/right";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <div class="pt-36 px-18 mb-32">
        <Header />
        <div className="flex">
          <div class="flex w-1/2">
            <Left />
          </div>
          <div class="flex w-1/2 justify-end">
            <Right />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
