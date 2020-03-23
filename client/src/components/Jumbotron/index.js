import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, marginTop: 25, textAlign: "center", backgroundColor: "transparent", color: "white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
