import React, { useState } from "react";
import "./Service.css";
const Service = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggletab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="service section " id="services">
      <h3 className="section_title">Services</h3>
      <span className="section_subtitle">What i offer</span>
      <div className="service_container container grid">
        <div className="services_content">
          <div>
            <i class="bx bx-window-alt service_icon"></i>
            <h2 className="services_title">
              Frontend <br /> Development
            </h2>
          </div>
          <span className="services_button" onClick={() => toggletab(1)}>
            View More
            <i class="uil uil-arrow-right service_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active-model"
                : "services_modal"
            }
          >
            <div className="services_modal_content">
              <i
                onClick={() => toggletab(0)}
                class="uil uil-times service_modal-close"
              ></i>
              <h3 className="services_modal-title">
                Frontend <br /> Development
              </h3>
              <p className="services_modal-desc">
                Service with more then 2.1 years experience.Providing quality
                work to clients and companies
              </p>
              <ul className="services_model-servicess grid">
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Custom React UI Development
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    {" "}
                    API Integration & State Management
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Performance Optimization & SEO
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Bug Fixes & Code Refactoring
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i class="bx bx-code-alt service_icon"></i>
            <h4 className="services_title">
              Backend <br /> Development
            </h4>
          </div>
          <span className="services_button" onClick={() => toggletab(2)}>
            View More
            <i class="uil uil-arrow-right service_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active-model"
                : "services_modal"
            }
          >
            <div className="services_modal_content">
              <i
                onClick={() => toggletab(0)}
                class="uil uil-times service_modal-close"
              ></i>
              <h3 className="services_modal-title">
                Backend <br /> Developments
              </h3>
              <p className="services_modal-desc">
                Service with more then 2.1 years experience.Providing quality
                work to clients and companies
              </p>
              <ul className="services_model-servicess grid">
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    RESTful & GraphQL API Development
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Authentication & Authorization
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Database Design & Optimization
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Deployment & DevOps Setup
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            {/* service_icon */}
            <i class="bx bx-layer service_icon"></i>
            <h3 className="services_title">
              Full Stack <br /> Development
            </h3>
          </div>
          <span className="services_button" onClick={() => toggletab(3)}>
            View More
            <i class="uil uil-arrow-right service_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active-model"
                : "services_modal"
            }
          >
            <div className="services_modal_content">
              <i
                onClick={() => toggletab(0)}
                class="uil uil-times service_modal-close"
              ></i>
              <h3 className="services_modal-title">
                Full Stack <br /> Developments
              </h3>
              <p className="services_modal-desc">
                Service with more then 2.1 years experience.Providing quality
                work to clients and companies
              </p>
              <ul className="services_model-servicess grid">
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Full-Stack Web Application Development
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    API Development & Integration
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Database & Backend Optimization
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Deployment & DevOps Solutions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            {/* service_icon */}

            <i class="bx bxs-coin-stack service_icon"></i>
            <h3 className="services_title">
              Mern Stack <br /> Development
            </h3>
          </div>
          <span className="services_button" onClick={() => toggletab(4)}>
            View More
            <i class="uil uil-arrow-right service_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 4
                ? "services_modal active-model"
                : "services_modal"
            }
          >
            <div className="services_modal_content">
              <i
                onClick={() => toggletab(0)}
                class="uil uil-times service_modal-close"
              ></i>
              <h3 className="services_modal-title">
                Mern Stack <br /> Developments
              </h3>
              <p className="services_modal-desc">
                Service with more then 2.1 years experience.Providing quality
                work to clients and companies
              </p>
              <ul className="services_model-servicess grid">
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Full-Stack Web Application Development
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    API Development & Integration
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Database & Backend Optimization
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Deployment & DevOps Solutions
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
