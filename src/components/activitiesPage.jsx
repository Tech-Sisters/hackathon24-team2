import React, { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import { css } from "@emotion/react";

const icons = {};
const modules = import.meta.glob("../assets/icons/*.svg", { eager: true });

for (const path in modules) {
  const iconName = path.split("/").pop().replace(".svg", "");
  icons[iconName] = modules[path].default;
}
console.log(icons);
const activitiesStyles = css`
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

const ActivitiesPage = () => {
  const [selectedFeedback, setSelectedFeedback] = useState([]);
  const activities = [
    {
      icon: icons["Family"],
      label: "Family",
      color: "#C8EBEB",
      selectedColor: "#3D7D7D",
    },
    {
      icon: icons["Work"],
      label: "Work",
      color: "#C8EBEB",
      selectedColor: "#3D7D7D",
    },
    {
      icon: icons["Partner"],
      label: "Partner",
      color: "#FFD8CE",
      selectedColor: "#A15A49",
    },
    {
      icon: icons["Finances"],
      label: "Finances",
      color: "#FFD8CE",
      selectedColor: "#A15A49",
    },
    {
      icon: icons["News"],
      label: "News",
      color: "#C8EBC8",
      selectedColor: "#497A49",
    },
    {
      icon: icons["Hobbies"],
      label: "Hobbies",
      color: "#FBDFFF",
      selectedColor: "#915F94",
    },
    {
      icon: icons["Weather"],
      label: "Weather",
      color: "#FBDFFF",
      selectedColor: "#915F94",
    },
    {
      icon: icons["Health"],
      label: "Health",
      color: "#FFEEB8",
      selectedColor: "#8B6C05",
    },
    {
      icon: icons["Travel"],
      label: "Travel",
      color: "#FFEEB8",
      selectedColor: "#8B6C05",
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
        Which moments or activities shaped how you feel today?
      </Typography>

      <Box
        css={activitiesStyles}
        sx={{
          width: "80vw",
          maxWidth: "100vw",
          margin: "0 auto",
        }}
      >
        {activities.map((activity, index) => (
          <span key={index} onClick={() => handleFeedbackClick(index)}>
            <Chip
              label={activity.label}
              icon={
                activity.icon && (
                  <img
                    src={activity.icon}
                    alt={activity.label}
                    style={{ width: "20px", height: "20px" }}
                  />
                )
              }
              style={{
                backgroundColor: selectedFeedback.includes(index)
                  ? activity.selectedColor
                  : activity.color,
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

export default ActivitiesPage;
