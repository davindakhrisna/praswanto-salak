import { onMount } from "solid-js";
import Image1 from "./assets/Slide1.png";
import Image2 from "./assets/Slide2.png";
import Image3 from "./assets/Slide3.png";
import Image4 from "./assets/Slide4.png";
import Image5 from "./assets/Slide5.png";

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
      <div class="flex flex-row justify-between items-center px-6 mx-8">
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
        <div class="swiper-wrapper my-16">
          <div class="swiper-slide swiper-slide-start !ml-12">
            <Slide
              image={Image1}
              title="Organic Farming"
              description="Grown with care and free from harmful chemicals, organic farming ensures snake fruit is cultivated sustainably while preserving its natural sweetness and quality."
            />
          </div>
          <div class="swiper-slide">
            <Slide
              image={Image2}
              title="Local Farmer"
              description="Proudly grown by dedicated local farmers, our snake fruit embodies freshness, quality, and the rich flavors of traditional cultivation, supporting communities and sustainable farming practices."
            />
          </div>
          <div class="swiper-slide">
            <Slide
              image={Image3}
              title="Pest Management"
              description="Grown with care and free from harmful chemicals, organic farming ensures snake fruit is cultivated sustainably while preserving its natural sweetness and quality."
            />
          </div>
          <div class="swiper-slide">
            <Slide
              image={Image4}
              title="Snake Fruit Quality"
              description="Our snake fruit is handpicked offering a perfect mix of sweetness, crispness, and freshness. It stays fresh and flavorful. We prioritize quality and your satisfaction with every bite."
            />
          </div>
          <div class="swiper-slide swiper-slide-end">
            <Slide
              image={Image5}
              title="Safety Delivery"
              description="We ensure every order is handled with care and delivered securely, maintaining freshness and quality throughout the journey. Your satisfaction and product safety are our top priorities."
            />
          </div>
        </div>
        <div class="swiper-pagination !h-5 !bottom-0.5 !rounded-3xl !top-auto !w-88 right-0 mx-auto bg-gray-100"></div>
      </div>
    </div>
  );
}

function Slide(props) {
  return (
    <div class="card h-82">
      <img src={props.image} class="card-image"></img>
      <div class="absolute inset-0 card-background" />
      <div class="card-description p-8 justify-end">
        <p class="text-title text-4xl font-medium mb-2 inset-0">
          {props.title}
        </p>
        <p class="text-body">{props.description}</p>
      </div>
    </div>
  );
}
