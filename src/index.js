import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation, Footer, Artist } from "./components";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App tab="home" />);

ReactDOM.createRoot(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Artist />} />
      {/* <Route path="/show" element={<Show />} /> */}
    </Routes>
    <Footer />
  </Router>,
  <App />,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

render(<App />, document.getElementById("root"));
