import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import Auth from "./components/login-register/auth";
import Homepage from "./components/homepage/homepage";
import Product from "./components/product/product";

import "./index.css";

render(
  () => (
    <Router>
      <Route path="/" component={Homepage} />
      <Route path="/about" component={Auth} />
    </Router>
  ),
  document.getElementById("root")
);
