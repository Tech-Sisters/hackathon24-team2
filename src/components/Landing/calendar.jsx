import Grid from "@mui/material/Grid2";
import {Paper, Typography} from "@mui/material";

    
export default function CalendarStrip(tracking) {
  const generateCalendarDates = () => {
    const today = new Date(); 
    const dates = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() - i); 

      const dayOfWeek = currentDate.toLocaleString("en-US", {
        weekday: "short",
      }); 
      const dayOfMonth = currentDate.getDate(); 

      dates.push({ dayOfWeek, dayOfMonth });
    }

    return dates.reverse();
  };

  return (
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
                backgroundColor: {tracking},
                height: 30, 
                width: 30, 
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", fontSize: "0.75rem" }}
              >
                {dayOfWeek} 
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
                {dayOfMonth}
              </Typography>{" "}

            </Paper>
          </Grid>
        ))}
      </Grid>
  )
}