import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const newsData = [
  {
    id: 1,
    date: "April 3, 2024",
    title:
      "Custom financial solutions to ensure your projects are funded and delivered on time.",
    category: "Finance",
  },
  {
    id: 2,
    date: "January 22, 2024",
    title:
      "Sophisticated financial modeling to forecast, analyze, and optimize business performance.",
    category: "Finance",
  },
  {
    id: 3,
    date: "November 2, 2023",
    title:
      "End-to-end project planning and execution tailored to meet specific business objectives.",
    category: "Development",
  },
  {
    id: 4,
    date: "October 22, 2023",
    title:
      "Sophisticated financial modeling to forecast, analyze, and optimize business performance.",
    category: "Mergers",
  },
  {
    id: 5,
    date: "August 3, 2023",
    title:
      "Expertise in developing residential, commercial, and mixed-use properties with precision. Sophisticated financial modeling to forecast, analyze, and optimize business performance.",
    category: "Real Estate",
  },
];

export default function News() {
  return (
    <div className="bg-slate-100">
      <div className="page-container mx-auto px-3 py-24 text-sm">
        <div className="text-center mx-auto px-5">
          <h1 className="text-lightBlack mb-20 text-center text-4xl">
            Latest news
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            {newsData.slice(1).map((item, index) => (
              <div key={index} className="mb-8 flex flex-col md:flex-row gap-6">
                {/* Image Container */}
                <div className="w-80 h-52 bg-slate-300 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={item.image}
                    alt="Dynamic img will be added here"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* News Content */}
                <div className="flex-grow">
                  <p className="pb-5">{item.date}</p>
                  <h3 className="text-2xl font-medium">{item.title}</h3>
                  <Link to={`/news_item/${item.id}`}>
                    <button className="mt-3 flex items-center gap-2 pt-8 text-lightBlack">
                      Read More <BsArrowRight />
                    </button>
                  </Link>
                  <hr className="h-0.5 my-10 bg-silver"></hr>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
