import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Footer/Contact";
import { LanguageProvider } from "./components/Translate/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div>
        <Home />
        <Navbar />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
