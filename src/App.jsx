import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Service from "./components/Services/Service";
import Qualifications from "./components/Qualifications/Qualifications";
import Testiomonials from "./components/Testimonials/Testiomonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Work from "./components/Work/Work";
import Faq from "./components/Faq/Faq";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
        <Faq />
        <Qualifications />
        <Work />
        <Testiomonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
