import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award about_icon"></i>
        <h4 className="about_title">Experience</h4>
        <p className="about_subtitle">1.9 Years</p>
      </div>
      <div className="about_box">
        <i class="bx bx-briefcase-alt about_icon"></i>
        <h4 className="about_title">Completed</h4>
        <p className="about_subtitle">16+ Projects</p>
      </div>
      <div className="about_box">
        <i class="bx bx-support about_icon"></i>
        <h4 className="about_title">Support</h4>
        <p className="about_subtitle">Online 24/7 </p>
      </div>
    </div>
  );
};

export default Info;
