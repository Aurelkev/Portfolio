import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ContainWrap from "./components/ContainWrap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-dark bg-lightGray">
      <Navbar />
      <main className="px-6 md:px-12 py-8">
        <About />
        <Projects />
        <ContainWrap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
