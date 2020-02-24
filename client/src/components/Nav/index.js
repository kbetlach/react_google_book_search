import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
        <h2>Google Books</h2>

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
