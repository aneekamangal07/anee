import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;
