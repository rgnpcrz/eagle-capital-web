import offerImg from "./../../../assets/images/offer.png";
import { IconArrowRight } from "@tabler/icons-react";

export default function OurCompany() {
  return (
    <>
      <div className="">
        <div className="max-w-screen-lg mx-auto px-3 py-12 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center w-40">
              <p>Our Company</p>
              <hr className="w-16 h-0.5 bg-primary flex-1 ms-3"></hr>
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
          <div className="grid grid-cols-4 border border-primary">
            <div className="col-span-2 border border-primary p-4">
              <h1 className="text-3xl">Companies</h1>
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/beverly-park.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/countour-global.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/credins-bank.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/ephesus.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/evergreen-valley.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/green-medical.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/noa.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/prishtina-city-center.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/rbko-head-office.png" />
            </div>
            <div className="border border-primary">
              <img className="object-cover aspect-square" src="/images/companies/sowi-renewable.png" />
            </div>
          </div>
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
