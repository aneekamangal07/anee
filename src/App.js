import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import "./app.css";

function App() {
  return (
    <div className="App snap-mandatory snap-y ">
      <Navbar className="snap-center" />
      <Hero className="snap-center" />
      <Overview className="snap-center" />
      <Skills className="snap-center" />
      <Projects className="snap-center" />
      <Experiences className="snap-center" />
      <Contact className="snap-center" />
    </div>
  );
}

export default App;
