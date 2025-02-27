import { createSignal } from "solid-js";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = createSignal(1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex() === index ? null : index);
  };

  return (
    <div class="px-35 py-30">
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
          content="Store snake fruit in a cool, dry place away from sunlight and moisture. For longer freshness, refrigerate it in a breathable container like a paper or mesh bag. Avoid airtight containers to prevent spoilage. Eat ripe fruit within a few days, while unripe fruit can ripen at room temperature. This keeps its texture and flavor intact."
          isActive={() => activeIndex() === 1}
          toggle={() => toggleAccordion(1)}
        />
        <AccordionItem
          index={2}
          title="What does snake fruit taste like?"
          content="Snake fruit has a unique flavor that combines sweet, tangy, and slightly acidic notes. Its taste is often described as a mix of pineapple, banana, and citrus, with a hint of nuttiness. The texture is firm and crunchy when fresh, similar to an apple, but it becomes softer as it ripens. The fruit’s distinct aroma and complex flavor make it a memorable tropical treat."
          isActive={() => activeIndex() === 2}
          toggle={() => toggleAccordion(2)}
        />
        <AccordionItem
          index={3}
          title="Is snake fruit healthy?"
          content="Yes, snake fruit is healthy and packed with nutrients. It is rich in vitamins like vitamin C, which supports immunity, and contains minerals such as potassium, calcium, and iron. The fruit also provides dietary fiber, aiding digestion and promoting gut health. Additionally, it contains antioxidants that help combat free radicals and reduce inflammation."
          isActive={() => activeIndex() === 3}
          toggle={() => toggleAccordion(3)}
        />
        <AccordionItem
          index={4}
          title="How do you eat snake fruit?"
          content="To eat snake fruit, start by peeling off its scaly, snake-like skin, which can be done by pinching the top and pulling it away. Inside, you’ll find segmented flesh similar to garlic cloves. Remove any seeds, as they are not edible. The fruit can be eaten fresh on its own, added to fruit salads, or used in desserts and smoothies."
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
      class={`px-4 rounded-lg border-gray-300 border-1 mb-6 ${
        props.isActive() ? "bg-[#F9F9F9]" : "bg-none"
      }`}
    >
      <button
        onClick={props.toggle}
        class={`w-full flex justify-between items-center border-neutral-200 py-5 text-slate-800 font-semibold text-xl ${
          props.isActive() ? "border-b-1" : "border-b-0"
        }`}
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
          "max-height": props.isActive() ? "200px" : "0px",
          "margin-top": props.isActive() ? "15px" : "0px",
        }}
      >
        <div class="pb-5 text-lg text-slate-500">{props.content}</div>
      </div>
    </div>
  );
}
