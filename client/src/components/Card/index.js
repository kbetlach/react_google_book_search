import React from "react";

function Card({title, author, description, link}) {
  return (
    <div>
      <div className="col-md-10">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">by: {author}</p>
          <p className="card-text">{description}</p>
          <a className="btn"href={link} target="_blank" rel="noopener noreferrer">Click here for book details</a>
        </div>
      </div>
    </div>
  );
}

export default Card;