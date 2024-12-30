import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useRef } from "react";
import teamMembers from "../../../data/teamMembers";

export default function TeamCarousel() {
  const carouselRef = useRef(null);

  const scrollLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className="page-container ">
        <div className="py-24">
          <div className="flex justify-between items-center pb-6">
            <div className="w-40 text-3xl">
              <p>Our Team</p>
            </div>
            <div className="flex gap-5  ">
              <button onClick={scrollLeftClick} className="border-2 p-0.5 border-black rounded-full">
                <IconArrowLeft size={24} />
              </button>

              <button onClick={scrollRightClick} className="border-2 p-0.5 border-black rounded-full">
                <IconArrowRight size={24} />
              </button>
            </div>
          </div>

          <div className="relative w-full py-12">
            {/* Scrollable Container */}
            <div ref={carouselRef} className="flex overflow-x-scroll   overflow-y-hidden  snap-x snap-mandatory scroll-smooth gap-24 no-scrollbar ">
              {teamMembers.map((member, index) => (
                <>
                  <div className="flex-shrink-0 w-full lg:w-3/5 relative snap-center flex">
                    <div className="flex flex-col  gap-8">
                      <div className="max-w-[350px] h-[350px] rounded-xl overflow-hidden bg-slate-50">
                        <img className="h-full w-full object-cover object-bottom" src={member.image} alt={member.name} />
                      </div>
                      <div className="flex-1 flex flex-col gap-8 ">
                        <div>
                          <h1 className="text-3xl pb-2">{member.name}</h1>
                          <p className="text-xl">{member.position}</p>
                        </div>

                        <div className="space-y-4">
                          <p className="text-base">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            {/* <div class="bg-gradient-to-r from-white absolute  h-full top-0 -left-4 bottom-0 w-10"></div>
            <div class="bg-gradient-to-l from-white absolute  h-full top-0 -right-4 bottom-0 w-10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
