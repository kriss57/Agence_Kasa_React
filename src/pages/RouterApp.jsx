import React from "react";

import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Housing from "./Housing";
import About from "./About";
import Layout from "./Layout";

import { Routes, Route } from "react-router-dom";

const RouterApp = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/home" element={<Home />} />
        <Route path="/housing/:hid" element={<Housing />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default RouterApp;
