import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Footer from "./pages/Homepage/components/Footer.jsx";

export default function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
