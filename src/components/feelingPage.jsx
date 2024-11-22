/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { css } from "@emotion/react";
import goodImage from "../assets/good.svg";
import veryGoodImage from "../assets/vgood.svg";
import badImage from "../assets/bad.svg";
import veryBadImage from "../assets/vbad.svg";
import neutralImage from "../assets/neutral.svg";

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

const FeedbackPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const faces = [
    { emoji: veryBadImage, label: "Very Bad", color: "#3D7D7D" },
    { emoji: badImage, label: "Bad", color: "#A15A49" },
    { emoji: neutralImage, label: "Neutral", color: "#497A49" },
    { emoji: goodImage, label: "Good", color: "#915F94" },
    { emoji: veryGoodImage, label: "Very Good", color: "#8B6C05" },
  ];

  const handleFeedbackClick = (index) => {
    setSelectedFeedback(index);
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
        padding: { xs: "10px", sm: "20px" },
      }}
    >
      <Typography
        gutterBottom
        sx={{
          color: "#7E736E",
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
                selectedFeedback === index ? `2px solid ${face.color}` : "none",
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
  );
};

export default FeedbackPage;
