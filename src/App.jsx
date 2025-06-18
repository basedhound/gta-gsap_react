import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function App() {
  return (
    <main>
      <div>
        <h1 className="text-3xl text-indigo-300">Hello React!</h1>
      </div>
    </main>
  );
}

export default App;
