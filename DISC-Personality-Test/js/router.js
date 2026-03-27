import { state } from "./state.js";
import { render } from "./app.js";

export function navigate(route) {
  state.route = route;
  render();
}
