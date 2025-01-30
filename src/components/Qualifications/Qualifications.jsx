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
                <h3 className="qualification_title">Html,css3</h3>
                <span className="qualification_subtitle">
                  {" "}
                  Moshiur Online Course
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2022
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
                <h3 className="qualification_title">JavaScript</h3>
                <span className="qualification_subtitle">
                  Learn with Sumit (LWS)
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2024
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Javascript</h3>
                <span className="qualification_subtitle">Stack Learner</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2022
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
                <h3 className="qualification_title">Mern Stack Development</h3>
                <span className="qualification_subtitle">
                  Creative it Institute
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2023-24
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Node.js Fundamentals</h3>
                <span className="qualification_subtitle">One Year Academy</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  2024
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
              </div>
              <div>
                <h3 className="qualification_title">
                  Backend Mastery with node.js
                </h3>
                <span className="qualification_subtitle">2024-present</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
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
                <h3 className="qualification_title">Frontend Developer</h3>
                <span className="qualification_subtitle">Future it Care</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  03/2024 -06/2024
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
                <h3 className="qualification_title">Backend Developer</h3>
                <span className="qualification_subtitle">Future It Care</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  06/2024 -11/2024
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Sr.Mern Stack Developer</h3>
                <span className="qualification_subtitle">Future It Care</span>
                <div className="qualification_calender">
                  <i className="uil uil-calender-alt"></i>
                  12/2024 -present
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
