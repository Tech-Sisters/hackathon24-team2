import { format, startOfWeek, addDays } from "date-fns";
import { emotionColors } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import "./landing.css";
import mockTrackedData from "../../utils/mockData";

// eslint-disable-next-line react/prop-types
export default function CalendarStrip2() {
  const navigate = useNavigate();
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
  const weekDays = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfCurrentWeek, i)
  );

  const trackedData = mockTrackedData?.reduce((acc, item) => {
    acc[item.date] = item.feeling;
    return acc;
  }, {});

  return (
    <div id="calendarStripContainer">
      <div id="dayLabels">
        {weekDays.map((day) => (
          <div className="dayLabel" key={day}>
            {format(day, "EEE").toLocaleUpperCase()}
          </div>
        ))}
      </div>
      <div id="dateTiles">
        {weekDays.map((date) => {
          const dateString = format(date, "yyyyMMdd");
          const emotion = trackedData[dateString] || "white";
          const tileColor = emotionColors[emotion];

          const isToday =
            format(date, "yyyyMMdd") === format(today, "yyyyMMdd");
          // const isToday =
          // format(date, "yyyyMMdd") === format("2024-11-29", "yyyyMMdd"); //dummy code lol

          return (
            <div
              className={`dateTile ${isToday ? "currentDay" : ""}`}
              key={dateString}
              style={{ backgroundColor: tileColor }}
              onClick={() => {
                navigate(`/tracker/${dateString}`);
              }}
            >
              {format(date, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
}
