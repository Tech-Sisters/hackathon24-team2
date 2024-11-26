import React, { useState, useEffect } from "react";
import { Box, Typography, Chip, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./header";

const EmotionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedFeedbackValue } = location.state || {
    selectedFeedbackValue: null,
  };
  const emotions = [
    {
      label: "Anxious",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
      value: "veryBad",
    },
    {
      label: "Stressed",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
      value: "veryBad",
    },
    {
      label: "Frustrated",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
      value: "veryBad",
    },
    {
      label: "Lonely",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
      value: "veryBad",
    },
    {
      label: "Overwhelmed",
      color: "var(--veryBad)",
      selectedColor: "var(--veryBadAccent)",
      value: "veryBad",
    },
    {
      label: "Guilty",
      color: "var(--bad)",
      selectedColor: "var(--badAccent)",
      value: "bad",
    },
    {
      label: "Sad",
      color: "var(--bad)",
      selectedColor: "var(--badAccent)",
      value: "bad",
    },
    {
      label: "Angry",
      color: "var(--bad)",
      selectedColor: "var(--badAccent)",
      value: "bad",
    },
    {
      label: "Tired",
      color: "var(--bad)",
      selectedColor: "var(--badAccent)",
      value: "bad",
    },
    {
      label: "Neutral",
      color: "var(--neutral)",
      selectedColor: "var(--neutralAccent)",
      value: "neutral",
    },
    {
      label: "Insightful",
      color: "var(--neutral)",
      selectedColor: "var(--neutralAccent)",
      value: "neutral",
    },
    {
      label: "Focused",
      color: "var(--neutral)",
      selectedColor: "var(--neutralAccent)",
      value: "neutral",
    },
    {
      label: "Reflective",
      color: "var(--neutral)",
      selectedColor: "var(--neutralAccent)",
      value: "neutral",
    },
    {
      label: "Thoughtful",
      color: "var(--neutral)",
      selectedColor: "var(--neutralAccent)",
      value: "neutral",
    },
    {
      label: "Proud",
      color: "var(--good)",
      selectedColor: "var(--goodAccent)",
      value: "good",
    },
    {
      label: "Energized",
      color: "var(--good)",
      selectedColor: "var(--goodAccent)",
      value: "good",
    },
    {
      label: "Relaxed",
      color: "var(--good)",
      selectedColor: "var(--goodAccent)",
      value: "good",
    },
    {
      label: "Content",
      color: "var(--good)",
      selectedColor: "var(--goodAccent)",
      value: "good",
    },
    {
      label: "Cheerful",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
      value: "veryGood",
    },
    {
      label: "Optimistic",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
      value: "veryGood",
    },
    {
      label: "Excited",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
      value: "veryGood",
    },
    {
      label: "Calm",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
      value: "veryGood",
    },
    {
      label: "Happy",
      color: "var(--veryGood)",
      selectedColor: "var(--veryGoodAccent)",
      value: "veryGood",
    },
  ];
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [reorderedEmotions, setReorderedEmotions] = useState([]);

  useEffect(() => {
    if (selectedFeedbackValue) {
      const prioritized = emotions.filter(
        (emotion) => emotion.value === selectedFeedbackValue
      );
      const others = emotions.filter(
        (emotion) => emotion.value !== selectedFeedbackValue
      );
      setReorderedEmotions([...prioritized, ...others]);
    } else {
      setReorderedEmotions(emotions);
    }
  }, [selectedFeedbackValue]);

  const handleFeedbackClick = (index) => {
    setSelectedEmotions((prevSelected) => {
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
        margin: "16px",
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Box>
        <Header />
      </Box>
      <Box sx={{ flex: 1 }}>
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
          What emotions are sitting with you right now?
        </Typography>

        <Box
          sx={{
            width: "80vw",
            maxWidth: "100vw",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "3vw",
          }}
        >
          {reorderedEmotions.map((emotion, index) => {
            const isSelected = selectedEmotions.includes(index);

            return (
              <Chip
                key={index}
                label={emotion.label}
                onClick={() => handleFeedbackClick(index)}
                sx={{
                  backgroundColor: isSelected
                    ? emotion.selectedColor
                    : emotion.color,
                  color: isSelected ? "#fff" : "#000",
                  fontWeight: isSelected ? "bold" : "normal",
                  cursor: "pointer",
                  transition:
                    "transform 0.2s ease-in-out, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                    backgroundColor: isSelected
                      ? emotion.selectedColor
                      : emotion.color,
                  },
                }}
              />
            );
          })}
        </Box>
      </Box>
      <Button
        variant="contained"
        onClick={handleNavigate}
        sx={{
          marginTop: "auto",
          backgroundColor: "var(--bgSecondary)",
          color: "var(--textMain)",
        }}
        disabled={selectedEmotions.length === 0}
      >
        Next
      </Button>
    </Box>
  );
};

export default EmotionPage;
