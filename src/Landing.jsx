import * as React from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Paper,
  Typography,
  Button,
  Card,
  CardMedia,
  CardActions,
} from "@mui/material";
export default function Landing() {
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
        <Typography variant="h1"> MAIAA</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ padding: 3, justifyContent: "center", alignItems: "center" }}
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
                backgroundColor: "#f0f0f0",
                height: 30, // Reduced height
                width: 30, // Reduced width
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                {dayOfWeek} {/* Display the day of the week */}
              </Typography>
              <Typography variant="h6">{dayOfMonth}</Typography>{" "}
              {/* Display the day of the month */}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
