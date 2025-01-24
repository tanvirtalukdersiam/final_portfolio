import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Service from "./components/Services/Service";
const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skill />
        <Service />
      </main>
    </div>
  );
};

export default App;
