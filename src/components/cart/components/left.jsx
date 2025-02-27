import { createSignal } from "solid-js";

export default function Left() {
  const [isOpen, setIsOpen] = createSignal(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen());
  };

  const [name, setName] = createSignal("");
  const [phone, setPhone] = createSignal("");

  const maxNameLength = 50;
  const maxPhoneLength = 15;

  return (
    <div class="relative flex w-[85%] flex-col">
      <div>
        <div class="block overflow-visible">
          <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div role="tabpanel" data-value="card">
              <form class="mt-4 flex flex-col">
                <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                  Address Selection
                </label>
                <div class="relative">
                  <select
                    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md font-semibold border border-slate-200 rounded pl-3 pr-8 py-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
                    onClick={handleSelectClick}
                  >
                    <option value="brazil">Brazil</option>
                    <option value="bucharest">Bucharest</option>
                    <option value="london">London</option>
                    <option value="add-new"></option>
                  </select>
                  <svg
                    fill="none"
                    viewBox="0 0 18 24"
                    stroke-width="3"
                    stroke="currentColor"
                    class={`h-5 w-5 ml-1 absolute top-4.5 right-2.5 text-slate-700 transition-transform duration-300 ${
                      isOpen() ? "rotate-270" : "rotate-90"
                    }`}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 19.5l-7.5-7.5 7.5-7.5"
                    />
                  </svg>
                </div>

                <div class="flex">
                  <div class="w-8/12 mr-4">
                    <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pl-3 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="e.g Jonah"
                      value={name()}
                      onInput={(e) =>
                        setName(e.target.value.slice(0, maxNameLength))
                      }
                    />
                    <div class="text-xs text-slate-400 mt-2 w-full text-end">
                      {name().length}/{maxNameLength}
                    </div>
                  </div>
                  <div class="w-8/12">
                    <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                      Phone number
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="+6282323633283"
                      value={phone()}
                      onInput={(e) =>
                        setPhone(e.target.value.slice(0, maxPhoneLength))
                      }
                    />
                    <div class="text-xs text-slate-400 mt-2 w-full text-end">
                      {phone().length}/{maxPhoneLength}
                    </div>
                  </div>
                </div>

                <div class="flex">
                  <div class="w-8/12 mr-4">
                    <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                      Address Detail
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pl-3 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="e.g Perumahan Wonogiri"
                    />
                  </div>
                  <div class="w-8/12">
                    <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                      City
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="e.g Banyumas"
                    />
                  </div>
                </div>

                <label class="mt-4 block mb-1 text-sm text-slate-500 font-medium">
                  Post Code
                </label>
                <input
                  type="text"
                  class="w-full mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pl-3 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g 531221"
                />

                <div class="mt-4">
                  <div class="relative w-full">
                    <textarea
                      class="h-full min-h-[100px] w-full resize-none rounded-md placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 px-3 py-2.5 text-md ransition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder=" "
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div class="block overflow-visible">
          <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div role="tabpanel" data-value="card">
              <div class="text-2xl font-bold">Payment Method</div>
              <form class="mt-4 flex flex-col">
                <div class="flex items-center pb-4 border-b-1 border-b-neutral-200 space-x-8">
                  <div class="flex items-center justify-center">
                    <svg
                      width="38"
                      height="25"
                      viewBox="0 0 38 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_806_88)">
                        <path
                          d="M22.9598 5.09947L14.7881 5.12634L15.0413 19.9005L23.213 19.8737L22.9598 5.09947Z"
                          fill="#FF5F00"
                        />
                        <path
                          d="M15.3243 12.5441C15.2725 9.53908 16.6349 6.86914 18.7697 5.13743C17.1573 3.88836 15.1363 3.13714 12.9457 3.14431C7.75619 3.1613 3.63002 7.38209 3.71951 12.5821C3.809 17.7821 8.07997 21.9754 13.2695 21.9584C15.4601 21.9513 17.455 21.1869 19.0242 19.9274C16.8305 18.236 15.376 15.5491 15.3243 12.5441Z"
                          fill="#EB001B"
                        />
                        <path
                          d="M34.2808 12.4179C34.3702 17.6179 30.2441 21.8387 25.0545 21.8557C22.864 21.8629 20.8429 21.1117 19.2306 19.8626C21.3914 18.1308 22.7277 15.4609 22.676 12.4559C22.6243 9.45087 21.1702 6.79016 18.976 5.07261C20.5452 3.81313 22.5402 3.04876 24.7307 3.04159C29.9203 3.0246 34.1917 7.24403 34.2808 12.4179Z"
                          fill="#F79E1B"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_806_88">
                          <rect width="38" height="25" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <label for="card" class="ml-1.5 mr-2 block font-semibold">
                      Credit Card
                    </label>
                    <input
                      id="card"
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      class="h-4 w-4"
                    />
                  </div>
                  <div class="flex items-center justify-center">
                    <svg
                      width="38"
                      height="25"
                      viewBox="0 0 45 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_806_89)">
                        <path
                          d="M30.2392 9.40509C30.2392 9.52541 30.2392 9.64574 30.1188 9.76606C29.1563 14.5789 26.0279 16.1431 21.937 16.1431H19.8916C19.4103 16.1431 18.929 16.504 18.929 16.9853L17.8461 23.7233L17.6055 25.6484C17.6055 26.0094 17.8461 26.25 18.0867 26.25H21.8167C22.298 26.25 22.6589 25.8891 22.6589 25.5281V25.2875L23.3809 20.9559V20.7153C23.5012 20.234 23.8622 19.9933 24.2231 19.9933H24.8247C28.4343 19.9933 31.2017 18.5495 31.9236 14.3382C32.2846 12.5334 32.044 11.0896 31.2017 10.127C30.9611 9.88638 30.6001 9.64573 30.2392 9.40509Z"
                          fill="#2199D6"
                        />
                        <path
                          d="M29.2763 9.04413C29.156 9.04413 29.0357 8.92381 28.795 8.92381C28.6747 8.92381 28.434 8.80349 28.3137 8.80349C27.7121 8.68316 27.1105 8.68317 26.5089 8.68317H20.9742C20.8538 8.68317 20.7335 8.68316 20.6132 8.80349C20.3726 8.92381 20.1319 9.16445 20.1319 9.40509L18.9287 16.865V17.1056C19.049 16.6243 19.41 16.2634 19.8913 16.2634H21.9367C26.0276 16.2634 29.156 14.5789 30.1185 9.88638C30.1185 9.76605 30.1185 9.64573 30.2389 9.52541C29.9982 9.40509 29.7576 9.28477 29.5169 9.16445C29.3966 9.04413 29.2763 9.04413 29.2763 9.04413Z"
                          fill="#252C5E"
                        />
                        <path
                          d="M20.1323 9.40508C20.1323 9.16444 20.373 8.92379 20.6136 8.80347C20.7339 8.80347 20.8543 8.68315 20.9746 8.68315H26.5093C27.1109 8.68315 27.8329 8.68315 28.3141 8.80347C28.4345 8.80347 28.6751 8.80348 28.7954 8.9238C28.9158 8.9238 29.0361 9.04412 29.2767 9.04412C29.397 9.04412 29.397 9.04412 29.5174 9.16444C29.758 9.28476 29.9986 9.40508 30.2393 9.5254C30.4799 7.72059 30.2393 6.51738 29.2767 5.43449C28.1938 4.23128 26.2687 3.75 23.8623 3.75H16.7634C16.2821 3.75 15.8008 4.11096 15.8008 4.59224L12.9131 23.1217C12.9131 23.4826 13.1537 23.8436 13.5147 23.8436H17.8462L18.9291 16.865L20.1323 9.40508Z"
                          fill="#263577"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_806_89">
                          <rect width="45" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <label for="paypal" class="mr-2 block font-semibold">
                      PayPal
                    </label>
                    <input
                      id="paypal"
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      class="h-4 w-4"
                    />
                  </div>
                </div>
                <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                  Card Numbers
                </label>
                <input
                  type="text"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pl-3 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="1234 5678 9012 3456"
                />

                <div class="flex">
                  <div class="w-full md:w-8/12 mr-4">
                    <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pl-3 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div class="w-full md:w-4/12">
                    <label class="block mb-1 text-sm text-slate-500 mt-4 font-medium">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md px-3 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="123"
                    />
                  </div>
                </div>

                <label class="mt-4 block mb-1 text-sm text-slate-500 font-medium">
                  Holder Name
                </label>
                <input
                  type="text"
                  class="w-full mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-md pl-3 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g John Doe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
