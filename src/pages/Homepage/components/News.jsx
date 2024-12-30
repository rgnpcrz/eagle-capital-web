import news from "./../../../assets/images/news.png";
import { IconArrowRight } from "@tabler/icons-react";

export default function News() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="page-container mx-auto px-3 py-24 text-sm">
          <div className="flex justify-between items-center pb-12">
            <div className="flex items-center w-64">
              <p className="text-xl">Latest News</p>
              <hr className="w-16 h-0.5 bg-primary flex-1 ms-3"></hr>
            </div>
            {/* <button className="px-3 py-1.5 border-2 rounded-full border-primary">View more</button> */}
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/5">
              <img className="w-full pb-6" src={news} />
              <div className="flex">
                <div>
                  <h3 className="pr-12 text-2xl font-medium">Lorem Ipsum dolora galley of type and scrambled it to make</h3>
                  <p className="pr-12  pt-12 ">January 18 ,2013</p>
                </div>
                <div>
                  <button className="border-2 p-0.5 border-primary rounded-full">
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div>
                  <h3 className="pr-12 text-2xl font-medium">Lorem Ipsum dolor sit amet</h3>
                  <p className="pt-5 ">January 18 ,2013</p>
                </div>
                <div className="ms-auto">
                  <button className="border-2 p-0.5 border-primary rounded-full">
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
              <hr className="h-1 my-10 bg-silver"></hr>
              <div className="flex">
                <div>
                  <h3 className="pr-12 text-2xl font-medium">Lorem Ipsum dolora galley of type and scrambled it to make</h3>
                  <p className="pt-5 ">January 18 ,2013</p>
                </div>
                <div className="ms-auto">
                  <button className="border-2 p-0.5 border-primary rounded-full">
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
              <hr className="h-1 my-10 bg-silver"></hr>
              <div className="flex">
                <div>
                  <h3 className="pr-12 text-2xl font-medium">Lorem Ipsum dolor sit amet</h3>
                  <p className="pt-5 ">January 18 ,2013</p>
                </div>
                <div className="ms-auto">
                  <button className="border-2 p-0.5 border-primary rounded-full">
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
              <hr className="h-1 my-10 bg-silver"></hr>
              <div className="flex">
                <div>
                  <h3 className="pr-12 text-2xl font-medium">Lorem Ipsum dolor sit amet</h3>
                  <p className="pt-5 ">January 18 ,2013</p>
                </div>
                <div className="ms-auto">
                  <button className="border-2 p-0.5 border-primary rounded-full">
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
