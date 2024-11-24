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
  const sendMessage = async () => {
    if (userInput.trim()) {
      // Add user message to the messages list
      const userMessage = { sender: "user", text: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Clear the input field
      setUserInput("");

      try {
        // Send the user's message to the backend
        const response = await fetch("backendurl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userInput }),
        });

        // Parse the response from the backend
        const data = await response.json();

        // Add the bot's response to the messages list
        const botResponse = { sender: "bot", text: data.response };
        setMessages((prevMessages) => [...prevMessages, botResponse]);
      } catch (error) {
        console.error("Error communicating with the backend:", error);
        const errorMessage = {
          sender: "bot",
          text: "Sorry, I couldn't process your request. Please try again.",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    }
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
      {/* Chat Response Presented */}
      <Box
        sx={{
          height: "60vh", // Adjust height as needed
          width: "80vw", // Adjust width as needed
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          margin: "10px",
          backgroundColor: "#fff", // Background for chat area
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              textAlign: message.sender === "user" ? "right" : "left",
              margin: "10px",
              padding: "8px",
              borderRadius: "8px",
              backgroundColor:
                message.sender === "user" ? "#e0f7fa" : "#fce4ec",
              alignSelf: message.sender === "user" ? "flex-end" : "flex-start",
              maxWidth: "70%",
            }}
          >
            <Typography variant="body1">
              <strong>{message.sender}:</strong> {message.text}
            </Typography>
          </Box>
        ))}
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
    </Box>
  );
}
