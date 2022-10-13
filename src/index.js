import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cities from "./Cities.js";
import Form from "./Form.js";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cities />
    <Form />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
