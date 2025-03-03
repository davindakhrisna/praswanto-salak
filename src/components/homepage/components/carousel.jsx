import Image from "./assets/carousel.png";

export default function Carousel() {
  return (
    <div class="relative w-full h-[70vh] overflow-hidden">
      <img
        src={Image}
        alt="Carousel Image"
        class="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      <div class="absolute inset-0 bg-black opacity-12" />

      <div class="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center p-4 px-24">
        <h1 class="text-white text-5xl/relaxed font-bold max-w-8xl">
          From Our Local Farms To Your Table, We Are Passionate About Sharing
          The Natural Sweetness And Benefits Of Fresh Snake Fruit.
        </h1>
        <a
          href="/product"
          class="shop-btn mt-8 border-1 flex w-58 justify-center py-4 bg-white/10 backdrop-blur-xs text-white font-md text-base leading-tight rounded-4xl shadow-md hover:shadow-lg active:bg-neutral-300 active:shadow-lg transition duration-150 ease-in-out"
        >
          Shop Now
          <div class="hover-content">
            <svg
              fill="#ffffff"
              height="100%"
              width="20px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 275"
              xml:space="preserve"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_27_"
                  d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255 s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}
