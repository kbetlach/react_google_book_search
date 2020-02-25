import React from "react";

function Card({title, author, description}) {
  return (
      <div>
    <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">by: {author}</p>
          <p className="card-text">{description}</p>
        </div>
      </div>
      <div className="col-md-1"></div>
      </div>
  );
}

export default Card;