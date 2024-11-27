import Header from "../components/header";
import Footer from "../components/footer";
import Calendar from "../components/Tracker/calendar";

// eslint-disable-next-line react/prop-types
const TrackedData = ({ trackedData }) => {

return (
    <div id="appWrapper">
        <Header />
        <Calendar trackedData={trackedData} />
        <Footer />
    </div>
)}
export default TrackedData;