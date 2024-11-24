import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Emotes from "./pages/emotes"
import Chatbot from "./pages/chatbot";

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/emote" element={<Emotes />} />
            <Route path="/maia" element={<Chatbot /> } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
