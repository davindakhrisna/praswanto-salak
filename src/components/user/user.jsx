import { createSignal } from "solid-js";
import Navbar from "../navbar";
import Footer from "../footer";
import Sidebar from "./components/sidebar";
import Profile from "./components/profile";

export default function User() {
  return (
    <>
      <Navbar />
      <div class="pt-38 pb-38 px-18 flex">
        <div class="w-2/8">
          <Sidebar />
        </div>
        <div class="w-full">
          <Profile />
        </div>
      </div>
      <Footer />
    </>
  );
}
