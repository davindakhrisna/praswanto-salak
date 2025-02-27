import { A } from "@solidjs/router";

function App(props) {
  return (
    <>
      <nav>
        <A href="/">Home</A>
        <A href="/login">Login</A>
        <A href="/register">Register</A>
      </nav>
      <main>{props.children}</main>
    </>
  );
}

export default App;
