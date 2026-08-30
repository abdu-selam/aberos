import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

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
