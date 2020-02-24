import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBook from "./pages/SavedBook";
import BookSearch from "./pages/BookSearch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BookSearch} />
          <Route exact path="/savedbooks" component={SavedBook} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
