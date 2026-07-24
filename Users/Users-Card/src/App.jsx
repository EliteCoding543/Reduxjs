import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import AllUsers from "./Components/AllUsers";
import AddUsers from "./Components/AddUsers";
import BlockUsers from "./Components/BlcokUsers";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/addUsers" element={<AddUsers />} />
        <Route path="/blockUsers" element={<BlockUsers />} />
      </Routes>
    </>
  );
};

export default App;