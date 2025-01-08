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
      setScrolled(scrollTop > 80);
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      {/* <div className={`w-full fixed duration-200 overflow-hidden ${scrolled ? "bg-primary text-white" : "bg-white text-dark"}`}> */}
      <div className={`${menu ? "ml-0" : "ml-[100%]"} w-full p-5 z-[9999998] border-white border-t  top-16 bottom-0 fixed duration-300 overflow-hidden bg-white text-dark  `}>
        <div className=" gap-5   flex flex-col " onClick={toggleMenu}>
          <Link to="/">Homepage</Link>
          {/* <Link to="/news">News</Link>
          <Link to="/real-estate">Real Estate</Link>
          <Link to="/finance">Finance</Link>
          <Link to="/technology">Technology</Link> */}
          <Link to="/about-us">About us</Link>
          <Link to="/meet-the-team">Meet the Team</Link>
          <Link to="/contact-us">Contact</Link>
        </div>
      </div>
      <div className={`w-full fixed duration-200 overflow-hidden bg-white text-dark z-[9999999]  `}>
        <div className="page-container mx-auto px-3">
          {/* <div className={`${scrolled ? "h-16" : "h-20"} duration-200 flex justify-between items-center`}> */}
          <div className={`h-16  duration-200 flex justify-between items-center`}>
            <Link to="/">
              {/* <img src={scrolled ? logoWhite : logo} className="w-44" /> */}
              <img src={logo} className="w-44" />
            </Link>
            <div className=" gap-10 hidden lg:flex ">
              <Link to="/">Homepage</Link>
              {/* <Link to="/news">News</Link>
          <Link to="/real-estate">Real Estate</Link>
          <Link to="/finance">Finance</Link>
          <Link to="/technology">Technology</Link> */}
              <Link to="/about-us">About us</Link>
              <Link to="/meet-the-team">Meet the Team</Link>
              <Link to="/contact-us">Contact</Link>
            </div>
            <div className="flex lg:hidden gap-10">
              <button type="button" className="" onClick={toggleMenu}>
                {menu ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
}
