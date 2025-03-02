import Image from "./component/assets/salak1.jpg";
import Navbar from "../navbar";
import Footer from "../footer";

function ProductDetail() {
  return (
    <>
      <Navbar />
      <div class="pt-38 px-18">
        <div class="flex flex-row">
          <div class="md:w-1/2 flex space-x-8">
            <img
              src={Image}
              alt="Salak Madu"
              class="w-[75%] h-120 object-cover"
            />
            <div class="flex flex-col justify-between">
              <img src={Image} alt="Thumb 1" class="w-36 h-36 object-cover" />
              <img src={Image} alt="Thumb 2" class="w-36 h-36 object-cover" />
              <img src={Image} alt="Thumb 3" class="w-36 h-36 object-cover" />
            </div>
          </div>

          <div class="md:w-1/2 justify-center">
            <h2 class="text-xl font-bold mb-2">Salak Madu</h2>
            <p class="text-gray-600 mb-4">Original Product | 10k+ Sold Out</p>
            <h3 class="text-3xl font-bold mb-4">$150.00</h3>
            <div class="mb-4">
              <h4 class="font-bold mb-2">Descriptions</h4>
              <p class="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div class="mb-4">
              <h4 class="font-bold mb-2">Amount</h4>
              <input type="number" class="border p-2 w-16" />
              <span class="ml-2">Kg</span>
            </div>
            <div class="flex space-x-4">
              <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Buy Now
              </button>
              <button class="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white">
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
