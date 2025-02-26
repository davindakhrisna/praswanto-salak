import Image from "./assets/heroimg.jpg";

export default function Hero() {
  return (
    <div class="relative pb-60">
      <img
        src={Image}
        alt="Salak image"
        class="absolute inset-0 h-full w-screen object-cover"
      />
      <div class="absolute inset-0 bg-black opacity-15" />
      <div class="container relative z-10 mx-8 px-12 py-12 pt-60 text-white flex items-center h-screen">
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
            href="/about"
            class="border-neutral-300 border-1 inline-block px-8 py-4 bg-white/10 backdrop-blur-xs text-white font-base text-lg leading-tight rounded-4xl shadow-md hover:text-black hover:bg-white hover:shadow-lg active:bg-neutral-300 active:shadow-lg transition duration-450 ease-in-out"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
