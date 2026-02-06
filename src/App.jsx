import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import React from "react";
import chatBot from "./utils/chatbase";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Companies = React.lazy(() => import("./pages/Companies"));

function App() {
  chatBot();
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/*" element={<Navigate to={"/"} replace />} />

        <Route path="/about" element={<About />} />
        <Route path="/about/*" element={<Navigate to={"/about"} replace />} />

        <Route path="/companies" element={<Companies />} />
        <Route
          path="/companies/*"
          element={<Navigate to={"/companies"} replace />}
        />

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
