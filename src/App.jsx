import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage/Homepage.jsx";

export default function App() {
  return (
    <>
      <div className="">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
