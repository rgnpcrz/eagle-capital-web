import logo from "./../assets/4.png";
import logoWhite from "./../assets/4-white.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={"w-full fixed duration-200 " + (scrolled ? "bg-primary text-white" : "bg-white text-dark")}>
        <div className="max-w-screen-lg mx-auto px-3">
          <div className="h-16 flex justify-between items-center">
            <Link to="/">
              <img src={scrolled ? logoWhite : logo} className="w-44" />
            </Link>
            <div className="flex gap-10">
              <Link to="/">Homepage</Link>
              <Link to="/about-us">Real Estate</Link>
              <Link to="/about-us">News</Link>
              <Link to="/about-us">Credit</Link>
              <Link to="/about-us">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-primary"></div>
    </>
  );
}
