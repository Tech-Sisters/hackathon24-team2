import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Chatbot from "./pages/chatbot";
import FeelingPage from "./components/feelingPage";
import EmotionPage from "./components/emotionPage";
import ActivitiesPage from "./components/activitiesPage";
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/maia" element={<Chatbot />} />
            <Route path="/feeling" element={<FeelingPage />} />
            <Route path="/emotion" element={<EmotionPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
