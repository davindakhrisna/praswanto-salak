import { createSignal } from "solid-js";
import Image from "./assets/salak1.jpg";

export default function Letter() {
  const [email, setEmail] = createSignal("");

  return (
    <div class="flex flex-col h-vh">
      <div class="relative w-full h-140">
        <img
          src={Image}
          alt="Carousel Image"
          class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        />
        <div class="absolute inset-0 bg-black opacity-50" />

        <div class="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-4 px-24">
          <h1 class="text-5xl/relaxed font-bold text-white">
            Get Our Latest Updates And Exclusive Promo By <br />
            Subscribing To Our Newsletter
          </h1>
          <form class="relative flex items-center w-100 mx-auto px-3 py-2 mt-8 bg-white rounded-full shadow-lg sm:max-w-full">
            <input
              type="email"
              id="email"
              placeholder="Your Email Address"
              class="flex-1 px-4 py-2 text-gray-800 placeholder-gray-500 outline-0"
              aria-label="Enter your email address"
            />
            <button
              class="px-4 py-3 ml-2 text-white bg-lime-700 rounded-full hover:bg-lime-800 shadow-md"
              aria-label="Join Now"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
