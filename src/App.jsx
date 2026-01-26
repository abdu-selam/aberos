import About from "./pages/About";
import Companies from "./pages/Companies";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/home" element={< Home/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/companies" element={< Companies/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
