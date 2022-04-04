import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="filter__title">{props.title}</div>
      <ul className="filter__list">{props.children}</ul>
    </div>
  );
};
export { Filter };
