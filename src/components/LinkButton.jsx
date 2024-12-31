import React from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function LinkButton({ text = "Button", link = "#" }) {
  return (
    <>
      <Link to={link}>
        <button className="px-3 bg-white py-1.5 border-2 mt-5 text-base items-center gap-2 hover:gap-5 duration-150 rounded-full border-primary text-primary flex">
          {text} <IconArrowRight size={18} />
        </button>
      </Link>
    </>
  );
}
