import React from "react";

const WorkItem = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className={"work_img"} />
      <h3 className="work_title">{item.title}</h3>
      <a href="#" className="work_button">
        Demo <i class="bx bx-right-arrow-alt b_icons"></i>
      </a>
    </div>
  );
};

export default WorkItem;
