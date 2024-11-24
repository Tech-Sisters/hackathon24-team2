import "./App.css";
import Landing from "./pages/landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbot from "./pages/chatbot";

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/maia" element={<Chatbot /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
