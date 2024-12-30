import teamMembers from "../../data/teamMembers.js";
import TeamCarousel from "./components/TeamCarousel.jsx";
console.log(teamMembers);
export default function MeetTheTeam() {
  return (
    <>
      <div className="bg-slate-100 ">
        <div className="page-container mx-auto flex flex-col ">
          <div className="flex-1 flex-col min-h-screen -mt-16 pt-16 justify-center flex  md:pr-24">
            <div className="">
              <div className="space-y-4 font-light text-5xl md:text-8xl ">
                <h1 className="text-secondary">Meet the team that’s changing the way people live.</h1>
              </div>
              <h1 className="text-2xl font-light leading-9 max-w-[800px] text-primary ps-12 ml-auto pt-12">
                Our team is dedicated to fostering meaningful connections, bridging gaps, and bringing people closer together. Through innovation and collaboration, we strive to create an impact in
                the communities we serve.
              </h1>
            </div>
          </div>
        </div>

        {/* <div>
            <img className="w-full" src={bannerImg} />
          </div> */}
      </div>
      <TeamCarousel />
      <div className="page-container">
        <div>
          {teamMembers.map((member, index) => (
            <>
              <div className="flex flex-col lg:flex-row  py-12 gap-8">
                <div className="w-[350px] h-[350px] rounded-xl overflow-hidden bg-slate-50">
                  <img className="h-full w-full object-cover object-bottom" src={member.image} alt={member.name} />
                </div>
                <div className="flex-1 flex flex-col gap-8 ">
                  <div>
                    <h1 className="text-3xl pb-2">{member.name}</h1>
                    <p className="text-xl">{member.position}</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base">{member.bio}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* <div className="page-container">
        <div className="flex flex-col lg:flex-row  py-24 gap-8">
          <div className="max-w-[350px]">
            <img className="" src="/images/team/Ardi-Shita.png" />
          </div>
          <div className="flex-1 flex flex-col gap-8 ">
            <div>
              <h1 className="text-3xl">Ardi Shita</h1>
              <p className="text-xl">Chief Executive Officer (CEO)</p>
            </div>
            <div>
              <p className="text-xl">Investment Banker | C-Level Executive, CREDINS Bank & NOA | CEO, Eagle Capital</p>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                Mr. Ardi Shita is an accomplished investment banker with over 15 years of experience in cross-border transactions across Southeastern Europe and the United States. He started his
                career as a distinguished corporate lawyer and later moved to the investment banking sector. He has successfully closed over $3 billion in deals, representing clients from a wide range
                of industries and geographies. As the founder and managing partner of Eagle Capital (former SI), Mr. Shita leads a team of expert investment bankers and lawyers who specialize in
                banking, corporate law, and mergers & acquisitions, delivering customized and innovative solutions to meet the needs of their clients and partners.
              </p>
              <p className="text-xl">
                In addition to his role at Eagle Capital, Mr. Shita serves as a key executive at CREDINS Bank and NOA As a founder and fund manager of Eagle Capital, he focuses on expanding
                investments and fostering innovation within the financial, technology and real estate sectors
              </p>
              <p className="text-xl">Mr. Shita is proud to be affiliated with the New York University (NYU) Stern School of Business and is an alumnus of Karl Franzens University in Austria</p>
            </div>
            <div className="space-y-4 pt-5">
              <h1 className="text-xl font-semibold">Highlights</h1>
              <div className="italic">
                <p className="text-xl pl-4">Alma Mater</p>
                <div className="pl-12">
                  <p className="text-xl">
                    <span className="font-semibold">New York University,</span> Stern School of Business; Executive MBA
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold">Karl Franzens University,</span> LLM Commercial & Corporate Law
                  </p>
                </div>
              </div>
              <div className="italic">
                <p className="text-xl pl-4">Current Positions & Affiliations</p>
                <div className="pl-12 italic">
                  <p className="text-xl">
                    <span className="font-semibold">Credins Bank;</span> Chairman (Supervisory Board; Business & Credit Risk); CoFounder of the Bank in Kosovo
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold"> NOA Non-Bank Financial Institution;</span> Co-Founder & Chairman of BRC
                  </p>
                  <p className="text-xl">
                    <span className="font-semibold"> Bobby Super App,</span> New York; Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
