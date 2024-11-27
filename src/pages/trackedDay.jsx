import Header from "../components/header";
import Footer from "../components/footer";
import DataTable from "../components/Tracker/dataTable";
import { IconButton, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"; 
import { KeyboardArrowLeft } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
const TrackedDay = ({ trackedData }) => {
    const navigate = useNavigate();
    const { date } = useParams();

    const handleBackNavigate = () => {
        navigate(-1); };

    console.log(trackedData)

  const mockTrackedData = {
    "20241126": {
      baseFeeling: 4,
      emotions: ["happy", "content", "optimistic"],
      activities: ["meditation", "reading", "walking"],
      extraNotes: "Had a productive day, felt positive throughout."
    },
    "20241125": {
      baseFeeling: 3,
      emotions: ["neutral", "tired"],
      activities: ["working", "cooking"],
      extraNotes: "A bit exhausted but managed to complete my tasks."
    },
    "20241124": {
      baseFeeling: 2,
      emotions: ["sad", "overwhelmed"],
      activities: ["cleaning", "organizing"],
      extraNotes: "Felt stressed due to too many things to do. Need to plan better."
    },
    "20241123": {
      baseFeeling: 5,
      emotions: ["veryGood", "cheerful"],
      activities: ["celebration", "dancing"],
      extraNotes: "Spent time with friends, felt joyful and carefree."
    },
    "20241122": {
      baseFeeling: 3,
      emotions: ["neutral", "reflective"],
      activities: ["journaling", "light exercise"],
      extraNotes: "A day for self-reflection, felt calm and collected."
    }
  }

return (
    <>
      <Header />
      <IconButton
        onClick={handleBackNavigate}
        sx={{
          marginTop: "80px",
          color: "var(--main)",
        }}
      >
        <KeyboardArrowLeft sx={{ fontSize: "2rem" }} />
      </IconButton>
      <Box sx={{ flex: 1 }}>
        <DataTable date={date} trackedData={mockTrackedData} />
      </Box>
        <Footer />
    </>
)}
export default TrackedDay;