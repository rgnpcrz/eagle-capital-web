import latest from "./../../../assets/images/latest.png";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

export default function LatestFromUs() {
  return (
    <>
      <div className=" bg-primary text-white">
        <div className="max-w-screen-lg mx-auto px-3 py-12 text-sm">
          <div className="flex justify-between items-center pb-12">
            <div className="flex items-center w-40">
              <p>Latest from us</p>
              <hr className="w-16 h-0.5 bg-white flex-1 ms-3"></hr>
            </div>
            <div className="flex gap-5">
              <button className="border-2 p-0.5 border-white rounded-full">
                <IconArrowLeft size={18} />
              </button>

              <button className="border-2 p-0.5 border-white rounded-full">
                <IconArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-24">
            <div className="border border-4 border-primary flex justify-between">
              <div className=" h-100 flex flex-col justify-between">
                <div className="pr-24">
                  <h1 className="text-4xl pb-5  ">Header text</h1>
                  <h1 className=" text-base">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whe Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
          </div>
        </div>
      </div>
    </>
  );
}
