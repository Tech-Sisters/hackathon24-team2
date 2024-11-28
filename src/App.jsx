import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import FeelingPage from "./pages/feelingPage";
import EmotionPage from "./pages/emotionPage";
import ActivitiesPage from "./pages/activitiesPage";
import Chatbot from "./pages/chatbot";
import Tracker from "./pages/tracker";
import TrackedDay from "./pages/trackedDay";
// import fetchTrackedData from "./components/data";
// import mockTrackedData from "./components/mockData";

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

function App() {
  const [trackedData, setTrackedData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchTrackedData();
  //     setTrackedData(data); // Store the fetched data in state
  //   };

  //   fetchData();
  // }, [trackedData]);

  useEffect(() => {
    const fetchTrackedData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/user-feelings/"
        );
        console.log(response);
        if (response.data && Array.isArray(response.data.data)) {
          const sortedData = response.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );

          // Get the most recent entry
          const mostRecent = sortedData[0];
          console.log("--------------", mostRecent);
          const data = {
            date: formatDate(mostRecent.createdAt),
            feeling: mostRecent.feeling,
            emotions: mostRecent.emotion,
            activities: mostRecent.reason,
            extraNotes: mostRecent.extraNotes,
          };
          setTrackedData(data);
        } else {
          console.log("No data found.");
        }
      } catch (error) {
        // Handle network or server errors
        console.error("Network error:", error);
      }
    };
    fetchTrackedData();
  }, [trackedData]);

  // const trackedData = mockTrackedData;

  const trackedDataObject = trackedData.reduce((acc, item) => {
    acc[item.date] = item.feeling;
    return acc;
  }, {});

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<Landing trackedData={trackedDataObject} />}
            />
            <Route path="/feeling" element={<FeelingPage />} />
            <Route path="/emotion" element={<EmotionPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/maia" element={<Chatbot />} />
            <Route
              path="/tracker"
              element={<Tracker trackedData={trackedDataObject} />}
            />
            {/* <Route path="/trackedDay"  element={<TrackedDay trackedData={trackedData} />} />  */}
            <Route
              path="/tracker/:date"
              element={<TrackedDay trackedData={trackedData} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
