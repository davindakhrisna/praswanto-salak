export default function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-white p-8">
      <div class="flex items-center flex-shrink-0 text-black ml-10 mr-24">
        <span class="font-bold text-2xl tracking-tight">Praswanto Salak</span>
      </div>

      <div class="flex-grow flex items-center w-auto">
        <div class="text-lg lg:flex-grow">
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white mr-12"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white mr-12"
          >
            About Us
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white mr-12"
          >
            Service
          </a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-white"
          >
            Products
          </a>
        </div>

        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 pt-2 leading-none border rounded text-black border-none hover:border-transparent hover:text-teal-500"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </a>
          <a
            href="#"
            class="inline-block text-sm px-4 pt-2 leading-none border rounded text-black border-none hover:border-transparent hover:text-teal-500"
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
        </div>
      </div>
    </nav>
  );
}
