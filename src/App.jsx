import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./pages/Nav/Nav";
import Jobs from "./pages/Jobs/Jobs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Acvm from "./pages/Achievements/Acvm";
function App() {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Jobs />
      <Projects />
      <Acvm />
      <Contact />
    </>
  );
}

export default App;
