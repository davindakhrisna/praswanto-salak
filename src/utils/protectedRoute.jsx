// frontend/src/components/protectedRoute.jsx
import { onMount, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

// Utility function to get cookie value
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function ProtectedRoute(props) {
  const [isAuthenticated, setIsAuthenticated] = createSignal(true);
  const navigate = useNavigate();
  const element = props.element;

  onMount(() => {
    const token = getCookie("token");
    console.log(token);
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
