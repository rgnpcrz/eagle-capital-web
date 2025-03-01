import LinkButton from "../../../components/LinkButton";

export default function TheFirm() {
  return (
    <>
      <div className="bg-slate-200">
        <div className="page-container mx-auto px-3 py-12 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center w-64">
              <p className="text-xl">The Firm</p>
              {/* <hr className="w-16 h-0.5 bg-primary flex-1 ms-3"></hr> */}
            </div>
            {/* <button className="px-3 py-1.5 border-2 rounded-full border-primary">View more</button> */}
          </div>
          <div className=" mx-auto py-24 max-w-3xl flex flex-col gap-8 items-center text-center">
            <h1 className="text-4xl" data-aos="zoom-out">
              About us
            </h1>
            <h1 className="text-center text-xl">
              Eagle Capital is a distinguished M&A and investment firm with a
              strategic focus on secure investments within South Eastern Europe
              and the United States. Our primary investment targets are licensed
              financial institutions, prime real estate in high-end coastal
              areas of the Mediterranean and innovative projects in the
              renewable energy sector.
            </h1>
            <LinkButton text="View more" link="/about-us" />
          </div>
        </div>
      </div>
    </>
  );
}
