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
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1"> MAIA</Typography>
      </Box>
      {/* Maia Header */}
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
      {/* Chat Input Area */}
      <Box
        sx={{
          padding: "8px",
          backgroundColor: "#fff",
          borderTop: "1px solid #ddd",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px",
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
    </Box>
  );
}
