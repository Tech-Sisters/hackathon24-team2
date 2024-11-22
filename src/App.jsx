import "./App.css";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeelingPage from "./components/feelingPage";
function App() {
  return (
    <Router>
      <Box>
        <nav>
          <Link to="/feeling">Feeling</Link>
        </nav>

        <Routes>
          <Route path="/feeling" element={<FeelingPage />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
