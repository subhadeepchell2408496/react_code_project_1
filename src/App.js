import logo from "./logo.svg";
import "./App.css";
import { Help } from "./components/Help";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { ClassComponent } from "./components/ClassComponent";
import { Sample1, Sample2, Sample3 } from "./components/Sample";

function App() {
  return (
    <div>
      <Help />
      <Contact />
      <About year="2025" ceo="Ravi Kumar" />
      <ClassComponent />
      <Sample1 />
      <Sample2 />
      <Sample3 />
    </div>
  );
}

export default App;
