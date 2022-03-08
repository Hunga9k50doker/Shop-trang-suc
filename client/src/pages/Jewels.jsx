import React, { useState, useEffect } from "react";
export default function Jewels() {
  let [path, setPath] = useState("");
  path = window.location.pathname;
  useEffect(() => setPath(), [path]);

  return <div className="jewels">{path}</div>;
}
