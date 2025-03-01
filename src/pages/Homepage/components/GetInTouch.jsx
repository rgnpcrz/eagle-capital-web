import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function GetInTouch() {
  return (
    <div className="bg-slate-100">
      <div className="page-container  py-24 text-4xl">
        <div className="md:pl-[10%] lg:pl-[20%] space-y-2 text-3xl md:text-4xl lg:text-5xl">
          <h1 className=" text-primary ">Want to know more about us?</h1>
          <h1 className=" flex  text-gold ">
            Meet the team behind Eagle Capital
          </h1>
          <Link to="/meet-the-team">
            <button
              className="px-3 bg-white py-1.5 border-2 mt-5 text-base items-center gap-2 hover:gap-5 duration-150 rounded-full border-primary flex"
              data-aos="slide-up"
            >
              View more <IconArrowRight size={18} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
