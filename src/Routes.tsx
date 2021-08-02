import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ArticleDetails } from "./pages/ArticleDetails";
import { CreatePost } from "./pages/CreatePost";
import { Home } from "./pages/Home";

export const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/publish" component={CreatePost} />
        <Route exact path="/article/:id" component={ArticleDetails} />
      </Switch>
    </Router>
  );
};
