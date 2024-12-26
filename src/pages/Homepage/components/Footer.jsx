import React from "react";
import logoWhite from "./../../../assets/4-white.png";

export default function Footer() {
  return (
    <>
      <div className=" bg-primary text-white">
        <div className="max-w-screen-lg mx-auto px-3 pt-12 text-sm">
          <div className=" grid grid-cols-3 gap-4">
            <div>
              <div className="h-16">
                <img src={logoWhite} className="w-52 -translate-y-2" />
              </div>
              <p className="w-52 text-base">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..</p>
            </div>
            <div className="text-base">
              <div className="h-16">
                <h1 className="text-xl pb-5  ">OUR ADDRESS</h1>
              </div>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
            <div className="text-base">
              <div className="h-16">
                <h1 className="text-xl pb-5  ">QUICK LINKS</h1>
              </div>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
              <p>Lorem ipsum</p>
            </div>
          </div>
          <hr className="h-0.5 border-gold mt-16"></hr>
          <div className="flex justify-between py-6 text-base text-gold">
            <p>Copyright © 2024</p>
            <div className="flex gap-5">
              <p>Privacy Policy</p>
              <p>Terms & Services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
