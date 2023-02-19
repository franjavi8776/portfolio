import React from "react";
import { About } from "./Components/About";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <>
      <Home />
      <Nav />
      <About />
      <Contact />
    </>
  );
}

export default App;
