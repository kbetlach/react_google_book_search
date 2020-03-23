import React from "react";
import "./style.css";

function Card({title, author, description, link, image}) {
  return (
    <div className="row no-gutters">
  
      <div className="col-md-2">
        <div className="bookImage" alt="book cover art">{image}</div>
      </div>

      <div className="col-md-10">
          <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text"><u>by: {author}</u></p>
          <p className="card-text">"{description}"</p>
          <a className="btn"href={link} target="_blank" rel="noopener noreferrer">Click here for book details</a>
        </div>
      </div>
    </div>
  );
}

export default Card;