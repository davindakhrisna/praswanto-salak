import { createSignal, onMount } from "solid-js";
import Navbar from "../navbar";
import Footer from "../footer";

function ProductDetail() {
  // State untuk menyimpan data produk
  const [product, setProduct] = createSignal({
    title: "",
    price: 0,
    sold: 0,
    description: "",
    imageUrl: "",
    additionalImages: [],
  });

  // Fungsi untuk mengambil data produk berdasarkan ID
  const fetchProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${productId}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data); // Set data produk ke state
      } else {
        console.error("Failed to fetch product");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  // Lifecycle hook untuk memuat data saat komponen dimuat
  onMount(() => {
    // Ambil ID produk dari URL (misalnya menggunakan query parameter)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId) {
      fetchProduct(productId); // Panggil fungsi untuk mengambil data produk
    } else {
      console.error("Product ID is missing in the URL");
    }
  });

  return (
    <>
      <Navbar />
      <div class="pt-38 px-18 pb-28">
        <div class="flex flex-row">
          {/* Bagian Gambar */}
          <div class="md:w-1/2 flex space-x-8">
            {/* Gambar Utama */}
            <img
              src={product().imageUrl ? `data:image/jpeg;base64,${product().imageUrl}` : ""}
              alt="Product Main Image"
              class="w-[75%] h-120 object-cover rounded-xl"
            />
            {/* Thumbnail Gambar Tambahan */}
            <div class="flex flex-col justify-between">
              {product().additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={`data:image/jpeg;base64,${img}`}
                  alt={`Thumb ${index + 1}`}
                  class="w-36 h-36 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>

          {/* Bagian Detail Produk */}
          <div class="md:w-1/2 flex flex-col justify-between pl-12">
            <div>
              <h2 class="text-2xl font-bold mb-2">{product().title}</h2>
              <p class="text-gray-600 mb-4">{`${product().sold} Sold Out`}</p>
            </div>
            <div>
              <h3 class="text-4xl font-bold mb-4">${product().price.toFixed(2)}</h3>
              <div class="mb-4">
                <h4 class="font-bold mb-2">Descriptions</h4>
                <p class="text-gray-600 w-[85%]">{product().description}</p>
              </div>
              <div class="mb-4">
                <h4 class="font-bold mb-2">Amount</h4>
                <input class="border border-neutral-300 p-2 w-12 rounded-md" />
                <span class="ml-2">Kg</span>
              </div>
            </div>
            <div class="flex space-x-4 mt-12">
              <button class="cursor-pointer w-full bg-lime-700 text-white px-4 py-4 rounded-4xl hover:bg-lime-800 active:shadow-lg transition duration-450 ease-in-out">
                Buy Now
              </button>
              <button class="cursor-pointer w-full border-2 border-black px-4 py-4 rounded-4xl hover:bg-neutral-100 active:shadow-lg transition duration-450 ease-in-out">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;