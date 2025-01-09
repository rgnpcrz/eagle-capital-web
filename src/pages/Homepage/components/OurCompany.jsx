import offerImg from "./../../../assets/images/offer.png";
import { IconArrowRight } from "@tabler/icons-react";

export default function OurCompany() {
  return (
    <>
      <div className="">
        <div className="page-container mx-auto px-3 py-12 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center w-64">
              <p>Our Company</p>
              {/* <hr className="h-0.5 bg-primary flex-1 ms-3"></hr> */}
            </div>
            <button className="px-3 py-1.5 border-2 rounded-full border-primary flex">
              View more <IconArrowRight size={18} />
            </button>
          </div>
          <div className="max-w-lg mx-auto py-24 flex flex-col gap-12 items-center text-center">
            <h1 className="text-4xl">What we offer?</h1>
            {/* <h1 className="text-center text-base">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
              not only five centuries
            </h1> */}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-primary">
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/bobby.png"
              />
              <p className="absolute top-4 left-4">Technology</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/beverly-park.png"
              />
              <p className="absolute top-4 left-4">Real Estate</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/countour-global.png"
              />
              <p className="absolute top-4 left-4">Technology</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/credins-bank.png"
              />
              <p className="absolute top-4 left-4">Finance</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/ephesus.png"
              />
              <p className="absolute top-4 left-4">Real Estate</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/evergreen-valley.png"
              />
              <p className="absolute top-4 left-4">Real Estate</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/green-medical.png"
              />
              <p className="absolute top-4 left-4">Technology</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/sowi-kosova.png"
              />
              <p className="absolute top-4 left-4">Technology</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/noa.png"
              />
              <p className="absolute top-4 left-4">Finance</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/prishtina-city-center.png"
              />
              <p className="absolute text-white top-4 left-4">Real Estate</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/rbko-head-office.png"
              />
              <p className="absolute top-4 left-4">Finance</p>
            </div>
            <div className="border border-primary relative">
              <img
                className="object-cover aspect-square"
                src="/images/companies/sowi-renewable.png"
              />
              <p className="absolute top-4 left-4">Technology</p>
            </div>
          </div>
          {/* <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4">
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/beverly-park.png" />
                <p className="absolute top-4 left-4">Real Estate</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/countour-global.png" />
                <p className="absolute top-4 left-4">Technology</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/credins-bank.png" />
                <p className="absolute top-4 left-4">Finance</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/ephesus.png" />
                <p className="absolute top-4 left-4">Real Estate</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/evergreen-valley.png" />
                <p className="absolute top-4 left-4">Real Estate</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/green-medical.png" />
                <p className="absolute top-4 left-4">Technology</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/noa.png" />
                <p className="absolute top-4 left-4">Finance</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/prishtina-city-center.png" />
                <p className="absolute text-white top-4 left-4">Real Estate</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/rbko-head-office.png" />
                <p className="absolute top-4 left-4">Finance</p>
              </div>
              <div className="min-w-[25%] border border-primary relative snap-center">
                <img className="object-cover aspect-square" src="/images/companies/sowi-renewable.png" />
                <p className="absolute top-4 left-4">Technology</p>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-col gap-24">
            <div className="border border-4 border-primary flex justify-between">
              <div className="p-7 h-100 flex flex-col justify-between">
                <h1 className="text-4xl">Private equity</h1>
                <h1 className=" text-base">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                </h1>
                <div className="flex items-center">
                  <p className="pr-3 text-base ">Learn more</p>
                  <div>
                    <button className="border-2 p-0.5 border-primary rounded-full">
                      <IconArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <img src={offerImg} />
            </div>
            <div className="border border-4 border-primary flex justify-between">
              <div className="p-7 h-100 flex flex-col justify-between">
                <h1 className="text-4xl">Real Estate</h1>
                <h1 className=" text-base">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                </h1>
                <div className="flex items-center">
                  <p className="pr-3 text-base ">Learn more</p>
                  <div>
                    <button className="border-2 p-0.5 border-primary rounded-full">
                      <IconArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <img src={offerImg} />
            </div>
            <div className=" border-4 border-primary flex justify-between">
              <div className="p-7  h-100 flex flex-col justify-between">
                <h1 className="text-4xl">Credit</h1>
                <h1 className=" text-base pr-24 ">
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                </h1>
                <div className="flex items-center">
                  <p className="pr-3 text-base ">Learn more</p>
                  <div>
                    <button className="border-2 p-0.5 border-primary rounded-full">
                      <IconArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <img src={offerImg} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
