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
        <DataTable date={date} trackedData={trackedData} />
      </Box>
        <Footer />
    </>
)}
export default TrackedDay;