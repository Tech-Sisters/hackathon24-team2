import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Container,
} from "@mui/material";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello, I am Maia. How can I assist you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const sendMessage = () => {
    if (userInput.trim()) {
      const newMessage = { sender: "user", text: userInput };
      setMessages([...messages, newMessage]);

      // Simulating a bot response after the user sends a message
      setTimeout(() => {
        const botResponse = { sender: "bot", text: "I am here to help you!" }; // Customize your bot response
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      }, 1000); // simulate response delay
    }
    setUserInput(""); // Clear input after sending
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Maia Header */}
      <Box
        sx={{
          backgroundColor: "#6200ea",
          padding: "16px",
          textAlign: "center",
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
          flexShrink: 0,
        }}
      >
        Maia Chatbot
      </Box>
      {/* Chat Input Area */}
      <Box
        sx={{
          padding: "8px",
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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

        <button className="send-button" onClick={handleSendMessage}>
          Send
        </button>
      </Box>
    </Box>
  );
}
