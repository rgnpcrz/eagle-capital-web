import Banner from "./components/Banner.jsx";
import CompanySlider from "./components/CompanySlider.jsx";
import OurServices from "./components/OurServices.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import LatestFromUs from "./components/LatestFromUs.jsx";
import LatestNews from "./components/LatestNews.jsx";
import TheFirm from "./components/TheFirm.jsx";

export default function Homepage() {
  return (
    <>
      <Banner />
      <TheFirm />
      <LatestNews />
      {/* <OurCompany /> */}
      <CompanySlider />
      <OurServices />
      <LatestFromUs />
      <GetInTouch />
    </>
  );
}
