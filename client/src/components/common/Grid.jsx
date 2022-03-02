import React from "react";
import PropsTypes from "prop-types";
export default function Grid(props) {
  const style = {
    gap: props.gap ? `${props.gap}px` : "0",
  };
  const col = props.col ? `grid-col-${props.col}` : "";
  const smCol = props.smCol ? `grid-smCol-${props.smCol}` : "";
  const mdCol = props.mdCol ? `grid-mdCol-${props.mdCol}` : "";
  Grid.propsTypes = {
    col: PropsTypes.number.isRequired,
    mdcol: PropsTypes.number.isRequired,
    smcol: PropsTypes.number.isRequired,
    gap: PropsTypes.number.isRequired,
  };
  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
      {props.children}
    </div>
  );
}
