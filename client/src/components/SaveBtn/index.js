import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <button className="btn btn-success" {...props} tabIndex="0">
      Save
    </button>
  );
}

export default SaveBtn;