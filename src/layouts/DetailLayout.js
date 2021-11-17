import React from "react";
import "./Layout.css"
import Navbar from "../components/Navbar/Navbar";

export default function DetailLayout(props) {
  return (
    <div className="text-light blackBackground">
      <Navbar />
      {props.children}
    </div>
  );
}