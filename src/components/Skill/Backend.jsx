import React from "react";

const Backend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Development</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bxl-nodejs sIcon1"></i>
            <div>
              <h4 className="skills_name">Node js</h4>
              <span className="skills_level"></span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bxl-edge sIcon1"></i>
            <div>
              <h4 className="skills_name">Express js</h4>
              <span className="skills_level"></span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bxl-firebase sIcon1"></i>
            <div>
              <h4 className="skills_name">Firebase</h4>
              <span className="skills_level"></span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bxl-mongodb sIcon1"></i>
            <div>
              <h4 className="skills_name">MongoDB</h4>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bxl-medium sIcon1"></i>
            <div>
              <h4 className="skills_name">Mongoose</h4>
              <span className="skills_level"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
