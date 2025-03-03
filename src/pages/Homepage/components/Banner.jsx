import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/cover/moon.jpg",
  "/images/cover/banner.webp",
  "/images/cover/real-estate.webp",
];

export default function Banner() {
  return (
    <div className="bg-primary text-white relative min-h-screen flex items-center">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        fadeEffect={{ crossFade: true }}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-primary bg-opacity-50 z-10"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 page-container mx-auto flex flex-col px-3 -mt-16 pt-16 min-h-screen py-12">
        <div className="flex-1 flex-col py-6 justify-center flex md:pr-24">
          <div>
            <div
              className="space-y-4 font-light text-5xl md:text-8xl"
              data-aos="fade-right"
            >
              <h1 className="">Eagle Capital,</h1>
              <h1 className="">Investing in the future</h1>
            </div>
            <h1
              className="text-2xl font-light leading-9 max-w-[800px] ps-12 ml-auto py-12"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              Eagle Capital is a distinguished M&A and investment firm with a
              strategic focus on secure investments within South Eastern Europe
              and the United States.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Banner() {
//   return (
//     <div className="bg-primary text-white relative min-h-screen flex items-center">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: "url('/banner.webp')", // Use public folder URL
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//         }}
//       />
//       {/* Background Overlay (optional, for readability) */}
//       <div className="absolute inset-0 bg-black bg-opacity-30"></div>

//       {/* Content Wrapper */}
//       <div className="relative z-10 page-container mx-auto flex flex-col px-3 -mt-16 pt-16 min-h-screen py-12">
//         <div className="flex-1 flex-col py-6 justify-center flex md:pr-24">
//           <div>
//             <div
//               className="space-y-4 font-light text-5xl md:text-8xl"
//               data-aos="fade-right"
//             >
//               <h1 className="">Eagle Capital,</h1>
//               <h1 className="">Investing in the future</h1>
//             </div>
//             <h1
//               className="text-2xl font-light leading-9 max-w-[800px] ps-12 ml-auto py-12"
//               data-aos="fade-right"
//               data-aos-delay="500"
//             >
//               Eagle Capital is a distinguished M&A and investment firm with a
//               strategic focus on secure investments within South Eastern Europe
//               and the United States.
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
