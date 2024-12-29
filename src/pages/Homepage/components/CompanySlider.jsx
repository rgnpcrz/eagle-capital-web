import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useRef, useState } from "react";

const companies = [
  {
    name: "bobby",
    category: "Technology",
    image: "/images/companies/bobby.png",
  },
  {
    name: "beverly-park",
    category: "Real Estate",
    image: "/images/companies/beverly-park.png",
  },
  {
    name: "countour-global",
    category: "Technology",
    image: "/images/companies/countour-global.png",
  },
  {
    name: "credins-bank",
    category: "Finance",
    image: "/images/companies/credins-bank.png",
  },
  {
    name: "ephesus",
    category: "Real Estate",
    image: "/images/companies/ephesus.png",
  },
  {
    name: "evergreen-valley",
    category: "Real Estate",
    image: "/images/companies/evergreen-valley.png",
  },
  {
    name: "green-medical",
    category: "Technology",
    image: "/images/companies/green-medical.png",
  },
  {
    name: "sowi-kosova",
    category: "Technology",
    image: "/images/companies/sowi-kosova.png",
  },
  {
    name: "noa",
    category: "Finance",
    image: "/images/companies/noa.png",
  },
  {
    name: "prishtina-city-center",
    category: "Real Estate",
    image: "/images/companies/prishtina-city-center.png",
  },
  {
    name: "rbko-head-office",
    category: "Finance",
    image: "/images/companies/rbko-head-office.png",
  },
  {
    name: "sowi-renewable",
    category: "Technology",
    image: "/images/companies/sowi-renewable.png",
  },
];

export default function CompanySlider() {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // const handleMouseDown = (e) => {
  //   if (carouselRef.current) {
  //     setIsDragging(true);
  //     setStartX(e.pageX);
  //     carouselRef.current.style.cursor = "grabbing"; // Change cursor on drag
  //   }
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging || !carouselRef.current) return;
  //   const x = e.pageX;
  //   const walk = (x - startX) * 1.5; // Adjust multiplier for sensitivity
  //   carouselRef.current.scrollLeft -= walk;
  //   setStartX(x); // Update start position to the current position
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  //   if (carouselRef.current) {
  //     carouselRef.current.style.cursor = "grab"; // Reset cursor
  //   }
  // };

  // const handleMouseLeave = () => {
  //   setIsDragging(false);
  //   if (carouselRef.current) {
  //     carouselRef.current.style.cursor = "grab"; // Reset cursor
  //   }
  // };

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
    <div className="bg-secondary text-white">
      <div className="page-container ">
        <div className="py-24">
          <div className="flex justify-between items-center pb-6">
            <div className="flex items-center w-40">
              <p>Our companies</p>
              <hr className=" h-0.5 bg-dark flex-1 ms-3"></hr>
            </div>
            <div className="flex gap-5  ">
              <button onClick={scrollLeftClick} className="border-2 p-0.5 border-white rounded-full">
                <IconArrowLeft size={18} />
              </button>

              <button onClick={scrollRightClick} className="border-2 p-0.5 border-white rounded-full">
                <IconArrowRight size={18} />
              </button>
            </div>
          </div>
          <div className="relative w-full">
            {/* Scrollable Container */}
            <div ref={carouselRef} className="flex overflow-x-scroll overflow-y-hidden divide-x-2 snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar cursor-grab">
              {companies.map((company, index) => (
                <div key={index} className="flex-shrink-0 w-full relative border-silver pl-4 lg:w-[350px] snap-center  flex items-center justify-center text-xl font-bold ">
                  <img className="aspect-video object-contain max-h-[2000px] bg-white" src={company.image} alt={company.name} />
                  {/* <div className="absolute bottom-0 text-sm font-normal">{company.category}</div> */}
                </div>
              ))}
            </div>
            <div class="bg-gradient-to-r from-secondary absolute -mx-1 h-full top-0 left-0 bottom-0 w-20"></div>
            <div class="bg-gradient-to-l from-secondary absolute -mx-1 h-full top-0 right-0 bottom-0 w-20"></div>
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
// export default function CompanySlider() {
//   return (
//     <>
//       <div className="">
//         <div className="page-container mx-auto px-3 py-12 text-sm">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-primary">
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/bobby.png" />
//               <p className="absolute top-4 left-4">Technology</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/beverly-park.png" />
//               <p className="absolute top-4 left-4">Real Estate</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/countour-global.png" />
//               <p className="absolute top-4 left-4">Technology</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/credins-bank.png" />
//               <p className="absolute top-4 left-4">Finance</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/ephesus.png" />
//               <p className="absolute top-4 left-4">Real Estate</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/evergreen-valley.png" />
//               <p className="absolute top-4 left-4">Real Estate</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/green-medical.png" />
//               <p className="absolute top-4 left-4">Technology</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/sowi-kosova.png" />
//               <p className="absolute top-4 left-4">Technology</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/noa.png" />
//               <p className="absolute top-4 left-4">Finance</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/prishtina-city-center.png" />
//               <p className="absolute text-white top-4 left-4">Real Estate</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/rbko-head-office.png" />
//               <p className="absolute top-4 left-4">Finance</p>
//             </div>
//             <div className=" relative">
//               <img className="object-cover aspect-square" src="/images/companies/sowi-renewable.png" />
//               <p className="absolute top-4 left-4">Technology</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
