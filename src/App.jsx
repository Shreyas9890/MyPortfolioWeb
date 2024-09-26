import Navbar from "./component/navbar/navbar";
import Intro from "./component/intro/intro";
import About from "./component/about/about";
import Project from "./component/project/project";
import Skills from "./component/skills/skills";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
