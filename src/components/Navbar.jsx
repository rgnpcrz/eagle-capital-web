import logo from "./../assets/4.png";
import logoWhite from "./../assets/4-white.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(true);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
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

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {/* <div className={`w-full fixed duration-200 overflow-hidden ${scrolled ? "bg-primary text-white" : "bg-white text-dark"}`}> */}
      {/* <div className={`w-full h-screen fixed duration-200 overflow-hidden bg-primary text-white  `}></div> */}
      <div className={`w-full fixed duration-200 overflow-hidden bg-primary text-white  `}>
        <div className="page-container mx-auto px-3">
          {/* <div className={`${scrolled ? "h-16" : "h-20"} duration-200 flex justify-between items-center`}> */}
          <div className={`h-16  duration-200 flex justify-between items-center`}>
            <Link to="/">
              {/* <img src={scrolled ? logoWhite : logo} className="w-44" /> */}
              <img src={logoWhite} className="w-44" />
            </Link>
            <div className=" gap-10 hidden lg:flex ">
              <Link to="/">Homepage</Link>
              <Link to="/about-us">News</Link>
              <Link to="/about-us">Real Estate</Link>
              <Link to="/about-us">Finance</Link>
              <Link to="/about-us">Technology</Link>
              <Link to="/about-us">Meet the Team</Link>
            </div>
            <div className="flex lg:hidden gap-10">
              <button type="button" className="" onClick={toggleMenu}>
                Menu - {JSON.stringify(menu)}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16 bg-primary"></div>
    </>
  );
}
