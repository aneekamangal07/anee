import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
