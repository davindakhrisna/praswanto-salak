import ProtectedNav from "../utils/protectedNavbar";

export default function Navbar() {
  return (
    <nav class="z-[9999] fixed w-full flex items-center justify-between flex-wrap bg-white p-8 border-b-1 border-b-neutral-200">
      <div class="flex items-center flex-shrink-0 text-black ml-10 mr-24">
        <a class="font-bold text-2xl tracking-tight hover:text-lime-700 duration-300 transition ease-in-out cursor-default">
          Praswanto Salak
        </a>
      </div>

      <div class="flex-grow flex items-center w-auto">
        <div class="text-lg lg:flex-grow">
          <a
            href="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium px-3 rounded-xl mr-6 duration-300 py-1 border-white border-1 transition ease-in-out hover:text-lime-400"
          >
            Home
          </a>
          <a
            href="/#about"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium px-3 rounded-xl mr-6 duration-300 py-1 border-white border-1 transition ease-in-out hover:text-lime-400"
          >
            About Us
          </a>
          <a
            href="/#service"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium px-3 rounded-xl mr-6 duration-300 py-1 border-white border-1 transition ease-in-out hover:text-lime-400"
          >
            Service
          </a>
          <a
            href="/product"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium px-3 rounded-xl mr-6 duration-300 py-1 border-white border-1 transition ease-in-out hover:text-lime-400"
          >
            Products
          </a>
        </div>

        <div class="flex-grow flex items-center justify-end w-auto">
          <ProtectedNav
            register={
              <>
                <a
                  href="/register"
                  class="border-neutral-300 border-1 inline-block px-8 py-3 text-sm bg-white/10 font-medium leading-tight rounded-4xl shadow-sm hover:text-black hover:bg-white hover:shadow-lg active:bg-neutral-300 active:shadow-lg transition duration-450 ease-in-out"
                >
                  Sign In
                </a>
                <a
                  href="/login"
                  class="border-neutral-300 text-white border-1 ml-4 inline-block px-8 py-3 text-sm bg-black font-medium leading-tight rounded-4xl shadow-sm hover:text-white hover:bg-black/95 hover:shadow-lg active:bg-black/80 active:shadow-lg transition duration-450 ease-in-out"
                >
                  Sign Up
                </a>
              </>
            }
          />
          <ProtectedNav
            logged={
              <>
                <a
                  href="/cart"
                  class="text-sm mx-4 leading-none border rounded text-black border-none hover:border-transparent"
                >
                  <svg
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.5756 4.98781C20.5052 4.90356 20.4172 4.8358 20.3177 4.78931C20.2183 4.74282 20.1098 4.71873 20 4.71875H4.87625L4.30625 1.58469C4.27485 1.41188 4.1838 1.25556 4.04897 1.143C3.91414 1.03044 3.74408 0.968775 3.56844 0.96875H1.25C1.05109 0.96875 0.860322 1.04777 0.71967 1.18842C0.579018 1.32907 0.5 1.51984 0.5 1.71875C0.5 1.91766 0.579018 2.10843 0.71967 2.24908C0.860322 2.38973 1.05109 2.46875 1.25 2.46875H2.9375L5.33375 15.6209C5.40434 16.011 5.57671 16.3755 5.83344 16.6775C5.47911 17.0085 5.22336 17.4311 5.09455 17.8985C4.96575 18.3659 4.96892 18.8599 5.10371 19.3256C5.23851 19.7914 5.49966 20.2107 5.85821 20.5371C6.21676 20.8634 6.6587 21.0841 7.13502 21.1747C7.61134 21.2652 8.10344 21.2221 8.55673 21.05C9.01003 20.878 9.40682 20.5837 9.7031 20.1999C9.99938 19.8161 10.1836 19.3578 10.2353 18.8757C10.287 18.3936 10.2041 17.9066 9.99594 17.4688H14.2541C14.0863 17.82 13.9995 18.2045 14 18.5938C14 19.1129 14.154 19.6204 14.4424 20.0521C14.7308 20.4838 15.1408 20.8203 15.6205 21.0189C16.1001 21.2176 16.6279 21.2696 17.1371 21.1683C17.6463 21.067 18.114 20.817 18.4812 20.4499C18.8483 20.0828 19.0983 19.6151 19.1996 19.1059C19.3008 18.5967 19.2489 18.0689 19.0502 17.5892C18.8515 17.1096 18.5151 16.6996 18.0834 16.4111C17.6517 16.1227 17.1442 15.9688 16.625 15.9688H7.54719C7.37155 15.9687 7.20149 15.9071 7.06665 15.7945C6.93182 15.6819 6.84077 15.5256 6.80938 15.3528L6.51219 13.7188H17.3872C17.9141 13.7187 18.4243 13.5337 18.8288 13.196C19.2333 12.8583 19.5064 12.3894 19.6006 11.8709L20.7406 5.60281C20.7599 5.49447 20.7551 5.38322 20.7266 5.27693C20.6981 5.17065 20.6466 5.07194 20.5756 4.98781ZM8.75 18.5938C8.75 18.8163 8.68402 19.0338 8.5604 19.2188C8.43679 19.4038 8.26109 19.548 8.05552 19.6331C7.84995 19.7183 7.62375 19.7405 7.40552 19.6971C7.18729 19.6537 6.98684 19.5466 6.8295 19.3892C6.67217 19.2319 6.56502 19.0315 6.52162 18.8132C6.47821 18.595 6.50049 18.3688 6.58564 18.1632C6.67078 17.9577 6.81498 17.782 6.99998 17.6583C7.18499 17.5347 7.4025 17.4688 7.625 17.4688C7.92337 17.4688 8.20952 17.5873 8.4205 17.7983C8.63147 18.0092 8.75 18.2954 8.75 18.5938ZM17.75 18.5938C17.75 18.8163 17.684 19.0338 17.5604 19.2188C17.4368 19.4038 17.2611 19.548 17.0555 19.6331C16.85 19.7183 16.6238 19.7405 16.4055 19.6971C16.1873 19.6537 15.9868 19.5466 15.8295 19.3892C15.6722 19.2319 15.565 19.0315 15.5216 18.8132C15.4782 18.595 15.5005 18.3688 15.5856 18.1632C15.6708 17.9577 15.815 17.782 16 17.6583C16.185 17.5347 16.4025 17.4688 16.625 17.4688C16.9234 17.4688 17.2095 17.5873 17.4205 17.7983C17.6315 18.0092 17.75 18.2954 17.75 18.5938Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="text-sm mx-4 leading-none border rounded text-black border-none hover:border-transparent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </a>
              </>
            }
          />
        </div>
      </div>
    </nav>
  );
}
