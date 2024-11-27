/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { format, parse } from "date-fns";
import "./tracker.css";

const DataTable = ({ date, trackedData }) => {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (trackedData && date) {
      const dataForDate = trackedData[date];
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

  let formattedDate;
  try {
    const parsedDate = parse(date, "yyyyMMdd", new Date());
    formattedDate = format(parsedDate, "dd MMM yyyy");
  } catch (error) {
    console.error("Invalid date format:", date, error);
    formattedDate = "Invalid date";
  }

  if (!date || !trackedData[date]) {
    return <p>No data available for this date.</p>;
  }

  const { baseFeeling, emotions, activities } = trackedData[date];

  return (
    <div className="dataTable">
      <div className="dataRow">
        <h3>Date: {formattedDate}</h3>
        <p><strong>Base Feeling (out of 5):</strong> {baseFeeling}</p>
        <p><strong>Emotions:</strong> {emotions.join(", ")}</p>
        <p><strong>Activities:</strong> {activities.join(", ")}</p>
        <div>
          <strong>Extra Notes:</strong>
          <textarea
            value={notes}
            onChange={(e) => handleNoteChange(e.target.value)}
            placeholder="Add your notes here..."
            rows="4"
            className="noteTextarea"
          />
        </div>
      </div>
    </div>
  );
};

export default DataTable;
