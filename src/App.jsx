import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SearchContext from "./context/SearchContext";

function App() {
  const { search, updateSearch } = useContext(SearchContext);

  const searchHandler = () => {
    updateSearch("newwwwwwwwwww");
  };

  console.log(search);

  return (
    <>
      <h1 onClick={searchHandler}>hello</h1>
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

export default App;
