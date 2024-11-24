import "./App.css";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeelingPage from "./components/feelingPage";
import EmotionPage from "./components/emotionPage";
import ActivitiesPage from "./components/activitiesPage";
function App() {
  return (
    <Router>
      <Box>
        <nav>
          <Link to="/feeling">Feeling</Link>
          <Link to="/emotion">Emotion</Link>
          <Link to="/activities">Activities</Link>
        </nav>

        <Routes>
          <Route path="/feeling" element={<FeelingPage />} />
          <Route path="/emotion" element={<EmotionPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
