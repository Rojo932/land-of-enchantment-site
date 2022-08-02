import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
