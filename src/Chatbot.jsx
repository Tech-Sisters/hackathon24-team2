import * as React from "react";

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
    </Box>
  );
}
