import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export function HomePage() {
  return `
    ${Navbar()}

    <div class="container py-5">
      <div class="text-center">
        <h1>DISC Test</h1>
        <p>Starter siap 🚀</p>
      </div>
    </div>

    ${Footer()}
  `;
}
