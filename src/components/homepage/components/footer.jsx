import { createSignal } from "solid-js";

export default function NewsletterSection() {
  const [email, setEmail] = createSignal("");

  return (
    <div class="flex flex-col min-h-screen">
      <div
        class="relative w-full h-140 bg-cover bg-center"
        style={{
          "background-image":
            "url('https://images.unsplash.com/photo-1528092744838-b91de0a10615?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div class="absolute inset-0 bg- bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
          <h2 class="text-3xl font-bold">
            Get Our Latest Updates And Exclusive Promo By
          </h2>
          <h2 class="text-3xl font-bold">Subscribing To Our Newsletter</h2>
          <div class="mt-4 flex border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your Email Address"
              class="px-4 py-2 text-gray-700 bg-white focus:outline-none flex-1"
              value={email()}
              onInput={(e) => setEmail(e.target.value)}
            />
            <button class="bg-green-600 text-white px-6 py-2 hover:bg-green-700 shadow-md">
              Join Now
            </button>
          </div>
        </div>
      </div>

      <footer class="bg-white py-8 px-10 flex flex-col md:flex-row justify-between text-gray-700">
        <div>
          <h3 class="font-bold">Discover</h3>
          <ul class="mt-2 space-y-1 text-gray-500">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Products</li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold">Address</h3>
          <p class="mt-2 text-gray-500">
            Dukuh Wanasari, Desa Pucungwetan,
            <br />
            Kec. Sukoharjo, Kab Wonosobo
          </p>
        </div>
        <div>
          <h3 class="font-bold">Contact</h3>
          <p class="mt-2 text-gray-500">Salak@gmail.com</p>
          <p class="text-gray-500">+62 234-2342-3002</p>
        </div>
      </footer>
      <div class="bg-white-100 text-left py-4 text-sm text-gray-500">
        <p>Copyright &copy; Praswanto Salak 2023</p>
      </div>
      <div class="bg-white-100 text-right py-4 text-sm text-gray-500">
        <p class="mt-1">
          <a href="#" class="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" class="hover:underline">
            Term Of Use
          </a>
        </p>
      </div>
    </div>
  );
}
