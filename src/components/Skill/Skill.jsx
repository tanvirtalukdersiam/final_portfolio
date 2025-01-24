import React from "react";
import "./Skill.css";
import Frontend from "./Frontend";
import Backend from "./Backend";

const Skill = () => {
  return (
    <section className="skill section" id="skill">
      <h3 className="section_title">Skills</h3>
      <span className="section_subtitle">My Technical Level</span>
      <div className="skill_container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skill;
