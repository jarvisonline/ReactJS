import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { StoreProvider } from "easy-peasy";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </BrowserRouter>
  </StoreProvider>
);
