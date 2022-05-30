import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Update from "./Pages/Update"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  {/* <App /> */}
  <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
