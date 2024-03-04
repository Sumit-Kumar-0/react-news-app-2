import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home q="all" />} />
        <Route path="/all" element={<Home q="all" />} />
        <Route path="/politics" element={<Home q="politics" />} />
        <Route path="/science" element={<Home q="science" />} />
        <Route path="/crime" element={<Home q="crime" />} />
        <Route path="/technology" element={<Home q="technology" />} />
        <Route path="/education" element={<Home q="education" />} />
        <Route path="/cricket" element={<Home q="cricket" />} />
        <Route path="/sports" element={<Home q="sports" />} />
        <Route path="/jokes" element={<Home q="jokes" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
