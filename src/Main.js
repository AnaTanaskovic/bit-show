import React from "react";
import { Switch, Route } from "react-router-dom";
import ShowsPage from "./view/ShowsPage";
import About from "./components/About";
import SingleShow from "./view/SingleShow";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={ShowsPage} />
      <Route path="/about" component={About} />
      <Route path="/singleshow/:id" component={SingleShow} />
    </Switch>
  );
};

export default Main;
