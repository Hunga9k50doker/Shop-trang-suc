import React from "react";
import BoxItem from "../components/common/BoxItem";
import arrProj from "../assets/data/Project";
export default function Project() {
  return (
    <div className="project">
      <ul className="project__list">
        {arrProj.map((e, id) => (
          <li key={id} className="project__item">
            <BoxItem
              title={e.title}
              link={e.path}
              img={e.img}
              frontend={e.frontend}
              backend={e.backend}
              otherDesc={e.otherDesc}
              desc={e.desc}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
