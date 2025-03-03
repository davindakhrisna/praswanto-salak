// frontend/src/index.jsx
/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";
import Login from "./components/login-register/login";
import Register from "./components/login-register/register";
import Homepage from "./components/homepage/homepage";
import Product from "./components/product/product";
import Detail from "./components/product/detail";
import Cart from "./components/cart/cart";
import Checkout from "./components/cart/checkout";
import ProtectedRoute from "./utils/protectedRoute";
import User from "./components/user/user";
import Admin from "./components/admin/admin";

render(
  () => (
    <Router>
      <Route path="/" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route
        path="/admin"
        component={() => <ProtectedRoute element={<Admin />} />}
      />
      <Route
        path="/profile"
        component={() => <ProtectedRoute element={<User />} />}
      />
      <Route
        path="/product"
        component={() => <ProtectedRoute element={<Product />} />}
      />
      <Route
        path="/product/detail"
        component={() => <ProtectedRoute element={<Detail />} />}
      />
      <Route
        path="/cart"
        component={() => <ProtectedRoute element={<Cart />} />}
      />
      <Route
        path="/cart/checkout"
        component={() => <ProtectedRoute element={<Checkout />} />}
      />
    </Router>
  ),
  document.getElementById("root")
);
