import Image from "./assets/carousel.png";

const CarouselSection = () => {
  return (
    <div class="relative w-full h-[400px] md:h-[500px] lg:h-[350px] overflow-hidden">
      
      <img src={Image} alt="Carousel Image" class="absolute top-0 left-0 w-full h-full object-cover" />

      <div class="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
        <h1 class="text-white text-2xl md:text-4xl lg:text-4xl font-bold max-w-3xl">
          From Our Local Farms To Your Table, We Are Passionate About Sharing The Natural Sweetness And Benefits Of Fresh Snake Fruit.
        </h1>
        <a href="#" class="mt-6 border-1 inline-block px-6 py-4 bg-white/5 backdrop-blur-xs text-white font-md text-xl leading-tight rounded-4xl shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Shop Now</a>
      </div>
    </div>
  );
};

export default CarouselSection;
