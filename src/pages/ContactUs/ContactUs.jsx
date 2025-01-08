import React, { useState, useEffect } from "react";
import InputField from "../../utils/InputField";

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="page-container mx-auto flex flex-col px-3 py-12 w-full max-w-6xl">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 bg-white md:p-12 space-y-4">
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h1 className="text-6xl sm:pt-0 pt-8 text-slate-700">
                Let's meet
              </h1>
            </div>
            <p className="text-lg text-gold font-bolder py-16">
              Want to get in touch?
            </p>
            <div className="pt-6">
              <p className="font-medium text-slate-700">Email</p>
              <p className="text-gold">info@info.com</p>
            </div>
            <div className="py-2">
              <p className="font-medium text-slate-700">Phone</p>
              <p className="text-gold">044111222</p>
            </div>
            <hr className="block md:hidden border-slate-300 py-10" />
          </div>

          <div className="w-full md:w-1/2 bg-white md:p-12">
            <form className="space-y-6">
              <InputField label="Name" id="name" />
              <InputField label="Email" id="email" type="email" />
              <InputField label="Service" id="service" />
              <InputField label="Phone number" id="phone" />
              <InputField
                label="Message"
                id="message"
                isTextarea={true}
                rows="4"
              />
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary-dark text-white rounded-md shadow-sm bg-primary focus:outline-none focus:ring-primary hover:bg-gold hover:text-black duration-150"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
