/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format, parse } from "date-fns";
import "./tracker.css";

const DataTable = ({ date, trackedData }) => {
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (trackedData && date) {
      const dataForDate =
        trackedData[date] || trackedData.find((entry) => entry.date === date);
      if (dataForDate) {
        setNotes(dataForDate.extraNotes || "");
      } else {
        setNotes("");
      }
    }
  }, [date, trackedData]);

  const handleNoteChange = (newNote) => {
    setNotes(newNote);
  };

  const handleSave = () => {
    const dataForDate =
      trackedData[date] || trackedData.find((entry) => entry.date === date);
    if (dataForDate) {
      dataForDate.extraNotes = notes;
      alert("Notes saved successfully!");
      navigate("/tracker");
    } else {
      console.error("No data found for the given date.");
    }
  };

  let formattedDate;
  try {
    const parsedDate = parse(date, "yyyyMMdd", new Date());
    formattedDate = format(parsedDate, "dd MMM yyyy");
  } catch (error) {
    console.error("Invalid date format:", date, error);
    formattedDate = "Invalid date";
  }

  const dataForDate =
    trackedData[date] || trackedData.find((entry) => entry.date === date);

  if (!date || !dataForDate) {
    return <p>No data available for this date.</p>;
  }

  const { feeling, emotions, activities, extraNotes } = dataForDate;

  return (
    <div className="dataTable">
      <div className="dataRow">
        <h3>Date: {formattedDate}</h3>
        <p>
          <strong>Base Feeling (out of 5):</strong> {feeling || "N/A"}
        </p>
        <p>
          <strong>Emotions:</strong> {emotions ? emotions : "N/A"}
        </p>
        <p>
          <strong>Activities:</strong> {activities ? activities : "N/A"}
        </p>
        <div>
          <strong>Extra Notes:</strong>
          <textarea
            value={extraNotes}
            onChange={(e) => handleNoteChange(e.target.value)}
            placeholder="Add your notes here..."
            rows="4"
            className="noteTextarea"
          />
        </div>
        <button onClick={handleSave} className="saveButton">
          Save
        </button>
      </div>
    </div>
  );
};

export default DataTable;
