import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

export default function App() {
  return (
    <>
      {/* <div className="container mx-auto"> */}
      <div className="bg-primary h-16">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
