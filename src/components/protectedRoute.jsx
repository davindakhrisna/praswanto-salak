// frontend/src/components/protectedRoute.jsx
import { onMount, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import Product from "./product/product";

function ProtectedRoute(props) {
  const [isAuthenticated, setIsAuthenticated] = createSignal(true);
  const navigate = useNavigate();
  const element = props.element;

  onMount(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  });

  return isAuthenticated() ? element : null;
}

export default ProtectedRoute;
