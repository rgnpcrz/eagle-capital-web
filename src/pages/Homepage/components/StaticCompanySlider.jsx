import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useRef } from "react";
import companies from "../../../data/companies";
export default function StaticCompanySlider() {
  const carouselRef = useRef(null);
  const scrollItemRef = useRef(null);

  const scrollLeftClick = () => {
    if (carouselRef.current && scrollItemRef.current) {
      const itemWidth = scrollItemRef.current.getBoundingClientRect().width;
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const scrollRightClick = () => {
    if (carouselRef.current && scrollItemRef.current) {
      const itemWidth = scrollItemRef.current.getBoundingClientRect().width;
      carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-secondary text-white">
      <div className="page-container space-y-12">
        <div className="py-12">
          {/* <h1 className=" text-4xl mx-auto max-w-3xl flex flex-col ">Our Companies & Special Projects</h1> */}
          <div className="flex justify-between  items-start pb-12 gap-5 md:gap-7">
            {/* <div className=" "> */}
            <div className="w-16 hidden md:block"></div>
            <div className="flex items-center ">
              {/* <p className="text-xl">Our companies</p> */}
              <h1 className=" text-2xl md:text-3xl mx-auto max-w-3xl flex flex-col ">
                Our Companies <wbr /> & Special Projects
              </h1>
              {/* <hr className=" h-0.5 bg-dark flex-1 ms-3"></hr> */}
            </div>
            <div className="flex gap-5 pt-1 align-top ">
              <button
                onClick={scrollLeftClick}
                className="border-2 p-0.5 border-white rounded-full"
              >
                <IconArrowLeft size={18} />
              </button>

              <button
                onClick={scrollRightClick}
                className="border-2 p-0.5 border-white rounded-full"
              >
                <IconArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="relative w-full">
            {/* Scrollable Container */}
            <div
              ref={carouselRef}
              className="flex overflow-x-scroll overflow-y-hidden divide-x-2 snap-x snap-mandatory scroll-smooth  no-scrollbar "
            >
              {companies.map((company, index) => (
                <div
                  key={index}
                  ref={index === 0 ? scrollItemRef : null}
                  className="flex-shrink-0 w-full relative border-silver  lg:w-[350px] snap-center flex items-center justify-center  "
                >
                  <img
                    className="aspect-video my-6 w-[200px] object-contain max-h-[2000px] "
                    src={company.image}
                    alt={company.name}
                  />
                  {/* <div className="absolute bottom-0 text-sm font-normal">{company.category}</div> */}
                </div>
              ))}
            </div>
            <div class="bg-gradient-to-r from-secondary absolute  h-full top-0 -left-1 bottom-0 w-10"></div>
            <div class="bg-gradient-to-l from-secondary absolute  h-full top-0 -right-1 bottom-0 w-10"></div>
          </div>
        </div>
        {/* Navigation Buttons
        <button onClick={scrollLeftClick} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
          ◀
        </button>
        <button onClick={scrollRightClick} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
          ▶
        </button> */}
      </div>
    </div>
  );
}
