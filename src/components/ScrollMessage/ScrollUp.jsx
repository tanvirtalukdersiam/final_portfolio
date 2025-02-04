import React from "react";
import "./ScrollMessage.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const ScrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 220) ScrollUp.classList.add("show-scroll");
    else ScrollUp.classList.remove("show-scroll");
  });
  return (
    <div>
      <a
        className="scrollup"
        target="_blank"
        href="https://wa.me/+8801743860970"
      >
        <i class="bx bxl-whatsapp icon"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
