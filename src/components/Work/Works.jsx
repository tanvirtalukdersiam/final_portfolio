import React, { useEffect, useState } from "react";
import { projectData } from "./Data";
import { projectNav } from "./Data";
import WorkItem from "./WorkItem";

const Works = () => {
  const [item, setItem] = useState({ name: "All" });
  const [project, setProject] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProject(projectData);
    } else {
      const filteredProject = projectData.filter((project) => {
        return project.category === item.name;
      });
      setProject(filteredProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className="work_filter">
        {projectNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? "active-work" : ""} work_item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="work_container container grid">
        {project.map((item, index) => (
          <WorkItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
