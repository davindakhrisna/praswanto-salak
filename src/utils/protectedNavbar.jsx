import { onMount, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function ProtectedNav(props) {
  const [isAuthenticated, setIsAuthenticated] = createSignal(true);
  const logged = props.logged;
  const register = props.register;

  const token = getCookie("token");
  console.log(token);
  if (!token) {
    setIsAuthenticated(false);
  } else {
    setIsAuthenticated(true);
  }

  return isAuthenticated() ? logged : register;
}

export default ProtectedNav;
