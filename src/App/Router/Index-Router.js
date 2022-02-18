import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Home/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;