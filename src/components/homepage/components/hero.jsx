import Image from "./assets/salak1.jpg";

export default function Hero() {
  return (
    <div class="relative">
      <img
        src={Image}
        alt="Salak image"
        class="absolute inset-0 h-screen w-screen"
      />
      <div class="absolute inset-0 bg-black opacity-12" />
      <div class="container relative z-10 mx-8 px-6 py-12 text-white flex items-center h-screen">
        <div class="text-start w-xl">
          <h1 class="text-4xl font-bold mb-2">Praswanto Snake Fruit:</h1>
          <h2 class="text-4xl font-bold mb-6">Delivering Nature's Sweetness</h2>
          <p class="text-lg mb-6">
            Located in the scenic region of Wonosobo, our company specializes in
            the cultivation, trade, and distribution of premium snake fruit.
            Committed to delivering the finest quality and the natural sweetness
            of salak, we connect local farmers with markets worldwide, ensuring
            freshness and satisfaction in every bite.
          </p>
          <a
            href="#"
            class="border-1 inline-block px-6 py-4 bg-white/5 backdrop-blur-xs text-white font-md text-xl leading-tight rounded-4xl shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
