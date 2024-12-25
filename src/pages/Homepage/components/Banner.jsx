import bannerImg from "./../../../assets/images/banner-image.png";

export default function Banner() {
  return (
    <>
      <div className="bg-primary text-white">
        <div className="page-container mx-auto px-3 py-12">
          <div className="py-12  pr-24">
            <div className="space-y-7 font-light text-4xl md:text-8xl">
              <h1 className="">Eagle Capital,</h1>
              <h1 className="">Investing in the future</h1>
            </div>
            <h1 className="text-2xl font-light  max-w-[800px] ps-12 ml-auto py-12">
              Eagle Capital is a distinguished M&A and investment firm with a strategic focus on secure investments within South Eastern Europe and the United States.
            </h1>
          </div>
          <div>
            <img className="w-full" src={bannerImg} />
          </div>
        </div>
      </div>
    </>
  );
}
