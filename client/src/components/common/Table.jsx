import React from "react";

const Table = (props) => {
  return (
    <div className="table p-4">
      <h6 className="table__title pt-2 ps-4">{props.title}</h6>
      <p className="table__subtitle pb-2 ps-4">{props.subtitle}</p>
      {props.children}
    </div>
  );
};

export default Table;
