// import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MainSide from "./components/MainSide";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Training from "./components/Training";

function App() {
  return (
    <div className="container">
      <div className="row g-5">
        <MainSide />
        <div className="col-lg-8">
          <AboutMe />
          <Experience />
          <Education />
          <Training />
          <TechStack />
          <Portfolio />
          <ContactMe />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
