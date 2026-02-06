import Hero from "./Hero";
import Action from "./Action";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutSnapshot from "./AboutSnapshot";

const Home = () => (
  <div className="space-y-10">
    <Hero />
    <AboutSnapshot />
    <Skills />
    <Projects />
    <Action />
  </div>
);

export default Home;
