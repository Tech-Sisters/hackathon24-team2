import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/landing";
import Emotes from "./pages/emotes";
import Chatbot from "./pages/chatbot";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import FeelingPage from "./components/feelingPage";
import EmotionPage from "./components/emotionPage";
import ActivitiesPage from "./components/activitiesPage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div>
          <nav>
            <Link to="/feeling">Feeling</Link>
            <Link to="/emotion">Emotion</Link>
            <Link to="/activities">Activities</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/emote" element={<Emotes />} />
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
