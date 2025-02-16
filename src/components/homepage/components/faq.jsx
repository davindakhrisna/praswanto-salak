import { createSignal } from "solid-js";

export default function Accordion() {
  // Initialize activeIndex with 1 to open the first accordion item by default
  const [activeIndex, setActiveIndex] = createSignal(1);

  // Helper function to toggle the active index
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex() === index ? null : index);
  };

  return (
    <div class="px-50 pb-28 pt-6">
      <div class="justify-center text-center pb-12">
        <div class="text-4xl font-semibold">
          Frequently Asked Questions (FAQs)
        </div>
        <div class="text-2xl pt-4">
          Explore common queries about Praswanto Salak
        </div>
      </div>
      <div>
        <AccordionItem
          index={1}
          title="How do you store snake fruit to keep it fresh?"
          content="Store snake fruit in a cool, dry place or refrigerate it to extend its freshness. Avoid direct sunlight and excessive moisture, as these can cause the fruit to spoil faster. For best results, keep it in a breathable container or paper bag to maintain its natural texture and flavor."
          isActive={() => activeIndex() === 1}
          toggle={() => toggleAccordion(1)}
        />
        <AccordionItem
          index={2}
          title="How to use Material Tailwind?"
          content="You can use Material Tailwind by importing its components into your Tailwind CSS project."
          isActive={() => activeIndex() === 2}
          toggle={() => toggleAccordion(2)}
        />
        <AccordionItem
          index={3}
          title="What can I do with Material Tailwind?"
          content="Material Tailwind allows you to quickly build modern, responsive websites with a focus on design."
          isActive={() => activeIndex() === 3}
          toggle={() => toggleAccordion(3)}
        />
        <AccordionItem
          index={4}
          title="Why should I use Material Tailwind?"
          content="Material Tailwind provides pre-built components and utilities that save development time and ensure consistency in design."
          isActive={() => activeIndex() === 4}
          toggle={() => toggleAccordion(4)}
        />
      </div>
    </div>
  );
}

// Reusable AccordionItem Component
function AccordionItem(props) {
  return (
    <div
      class={`px-4 rounded-lg border-gray-300 border-1 mb-4 ${
        props.isActive() ? "bg-[#F9F9F9]" : "bg-none"
      }`}
    >
      <button
        onClick={props.toggle}
        class="w-full flex justify-between items-center py-5 text-slate-800 font-semibold"
        style={{
          "border-bottom": props.isActive() ? "solid black 1px" : "0px",
        }}
      >
        <span>{props.title}</span>
        <span
          class={`text-slate-800 bg-lime-700 p-2 rounded-4xl transition-transform duration-300 ${
            props.isActive() ? "rotate-180" : "rotate-0"
          }`}
        >
          {/* Arrow Icon */}
          <svg
            fill="white"
            height="16px"
            width="16px"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
            class="w-3 h-3"
          >
            <path
              d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
            />
          </svg>
        </span>
      </button>
      <div
        class="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          "max-height": props.isActive() ? "100px" : "0px",
          "margin-top": props.isActive() ? "15px" : "0px",
        }}
      >
        <div class="pb-5 text-sm text-slate-500">{props.content}</div>
      </div>
    </div>
  );
}
