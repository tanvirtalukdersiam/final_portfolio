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

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
        <Qualifications />
        <Testiomonials />
        <Contact />
      </main>
    </div>
  );
};

export default App;
