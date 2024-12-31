import OurServices from "../Homepage/components/OurServices.jsx";

export default function AboutUs() {
  return (
    <>
      <div className="">
        <div className=" bg-slate-100 ">
          <div className="page-container mx-auto flex flex-col py-12">
            <div className="flex-1 flex-col min-h-screen -mt-16 pt-16 justify-center flex md:pr-24">
              <div className="">
                <div className="space-y-4 font-light text-5xl md:text-8xl ">
                  <h1 className="text-secondary">More about Eagle Capital</h1>
                </div>
                <h1 className="text-2xl font-light leading-9 text-primary max-w-[800px] ps-12 ml-auto pt-12">
                  Eagle Capital is a distinguished M&A and investment firm with a strategic focus on secure investments within South Eastern Europe and the United States. Our primary investment
                  targets are licensed financial institutions, prime real estate in high-end coastal areas of the Mediterranean and innovative projects in the renewable energy sector.
                </h1>
                <h1 className="text-2xl font-light leading-9 text-primary max-w-[800px] ps-12 ml-auto py-12">
                  Our mission is to generate substantial returns for our business partners and investors through disciplined investments in stable and profitable sectors. We aim to capitalize on
                  unique opportunities in the regions we serve by leveraging our extensive network and deep market understanding.
                </h1>
              </div>
            </div>
          </div>

          {/* <div>
            <img className="w-full" src={bannerImg} />
          </div> */}
        </div>
        <div className="page-container py-24">
          <div className="aspect-[10/4] bg-silver text-gold flex items-center justify-center">Media content</div>
        </div>
        {/* <div className="page-container py-12 ">
          <div className=" space-y-5">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif ">Our current investments</h1>
            <p className="md:pl-[10%] lg:pl-[20%] text-xl max-w-[900px]">
              Eagle Capital actively pursues a diverse portfolio of investments across our strategic focus areas. Our commitment to achieving high returns is demonstrated through our carefully
              selected current investments in financial institutions, prime real estate, and renewable energy projects
            </p>
          </div>
        </div> */}
        {/* OUR CURREN INVESTMENTS SECTION */}
        <div className=" bg-primary text-white py-24 space-y-24">
          <div className="page-container mx-auto px-3  text-sm">
            <div className="grid md:grid-cols-2 justify-between gap-8">
              <div className="flex  flex-col justify-between">
                <div className="">
                  <h1 className="text-4xl">Our current investments</h1>
                  <p className=" text-base py-5 ">
                    Eagle Capital actively pursues a diverse portfolio of investments across our strategic focus areas. Our commitment to achieving high returns is demonstrated through our carefully
                    selected current investments in financial institutions, prime real estate, and renewable energy projects.
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="w-full h-full bg-silver text-gold flex justify-center items-center min-h-[300px]"> Media content</div>
              </div>
            </div>
          </div>
          <div className="page-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Financial Sector</h1>
                <p className="text-gray-300">
                  We currently hold controlling stake in two licensed financial institutions, including one Commercial Bank and one NonBank Financial Institution and one Mortgage Institution in the
                  United States (establishment ongoing)
                </p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Real Estate</h1>
                <p className="text-gray-300">
                  We currently hold controlling stake in two licensed financial institutions, including one Commercial Bank and one NonBank Financial Institution and one Mortgage Institution in the
                  United States (establishment ongoing)
                </p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Technology</h1>
                <p className="text-gray-300">A revolutionary super app (Bobby), servicing the New York City area (confidential at this point).</p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Tourism & Transportation</h1>
                <p className="text-gray-300">We control the managment and investment in the biggest players in Tourism and Transportation sectors in SEE.</p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Renewbale Energy</h1>
                <p className="text-gray-300">An ongoing 100 M W Wind Energy project (under development) in Southern Albania.</p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Medical</h1>
                <p className="text-gray-300">An ongoing development in Prilep, Macedonia focusing in production of high quality raw medical materials Tech (confidential at this point).</p>
              </div>
            </div>
          </div>
        </div>
        <OurServices />
        {/* OUR CURREN INVESTMENTS SECTION */}
        <div className=" bg-slate-100">
          <div className="page-container mx-auto px-3 py-24 text-sm">
            <div className="grid relative  pl-20 justify-between gap-8">
              <h1 className="text-3xl absolute top-0 left-0 -translate-y-9  rotate-90 origin-bottom-left">Investment Strategy</h1>
              <div className="space-y-12">
                <div className="space-y-5">
                  <h1 className="text-2xl">Eagle Capital employs a rigorous investment strategy that emphasizes security, long-term value creation, and sustainability. We specialize in:</h1>
                  <div className="pl-5 flex flex-col gap-5">
                    <p>Financial Institutions: Investing in well-established, licensed financial entities that demonstrate consistent profitability and growth potential. </p>
                    <p>Real Estate: Acquiring and developing prime real estate in prestigious coastal areas, focusing on properties that offer both luxury and exclusivity.</p>
                    <p>
                      Renewable Energy: Committing to environmental sustainability by investing in renewable energy projects, including solar, wind, and hydroelectric power developments, that promise
                      high efficiency and lower environmental impact.
                    </p>
                  </div>
                </div>
                <div className="space-y-5">
                  <h1 className="text-2xl">Regions of Focus</h1>
                  <div className="pl-5 flex flex-col gap-5">
                    <p>South Eastern Europe: We are deeply entrenched in the local markets of South Eastern Europe, enabling us to identify and exploit investment opportunities ahead of the curve</p>
                    <p>
                      United States: In the US, our strategy is twofold, focusing on both the robust financial sector and high-value real estate markets along the East Coast, primarily in the New York
                      City Metropolitan Area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="page-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Financial Sector</h1>
                <p className="text-gray-300">
                  We currently hold controlling stake in two licensed financial institutions, including one Commercial Bank and one NonBank Financial Institution and one Mortgage Institution in the
                  United States (establishment ongoing)
                </p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Real Estate</h1>
                <p className="text-gray-300">
                  We currently hold controlling stake in two licensed financial institutions, including one Commercial Bank and one NonBank Financial Institution and one Mortgage Institution in the
                  United States (establishment ongoing)
                </p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Technology</h1>
                <p className="text-gray-300">A revolutionary super app (Bobby), servicing the New York City area (confidential at this point).</p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Tourism & Transportation</h1>
                <p className="text-gray-300">We control the managment and investment in the biggest players in Tourism and Transportation sectors in SEE.</p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Renewbale Energy</h1>
                <p className="text-gray-300">An ongoing 100 M W Wind Energy project (under development) in Southern Albania.</p>
              </div>
              <div className="p-4  bg-secondary bg-opacity-50 space-y-5">
                <h1 className="text-2xl">Medical</h1>
                <p className="text-gray-300">An ongoing development in Prilep, Macedonia focusing in production of high quality raw medical materials Tech (confidential at this point).</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
