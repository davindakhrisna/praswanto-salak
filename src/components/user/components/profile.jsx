import Image from "./assets/frame.png";

export default function Profile() {
  return (
    <div>
      <div class="flex flex-col space-y-2 pb-4 border-b border-b-neutral-400">
        <span class="font-bold text-xl">Your Profile</span>
        <span>
          Manage your profile information to control, protect and secure your
          account
        </span>
      </div>
      <div class="flex flex-col space-y-3 pt-6">
        <div class="flex space-x-12">
          <img
            src={Image}
            alt="profileimg"
            class="h-75 w-75 object-cover pointer-events-none"
          />
          <div class="w-full">
            <form class="flex flex-col" role="tabpanel" data-value="profile">
              <div class="flex items-center mb-4">
                <div class="w-[18%] text-slate-400 font-medium">Username</div>
                <input
                  type="text"
                  class="w-[40%] mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-lg pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g Michael"
                />
              </div>
              <div class="flex items-center mb-4">
                <div class="w-[18%] text-slate-400 font-medium">Email</div>
                <input
                  type="text"
                  class="w-[40%] mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-lg pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g john@123.com"
                />
              </div>
              <div class="flex items-center mb-4">
                <div class="w-[18%] text-slate-400 font-medium">
                  Phone Number
                </div>
                <input
                  type="text"
                  class="w-[40%] mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-lg pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="e.g +628829232363"
                />
              </div>
              <div class="flex items-center mb-6">
                <div class="w-[18%] text-slate-400 font-medium">Birth Date</div>
                <input
                  type="text"
                  class="w-[8%] mr-4 text-center mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-lg py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="22"
                />
                <input
                  type="text"
                  class="w-[8%] mr-4 text-center mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-lg py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="09"
                />
                <input
                  type="text"
                  class="w-[10%] text-center mb-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-md border border-slate-200 rounded-lg py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="1998"
                />
              </div>
              <div class="flex items-center">
                <div class="w-[18%] text-slate-400 font-medium">Gender</div>
                <div class="flex items-center space-x-8">
                  <div class="flex items-center justify-center">
                    <input
                      id="male"
                      type="radio"
                      name="gender"
                      value="male"
                      class="h-4 w-4 cursor-pointer"
                    />
                    <label for="male" class="mx-2">
                      Male
                    </label>
                  </div>
                  <div class="flex items-center justify-center">
                    <input
                      id="female"
                      type="radio"
                      name="gender"
                      value="female"
                      class="h-4 w-4 cursor-pointer"
                    />
                    <label for="female" class="mx-2">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="flex items-end justify-between">
          <div class="space-y-4">
            <button class="py-3 rounded-4xl border cursor-pointer w-75 font-semibold text-lg transition ease-in-out duration-450 hover:bg-neutral-100">
              <a href="">Select Image</a>
            </button>
            <div class="flex flex-col space-y-1">
              <span class="text-xs text-slate-500">Image size: max. 1 MB</span>
              <span class="text-xs text-slate-500">
                Image format: .JPEG, .PNG
              </span>
            </div>
          </div>
          <div class="flex space-x-6">
            <button class="py-2 px-6 rounded-4xl border cursor-pointer font-medium transition ease-in-out duration-450 hover:bg-neutral-100">
              <a href="">Edit Profile</a>
            </button>
            <button class="py-2 px-6 rounded-4xl border cursor-pointer font-medium bg-lime-700 text-white transition ease-in-out duration-450 hover:bg-lime-800">
              <a href="">Save Profile</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
