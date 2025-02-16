export default function Footer() {
  return (
    <>
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
    </>
  );
}
