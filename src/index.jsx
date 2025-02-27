// frontend/src/index.jsx
/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Routes, Route } from "@solidjs/router";
import "./index.css";
import Login from "./components/login-register/login";
import Register from "./components/login-register/register";
import Homepage from "./components/homepage/homepage";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";
import Checkout from "./components/cart/checkout";
import ProtectedRoute from "./components/protectedRoute";

render(
  () => (
    <Router>
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/product"
          element={<ProtectedRoute element={<Product />} />}
        />
        <Route
          path="/cart"
          element={<ProtectedRoute element={<Cart />} />}
        />
        <Route
          path="/cart/checkout"
          element={<ProtectedRoute element={<Checkout />} />}
        />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);