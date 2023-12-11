import React from "react";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function GetInTouch() {
  return (
    <>
      <div className=" bg-primary text-white">
        <div className="max-w-screen-lg mx-auto px-3 py-20 text-sm">
          <div className="flex gap-5">
            <form className=" bg-silver text-dark w-2/4 p-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
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
            <div className=" h-100 flex flex-col justify-between w-2/4">
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
          </div>
        </div>
      </div>
    </>
  );
}
