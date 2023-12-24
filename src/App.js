import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import ScrolltoTop from "../src/components/ScrollToTop";


function App() {

  return (
      <>
        <ScrolltoTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
  );
}

export default App;
