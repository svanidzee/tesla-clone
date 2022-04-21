import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Layout from "./components/layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Header />
    //   <Home />
    // </div>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
