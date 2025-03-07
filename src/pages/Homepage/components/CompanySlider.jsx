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
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={5000}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 60 },
                768: { slidesPerView: 3, spaceBetween: 60 },
                1024: { slidesPerView: 4, spaceBetween: 60 },
              }}
              className="no-scrollbar"
            >
              {companies.concat(companies).map((company, index) => (
                <SwiperSlide
                  key={index}
                  className="flex-shrink-0 min-w-[250px] w-full relative border-silver snap-center flex items-center justify-center"
                >
                  <a href={company.link} target="_blank">
                    <img
                      className="aspect-video my-6 w-[230px] object-contain max-h-[2000px]"
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
