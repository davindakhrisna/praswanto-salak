import { createSignal } from "solid-js";

export default function Admin() {
  const [formData, setFormData] = createSignal({
    title: "",
    price: "",
    images: ["", "", "", ""],
    sold: 0,
    description: "",
  });

  // Handle input changes (text, number, textarea)
  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Handle image upload and convert to Base64
  const handleImageChange = (index, event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          images: prev.images.map((img, i) =>
            i === index ? reader.result : img
          ),
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data for submission
    const formDataToSend = {
      title: formData().title,
      price: parseFloat(formData().price), // Convert price to float
      images: formData().images.filter((img) => img !== ""), // Filter out empty images
      sold: parseInt(formData().sold), // Convert sold to integer
      description: formData().description,
    };

    try {
      // Send data to backend using fetch
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message); // Log success message
        alert("Product added successfully!");
        // Reset form after successful submission
        setFormData({
          title: "",
          price: "",
          images: ["", "", "", ""],
          sold: 0,
          description: "",
        });
      } else {
        const error = await response.json();
        console.error(error);
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        class="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
      >
        {/* Title Field */}
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData().title}
            onInput={(e) => handleInputChange("title", e.target.value)}
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Price Field */}
        <div class="mb-4">
          <label for="price" class="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData().price}
            onInput={(e) => handleInputChange("price", e.target.value)}
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Images Field */}
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Images</label>
          {[0, 1, 2, 3].map((index) => (
            <div key={index} class="mt-2">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageChange(index, e)}
                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
              {formData().images[index] && (
                <img
                  src={formData().images[index]}
                  alt={`Uploaded ${index + 1}`}
                  class="mt-2 h-20 w-20 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>

        {/* Sold Field */}
        <div class="mb-4">
          <label for="sold" class="block text-sm font-medium text-gray-700">
            Sold
          </label>
          <input
            type="number"
            id="sold"
            name="sold"
            value={formData().sold}
            onInput={(e) => handleInputChange("sold", parseInt(e.target.value))}
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Description Field */}
        <div class="mb-4">
          <label
            for="description"
            class="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData().description}
            onInput={(e) => handleInputChange("description", e.target.value)}
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}