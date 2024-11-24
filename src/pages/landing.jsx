import * as React from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Paper,
  Typography,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import feelingTodayImage from "./media/feeling_today.jpg";
import chatMaiaImage from "./media/chat_maia.jpg";
import ayaImage from "./media/aya_hadith.jpg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const carouselImages = [ayaImage, feelingTodayImage];

const { useState, useEffect } = React;

export default function Landing() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    // Check if ref.current is not null before accessing ownerDocument
    if (ref.current) {
      ref.current.ownerDocument.body.scrollTop = 0;
    }
  }, [value]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };
  // Automatic image slider every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const generateCalendarDates = () => {
    const today = new Date(); // Get current date
    const dates = [];

    // Loop to create the next 10 days
    for (let i = 0; i < 10; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() - i); // Set the date to current date + i

      const dayOfWeek = currentDate.toLocaleString("en-US", {
        weekday: "short",
      }); // Get the first 3 letters of the day of the week
      const dayOfMonth = currentDate.getDate(); // Get the day of the month

      // Store both the day of the week and the date
      dates.push({ dayOfWeek, dayOfMonth });
    }

    return dates.reverse();
  };

  return (
    <div>
      <Box
        sx={{
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1"> MAIA</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{
          padding: 3,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {generateCalendarDates().map(({ dayOfWeek, dayOfMonth }, index) => (
          <Grid item xs={4} sm={2} key={index}>
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: index % 2 === 0 ? "#e0f7fa" : "#fff3e0",
                height: 30, // Reduced height
                width: 30, // Reduced width
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              >
                {dayOfWeek} {/* Display the day of the week */}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
                {dayOfMonth}
              </Typography>{" "}
              {/* Display the day of the month */}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={1} sx={{ padding: 2, flexDirection: "column" }}>
        {/* First Rectangle - "How are you feeling today?" */}
        <Grid item xs={12}>
          <Card
            sx={{
              width: "100%",
              height: { xs: 150, sm: 200 },
              position: "relative",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image={feelingTodayImage}
              alt="feeling today"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Optional dark overlay for readability
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" } }}
                textAlign="center"
              >
                How are you feeling today?
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Carousel (Custom) - Stacked as second rectangle */}
        <Grid item xs={12}>
          <Card sx={{ position: "relative", height: 200 }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image={carouselImages[currentImageIndex]} // Show current image in the carousel
              alt="carousel image"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                    fontFamily: "Tahoma, Arial, sans-serif",
                    color: "black",
                    marginBottom: "10px",
                  }}
                >
                  إِنَّ مَعَ الْعُسْرِ يُسْرًا
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.5rem", md: "1rem" },
                    fontFamily: "Tahoma, Arial, sans-serif",
                    color: "black",
                  }}
                >
                  {`Surely with 'that' hardship come 'more' ease.[94:6]`}
                </Typography>
              </div>
            </Box>

            {/* Navigation buttons */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
                zIndex: 10,
              }}
            >
              <IconButton onClick={prevImage} color="primary">
                <ArrowBackIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <IconButton onClick={nextImage} color="primary">
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Card>
        </Grid>

        {/* Third Rectangle - "Yesterday not so great? Chat with MAIA now." */}
        <Grid item xs={12}>
          <Card sx={{ width: "100%", height: 200, position: "relative" }}>
            <CardMedia
              component="img"
              sx={{ width: "100%", height: "100%" }}
              image={chatMaiaImage}
              alt="chat maia"
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            >
              <Typography
                variant="h5"
                textAlign="center"
                sx={{
                  fontFamily: " Arial, sans-serif",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                }}
              >
                   {`Yesterday not so great? Let's talk!`}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            "& .MuiBottomNavigationAction.Mui-selected": {
              color: "black",
            },
            display: "block", // Hide bottom nav on medium and larger screens
          }}
        >
          <BottomNavigationAction icon={<HomeIcon />} />
          <BottomNavigationAction icon={<ChatBubbleIcon />} />
          <BottomNavigationAction icon={<EventIcon />} />
          <BottomNavigationAction icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </div>
  );
}
