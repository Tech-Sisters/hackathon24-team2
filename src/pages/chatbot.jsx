import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
} from "@mui/material";
import HeaderMain from "../components/Landing/headerMain";
import Footer from "../components/footer";
import { useLocation } from "react-router-dom";


export default function Chatbot() {

  const generateSessionId = () => {
    return "session-" + Math.random().toString(36).substr(2, 9);
  };
  const generatedSessionId = generateSessionId();
  setSessionId(generatedSessionId);
  setStartTimestamp(new Date().toISOString());

  const location = useLocation();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello, I am Maia. How can I assist you today?" }
  ]);


  const [userInput, setUserInput] = useState("");
  const [startTimestamp, setStartTimestamp] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "Wa alaikum assalam. Thoughtfulness can lead to great understanding. The Prophet Muhammad (peace be upon him) said, 'Think well, for thinking is a part of worship.' Are you comfortable sharing what's on your mind today? Perhaps we can explore these thoughts together.",
        },
      ]);
    }, 2000); // Delay for 2 seconds before sending the second message

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);


  const sendMessage = async () => {
    if (userInput.trim()) {
      const newMessage = { sender: "user", text: userInput };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      try {
        const dataForBackend = {
          sessionId: generatedSessionId,
          selectedActivityLabels: location.state.selectedActivityLabels,
          selectedEmotions: location.state.selectedEmotions,
          selectedFeedbackValue: location.state.selectedFeedbackValue,
          message: userInput,
          bot_response: botResponse,

        };

        const response = await fetch("http://127.0.0.1:5000/api/chat", {
          method: "POST", // Changed to POST for sending data in body
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataForBackend),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch response from the backend");
        }

        const data = await response.json();
        const botResponse = { sender: "bot", text: data.bot_response };
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

    setUserInput(""); // Clear input field after sending message
  };



  {
    /* Check chatbot with mock data*/
  }
  // // Mock data for bot responses
  // const mockResponses = [
  //   { trigger: "hello", response: "Hi there! How can I help you today?" },
  //   {
  //     trigger: "sad",
  //     response:
  //       "I am sorry to hear that. Here is a comforting verse from the Quran: 'Indeed, with hardship comes ease.' (94:6)",
  //   },
  //   {
  //     trigger: "happy",
  //     response: "That's wonderful! Always remember to be grateful.",
  //   },
  //   {
  //     trigger: "thank you",
  //     response: "You're welcome! Let me know if I can assist further.",
  //   },
  // ];
  // // Simulate bot response using mock data
  // const getMockResponse = (input) => {
  //   const found = mockResponses.find((item) =>
  //     input.toLowerCase().includes(item.trigger)
  //   );
  //   return found
  //     ? found.response
  //     : "I'm here to assist with any emotions or questions you have!";
  // };

  {
    /*code for back end chat connectivity
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
}
  */
  }


  // // Handle sending a message
  // const sendMessage = () => {
  //   if (userInput.trim()) {
  //     const newMessage = { sender: "user", text: userInput };
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);

  //     // Simulate a bot response after the user sends a message
  //     setTimeout(() => {
  //       const botResponse = getMockResponse(userInput);
  //       setMessages((prevMessages) => [
  //         ...prevMessages,
  //         { sender: "bot", text: botResponse },
  //       ]);
  //     }, 1000); // Simulate delay
  //   }
  //   setUserInput(""); // Clear input field
  // };

  return (
    <>
      <HeaderMain />
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
      <Footer />
    </>
  );
}
