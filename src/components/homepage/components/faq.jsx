export default function () {
  const toggleAnswer = (id) => {
    const answer = document.getElementById(`${id}-answer`);
    const icon = document.getElementById(`${id}-icon`);

    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      icon.setAttribute("d", "M5 12l7 7 7-7");
    } else {
      answer.classList.add("hidden");
      icon.setAttribute("d", "M19 9l-7 7-7-7");
    }
  };

  return (
    <div class="container mx-auto px-6 py-12">
      <h1 class="text-3xl font-bold text-center mb-4">
        Frequently Asked Questions (FAQ)
      </h1>
      <p class="text-center mb-8">
        Explore common queries about Praswanto Salak
      </p>

      <div class="space-y-4">
        <div class="border rounded p-4 relative">
          <button
            class="w-full flex justify-between items-center"
            onclick={() => toggleAnswer("faq1")}
          >
            <span class="text-lg font-semibold">
              How do you store snake fruit to keep it fresh?
            </span>
            <svg
              id="faq1-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div id="faq1-answer" class="mt-2 hidden">
            Store snake fruit in a cool, dry place or refrigerate it to extend
            its freshness. Avoid direct sunlight and excessive moisture, as
            these can cause the fruit to spoil faster. For best results, keep it
            in a breathable container or paper bag to maintain its natural
            texture and flavor.
          </div>
        </div>

        <div class="border rounded p-4 relative">
          <button
            class="w-full flex justify-between items-center"
            onclick={() => toggleAnswer("faq2")}
          >
            <span class="text-lg font-semibold">
              What does snake fruit taste like?
            </span>
            <svg
              id="faq2-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div id="faq2-answer" class="mt-2 hidden">
            Snake fruit has a sweet and slightly tangy flavor. It is often
            compared to a combination of apple and pear, with a hint of tropical
            sweetness.
          </div>
        </div>

        <div class="border rounded p-4 relative">
          <button
            class="w-full flex justify-between items-center"
            onclick={() => toggleAnswer("faq3")}
          >
            <span class="text-lg font-semibold">Is snake fruit healthy?</span>
            <svg
              id="faq3-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div id="faq3-answer" class="mt-2 hidden">
            Yes, snake fruit is very healthy. It is rich in vitamins, minerals,
            and antioxidants. It also contains dietary fiber which aids in
            digestion.
          </div>
        </div>

        <div class="border rounded p-4 relative">
          <button
            class="w-full flex justify-between items-center"
            onclick={() => toggleAnswer("faq4")}
          >
            <span class="text-lg font-semibold">
              How do you eat snake fruit?
            </span>
            <svg
              id="faq4-icon"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div id="faq4-answer" class="mt-2 hidden">
            To eat snake fruit, peel off the outer skin and cut the fruit into
            slices. Remove the seeds and enjoy the juicy flesh inside.
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <p>Can't Find Your Question?</p>
        <a
          href="#"
          class="inline-block px-6 py-3 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Contact Customer Service
        </a>
      </div>
    </div>
  );
}
