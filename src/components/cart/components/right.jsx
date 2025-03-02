import { createSignal, For } from "solid-js";
import salakImage from "../assets/salak1.jpg";

function CartItem(props) {
  const { item, onDelete } = props;

  return (
    <div class="flex border-b border-gray-200 py-6 items-center">
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
      <div class="flex flex-col flex-1 ml-1">
        <span class="font-bold text-lg mb-1">{item.name}</span>
        <span class="text-sm">Added on {item.dateAdded}</span>
        <span class="text-sm">Category: {item.category}</span>
      </div>
      <div class="flex flex-col items-end">
        <div class="text-right text-lg font-semibold">
          Rp. {item.price.toLocaleString("id-ID")}
        </div>
        <div class="flex items-center space-x-2">
          <button
            onClick={() => onDelete(item.id)}
            class="stroke-0 h-16 hover:stroke-red-600 flex items-center justify-center m-0 w-12"
          >
            <svg
              class="h-[50%] w-[50%]"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths */}
            </svg>
          </button>
          <button
            class="ml-1 border-2 rounded-full px-14 py-1 mt-1 flex items-center justify-center space-x-5 border-neutral-400"
            style="width: 60px; text-align: center;"
          >
            <span class="cursor-not-allowed">
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 15"
                fill="#A1A1A1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 7.5C12.25 7.61603 12.2039 7.72731 12.1219 7.80936C12.0398 7.89141 11.9285 7.9375 11.8125 7.9375H2.1875C2.07147 7.9375 1.96019 7.89141 1.87814 7.80936C1.79609 7.72731 1.75 7.61603 1.75 7.5C1.75 7.38397 1.79609 7.27269 1.87814 7.19064C1.96019 7.10859 2.07147 7.0625 2.1875 7.0625H11.8125C11.9285 7.0625 12.0398 7.10859 12.1219 7.19064C12.2039 7.27269 12.25 7.38397 12.25 7.5Z"
                  fill="black"
                />
              </svg>
            </span>
            <span class="font-semibold text-md text-neutral-400">
              {item.quantity}
            </span>
            <span class="cursor-not-allowed">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 10"
                fill="#A1A1A1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 5.5C11.25 5.61603 11.2039 5.72731 11.1219 5.80936C11.0398 5.89141 10.9285 5.9375 10.8125 5.9375H6.4375V10.3125C6.4375 10.4285 6.39141 10.5398 6.30936 10.6219C6.22731 10.7039 6.11603 10.75 6 10.75C5.88397 10.75 5.77269 10.7039 5.69064 10.6219C5.60859 10.5398 5.5625 10.4285 5.5625 10.3125V5.9375H1.1875C1.07147 5.9375 0.960188 5.89141 0.878141 5.80936C0.796094 5.72731 0.75 5.61603 0.75 5.5C0.75 5.38397 0.796094 5.27269 0.878141 5.19064C0.960188 5.10859 1.07147 5.0625 1.1875 5.0625H5.5625V0.6875C5.5625 0.571468 5.60859 0.460188 5.69064 0.378141C5.77269 0.296094 5.88397 0.25 6 0.25C6.11603 0.25 6.22731 0.296094 6.30936 0.378141C6.39141 0.460188 6.4375 0.571468 6.4375 0.6875V5.0625H10.8125C10.9285 5.0625 11.0398 5.10859 11.1219 5.19064C11.2039 5.27269 11.25 5.38397 11.25 5.5Z"
                  fill="#A1A1A1"
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

  const totalProduk = () => {
    return cartItems().reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  };

  const totalBelanja = () => {
    const deliveryPrice = 20000;
    return totalProduk() + deliveryPrice;
  };

  const handleQuantityChange = (id, newQty) => {
    setCartItems(
      cartItems().map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <>
      <div class="w-full mx-auto pl-32 pt-8">
        <div class="pb-2 border-b-1 border-b-neutral-300 mb-4">
          <h1 class="text-xl font-bold mb-2">Detail Summary</h1>
          <div class="text-left flex justify-between mt-3">
            <div class="text-md font-medium">Subtotal Product</div>
            <div class="text-md font-medium">
              Rp. {totalProduk().toLocaleString("id-ID")}
            </div>
          </div>
          <div class="text-left flex justify-between mt-2 mb-2">
            <div class="text-md font-medium">Delivery Price</div>
            <div class="text-md font-medium">Rp. 20.000</div>
          </div>
        </div>
        <div class="pb-2 text-left flex justify-between mt-2 mb-4">
          <div class="text-xl font-bold">Total</div>
          <div class="text-xl font-md">
            Rp. {totalBelanja().toLocaleString("id-ID")}
          </div>
        </div>
        <div>
          <For each={cartItems()}>
            {(item) => (
              <CartItem
                item={item}
                onQuantityChange={handleQuantityChange}
                isSelected={selectedItems().includes(item.id)}
              />
            )}
          </For>
        </div>
        <div class="mt-4">
          <label class="block mb-1 text-md text-slate-400 font-normal">
            Notes (Optional)
          </label>
          <div class="relative w-full">
            <textarea class="h-full w-full resize-none rounded-md placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 px-3 py-2.5 text-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"></textarea>
          </div>
        </div>
        <div class="mt-4 pt-4 w-full">
          <div class="flex items-center justify-between w-full">
            <a href="/cart/checkout" class="w-full">
              <button class="bg-lime-700 text-md w-full text-white px-10 font-semibold py-3 rounded-[99px] hover:bg-lime-800 transition duration-450 ease-in-out cursor-pointer">
                Checkout
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
