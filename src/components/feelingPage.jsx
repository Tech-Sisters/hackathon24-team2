/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import goodImage from "../assets/good.svg";
import veryGoodImage from "../assets/vgood.svg";
import badImage from "../assets/bad.svg";
import veryBadImage from "../assets/vbad.svg";
import neutralImage from "../assets/neutral.svg";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const FeelingPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const navigate = useNavigate();
  const faces = [
    {
      emoji: veryBadImage,
      label: "Very Bad",
      value: "veryBad",
      severity: 5,
      color: "var(--veryBadAccent)",
    },
    {
      emoji: badImage,
      label: "Bad",
      value: "bad",
      severity: 5,
      color: "var(--badAccent)",
    },
    {
      emoji: neutralImage,
      label: "Neutral",
      value: "neutral",
      severity: 3,
      color: "var(--neutralAccent)",
    },
    {
      emoji: goodImage,
      label: "Good",
      value: "good",
      severity: 3,
      color: "var(--goodAccent)",
    },
    {
      emoji: veryGoodImage,
      label: "Very Good",
      value: "veryGood",
      severity: 1,
      color: "var(--veryGoodAccent)",
    },
  ];

  const handleFeedbackClick = (index) => {
    setSelectedFeedback(index);
  };
  const handleNavigate = () => {
    if (selectedFeedback !== null) {
      navigate("/emotion", {
        state: { selectedFeedbackValue: faces[selectedFeedback].value },
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--bgSecondary)",
        height: "100vh",
        width: "100vw",
        margin: "16px",
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Box>
        <Header />
      </Box>
      <Typography
        gutterBottom
        sx={{
          color: "var(--dark)",
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          fontWeight: "600",
          lineHeight: "28px",
          letterSpacing: "-0.02em",
          textAlign: "center",
          padding: "2rem",
          margin: "2rem",
        }}
      >
        How did your day feel today?
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          flexGrow: 1,
          marginBottom: "2rem",
        }}
      >
        {faces.map((face, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleFeedbackClick(index)}
          >
            <img
              src={face.emoji}
              alt={face.label}
              style={{
                width: "50px",
                height: "50px",
                color: face.color,
                border:
                  selectedFeedback === index
                    ? `2px solid ${face.color}`
                    : "none",
                borderRadius: "50%",
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            <Typography
              sx={{
                color: face.color,
                fontSize: { xs: "14px", sm: "20px" },
                marginTop: "8px",
                fontWeight: selectedFeedback === index ? "bold" : "normal",
                textAlign: "center",
              }}
            >
              {face.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Button
        variant="contained"
        onClick={handleNavigate}
        sx={{
          marginTop: "auto",
          backgroundColor: "var(--bgSecondary)",
          color: "var(--main)",
        }}
        disabled={selectedFeedback === null}
      >
        Next
      </Button>
    </Box>
  );
};

export default FeelingPage;
