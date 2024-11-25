/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { css } from "@emotion/react";
import goodImage from "../assets/good.svg";
import veryGoodImage from "../assets/vgood.svg";
import badImage from "../assets/bad.svg";
import veryBadImage from "../assets/vbad.svg";
import neutralImage from "../assets/neutral.svg";
import { useNavigate } from "react-router-dom";

const feelingStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 50px;
  font-size: 2rem;
  cursor: pointer;

  span {
    transition: transform 0.2s ease-in-out;
  }

  span:hover {
    transform: scale(1.2);
  }
`;

const FeelingPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const navigate = useNavigate();
  const faces = [
    { emoji: veryBadImage, label: "Very Bad", color: "var(--veryBadAccent)" },
    { emoji: badImage, label: "Bad", color: "var(--badAccent)" },
    { emoji: neutralImage, label: "Neutral", color: "var(--neutralAccent)" },
    { emoji: goodImage, label: "Good", color: "var(--goodAccent)" },
    {
      emoji: veryGoodImage,
      label: "Very Good",
      color: "var(--veryGoodAccent)",
    },
  ];

  const handleFeedbackClick = (index) => {
    setSelectedFeedback(index);
  };
  const handleNavigate = () => {
    navigate("/emotion");
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
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          gutterBottom
          sx={{
            color: "var(--bgDark)",
            fontFamily: "Inter, sans-serif",
            fontSize: { xs: "18px", sm: "24px" },
            fontWeight: "600",
            lineHeight: "28px",
            letterSpacing: "-0.02em",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          How did your day feel today?
        </Typography>

        <Box css={feelingStyles}>
          {faces.map((face, index) => (
            <span
              key={index}
              onClick={() => handleFeedbackClick(index)}
              style={{
                color: face.color,
                border:
                  selectedFeedback === index
                    ? `2px solid ${face.color}`
                    : "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
              }}
            >
              <img
                src={face.emoji}
                alt={face.label}
                style={{ width: "50px", height: "50px" }}
              />
            </span>
          ))}
        </Box>
        <Box css={feelingStyles}>
          {faces.map((face, index) => (
            <Typography
              key={index}
              sx={{
                color: `${face.color}`,
                fontSize: { xs: "14px", sm: "20px" },
                lineHeight: "28px",
                fontWeight: selectedFeedback === index ? "bold" : "normal",
                letterSpacing: "-0.02em",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              {face.label}
            </Typography>
          ))}
        </Box>
      </Box>
      "
      <Button
        variant="contained"
        onClick={handleNavigate}
        sx={{
          margin: "3rem 0",
          backgroundColor: "var(--bgSecondary)",
          color: "var(--textMain)",
        }}
        disabled={selectedFeedback === null}
      >
        Next
      </Button>
    </Box>
  );
};

export default FeelingPage;
