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
            <h4 className="services_title">
              Frontend <br /> Development
            </h4>
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
                    I develop the user interface
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web Page Development</p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I position your company brand
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
                    I develop the user interface
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">Web Page Development</p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I create ux element interactions
                  </p>
                </li>
                <li className="services_model-services">
                  <i class="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    I position your company brand
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
