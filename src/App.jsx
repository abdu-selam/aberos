import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/ui/Header";
import About from "./pages/about/About";
import Companies from "./pages/companies/Companies";
import Contact from "./pages/contact/Contact";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/contact" element={<Contact  />} />
      </Routes>
    </>
  );
};

export default App;
