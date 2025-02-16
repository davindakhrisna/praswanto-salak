import { onMount } from "solid-js";

export default function Service() {
  let swiperContainer;
  let swiperInstance;

  onMount(() => {
    // Initialize Swiper
    swiperInstance = new Swiper(swiperContainer, {
      loop: false,
      autoplay: false,
      freeMode: false,
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 35,
      pagination: {
        el: ".swiper-pagination", // Corrected to use the class name directly
        type: "progressbar",
      },
      on: {
        slideChange: () => {
          // Get the swiper-margin element
          const swiperMargin = swiperContainer.querySelector(".swiper-wrapper");

          // Check if the last slide (swiper-slide-end) is visible
          if (swiperInstance.isEnd) {
            // Add "!w-20" class to the swiper-margin element
            swiperMargin.classList.add("!right-24");
          } else {
            // Remove "!w-20" class if it's not the last slide
            swiperMargin.classList.remove("!right-24");
          }
        },
      },
    });
  });

  return (
    <div class="w-full relative py-12 mb-16 pt-20">
      <div class="flex flex-row justify-between items-center pb-8 px-6 py-16 mx-8">
        <div class="w-1/8 text-start font-base text-lg">About Us</div>
        <hr class="w-3/8 text-gray-300" />
        <div class="w-2/8 text-center text-lime-700 font-medium text-2xl">
          Praswanto Salak
        </div>
        <hr class="w-3/8 text-gray-300" />
        <div class="w-1/8 text-end font-base text-lg">&copy; 2015</div>
      </div>
      <div class="flex flex-row justify-between items-center px-6 pb-16 mx-8">
        <div class="w-2/8 text-start font-medium text-4xl">
          Why Choose Praswanto Salak?
        </div>
        <div class="w-3/8 text-end font-base text-2xl">
          Experience The Natural Sweetness Of <br /> Fresh, Organic, And
          Sustainable Snake Fruit
        </div>
      </div>
      <div
        ref={(el) => (swiperContainer = el)}
        class="swiper multiple-slide-carousel swiper-container relative"
      >
        <div class="swiper-wrapper mb-16">
          <div class="swiper-slide swiper-slide-start !ml-12">
            <div class="bg-indigo-50 rounded-2xl h-82 flex justify-center items-center">
              <span class="text-2xl font-semibold text-indigo-600">
                Slide 1
              </span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bg-indigo-50 rounded-2xl h-82 flex justify-center items-center">
              <span class="text-2xl font-semibold text-indigo-600">
                Slide 2
              </span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bg-indigo-50 rounded-2xl h-82 flex justify-center items-center">
              <span class="text-2xl font-semibold text-indigo-600">
                Slide 3
              </span>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="bg-indigo-50 rounded-2xl h-82 flex justify-center items-center">
              <span class="text-2xl font-semibold text-indigo-600">
                Slide 4
              </span>
            </div>
          </div>
          <div class="swiper-slide swiper-slide-end">
            <div class="bg-indigo-50 rounded-2xl h-82 flex justify-center items-center">
              <span class="text-2xl font-semibold text-indigo-600">
                Slide 5
              </span>
            </div>
          </div>
        </div>
        <div class="swiper-pagination !h-5 !bottom-0.5 !rounded-3xl !top-auto !w-88 right-0 mx-auto bg-gray-100"></div>
      </div>
    </div>
  );
}
