import React, { useState } from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const emotionStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3vw;
  margin-top: 5vh;
  font-size: 2rem;
  cursor: pointer;

  span {
    transition: transform 0.2s ease-in-out;
  }

  span:hover {
    transform: scale(1.2);
  }
`;

const EmotionPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState([]);
  const navigate = useNavigate();
  const emotions = [
    {
      label: "Anxious",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
    },
    {
      label: "Stressed",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
    },
    {
      label: "Lonely",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
    },
    { label: "Guilty", color: "var(--bad)", selectedColor: "var(--badAccent)" },
    { label: "Sad", color: "var(--bad)", selectedColor: "var(--badAccent)" },
    { label: "Tired", color: "var(--bad)", selectedColor: "var(--badAccent)" },
    {
      label: "Neutral",
      color: "var(--neutral)",
      selectedColor: "var(--neutralAccent)",
    },
    {
      label: "Proud",
      color: "var(--good)",
      selectedColor: "var(--goodAccent)",
    },
    {
      label: "Energized",
      color: "var(--good)",
      selectedColor: "var(--goodAccent)",
    },
    {
      label: "Cheerful",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
    },
    {
      label: "Optimistic",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
    },
  ];

  const handleFeedbackClick = (index) => {
    setSelectedFeedback((prevSelected) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((i) => i !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };
  const handleNavigate = () => {
    navigate("/activities");
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "var(--bgSecondary)",
        height: "100vh",
        width: "100vw",
        padding: "5vw",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          gutterBottom
          sx={{
            color: "var(--bgDark)",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "18px", sm: "24px" },
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            margin: "2rem 0",
            padding: "1rem",
          }}
        >
          What emotions are sitting with you right now?
        </Typography>

        <Box
          css={emotionStyles}
          sx={{
            width: "80vw",
            maxWidth: "100vw",
            margin: "0 auto",
          }}
        >
          {emotions.map((emotion, index) => (
            <span key={index} onClick={() => handleFeedbackClick(index)}>
              <Chip
                label={emotion.label}
                style={{
                  backgroundColor: selectedFeedback.includes(index)
                    ? emotion.selectedColor
                    : emotion.color,
                  fontWeight: selectedFeedback.includes(index)
                    ? "bold"
                    : "normal",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#000000",
                  margin: "0.5rem",
                }}
              />
            </span>
          ))}
        </Box>
      </Box>
      <Button
        variant="contained"
        onClick={handleNavigate}
        sx={{
          margin: "3rem 0",
          backgroundColor: "var(--bgSecondary)",
          color: "var(--textMain)",
        }}
        disabled={selectedFeedback.length === 0}
      >
        Next
      </Button>
    </Box>
  );
};

export default EmotionPage;
