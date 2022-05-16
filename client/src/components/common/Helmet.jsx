import React from "react";
export default function Helmet(props) {
  document.title = "DC - " + props.title;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div >
      {props.children}
    </div>
  );
}
