import { render } from "react-dom";
import { useState, StrictMode, lazy, Suspense } from "react";
// import SearchParams from "./SearchParams";
// import { StrictMode, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Details from "./Details";
import ThemeContext from "./ThemeContext";

// import from React

// delete Details & Search params imports

// above const App =
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));


const App = () => {
  const theme = useState("darkblue");
  return (
    <StrictMode>
      <Suspense fallback={<h1>loading route …</h1>}>
      <ThemeContext.Provider value={theme}>
        
          <header className=" mb-10">
            <Link to="/" className="text-6xl text-white hover:text-gray-200">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
      
      </ThemeContext.Provider>
      </Suspense>
    </StrictMode>
  );
};

export default App;