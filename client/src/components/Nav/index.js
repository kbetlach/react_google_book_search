import React from "react";
import "../Nav/index.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
        <h3>Google Books</h3>

        <a className="nav-link" href="/">
        Book Search
      </a>
      <a className="nav-link" href="/SavedBooks">
        Saved Books
      </a>

    </nav>
  );
}

export default Nav;
