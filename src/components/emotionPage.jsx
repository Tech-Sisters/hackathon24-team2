import React, { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { css } from "@emotion/react";

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

  const emotions = [
    { label: "Anxious", color: "#C8EBEB", selectedColor: "#3D7D7D" },
    { label: "Stressed", color: "#C8EBEB", selectedColor: "#3D7D7D" },
    { label: "Lonely", color: "#C8EBEB", selectedColor: "#3D7D7D" },
    { label: "Guilty", color: "#FFD8CE", selectedColor: "#A15A49" },
    { label: "Sad", color: "#FFD8CE", selectedColor: "#A15A49" },
    { label: "Tired", color: "#FFD8CE", selectedColor: "#A15A49" },
    { label: "Neutral", color: "#C8EBC8", selectedColor: "#497A49" },
    { label: "Proud", color: "#FBDFFF", selectedColor: "#915F94" },
    { label: "Energized", color: "#FBDFFF", selectedColor: "#915F94" },
    { label: "Cheerful", color: "#FFEEB8", selectedColor: "#8B6C05" },
    { label: "Optimistic", color: "#FFEEB8", selectedColor: "#8B6C05" },
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        backgroundColor: "#ffffff",
        height: "100vh",
        width: "100vw",
        padding: "5vw",
      }}
    >
      <Typography
        gutterBottom
        sx={{
          color: "#7E736E",
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
  );
};

export default EmotionPage;
