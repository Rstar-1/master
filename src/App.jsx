import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navfoot/Navbar";
import Footer from "./components/navfoot/Footer";
import Home from "./pages/home/Home";
import Front from "./pages/main/frontend/Front";
import Digital from "./pages/main/digital/Digital";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/frontend" element={<Front />} />
        <Route path="/digital" element={<Digital />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
