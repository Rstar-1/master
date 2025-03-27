import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import Home from "./pages/home/Home";
import Digital from "./pages/main/digital/Digital";
import Backend from "./pages/main/backend/Backend";
import Frontend from "./pages/main/frontend/Frontend";
import Builder from "./pages/main/builder/Builder";
import Section from "./pages/main/section/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/section" element={<Section />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
