import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Footer/Contact";

function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
