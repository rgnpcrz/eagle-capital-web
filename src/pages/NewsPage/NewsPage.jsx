import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight, BsSearch } from "react-icons/bs";

const categories = [
  "All categories",
  "Finance",
  "Real Estate",
  "Mergers",
  "Legal",
  "Development",
];

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
      "Expertise in developing residential, commercial, and mixed-use properties with precision.",
    category: "Real Estate",
  },
  {
    id: 6,
    date: "June 7, 2023",
    title:
      "Comprehensive legal solutions to safeguard and advance your commercial interests.",
    category: "Legal",
  },
  {
    id: 7,
    date: "October 22, 2022",
    title:
      "Sophisticated financial modeling to forecast, analyze, and optimize business performance.",
    category: "Mergers",
  },
  {
    id: 8,
    date: "June 7, 2022",
    title:
      "End-to-end project planning and execution tailored to meet specific business objectives.",
    category: "Real Estate",
  },
  {
    id: 9,
    date: "August 3, 2022",
    title:
      "Comprehensive legal solutions to safeguard and advance your commercial interests.",
    category: "Legal",
  },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNews = newsData.filter(
    (news) =>
      (selectedCategory === "All categories" ||
        news.category === selectedCategory) &&
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="py-10 md:py-16 2xl:py-20 page-container">
        <div className="text-center mx-auto px-5">
          <h1 className="text-lightBlack mb-5 md:mb-8 lg:mb-20 text-center text-medium md:text-xl 2xl:text-2xl">
            Get the latest news from Eagle Capital
          </h1>
        </div>

        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Dropdown Filter */}
          <select
            className="border rounded-md px-2 py-2 w-full md:w-auto text-lightBlack bg-white"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              className="border rounded-md px-4 py-2 w-full text-lightBlack bg-white"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <BsSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* News Container */}
        <div className="mt-14 2xl:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
          {filteredNews.map((news_item) => (
            <div
              key={news_item.id}
              className="overflow-x-hidden 3xl:w-[410px] group"
            >
              <Link to={`/news_item/${news_item.id}`}>
                <div className="relative border-[1px] border-[#e8e8e8] dark:border-[#424242] border-t-0 group-hover:bg-secondary">
                  {" "}
                  {/* Apply group-hover on parent */}
                  <div className="overflow-hidden w-full h-[400px] bg-primary group-hover:bg-secondary flex items-center justify-center text-white">
                    <p className="px-5 3xl:px-6 top-[10px] left-[10px] text-xl md:text-xl 2xl:text-2xl">
                      {news_item.title}
                    </p>
                  </div>
                  <div className="px-3 py-2 inline-flex bg-khaki text-sm items-center justify-center text-white absolute top-[10px] left-[10px]">
                    <span>{news_item.date}</span>
                  </div>
                  <button className="bg-transparent flex items-center justify-center text-[15px] leading-[38px] absolute bottom-0 -left-40 px-6 py-1 text-white group-hover:left-0 transition-all duration-300">
                    Read more
                    <BsArrowRight className="w-4 h-4 ml-2 text-white" />
                  </button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
