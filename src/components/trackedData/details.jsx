import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, Typography, Card, CardContent } from "@mui/material";

const Details = () => {
  const { date } = useParams(); // Fetch selected date from URL parameters
  const [trackedData, setTrackedData] = useState(null);

  // Simulating fetching data from the backend
  useEffect(() => {
    // Replace this with an actual API call, e.g., fetch(`/api/emotions/${date}`)
    const fetchData = async () => {
      // Example data fetched for the selected date (replace with actual API call)
      const data = {
        baseFeeling: 4,
        emotions: ["Happy", "Excited"],
        activities: ["Work", "Exercise"],
      };
      setTrackedData(data);
    };

    fetchData();
  }, [date]);

  if (!trackedData) {
    return (
      <Paper elevation={3} style={{ padding: "16px" }}>
        <Typography variant="h6">Loading...</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        {date}
      </Typography>
      <Card variant="outlined" style={{ marginTop: "16px" }}>
        <CardContent>
          <Typography variant="h6">
            Base Feeling (out of 5): {trackedData.baseFeeling}
          </Typography>
          <Typography variant="h6">Emotions:</Typography>
          <ul>
            {trackedData.emotions.map((emotion, index) => (
              <li key={index}>{emotion}</li>
            ))}
          </ul>
          <Typography variant="h6">Activities:</Typography>
          <ul>
            {trackedData.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default Details;
