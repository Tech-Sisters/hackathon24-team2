
import axios from "axios";

const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
  
    return `${year}${month}${day}`;
  };
  

const fetchTrackedData = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3001/api/user-feelings/"
          );
          console.log(response);
          if (response.data && Array.isArray(response.data.data)) {
            const sortedData = response.data.data.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
          const mostRecent = sortedData[0];
          console.log("--------------", mostRecent);
          const data = {
            date: formatDate(mostRecent.createdAt),
            feeling: mostRecent.feeling,
            emotions: mostRecent.emotion,
            activities: mostRecent.reason,
            extraNotes: mostRecent.extraNotes,
          };
          return data;
        } else {
          console.log("No data found.");
        }
      }
      catch (error) {
          // Handle network or server errors
          console.error("Network error:", error);
        }
      };
export default fetchTrackedData;