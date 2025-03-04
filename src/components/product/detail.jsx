import Image from "./component/assets/salak1.jpg";
import Navbar from "../navbar";
import Footer from "../footer";

function ProductDetail() {
  return (
    <>
      <Navbar />
      <div class="pt-38 px-18 pb-28">
        <div class="flex flex-row">
          <div class="md:w-1/2 flex space-x-8">
            <img
              src={Image}
              alt="Salak Madu"
              class="w-[75%] h-120 object-cover rounded-xl"
            />
            <div class="flex flex-col justify-between">
              <img
                src={Image}
                alt="Thumb 1"
                class="w-36 h-36 object-cover rounded-xl"
              />
              <img
                src={Image}
                alt="Thumb 2"
                class="w-36 h-36 object-cover rounded-xl"
              />
              <img
                src={Image}
                alt="Thumb 3"
                class="w-36 h-36 object-cover rounded-xl"
              />
            </div>
          </div>

          <div class="md:w-1/2 flex flex-col justify-between pl-12">
            <div>
              <h2 class="text-2xl font-bold mb-2">Salak Madu</h2>
              <p class="text-gray-600 mb-4">Original Product | 10k+ Sold Out</p>
            </div>
            <div>
              <h3 class="text-4xl font-bold mb-4">$150.00</h3>
              <div class="mb-4">
                <h4 class="font-bold mb-2">Descriptions</h4>
                <p class="text-gray-600 w-[85%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div class="mb-4">
                <h4 class="font-bold mb-2">Amount</h4>
                <input class="border border-neutral-300 p-2 w-12 rounded-md" />
                <span class="ml-2">Kg</span>
              </div>
            </div>
            <div class="flex space-x-4 mt-12">
              <button class="cursor-pointer w-full bg-lime-700 text-white px-4 py-4 rounded-4xl hover:bg-lime-800 active:shadow-lg transition duration-450 ease-in-out">
                Buy Now
              </button>
              <button class="cursor-pointer w-full border-2 border-black px-4 py-4 rounded-4xl hover:bg-neutral-100 active:shadow-lg transition duration-450 ease-in-out">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
