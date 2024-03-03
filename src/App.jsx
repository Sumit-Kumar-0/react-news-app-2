import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home q="all" />} />
        <Route path="/all" element={<Home q="all" />} />
        <Route path="/politics" element={<Home q="politics" />} />
        <Route path="/science" element={<Home q="science" />} />
        <Route path="/crime" element={<Home q="crime" />} />
      </Routes>
    </>
  );
}
