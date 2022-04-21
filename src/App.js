import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Layout from "./components/layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
