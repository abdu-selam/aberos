import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
