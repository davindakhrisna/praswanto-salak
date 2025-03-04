import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil ID produk dari URL
  const productId = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pt-38 px-18 pb-28">
        <div className="flex flex-row">
          {/* Gambar Utama dan Thumbnail */}
          <div className="md:w-1/2 flex space-x-8">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-[75%] h-120 object-cover rounded-xl"
            />
            <div className="flex flex-col justify-between">
              {product.additionalImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumb ${index + 1}`}
                  className="w-36 h-36 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>

          {/* Detail Produk */}
          <div className="md:w-1/2 flex flex-col justify-between pl-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">
                {product.category} | {product.sold} Sold Out
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4">Rp. {product.price.toLocaleString()}</h3>
              <div className="mb-4">
                <h4 className="font-bold mb-2">Descriptions</h4>
                <p className="text-gray-600 w-[85%]">{product.description}</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold mb-2">Amount</h4>
                <input
                  type="number"
                  min="1"
                  defaultValue="1"
                  className="border border-neutral-300 p-2 w-12 rounded-md"
                />
                <span className="ml-2">Kg</span>
              </div>
            </div>
<<<<<<< HEAD
            <div class="flex space-x-4 mt-12">
              <button class="cursor-pointer w-full bg-lime-700 text-white px-4 py-4 rounded-4xl hover:bg-lime-800 active:shadow-lg transition duration-450 ease-in-out">
                Buy Now
              </button>
              <button class="cursor-pointer w-full border-2 border-black px-4 py-4 rounded-4xl hover:bg-neutral-100 active:shadow-lg transition duration-450 ease-in-out">
=======
            <div className="flex space-x-4 mt-12">
              <button className="w-full bg-lime-700 text-white px-4 py-4 rounded-4xl hover:bg-lime-800 active:shadow-lg transition duration-450 ease-in-out">
                Buy Now
              </button>
              <button className="w-full border-2 border-black px-4 py-4 rounded-4xl hover:bg-neutral-100 active:shadow-lg transition duration-450 ease-in-out">
>>>>>>> 20e6042d0b160b34da0e018e6c001c08c75302ea
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