import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import FeelingPage from "./pages/feelingPage";
import EmotionPage from "./pages/emotionPage";
import ActivitiesPage from "./pages/activitiesPage";
import Chatbot from "./pages/chatbot";
import Tracker from "./pages/tracker";
import TrackedDay from "./pages/trackedDay";
// import data from "./components/data";
import mockTrackedData from "./components/mockData"

function App() {

  const trackedData = mockTrackedData;
  
  const trackedDataObject =  mockTrackedData.reduce((acc, item) => {
    acc[item.date] = item.feeling;
    return acc;
  }, {});
  

return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing trackedData={trackedDataObject} />} />
            <Route path="/feeling" element={<FeelingPage />} />
            <Route path="/emotion" element={<EmotionPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/maia" element={<Chatbot />} />
            <Route path="/tracker" element={<Tracker trackedData={trackedDataObject} />} />
            {/* <Route path="/trackedDay"  element={<TrackedDay trackedData={trackedData} />} />  */}
            <Route path="/tracker/:date"  element={<TrackedDay trackedData={trackedData} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
