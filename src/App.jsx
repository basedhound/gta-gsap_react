import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <div>
        <h1>Hello React!</h1>
      </div>
    </main>
  );
}

export default App;