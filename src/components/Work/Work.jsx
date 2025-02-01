import React from "react";
import "./Work.css";
import Works from "./Works";
const Work = () => {
  return (
    <section className="work_section" id="portfolio">
      <h4 className="section_title">Portfolio</h4>
      <span className="section_subtitle">Most recent Work</span>
      <Works />
    </section>
  );
};

export default Work;
