import { createSignal } from "solid-js";

export default function Admin() {
  const [formData, setFormData] = createSignal({
    title: "",
    price: "",
    images: ["", "", "", ""],
    sold: 0,
    description: "",
  });

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData());
    // Here you can add logic to submit the form data to a server or API
  };

  return (
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        class="w-full max-w-lg p-6 bg-white rounded-lg shadow-md"
      >
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
          />
        </div>
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
          />
        </div>
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
          />
        </div>
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
          ></textarea>
        </div>
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
