<<<<<<< HEAD
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Auth from "./components/login-register/auth";
import Homepage from "./components/homepage/homepage";
import Product from "./components/product/product";

import "./index.css";
=======
/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import Login from "./components/login-register/login";
import Register from "./components/login-register/register";
import Homepage from "./components/homepage/homepage";
import Product from "./components/product/product";
import Cart from "./components/cart/cart";
import Checkout from "./components/cart/checkout";
>>>>>>> main

render(
  () => (
    <Router>
      <Route path="/" component={Homepage} />
<<<<<<< HEAD
      <Route path="/about" component={Auth} />
=======
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/product" component={Product} />
      <Route path="/cart" component={Cart} />
      <Route path="/cart/checkout" component={Checkout} />
>>>>>>> main
    </Router>
  ),
  document.getElementById("root")
);
