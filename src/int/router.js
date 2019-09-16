import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home";
import Users from "../pages/users";
import User from "../pages/user";
const Router = () => {
  return (
    <div className="container">
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/user/:userId" component={User} />
    </div>
  );
};

export default Router;
