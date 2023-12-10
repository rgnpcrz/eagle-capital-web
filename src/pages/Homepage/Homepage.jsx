import Banner from "./components/Banner.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import LatestFromUs from "./components/LatestFromUs.jsx";
import News from "./components/News.jsx";
import OurCompany from "./components/OurCompany.jsx";
import TheFirm from "./components/TheFirm.jsx";

export default function Homepage() {
  return (
    <>
      <Banner />
      <TheFirm />
      <News />
      <OurCompany />
      <LatestFromUs />
      <GetInTouch />
    </>
  );
}
