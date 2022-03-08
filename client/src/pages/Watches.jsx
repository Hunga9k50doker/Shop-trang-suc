import React, { useState, useEffect } from "react";

export default function Watches() {
  let [path, setPath] = useState("");
  path = window.location.pathname;
  useEffect(() => setPath(), [path]);

  return <div className="watches">{path}</div>;
}
