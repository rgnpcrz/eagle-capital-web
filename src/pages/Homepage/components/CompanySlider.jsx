import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import companies from "../../../data/companies";

export default function CompanySlider() {
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

          {/* Swiper Container */}
          <div className="relative w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20} // Adjust spacing
              slidesPerView={2} // Default slides visible
              loop={true} // Infinite loop
              autoplay={{
                delay: 0, // No delay between slides
                disableOnInteraction: true, // Keep auto-moving even when interacted with
              }}
              speed={5000} // Smooth continuous effect (adjust speed as needed)
              breakpoints={{
                768: { slidesPerView: 3 }, // 3 slides on tablets
                1024: { slidesPerView: 4 }, // 4 slides on desktops
              }}
              className="no-scrollbar"
            >
              {companies.concat(companies).map((company, index) => (
                <SwiperSlide
                  key={index}
                  className="flex-shrink-0 w-full relative border-silver lg:w-[350px] snap-center flex items-center justify-center"
                >
                  <a href={company.link} target="_blank">
                    <img
                      className="aspect-video my-6 w-[200px] object-contain max-h-[2000px]"
                      src={company.image}
                      alt={company.name}
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Gradient Fades on Sides */}
            <div className="bg-gradient-to-r from-secondary absolute h-full top-0 -left-1 bottom-0 w-10"></div>
            <div className="bg-gradient-to-l from-secondary absolute h-full top-0 -right-1 bottom-0 w-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
