/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format, parse } from "date-fns";
import {
  emotionWords,
  emotionTransparentColors,
  emotionAccentColors,
} from "../../utils/constants";
import "./tracker.css";
import axios from "axios";
const DataTable = ({ date, trackedData }) => {
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

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

  const handleSave = async () => {
    const dataForDate = trackedData[date];
    if (dataForDate) {
      dataForDate.extraNotes = notes;
      //alert("Notes saved successfully!");
      try {
        await axios.post(
          "http://localhost:3001/api/user-feelings/",
          trackedData[date]
        );
        navigate("/tracker");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
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

  const dataForDate = trackedData[date];

  if (!date || !dataForDate) {
    return <p>No data available for this date.</p>;
  }

  const { feeling, emotion, reason, extraNotes } = dataForDate;

  return (
    <div
      className="dataRow"
      style={{ backgroundColor: emotionTransparentColors[feeling] }}
    >
      <p id="dataTitle">
        {`On `}
        <strong>{formattedDate}</strong>
        {`, \nI was feeling `}
        <strong style={{ color: emotionAccentColors[feeling] }}>
          {emotionWords[feeling] || "N/A"}
        </strong>
      </p>
      <p>
        {`I particularly felt...`}
        <br />
        <strong>{emotion ? emotion.join(", ") : "N/A"}</strong>
      </p>
      <p>
        {`These were because of..`}
        <br />
        <strong>{reason ? reason.join(", ") : "N/A"}</strong>.
      </p>
      <p>
        {`Thoughts I saved for later...`}
        <textarea
          value={extraNotes}
          onChange={(e) => handleNoteChange(e.target.value)}
          placeholder="Add your notes here..."
          rows="4"
          className="noteTextarea"
        />
      </p>
      <button onClick={handleSave} className="saveButton">
        Save
      </button>
    </div>
  );
};

export default DataTable;
