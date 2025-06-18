import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
}

export default App;
