import img1 from "./assets/salak1.jpg";
import img2 from "./assets/salak1.jpg";
import img3 from "./assets/salak1.jpg";

function Products() {
  const products = [
    {
      id: 1,
      name: "Lorem Ipsum 1",
      price: "Rp 25.000",
      image: img1,
    },
    {
      id: 2,
      name: "Lorem Ipsum 2",
      price: "Rp 30.000",
      image: img2,
    },
    {
      id: 3,
      name: "Lorem Ipsum 3",
      price: "Rp 35.000",
      image: img3,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pt-0 pb-12">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-gray-900">Snake Fruit Products</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          We offer premium-quality snake fruit products, from fresh salak to dried snacks and beverages.
          Sustainably sourced and carefully processed, each product preserves its natural sweetness and health benefits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 flex flex-col items-start rounded-[12px]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-130 object-cover mb-4 rounded-[12px]"
            />

            <h2 className="font-semibold text-lg text-gray-800">{product.name}</h2>
            
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
