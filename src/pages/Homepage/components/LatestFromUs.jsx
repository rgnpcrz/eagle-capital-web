import LinkButton from "../../../components/LinkButton";
import LinkButtonOutline from "../../../components/LinkButtonOutline";
import latest from "./../../../assets/images/latest.png";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export default function LatestFromUs() {
  return (
    <>
      <div className=" bg-primary text-white">
        <div className="page-container mx-auto px-3 py-24 text-sm">
          {/* <div className="flex justify-between items-center pb-12">
            <div className="flex items-center w-64">
              <p className="text-base">Our mission</p>
              <hr className=" h-0.5 bg-white flex-1 ms-3"></hr>
            </div>
            <div className="flex gap-5">
              <button className="border-2 p-0.5 border-white rounded-full">
                <IconArrowLeft size={18} />
              </button>

              <button className="border-2 p-0.5 border-white rounded-full">
                <IconArrowRight size={18} />
              </button>
            </div>
          </div> */}

          <div className="grid md:grid-cols-2 justify-between gap-8">
            <div className="flex gap-12 flex-col justify-between">
              <div className="">
                <h1 className="text-4xl">Our mission</h1>
                <p className=" text-base pt-12 lg:pr-32">
                  Our mission is to generate substantial returns for our
                  business partners and investors through disciplined
                  investments in stable and profitable sectors. We aim to
                  capitalize on unique opportunities in the regions we serve by
                  leveraging our extensive network and deep market
                  understanding.
                </p>
              </div>

              <div data-aos="slide-up">
                <LinkButtonOutline text="Learn More" link="/about-us" />
              </div>
              {/* <button className="border-2 p-0.5 border-white rounded-full">
                    <IconArrowRight size={18} />
                  </button> */}
            </div>
            <div className="flex items-center ">
              <img className="object-cover w-full h-full" src={latest} />
            </div>
          </div>
          {/* <div className="flex flex-col gap-24  ">
            <div className=" border-4 border-primary  flex justify-between">
              <div className=" h-100 flex dbg-red flex-col justify-between">
                <div className="pr-24">
                  <h1 className="text-4xl pb-5  ">Our mission</h1>
                  <h1 className=" text-base">
                    Our mission is to generate substantial returns for our business partners and investors through disciplined investments in stable and profitable sectors. We aim to capitalize on
                    unique opportunities in the regions we serve by leveraging our extensive network and deep market understanding.
                  </h1>
                </div>
                <div className="flex items-center">
                  <p className="pr-3 text-base ">Learn more</p>
                  <div>
                    <button className="border-2 p-0.5 border-white rounded-full">
                      <IconArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <img src={latest} />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
