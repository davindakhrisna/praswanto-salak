import { createSignal, For } from "solid-js";
import salakImage from "./assets/salak1.jpg";
import Navbar from "../navbar";
import Footer from "../footer";

// Function Prop per Product
function CartItem(props) {
  const { item, onDelete, onSelect, onQuantityChange, isSelected } = props;

  // Tambah/Kurang Product
  const handleSingleButtonClick = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const buttonWidth = rect.width;
    const area = buttonWidth / 3;

    // Logic Tambah Kurang Product

    if (clickX < area) {
      if (item.quantity > 1) {
        onQuantityChange(item.id, item.quantity - 1);
      }
    } else if (clickX > 2 * area) {
      onQuantityChange(item.id, item.quantity + 1);
    }
  };

  return (
    <div class="flex border-b border-gray-200 py-6 items-center">
      {/* Checkbox */}
      <input
        type="checkbox"
        class="h-5 w-5 mr-4"
        // Penting: "checked" harus mengikuti state isSelected
        checked={isSelected}
        onChange={(e) => onSelect(item.id, e.target.checked)}
      />

      {/* Gambar (placeholder jika tidak ada) */}
      <div class="w-26 h-26 bg-gray-200 mr-4 flex items-center justify-center !rounded-lg">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            class="object-cover w-full h-full !rounded-lg"
          />
        ) : (
          <span class="text-gray-500">No Image</span>
        )}
      </div>

      {/* Detail produk */}
      <div class="flex flex-col flex-1 ml-1">
        <span class="font-bold text-lg mb-1">{item.name}</span>
        <span class="text-sm">Added on {item.dateAdded}</span>
        <span class="text-sm">Category: {item.category}</span>
      </div>

      {/* Bagian Harga, Trash Icon & Quantity Button di sisi kanan */}
      <div class="flex flex-col items-end">
        {/* Harga */}
        <div class="mb-2 text-right text-lg font-semibold">
          Rp. {item.price.toLocaleString("harga-produk")}
        </div>

        {/* Baris Trash Icon dan Button */}
        <div class="flex items-center space-x-2">
          {/* Tombol Delete */}
          <button
            onClick={() => onDelete(item.id)}
            class="stroke-0 h-16 hover:stroke-red-600 flex items-center justify-center m-0 w-12"
          >
            {/* Ikon tempat sampah */}
            <svg
              class="h-[50%] w-[50%]"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 7.48C18.67 7.15 15.32 6.98 11.98 6.98C10 6.98 8.02 7.08 6.04 7.28L4 7.48"
                stroke="#AAAAAA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 6.47L9.72 5.16C9.88 4.21 10 3.5 11.69 3.5H14.31C16 3.5 16.13 4.25 16.28 5.17L16.5 6.47"
                stroke="#AAAAAA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.8504 10.64L19.2004 20.71C19.0904 22.28 19.0004 23.5 16.2104 23.5H9.79039C7.00039 23.5 6.91039 22.28 6.80039 20.71L6.15039 10.64"
                stroke="#AAAAAA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.3301 18H14.6601"
                stroke="#AAAAAA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 14H15.5"
                stroke="#AAAAAA"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          {/* Single Button: "- 1 +" dengan rounded style */}
          <button
            class="ml-1 border-2 rounded-full px-14 py-2 mt-1 hover:bg-gray-100 flex items-center justify-center space-x-5"
            style="width: 60px; text-align: center;"
            onClick={handleSingleButtonClick}
          >
            <span class="cursor-pointer">
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 7.5C12.25 7.61603 12.2039 7.72731 12.1219 7.80936C12.0398 7.89141 11.9285 7.9375 11.8125 7.9375H2.1875C2.07147 7.9375 1.96019 7.89141 1.87814 7.80936C1.79609 7.72731 1.75 7.61603 1.75 7.5C1.75 7.38397 1.79609 7.27269 1.87814 7.19064C1.96019 7.10859 2.07147 7.0625 2.1875 7.0625H11.8125C11.9285 7.0625 12.0398 7.10859 12.1219 7.19064C12.2039 7.27269 12.25 7.38397 12.25 7.5Z"
                  fill="black"
                />
              </svg>
            </span>
            <span class="font-semibold text-md">{item.quantity}</span>
            <span class="cursor-pointer">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 5.5C11.25 5.61603 11.2039 5.72731 11.1219 5.80936C11.0398 5.89141 10.9285 5.9375 10.8125 5.9375H6.4375V10.3125C6.4375 10.4285 6.39141 10.5398 6.30936 10.6219C6.22731 10.7039 6.11603 10.75 6 10.75C5.88397 10.75 5.77269 10.7039 5.69064 10.6219C5.60859 10.5398 5.5625 10.4285 5.5625 10.3125V5.9375H1.1875C1.07147 5.9375 0.960188 5.89141 0.878141 5.80936C0.796094 5.72731 0.75 5.61603 0.75 5.5C0.75 5.38397 0.796094 5.27269 0.878141 5.19064C0.960188 5.10859 1.07147 5.0625 1.1875 5.0625H5.5625V0.6875C5.5625 0.571468 5.60859 0.460188 5.69064 0.378141C5.77269 0.296094 5.88397 0.25 6 0.25C6.11603 0.25 6.22731 0.296094 6.30936 0.378141C6.39141 0.460188 6.4375 0.571468 6.4375 0.6875V5.0625H10.8125C10.9285 5.0625 11.0398 5.10859 11.1219 5.19064C11.2039 5.27269 11.25 5.38397 11.25 5.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  const initialCartItems = [
    {
      id: 1,
      name: "Keripik Salak",
      dateAdded: "January 9, 2025",
      category: "Processed product",
      price: 24000,
      quantity: 1,
      imageUrl: salakImage,
    },
    {
      id: 2,
      name: "Salak Madu",
      dateAdded: "January 9, 2025",
      category: "Original product",
      price: 55000,
      quantity: 1,
      imageUrl: salakImage,
    },
  ];

  const [cartItems, setCartItems] = createSignal(initialCartItems);
  const [selectedItems, setSelectedItems] = createSignal([]);

  // Hitung total belanja
  const totalBelanja = () => {
    return cartItems().reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  // Fungsi handle delete item
  const handleDeleteItem = (id) => {
    setCartItems(cartItems().filter((item) => item.id !== id));
    setSelectedItems(selectedItems().filter((selId) => selId !== id));
  };

  // Fungsi handle select item (checkbox per item)
  const handleSelectItem = (id, checked) => {
    if (checked) {
      setSelectedItems([...selectedItems(), id]);
    } else {
      setSelectedItems(selectedItems().filter((selId) => selId !== id));
    }
  };

  // Fungsi select all
  const handleSelectAll = (checked) => {
    if (checked) {
      // masukkan semua id item
      setSelectedItems(cartItems().map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Fungsi delete selected
  const handleDeleteSelected = () => {
    setCartItems(
      cartItems().filter((item) => !selectedItems().includes(item.id))
    );
    setSelectedItems([]);
  };

  // Fungsi handle quantity change
  const handleQuantityChange = (id, newQty) => {
    setCartItems(
      cartItems().map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <>
      <Navbar />
      <div class="w-full mx-auto p-24 pt-44">
        <div class="pb-2 border-b-1 border-b-neutral-300 mb-2">
          <h1 class="text-2xl font-bold mb-2">Your Personal Cart</h1>
          <p class="mb-6 text-lg">
            Manage your cart items, adjust quantities, and proceed to checkout
            securely.
          </p>

          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center">
              <input
                type="checkbox"
                class="h-5 w-5 mr-4 shadow-2xl"
                // "Select all" checkbox akan checked jika
                // panjang selectedItems sama dengan jumlah cartItems
                checked={
                  selectedItems().length === cartItems().length &&
                  cartItems().length > 0
                }
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
              <span class="text-lg font-bold">
                Select all ({cartItems().length})
              </span>
            </div>

            <button
              class="font-base text-lg text-red-600 hover:text-red-800"
              onClick={handleDeleteSelected}
            >
              Delete
            </button>
          </div>
        </div>

        <div>
          <For each={cartItems()}>
            {(item) => (
              <CartItem
                item={item}
                onDelete={handleDeleteItem}
                onSelect={handleSelectItem}
                onQuantityChange={handleQuantityChange}
                // Kirim properti isSelected agar checkbox item ter-check
                isSelected={selectedItems().includes(item.id)}
              />
            )}
          </For>
        </div>

        <div class="mt-4 pt-4">
          <div class="flex items-center justify-between w-full">
            <div class="text-left">
              <div class="text-lg font-bold">Total belanja</div>
              <div class="text-lg font-bold">
                Rp. {totalBelanja().toLocaleString("harga-produk")}
              </div>
            </div>

            {/* Tombol Checkout */}
            <a href="/cart/checkout">
              <button class="bg-lime-700 text-md text-white px-10 font-semibold py-3 rounded-[99px] hover:bg-lime-800 transition duration-450 ease-in-out cursor-pointer">
                Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
