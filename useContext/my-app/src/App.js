import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notestate from "./context/notestate";
import Home from "./components/home";
import About from "./components/about";
import Navbar from "./components/navbar";

function App() {
  return (
    <Notestate>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </Notestate>
  );
}

export default App;
