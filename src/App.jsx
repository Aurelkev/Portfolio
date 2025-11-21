import About from "./components/About";
import Projects from "./components/Projects";
import ContainWrap from "./components/ContainWrap";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-dark bg-lightGray">
      <main className="px-6 md:px-12 py-2">
        <About />
        <Projects />
        <ContainWrap />
        <Contact />
      </main>
    </div>
  );
}

export default App;
