import Header from "../components/header";
import Footer from "../components/footer";
import Calendar from "../components/Tracker/calendar";

const Tracker = () => {

  const trackedDataCalendar = {
    "2024-10-28": "veryBad",
    "2024-10-29": "neutral",
    "2024-11-03": "neutral",
    "2024-11-04": "good",
    "2024-11-05": "neutral",
    "2024-11-06": "bad",
    "2024-11-07": "neutral",
    "2024-11-08": "neutral",
    "2024-11-09": "good",
    "2024-11-10": "bad",
    "2024-11-11": "bad",
    "2024-11-12": "veryBad",
    "2024-11-16": "veryGood",
    "2024-11-17": "good",
    "2024-11-19": "veryBad",
    "2024-11-20": "veryBad",
    "2024-11-21": "bad",
    "2024-11-22": "neutral",
    "2024-11-23": "veryBad",
    "2024-11-24": "bad",
    "2024-11-25": "veryGood",
    "2024-11-26": "good",
    "2024-11-27": "veryBad",
    "2024-11-28": "bad",
  };

return (
    <div id="appWrapper">
        <Header />
        <Calendar trackedData={trackedDataCalendar} />
        <Footer />
    </div>
)}
export default Tracker;