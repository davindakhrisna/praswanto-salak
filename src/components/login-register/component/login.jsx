import { createSignal } from "solid-js";
import salakImage from "./assets/salak1.jpg";

import eyeOpenIcon from "./assets/Vector.svg";
import eyeClosedIcon from "./assets/hide.svg";

function SignUp() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const [showPassword, setShowPassword] = createSignal(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email());
    console.log("Password:", password());
  };

  return (
    <div class="flex min-h-screen">
      <div
        class="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={`background-image: url(${salakImage});`}
      ></div>

      <div class="flex w-full md:w-1/2 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-6">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900">Sign In</h2>
            <p class="mt-2 text-lg text-gray-600">Enter your email and password</p>
            <p class="text-lg text-gray-600">to access your account</p>
          </div>

          <form class="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                class="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 placeholder-gray-400 
                       focus:border-green-500 focus:ring-green-500"
                placeholder=" Email"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="relative mt-1">
                <input
                  id="password"
                  type={showPassword() ? "text" : "password"}
                  required
                  class="block w-full rounded-md border-gray-300 px-3 py-2 placeholder-gray-400 
                         focus:border-green-500 focus:ring-green-500 pr-10" 
                  placeholder="Password"
                  value={password()}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center px-2 text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setShowPassword(!showPassword())}
                >
                  <img
                    src={showPassword() ? eyeOpenIcon : eyeClosedIcon}
                    alt="toggle password visibility"
                    class="h-5 w-5" 
                  />
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative flex w-full justify-center 
         rounded-xl border border-transparent bg-green-700
         py-2 px-4 text-sm font-medium text-white hover:bg-green-800
         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign In
              </button>
            </div>
          </form>

          <div class="text-center text-sm text-gray-600">
            Dont' have an account?{" "}
            <a
              href="/signin"
              class="font-medium text-green-700 hover:text-green-800"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
