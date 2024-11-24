import * as React from "react";


import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import PersonIcon from "@mui/icons-material/Person";
import feelingTodayImage from "../media/feeling_today.jpg";
import chatMaiaImage from "../media/chat_maia.jpg";
import ayaImage from "../media/aya_hadith.jpg";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderMain from "../components/Landing/headerMain";
import CalendarStrip from "../components/Landing/calendar";

const carouselImages = [ayaImage, feelingTodayImage];

const { useState, useEffect } = React;

export default function Landing() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
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


  return (
    <div>
       <HeaderMain />
       <CalendarStrip />
       
      {/*
      <Grid container spacing={1} sx={{ padding: 2, flexDirection: "column" }}>
       
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
      </Paper> */}
    </div>
  );
}
