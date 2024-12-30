import React from "react";
import { IconArrowRight, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  return (
    <div className="bg-slate-100">
      <div className="page-container  py-24 text-4xl">
        <div className="md:pl-[10%] lg:pl-[20%] space-y-2 text-3xl md:text-4xl lg:text-5xl">
          <h1 className=" text-primary ">Want to know more about us?</h1>
          <h1 className=" flex  text-gold ">
            Meet the team behind Eagle Capital
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg> */}
          </h1>
          <Link to="/meet-the-team">
            <button className="px-3 bg-white py-1.5 border-2 mt-5 text-base items-center gap-2 hover:gap-5 duration-150 rounded-full border-primary flex">
              View more <IconArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
      {/* <div className=" bg-primary text-white">
        <div className="page-container mx-auto px-3 py-20 text-sm">
          <div className="grid  md:grid-cols-2 gap-5">
            <div className=" md:mx-0 mx-auto max-w-[500px] flex gap-5 flex-1 flex-col justify-between">
              <div className="pr-24">
                <h1 className="text-4xl pb-5  ">GET IN TOUCH</h1>
                <h1 className=" text-base">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                <span className="pr-3 text-base flex items-center">
                  <IconMapPin className="inline-block mr-3" />
                  Address
                </span>
                <span className="pr-3 text-base flex items-center">
                  <IconMail className="inline-block mr-3" />
                  Email
                </span>
                <span className="pr-3 text-base flex items-center">
                  <IconPhone className="inline-block mr-3" />
                  Phone
                </span>
              </div>
            </div>
            <div className="order-last">
              <form className="md:mr-0 mx-auto max-w-[500px] bg-silver text-dark  p-4">
                <div className="grid  grid-cols-2 gap-4 mb-4">
                  <div>
                    <input type="text" id="firstName" name="firstName" className="border-dark border-solid border-2  px-3 py-2 w-full focus:outline-none focus:border-gold" placeholder="First Name" />
                  </div>
                  <div>
                    <input type="text" id="lastName" name="lastName" className="border-dark border-solid border-2 px-3 py-2 w-full focus:outline-none focus:border-gold" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mb-4">
                  <input type="email" id="email" name="email" className="border-dark border-solid border-2 px-3 py-2 w-full focus:outline-none focus:border-gold" placeholder="E-mail" />
                </div>
                <div className="mb-4">
                  <textarea
                    id="message"
                    name="message"
                    className="border-dark border-solid border-2 px-3 py-2 w-full h-32 resize-none focus:outline-none focus:border-gold"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button type="submit" className="bg-dark hover:bg-secondary duration-200 w-full text-white font-bold py-2 px-4 focus:outline-none">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
