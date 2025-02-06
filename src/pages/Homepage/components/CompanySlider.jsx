import { useRef, useEffect } from "react";
import companies from "../../../data/companies";

export default function CompanySlider() {
  const carouselRef = useRef(null);
  const clonedItems = [
    ...companies,
    ...companies,
    ...companies,
    ...companies,
    ...companies,
    ...companies,
    ...companies,
  ]; // Define clonedItems here

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const itemWidth = carousel.firstChild.getBoundingClientRect().width;

    const interval = setInterval(() => {
      if (carousel.scrollLeft >= carousel.scrollWidth - itemWidth) {
        // Reset scroll position to the start
        carousel.scrollLeft = 0;
      } else {
        // Scroll to the next item
        carousel.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }, 2000); // Adjust the interval duration (in milliseconds) as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [clonedItems]);

  return (
    <div className="bg-secondary text-white">
      <div className="page-container space-y-12">
        <div className="py-12">
          <div className="flex justify-center pb-12 gap-5 md:gap-7">
            <div className="w-16 hidden md:block"></div>
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl mx-auto max-w-3xl flex flex-col">
                Our Companies <wbr /> & Special Projects
              </h1>
            </div>
          </div>
          <div className="relative w-full">
            <div
              ref={carouselRef}
              className="flex overflow-x-scroll overflow-y-hidden divide-x-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
              {clonedItems.map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full relative border-silver lg:w-[350px] snap-center flex items-center justify-center"
                >
                  <img
                    className="aspect-video my-6 w-[200px] object-contain max-h-[2000px]"
                    src={company.image}
                    alt={company.name}
                  />
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-secondary absolute h-full top-0 -left-1 bottom-0 w-10"></div>
            <div className="bg-gradient-to-l from-secondary absolute h-full top-0 -right-1 bottom-0 w-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
// import { useRef } from "react";
// import companies from "../../../data/companies";
// export default function CompanySlider() {
//   const carouselRef = useRef(null);
//   const scrollItemRef = useRef(null);

//   const scrollLeftClick = () => {
//     if (carouselRef.current && scrollItemRef.current) {
//       const itemWidth = scrollItemRef.current.getBoundingClientRect().width;
//       carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
//     }
//   };

//   const scrollRightClick = () => {
//     if (carouselRef.current && scrollItemRef.current) {
//       const itemWidth = scrollItemRef.current.getBoundingClientRect().width;
//       carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="bg-secondary text-white">
//       <div className="page-container space-y-12">
//         <div className="py-12">
//           {/* <h1 className=" text-4xl mx-auto max-w-3xl flex flex-col ">Our Companies & Special Projects</h1> */}
//           <div className="flex justify-between  items-start pb-12 gap-5 md:gap-7">
//             {/* <div className=" "> */}
//             <div className="w-16 hidden md:block"></div>
//             <div className="flex items-center ">
//               {/* <p className="text-xl">Our companies</p> */}
//               <h1 className=" text-2xl md:text-3xl mx-auto max-w-3xl flex flex-col ">
//                 Our Companies <wbr /> & Special Projects
//               </h1>
//               {/* <hr className=" h-0.5 bg-dark flex-1 ms-3"></hr> */}
//             </div>
//             <div className="flex gap-5 pt-1 align-top ">
//               <button onClick={scrollLeftClick} className="border-2 p-0.5 border-white rounded-full">
//                 <IconArrowLeft size={18} />
//               </button>

//               <button onClick={scrollRightClick} className="border-2 p-0.5 border-white rounded-full">
//                 <IconArrowRight size={18} />
//               </button>
//             </div>
//           </div>
//           <div className="relative w-full">
//             {/* Scrollable Container */}
//             <div ref={carouselRef} className="flex overflow-x-scroll overflow-y-hidden divide-x-2 snap-x snap-mandatory scroll-smooth  no-scrollbar ">
//               {companies.map((company, index) => (
//                 <div key={index} ref={index === 0 ? scrollItemRef : null} className="flex-shrink-0 w-full relative border-silver  lg:w-[350px] snap-center flex items-center justify-center  ">
//                   <img className="aspect-video my-6 w-[200px] object-contain max-h-[2000px] " src={company.image} alt={company.name} />
//                   {/* <div className="absolute bottom-0 text-sm font-normal">{company.category}</div> */}
//                 </div>
//               ))}
//             </div>
//             <div class="bg-gradient-to-r from-secondary absolute  h-full top-0 -left-1 bottom-0 w-10"></div>
//             <div class="bg-gradient-to-l from-secondary absolute  h-full top-0 -right-1 bottom-0 w-10"></div>
//           </div>
//         </div>
//         {/* Navigation Buttons
//         <button onClick={scrollLeftClick} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
//           ◀
//         </button>
//         <button onClick={scrollRightClick} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
//           ▶
//         </button> */}
//       </div>
//     </div>
//   );
// }
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

// const companies = [
//   {
//     name: "bobby",
//     category: "Technology",
//     image: "/images/companies/bobby.png",
//   },
//   {
//     name: "beverly-park",
//     category: "Real Estate",
//     image: "/images/companies/beverly-park.png",
//   },
//   {
//     name: "countour-global",
//     category: "Technology",
//     image: "/images/companies/countour-global.png",
//   },
//   {
//     name: "credins-bank",
//     category: "Finance",
//     image: "/images/companies/credins-bank.png",
//   },
//   {
//     name: "ephesus",
//     category: "Real Estate",
//     image: "/images/companies/ephesus.png",
//   },
//   {
//     name: "evergreen-valley",
//     category: "Real Estate",
//     image: "/images/companies/evergreen-valley.png",
//   },
//   {
//     name: "green-medical",
//     category: "Technology",
//     image: "/images/companies/green-medical.png",
//   },
//   {
//     name: "sowi-kosova",
//     category: "Technology",
//     image: "/images/companies/sowi-kosova.png",
//   },
//   {
//     name: "noa",
//     category: "Finance",
//     image: "/images/companies/noa.png",
//   },
//   {
//     name: "prishtina-city-center",
//     category: "Real Estate",
//     image: "/images/companies/prishtina-city-center.png",
//   },
//   {
//     name: "rbko-head-office",
//     category: "Finance",
//     image: "/images/companies/rbko-head-office.png",
//   },
//   {
//     name: "sowi-renewable",
//     category: "Technology",
//     image: "/images/companies/sowi-renewable.png",
//   },
// ];
