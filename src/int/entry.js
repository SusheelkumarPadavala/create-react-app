import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export default class entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}
