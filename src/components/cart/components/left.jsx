export default function Left() {
  return (
    <div class="relative flex w-[85%] flex-col">
      <div class="">
        <div class="block overflow-visible">
          <div class="relative block w-full overflow-hidden !overflow-x-hidden !overflow-y-visible bg-transparent">
            <div></div>
            <div role="tabpanel" data-value="card">
              <form class="mt-8 flex flex-col">
                <label class="block mb-1 text-sm text-slate-600 mt-4">
                  Card Details
                </label>
                <input
                  type="text"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="1234 5678 9012 3456"
                />

                <div class="flex">
                  <div class="w-full md:w-8/12 mr-4">
                    <label class="block mb-1 text-sm text-slate-600 mt-4">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div class="w-full md:w-4/12">
                    <label class="block mb-1 text-sm text-slate-600 mt-4">
                      CVV
                    </label>
                    <input
                      type="text"
                      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                      placeholder="123"
                    />
                  </div>
                </div>

                <label class="mt-4 block mb-1 text-sm text-slate-600">
                  Holder Name
                </label>
                <input
                  type="text"
                  class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g John Doe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
