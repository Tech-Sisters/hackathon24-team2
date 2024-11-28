import { useState, useEffect } from "react";
import { Box, Typography, TextField } from "@mui/material";
import HeaderMain from "../components/Landing/headerMain";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";

export default function Chatbot() {
  const location = useLocation();
  console.log("location", location)
  const [userInput, setUserInput] = useState("");
  const [startTimestamp, setStartTimestamp] = useState(new Date().toISOString());
  const [sessionId, setSessionId] = useState(() => "session-" + Math.random().toString(36).substr(2, 9));

  // Initialize conversation as an array, not an object
  const [conversation, setConversation] = useState([
    { user: "", chatbot: "As-salamu alaykum, I am Maia. Please response." }
  ]);
  const { selectedFeedbackValue, selectedEmotions, selectedActivityLabels } = location.state || {
    selectedFeedbackValue: null,
    selectedEmotions: [],
    selectedActivityLabels: []
  };

  const [responseSent, setResponseSent] = useState(false);

  // Load conversation from sessionStorage when component mounts
  useEffect(() => {
    const savedConversation = sessionStorage.getItem("conversation");
    if (savedConversation) {
      setConversation(JSON.parse(savedConversation)); // Set saved conversation if available
    }
  }, []);

  // Save conversation to sessionStorage whenever the conversation changes
  useEffect(() => {
    sessionStorage.setItem("conversation", JSON.stringify(conversation));
  }, [conversation]);


  // Handle sending a message
  const sendMessage = async () => {
    if (userInput.trim()) {
      // Add user message to conversation
      const newUserMessage = { user: userInput, chatbot: "" };
      setConversation((prevConversation) => [...prevConversation, newUserMessage]);

      try {
        const dataForBackend = {
          sessionId,
          selectedActivityLabels,
          selectedEmotions,
          selectedFeedbackValue,
          message: userInput,
        };

        const response = await fetch("http://127.0.0.1:5000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForBackend),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch response from the backend");
        }

        const data = await response.json();
        const chatbotResponse = { user: "", chatbot: data.bot_response };
        setConversation((prevConversation) => [...prevConversation, chatbotResponse]);
        console.log(location.state)
      } catch (error) {
        console.error("Error communicating with the backend:", error);
        const errorMessage = { user: "", chatbot: "Sorry, I couldn't process your request. Please try again." };
        setConversation((prevConversation) => [...prevConversation, errorMessage]);
      }
    }

    setUserInput(""); // Clear the input field after sending message
  };

  const saveConversationToDatabase = async () => {
    const conversationData = {
      sessionId,
      startTimestamp,
      selectedActivityLabels: location.state.selectedActivityLabels,
      selectedEmotions: location.state.selectedEmotions,
      selectedFeedbackValue: location.state.selectedFeedbackValue,
      conversation: conversation,
    };

    console.log("Sending conversation data:", conversationData);  // Log the data you're sending to check if it's correct

    try {
      const response = await fetch("http://127.0.0.1:5000/api/save-conversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conversationData),
      });

      if (!response.ok) throw new Error("Failed to save conversation data");
      console.log("Conversation data saved successfully.");
    } catch (error) {
      console.error("Error saving conversation data:", error);
    }
  };

  useEffect(() => {
    // Handle saving conversation before unload or when component unmounts
    const handleBeforeUnload = async (event) => {
      await saveConversationToDatabase(); // Wait for the async save to complete
      event.preventDefault(); // This prevents the default unload action
      event.returnValue = ""; // Standard message for some browsers
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      saveConversationToDatabase(); // Also save conversation on component unmount
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [conversation, sessionId, startTimestamp, location.state.selectedActivityLabels, location.state.selectedEmotions, location.state.selectedFeedbackValue]);

  return (
    <>
      <HeaderMain />
      <Box
        sx={{
          padding: "16px",
          textAlign: "center",
          color: "black",
          fontSize: "24px",
          fontWeight: "bold",
          flexShrink: 0,
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        Maia Chatbot
      </Box>

      <Box
        sx={{
          height: "60vh", // Adjust height as needed
          width: "80vw", // Adjust width as needed
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          margin: "10px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Render conversation messages */}
        {conversation.map((message, index) => (
          <Box key={index} sx={{ textAlign: message.user ? "right" : "left", margin: "10px", padding: "8px", borderRadius: "8px", backgroundColor: message.user ? "#e0f7fa" : "#fce4ec", alignSelf: message.user ? "flex-end" : "flex-start", maxWidth: "70%" }}>
            <Typography variant="body1">
              <strong>{message.user ? "User" : "Chatbot"}:</strong> {message.user || message.chatbot}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          padding: "8px",
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px",
          width: "80vw",
        }}
      >
        <TextField
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          variant="outlined"
          size="small"
          fullWidth
          placeholder="Type a message..."
        />

        <button className="send-button" onClick={sendMessage}>
          Send
        </button>
      </Box>
      <Footer />
    </>
  );
}
