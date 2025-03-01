import teamMembers from "../../data/teamMembers.js";
import TeamCarousel from "./components/TeamCarousel.jsx";
console.log(teamMembers);
export default function MeetTheTeam() {
  return (
    <>
      <div className="bg-slate-100 ">
        <div className="page-container mx-auto flex flex-col px-3 -mt-16 pt-16  min-h-screen  py-12">
          <div className="flex-1 flex-col py-6 justify-center flex  md:pr-24">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "url('../../../../public/images/cover/about.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
            <div className="">
              <div className="space-y-4 font-light text-5xl md:text-8xl ">
                <h1 className="text-white" data-aos="fade-right">
                  Meet the team that’s changing the way people live.
                </h1>
              </div>
              <h1
                className="text-2xl font-light leading-9 max-w-[800px] text-white ps-12 ml-auto pt-12"
                data-aos="fade-right"
                data-aos-delay="500"
              >
                Our team is dedicated to fostering meaningful connections,
                bridging gaps, and bringing people closer together. Through
                innovation and collaboration, we strive to create an impact in
                the communities we serve.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <TeamCarousel />
      {/* <div className="page-container">
        <div>
          {teamMembers.map((member, index) => (
            <>
              <div className="flex flex-col lg:flex-row  py-12 gap-8">
                <div className="max-w-[350px] h-[350px] rounded-xl overflow-hidden bg-slate-50">
                  <img className="h-full w-full object-cover object-bottom" src={member.image} alt={member.name} />
                </div>
                <div className="flex-1 flex flex-col gap-8 ">
                  <div>
                    <h1 className="text-3xl pb-2">{member.name}</h1>
                    <p className="text-xl">{member.position}</p>
                  </div>

                  <div className="space-y-4 text-base">
                    <p className="whitespace-pre-line">{member.bio}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div> */}
    </>
  );
}
