import React, { useState } from "react";
import "./Qualifications.css";
const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggletab = (index) => {
    setToggleState(index);
  };
  return (
    <sections className="qualification section">
      <h3 className="section_title">Qualification</h3>
      <span className="section_subtitle">My personal Journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_button_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggletab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_button_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggletab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Design</h3>
                <span className="qualification_subtitle">spain -institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Art Defector</h3>
                <span className="qualification_subtitle">spain -institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Development</h3>
                <span className="qualification_subtitle">spain -institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2018-20
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Ux expert</h3>
                <span className="qualification_subtitle">spain -institute</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2017-18
                </div>
              </div>
            </div>
          </div>
          {/* jdhg-------- */}
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Products Designer</h3>
                <span className="qualification_subtitle">Microsoft -Spain</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">UX Designer</h3>
                <span className="qualification_subtitle">Apple -Spain</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2021-present
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Figma - spain </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2018-20
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </sections>
  );
};

export default Qualifications;
