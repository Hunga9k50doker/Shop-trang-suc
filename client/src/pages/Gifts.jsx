import React,{ useState,useEffect} from "react";

export default function Gifts() {
  let [path, setPath] = useState("");
  path = window.location.pathname;
  useEffect(() => setPath(), [path]);
  return <div className="gifts">{path}</div>;
}
