import { onMount } from "solid-js";
import img1 from "./assets/salak1.jpg";
import img2 from "./assets/salak1.jpg";
import img3 from "./assets/salak1.jpg";

export default function Products() {
  let swiperContainer;
  let swiperInstance;

  onMount(() => {
    swiperInstance = new Swiper(swiperContainer, {
      autoplay: true,
      loop: true,
      freeMode: false,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 35,
    });
  });

  return (
    <section className="max-w-7xl mx-auto px-4 pt-38 pb-18">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-900">
          Snake Fruit Products
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We offer premium-quality snake fruit products, from fresh salak to
          dried snacks and beverages. Sustainably sourced and carefully
          processed, each product preserves its natural sweetness and health
          benefits.
        </p>
      </div>

      <div
        ref={(el) => (swiperContainer = el)}
        class="swiper swiper-container relative"
      >
        <div class="swiper-wrapper my-12 w-full">
          <div class="swiper-slide">
            <CartItem image={img1} title="Organic Farming" price="123" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CartItem(props) {
  return (
    <div>
      <div class="card h-120">
        <img
          src={props.image}
          class="card-image w-full object-cover mb-4 rounded-[12px]"
        />
        <div class="absolute inset-0 card-background" />
        <div class="card-description p-8 justify-end">
          <a
            href="/cart"
            class="text-neutral-300 text-2xl font-bold cursor-pointer"
          >
            <button class="cursor-pointer bg-neutral-900/50 w-full h-20 border-1 border-white rounded-2xl hover:shadow-2xl shadow-neutral-700 transition duration-450 ease-in-out">
              Buy Now
            </button>
          </a>
        </div>
      </div>
      <div class="mt-4 flex flex-col">
        <span class="font-bold text-2xl">{props.title}</span>
        <span class="font-medium text-lg">Rp. {props.price}</span>
      </div>
    </div>
  );
}
