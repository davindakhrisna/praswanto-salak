const WhyChooseSection = () => {
    return (
      <section class="bg-white px-6 md:px-16 lg:px-24 py-12">

        <div class="flex flex-col md:flex-row justify-between items-left border-b border-gray-300 pb-4">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-left">
            Why Choose <br /><span class="text-green-700">Praswanto Salak?</span>
          </h2>
          <span class="text-gray-1000 text-right text-base md:text-base">
            Experience The Natural Sweetness Of Fresh, Organic, And Sustainable Snake Fruit
          </span>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/organic-farming.jpg" alt="Organic Farming" class="w-full h-30 object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 class="text-white text-lg font-bold">Organic Farming</h3>
              <p class="text-white text-sm">
                Grown with care and free from harmful chemicals, organic farming ensures snake fruit is cultivated 
                sustainably while preserving its natural sweetness and quality.
              </p>
            </div>
          </div>
  
          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/local-farmer.jpg" alt="Local Farmer" class="w-full h-56 object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity- flex flex-col justify-end p-4">
              <h3 class="text-white text-lg font-bold">Local Farmer</h3>
            </div>
          </div>

          <div class="relative rounded-xl overflow-hidden shadow-lg">
            <img src="/assets/pest-management.jpg" alt="Pest Management" class="w-full h-56 object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <h3 class="text-white text-lg font-bold">Pest Management</h3>
            </div>
          </div>
        </div>
  
        <div class="mt-6 flex justify-center space-x-2">
          <div class="w-20 h-2 bg-green-600 rounded-full"></div>
          <div class="w-16 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseSection;
  