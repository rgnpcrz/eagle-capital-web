import bannerImg from "./../../../assets/images/banner-image.png";

export default function Banner() {
  return (
    <>
      <div className="bg-primary  text-white ">
        <div className="page-container mx-auto flex flex-col px-3  -mt-16 pt-16  min-h-screen  py-12">
          <div className="flex-1 flex-col  justify-center flex  md:pr-24">
            <div className="">
              <div className="space-y-4 font-light text-5xl md:text-8xl font-serif">
                <h1 className="">Eagle Capital,</h1>
                <h1 className="">Investing in the future</h1>
              </div>
              <h1 className="text-2xl font-light leading-9 max-w-[800px] ps-12 ml-auto py-12">
                Eagle Capital is a distinguished M&A and investment firm with a strategic focus on secure investments within South Eastern Europe and the United States.
              </h1>
            </div>
          </div>
          {/* <div className="flex justify-between ">
            <div>About us</div>
            <div>News</div>
            <div>Real estate</div>
            <div>Finance</div>
            <div>Technology</div>
          </div> */}
          {/* <div>
            <img className="w-full" src={bannerImg} />
          </div> */}
        </div>
      </div>
    </>
  );
}

//updated v1
// import bannerImg from "./../../../assets/images/banner-image.png";

// export default function Banner() {
//   return (
//     <>
//       <div className="bg-primary text-white">
//         <div className="page-container mx-auto px-3 py-12">
//           <div className="py-12  pr-24">
//             <div style={{ fontFamily: "kepler-3-variable" }} className="space-y-4 font-light text-4xl md:text-8xl">
//               <h1 className="">Eagle Capital,</h1>
//               <h1 className="">Investing in the future</h1>
//             </div>
//             <h1 className="text-2xl font-light leading-9 max-w-[800px] ps-12 ml-auto py-12">
//               Eagle Capital is a distinguished M&A and investment firm with a strategic focus on secure investments within South Eastern Europe and the United States.
//             </h1>
//           </div>
//           <div>
//             <img className="w-full" src={bannerImg} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
