import bgPurple from "../assets/bg_purple.jpg";
import bgGreen from "../assets/bg_green.jpg";

import HeaderMain from "../components/Landing/headerMain";
import CalendarStrip from "../components/Landing/calendar";
import LandingCard from "../components/Landing/card";
import Footer from "../components/footer";
import { Carousel } from "../components/Landing/carousel";


const Landing = () => {
  
  const trackedData = {
    "2024-11-24": "bad",
    "2024-11-25": "veryGood",
    "2024-11-26": "good",
    "2024-11-27": "veryBad",
    "2024-11-28": "bad",
  };

  return (
    <div>
       <HeaderMain />
       <CalendarStrip trackedData={trackedData} />
       <LandingCard
        text={"How are you feeling today?"}
        image={bgPurple}
        align="left"
      />
      <Carousel />
       <LandingCard
        text={`Feeling {} yesterday? \nChat with MAIA now.`}
        image={bgGreen}
        align="right"
        date={trackedData}
      />
      <Footer />
    </div>
  );
}
export default Landing;
