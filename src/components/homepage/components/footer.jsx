import Image from "./assets/Praswanto Salak.jpg";

export default function Footer() {
  return (
    <footer class="relative w-full pt-10">
      <div class="w-full px-12">
        <div class="grid justify-between gap-4 grid-cols-3">
          <div>
            <p class="block mb-1 text-2xl font-medium text-slate-800">
              Discover
            </p>
            <ul>
              <li>
                <a
                  href="#"
                  class="block font-base text-xl text-slate-400 py-2 hover:text-slate-600 focus:text-slate-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-xl text-slate-400 py-2 hover:text-slate-600 focus:text-slate-600"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-xl text-slate-400 py-2 hover:text-slate-600 focus:text-slate-600"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-xl text-slate-400 py-2 hover:text-slate-600 focus:text-slate-600"
                >
                  Products
                </a>
              </li>
            </ul>
          </div>

          <div class="flex justify-center">
            <div class="">
              <p class="block text-2xl font-medium text-slate-800">Address</p>
              <p class="text-slate-400 text-xl py-2">
                Dukuh Wanasari, Desa Pucungwetan, Kec. Sukoharjo, Kab Wonosobo
              </p>
            </div>
          </div>

          <div class="justify-end flex">
            <div class="w-58">
              <p class="block text-2xl font-medium text-slate-800">Contact</p>
              <p class="text-slate-400 text-xl py-2">
                Salak@gmail.com
                <br />
                +62 234-2342-3002
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-between w-full py-4 mt-20 md:flex-row">
          <p class="block mb-8 text-lg text-center text-slate-400">
            Copyright © Praswanto Salak 2025
          </p>
          <p class="block mb-8 text-lg text-center text-slate-400">
            Privacy Policy & Terms Of Use
          </p>
        </div>
      </div>
      <div className="w-full">
        <img
          src={Image}
          alt="Praswanto"
          class="w-full h-full object-fit pointer-events-none px-3"
        />
      </div>
    </footer>
  );
}
