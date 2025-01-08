import React, { useState, useEffect } from "react";
import InputField from "../../utils/InputField";
import services from "../../data/services";

const initialFormState = {
  name: "",
  email: "",
  service: "",
  phone: "",
  message: "",
};

export default function ContactUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const service = query.get("service");

    console.log("QUERY DATA:", service);
    if (service) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        service,
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (_e) => {
    _e.preventDefault();
    const {
      name,
      email,
      service: selectedServiceSlug,
      phone,
      message,
    } = formData;

    // Find the service name using the slug
    const selectedService =
      services.find((service) => service.slug === selectedServiceSlug)?.name ||
      "General";

    const subject = encodeURIComponent(`Service Inquiry: ${selectedService}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    // Construct the mailto URL
    const mailtoLink = `mailto:patrik.krasniqi@eaglecapital.us?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="page-container mx-auto flex flex-col px-3 py-12 w-full max-w-6xl">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2 bg-white md:p-12 space-y-4">
            <div
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h1 className="text-6xl sm:pt-0 pt-8 text-slate-700">
                Let's meet
              </h1>
            </div>
            <p className="text-lg text-gold font-bolder py-16">
              Want to get in touch?
            </p>
            <div className="pt-6">
              <p className="font-medium text-slate-700">Email</p>
              <p className="text-gold">
                <a href="mailto:patrik.krasniqi@eaglecapital.us">
                  patrik.krasniqi@eaglecapital.us
                </a>
              </p>
            </div>
            <div className="py-2">
              <p className="font-medium text-slate-700">Phone</p>
              <p className="text-gold">
                <a href="tel:+383 44 000 000"> +383 44 000 000</a>
              </p>
            </div>
            <hr className="block md:hidden border-slate-300 py-10 " />
          </div>

          <div className="w-full md:w-1/2 bg-white md:p-12">
            <form className="space-y-6">
              <InputField
                label="Name"
                id="name"
                name="name"
                handleChange={handleChange}
              />
              <InputField
                label="Email"
                id="email"
                type="email"
                name="email"
                handleChange={handleChange}
              />
              {/* <InputField label="Service" id="service" /> */}
              <div>
                <label className="block">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  placeholder="Choose Service"
                  className="mt-2 block w-full h-12 px-4 bg-slate-100 text-secondary rounded-md shadow-sm border border-transparent focus:border-primary focus:ring-0 focus:outline-none"
                >
                  <option value="">Choose service</option>
                  {services?.map((service) => (
                    <option
                      key={`TargjzifHYOt0cvVL${service.slug}`}
                      value={service.slug}
                    >
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              <InputField
                label="Phone number"
                id="phone"
                name="phone"
                handleChange={handleChange}
              />
              <InputField
                label="Message"
                id="message"
                name="message"
                isTextarea={true}
                rows="4"
                handleChange={handleChange}
              />
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full py-3 px-4 bg-primary-dark text-white rounded-md shadow-sm bg-primary focus:outline-none focus:ring-primary hover:bg-gold hover:text-black duration-150"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
