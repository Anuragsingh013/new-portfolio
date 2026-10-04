import styles from "./App.module.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
// import { Projects } from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.glow} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        {/* <Projects /> */}
      </main>
      <Contact />
    </div>
  );
}

export default App;
