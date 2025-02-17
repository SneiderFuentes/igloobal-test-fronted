import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./screen/ProductList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
