import Image from "./assets/salak1.jpg";

function ProductDetail() {
  return (
    <div className="max-w-7xl mx-auto px-1 py-8 p-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <div className="flex gap-4">
          <div className="flex-1">
            <img
              src={Image}
              alt="Gambar Produk"
              className="w-full h-100 object-cover rounded-[12px]"
            />
          </div>

          <div className="flex flex-col justify-between h-[300px] space-y-4">
  <img
    src={Image}
    alt="Thumbnail 1"
    className="w-[90px] h-[90px] object-cover rounded-[8px]"
  />
  <img
    src={Image}
    alt="Thumbnail 2"
    className="w-[90px] h-[90px] object-cover rounded-[8px]"
  />
  <img
    src={Image}
    alt="Thumbnail 3"
    className="w-[90px] h-[90px] object-cover rounded-[8px]"
  />
  </div>
</div>

        <div className="flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Salak Madu</h1>
<p className="text-sm text-gray-500">Original Product · 10k+ Sold Out</p>
    <div className="mt-4">
      <span className="text-3xl font-semibold text-gray-900">$150.00</span>
          </div>

          <div className="mt-4">
            <h2 className="text-md font-semibold text-black-700 mb-2">
              Descriptions
            </h2>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="mt-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-black-700"
            >
              Amount
            </label>
            <div className="flex items-center gap-2 mt-1">
    <select id="amount-number" className="border border-gray-300 rounded px-3 py-2">
              <option>1 Kg</option>
              <option>2 Kg</option>
              <option>5 Kg</option>
            </select>
            <span className="text-gray-700">Kg</span>
          </div>
        </div>

          <div className="mt-11 flex items-center space-x-10">
            <button className="bg-lime-700/90 hover:bg-lime-700/90 text-white px-5 py-2 rounded-[100px] font-medium w-[293px]">
              Buy Now
            </button>
            <button className="bg-white hover:bg-gray-100 border border-black-300 text-gray-700 px-5 py-2 rounded-[100px] font-medium w-[293px]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
