import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import NewsPage from "./pages/NewsPage/NewsPage.jsx";
import NewsItem from "./components/NewsItem.jsx";
import RealEstate from "./pages/Categories/RealEstate/RealEstate.jsx";
import Finance from "./pages/Categories/Finance/Finance.jsx";
import Technology from "./pages/Categories/Technology/Technology.jsx";
import MeetTheTeam from "./pages/MeetTheTeam/MeetTheTeam.jsx";
import ScrollTop from "./utils/ScrollTop.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="">
        <ScrollTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news_item/:id" element={<NewsItem />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}
