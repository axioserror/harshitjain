import { useState, useEffect } from "react";
import Loader from "./pages/Loader/Loader";
import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./pages/Nav/Nav";
import Jobs from "./pages/Jobs/Jobs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Acvm from "./pages/Achievements/Acvm";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 10000); 
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <Home />
          <About />
          <Jobs />
          <Projects />
          <Acvm />
          <Contact />
        </div>
      )}
    </>
  );
}

export default App;