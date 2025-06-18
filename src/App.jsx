import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import FirstVideo from "./sections/FirstVideo";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
    </main>
  );
}

export default App;
