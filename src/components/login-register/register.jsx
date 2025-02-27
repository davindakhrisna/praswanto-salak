import { createSignal } from "solid-js";
import { Router, Route } from "@solidjs/router";
import Image from "./assets/salak1.jpg";
import eyeOpenIcon from "./assets/Vector.svg";
import eyeClosedIcon from "./assets/hide.svg";
import { useNavigate } from "@solidjs/router";

function SignUp() {
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [confirmPassword, setConfirmPassword] = createSignal("");
  const [phoneNumber, setPhoneNumber] = createSignal("");
  const [showPassword, setShowPassword] = createSignal(false);
  const [showConfirmPassword, setShowConfirmPassword] = createSignal(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password() !== confirmPassword()) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name(),
          email: email(),
          password: password(),
          confirmPassword: confirmPassword(),
          phoneNumber: phoneNumber(),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    }
  };

  return (
    <div class="flex h-screen">
      <div
        class="flex w-4/6 bg-cover bg-right"
        style={`background-image: url(${Image});`}
      ></div>
      <div class="flex w-7/12 flex-col items-center justify-center px-4 py-8">
        <div class="w-full space-y-6 px-30 pt-6">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-gray-900">Sign Up</h2>
            <p class="mt-2 text-xl text-gray-800">
              Enter Your Details To Register
            </p>
          </div>
          <form class="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                id="name"
                type="text"
                required
                class="outline-0 mt-2 block w-full rounded-lg pl-6 px-3 py-4 text-base font-medium bg-neutral-100"
                placeholder="Name"
                value={name()}
                onInput={(e) => setName(e.currentTarget.value)}
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                required
                class="outline-0 mt-2 block w-full rounded-lg pl-6 px-3 py-4 text-base font-medium bg-neutral-100"
                placeholder="Email"
                value={email()}
                onInput={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div>
              <div class="relative mt-1">
                <input
                  id="password"
                  type={showPassword() ? "text" : "password"}
                  required
                  class="outline-0 mt-2 block w-full rounded-lg pl-6 px-3 py-4 text-base font-medium bg-neutral-100"
                  placeholder="Password"
                  value={password()}
                  onInput={(e) => setPassword(e.currentTarget.value)}
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center px-2 
                         text-sm text-gray-600 hover:text-gray-900"
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
              <div class="relative mt-1">
                <input
                  id="confirm-password"
                  type={showConfirmPassword() ? "text" : "password"}
                  required
                  class="outline-0 mt-2 block w-full rounded-lg pl-6 px-3 py-4 text-base font-medium bg-neutral-100"
                  placeholder="Confirm Password"
                  value={confirmPassword()}
                  onInput={(e) => setConfirmPassword(e.currentTarget.value)}
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 flex items-center px-2 
                         text-sm text-gray-600 hover:text-gray-900"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword())}
                >
                  <img
                    src={showConfirmPassword() ? eyeOpenIcon : eyeClosedIcon}
                    alt="toggle confirm password visibility"
                    class="h-5 w-5"
                  />
                </button>
              </div>
            </div>
            <div>
              <input
                id="phone"
                type="tel"
                required
                class="outline-0 mt-2 block w-full rounded-lg pl-6 px-3 py-4 text-base font-medium bg-neutral-100"
                placeholder="Phone Number"
                value={phoneNumber()}
                onInput={(e) => setPhoneNumber(e.currentTarget.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                class="mt-8 group relative flex w-full justify-center
                      rounded-4xl border border-transparent bg-lime-700/90
                      py-4 px-4 text-medium font-light text-white hover:bg-lime-800 shadow-md transition duration-450 ease-in-out focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div class="text-center text-4xs font-normal text-gray-400/85">
            Don't Have An Account?{" "}
            <a
              href="/signin"
              class="font-bold text-gray-500/90 hover:text-gray-800 transition duration-450 ease-in-out"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
