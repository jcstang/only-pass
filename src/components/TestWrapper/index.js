import React from "react";
import "./index.css";

export default function TestWrapper(props) {
  return (
    <div className={"FancyWrapper FancyWrapper-" + props.color}>
      {props.children}
    </div>
  );
}
