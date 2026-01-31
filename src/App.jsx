import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Companies = React.lazy(() => import("./pages/Companies"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
