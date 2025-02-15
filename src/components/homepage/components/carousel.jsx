import Image from "./assets/carousel.png";

export default function Carousel() {
  return (
    <div class="relative w-full h-[70vh] overflow-hidden">
      <img
        src={Image}
        alt="Carousel Image"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div class="absolute inset-0 bg-black opacity-12" />

      <div class="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-4 px-24">
        <h1 class="text-white text-5xl/relaxed font-bold max-w-8xl">
          From Our Local Farms To Your Table, We Are Passionate About Sharing
          The Natural Sweetness And Benefits Of Fresh Snake Fruit.
        </h1>
        <a
          href="#"
          class="mt-8 border-1 inline-block px-20 py-4 bg-white/10 backdrop-blur-xs text-white font-md text-base leading-tight rounded-4xl shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
