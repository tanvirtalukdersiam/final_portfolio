import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
const Testiomonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h3 className="section_title">My Clients Say</h3>
      <span className="section_subtitle">Testimonials</span>
      <Swiper
        className="testimonials_container"
        loop={true}
        spaceBetween={24}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ Id, image, title, text }) => (
          <SwiperSlide key={Id} className="testimonial_card">
            <img
              src={image}
              alt="testimonial_img"
              className="testimonial_img"
            />
            <h4 className="testimonial_title">{title}</h4>
            <p className="testimonial_text">{text}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testiomonials;
