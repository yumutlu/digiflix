import React from "react";

import Navbar from "../components/Navbar/Navbar";

import "./Layout.css"
export default function HomeLayout(props) {
  return (
    <div className="text-light blackBackground">
      <Navbar />
      {props.children}
    </div>
  );
}