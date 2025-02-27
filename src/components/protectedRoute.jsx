// frontend/src/components/protectedRoute.jsx
import { onMount, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

function ProtectedRoute(props) {
  const [isAuthenticated, setIsAuthenticated] = createSignal(false);
  const navigate = useNavigate();

  onMount(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      navigate("/login");
    } else {
      setIsAuthenticated(true);
    }
  });

  return isAuthenticated() ? props.element : null;
}

export default ProtectedRoute;