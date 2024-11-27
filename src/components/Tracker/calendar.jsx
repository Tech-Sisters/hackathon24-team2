import React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  addDays,
  startOfWeek,
  endOfWeek,
  isFuture,
  isSameDay,
  isBefore,
} from "date-fns";
import "./tracker.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Calendar = ({ trackedData }) => {
  const today = new Date();

  const getDaysInMonthGrid = (month) => {
    const start = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
    const end = addDays(endOfWeek(endOfMonth(month), { weekStartsOn: 0 }), 30);
    const days = [];
    for (let date = start; date <= end; date = addDays(date, 1)) {
      days.push(date);
    }
    return days;
  };

  const monthDays = getDaysInMonthGrid(today);

  const emotionColors = {
    veryBad: "var(--veryBad)",
    bad: "var(--bad)",
    neutral: "var(--neutral)",
    good: "var(--good)",
    veryGood: "var(--veryGood)",
    white: "#fff",
    bgSecondary: "var(--bgSecondary)",
  };

  let currentMonth = "";

  return (
    <div id="calendarContainer">
      {monthDays.map((date) => {
        const monthName = format(date, "MMMM");
        const isFirstOfMonth = format(date, "d") === "1";
        const dateString = format(date, "yyyy-MM-dd");
        const emotion = trackedData[dateString];
        const isToday = isSameDay(date, today);
        const isFutureDate = isFuture(date);
        const isPastDate = isBefore(date, today);

        // Determine tile background color
        let tileColor;
        if (isFutureDate) {
          tileColor = emotionColors.white;
        } else if (emotion) {
          tileColor = emotionColors[emotion];
        } else if (isPastDate) {
          tileColor = emotionColors.bgSecondary;
        }

        // Display month name only for the first day or when month changes
        let showMonthName = false;
        if (isFirstOfMonth || monthName !== currentMonth) {
          currentMonth = monthName;
          showMonthName = true;
        }

        return (
          /*<React.Fragment key={dateString}>
            {showMonthName && <div className="monthHeader">{monthName}</div>}
            <div
              className={`dateTile ${isToday ? "currentDay" : ""}`}
              style={{
                backgroundColor: tileColor,
              }}
            >
              {format(date, "d")}
            </div>
          </React.Fragment>
        );
      })}
    </div>*/
          <React.Fragment key={dateString}>
            {showMonthName && <div className="monthHeader">{monthName}</div>}
            {/* Use Link to navigate to the details page with the selected date */}
            <Link
              to={`/details/${dateString}`}
              style={{ textDecoration: "none" }}
            >
              <div
                className={`dateTile ${isToday ? "currentDay" : ""}`}
                style={{
                  backgroundColor: tileColor,
                }}
              >
                {format(date, "d")}
              </div>
            </Link>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Calendar;
