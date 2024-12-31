import React from "react";
import logoWhite from "./../assets/4-white.png";

export default function Footer() {
  return (
    <>
      <div className=" bg-primary text-white">
        <div className="page-container mx-auto px-3 py-24 text-sm">
          <hr className="h-0.5 border-gold mb-16"></hr>
          <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            <div>
              <div className="h-16">
                <img src={logoWhite} className="w-52  mb-2 -mt-2" />
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
          <div className="flex flex-col gap-y-6 sm:flex-row justify-between pt-6 text-base text-gold">
            <p className="text-center sm:text-left">Copyright © 2025</p>
            <div className="flex gap-5 justify-center sm:justify-end  ">
              <p>Privacy Policy</p>
              <p>Terms & Services</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
