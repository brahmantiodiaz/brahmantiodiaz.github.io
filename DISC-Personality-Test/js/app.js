import { state } from "./state.js";
import { HomePage } from "./pages/HomePage.js";

export function render() {
  const app = document.getElementById("app");

  if (state.route === "home") {
    app.innerHTML = HomePage();
  }
}

render();
