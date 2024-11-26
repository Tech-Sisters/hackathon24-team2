import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import FeelingPage from "./components/feelingPage";
import EmotionPage from "./components/emotionPage";
import ActivitiesPage from "./components/activitiesPage";
import Chatbot from "./pages/chatbot";
import Tracker from "./pages/tracker";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/feeling" element={<FeelingPage />} />
            <Route path="/emotion" element={<EmotionPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/maia" element={<Chatbot />} />
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
