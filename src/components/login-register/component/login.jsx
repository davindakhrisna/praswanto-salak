import { createSignal } from "solid-js";
import Image from "./asset/salak.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = createSignal(false);

  return (
    <img
    src={Image}
    alt="Salak Image"
    class="absolute inset-0 h-screen w-screen"
    >
      <div class="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h2 class="text-2xl font-bold text-white text-center">Sign In</h2>
        <p class="text-white text-center text-sm mb-4">
          Enter Your Email And Password To Access Your Account
        </p>
        <div class="space-y-4">
          <input
            type="email"
            placeholder="Email"
            class="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-300"
          />
          <div class="relative">
            <input
              type={showPassword() ? "text" : "password"}
              placeholder="Password"
              class="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring focus:ring-green-300"
            />
            <button
              type="button"
              class="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword())}
            >
              👁️
            </button>
          </div>
          <button class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
            Sign In
          </button>
          <p class="text-white text-center text-sm">
            Don't Have An Account? <a href="#" class="font-bold">Sign Up</a>
          </p>
        </div>
      </div>
    </img>
  );
};

export default Login;
