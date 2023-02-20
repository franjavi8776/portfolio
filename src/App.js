import React from "react";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Nav } from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Blog";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
}

export default App;
