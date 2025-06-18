import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <NavBar />
    </main>
  );
}

export default App;
