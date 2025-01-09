import React from "react";
import { Link } from "react-router-dom";
import logoWhite from "./../assets/4-white.png";

export default function Footer() {
  return (
    <>
      <div className="bg-primary text-white">
        <div className="page-container mx-auto px-3 py-24 text-sm">
          <hr className="h-0.5 border-gold mb-16"></hr>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            <div className="flex items-center ">
              <div>
                <img src={logoWhite} className="w-60" />
              </div>
            </div>
            <div className="text-base space-y-4">
              <div>
                <h1 className="text-xl pb-5 text-gold">OUR ADDRESS</h1>
              </div>
              <p className="font-light">
                <a
                  href="https://maps.app.goo.gl/jVA9pFJ4uFFuEQXF9"
                  target="_blank"
                >
                  211 Madison Ave, New York, New York, 10016,{" "}
                  <strong>US</strong>
                </a>
              </p>
              <p className="font-light">
                <a
                  href="https://maps.app.goo.gl/RDEbVuhyJe3UqDs99"
                  target="_blank"
                >
                  Mujo Ulqinaku 8, Prishtinë, Kosovo 10000, <strong>XK</strong>
                </a>
              </p>
              <p className="font-light">
                <a
                  href="https://maps.app.goo.gl/WnNqN2QRiEX9igJN6"
                  target="_blank"
                >
                  Ismail Qemajli K2, 7, Tirana, Albania, 10000,{" "}
                  <strong>AL</strong>
                </a>
              </p>
            </div>
            <div className="text-base space-y-4">
              <div>
                <h1 className="text-xl pb-5 text-gold">QUICK LINKS</h1>
              </div>
              <p>
                <Link
                  to="/"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Homepage
                </Link>
              </p>
              <p>
                <Link
                  to="/about-us"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  About Us
                </Link>
              </p>
              <p>
                <Link
                  to="/meet-the-team"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Meet the Team
                </Link>
              </p>
            </div>
          </div>

          <hr className="h-0.5 border-gold mt-16"></hr>
          <div className="flex flex-col gap-y-6 sm:flex-row justify-between pt-6 text-base text-gold">
            <p className="text-center sm:text-left">Copyright © 2025</p>
            <div className="flex gap-5 justify-center sm:justify-end">
              <p>Privacy Policy</p>
              <p>Terms & Services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
