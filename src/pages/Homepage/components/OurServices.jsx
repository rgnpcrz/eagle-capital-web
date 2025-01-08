import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting
import services from "../../../data/services";

export default function OurServices() {
  const navigate = useNavigate();

  const handleServiceSelection = (serviceName) => {
    navigate(`/contact-us?service=${encodeURIComponent(serviceName)}`);
  };

  return (
    <div className="">
      <div className="page-container ">
        <div className="py-24 space-y-12">
          <div className="">
            <h1 className="text-4xl text-center">Our services</h1>
          </div>
          <div className="flex gap-5"></div>
          <div className="w-full">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-slate-100 rounded-lg gap-5 flex flex-col group hover:bg-primary hover:text-white duration-150 cursor-pointer"
                  onClick={() => handleServiceSelection(service.slug)}
                >
                  <div className="space-y-3">
                    <p className="font-semibold text-xl group-hover:text-white duration-150">
                      {service.name}
                    </p>
                    <p className="text-base group-hover:text-white duration-150">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div key={index} className="p-8 bg-slate-100 rounded-lg  gap-5 flex flex-col">
  <div>
  <div className="w-16 h-16  rounded-full bg-silver flex items-center justify-center">ICON</div>
  </div>
  <div className="space-y-3">
  <p className="font-semibold text-xl">{service.name}</p>
  <p className="text-base">{service.description}</p>
  </div>
  </div> */
}

{
  /* <div>
  <div className="w-16 h-16 rounded-full bg-silver flex items-center justify-center text-gold">ICON</div>
</div> */
}
