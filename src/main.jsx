import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import CvPage from "./pages/CvPage.jsx";
import Layout from "./components/Layout.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Portfolio">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/cv" element={<CvPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
