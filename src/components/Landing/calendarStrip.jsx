import { format, startOfWeek, addDays } from 'date-fns';
import "./landing.css"; 

// eslint-disable-next-line react/prop-types
export default function CalendarStrip({ trackedData }) {
    const today = new Date();

    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 0 });
  
    const weekDays = Array.from({ length: 7 }, (_, i) =>
      addDays(startOfCurrentWeek, i)
    );

  const emotionColors = {
    veryBad: "var(--veryBad)",
    bad: "var(--bad)",
    neutral: "var(--neutral)",
    good: "var(--good)",
    veryGood: "var(--veryGood)",
    white: "#fff"
  };

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
          const dateString = format(date, "yyyy-MM-dd");
          const emotion = trackedData[dateString] || "white"; 
          const tileColor = emotionColors[emotion];
        //   const isToday = format(date, "yyyy-MM-dd") === format(today, "yyyy-MM-dd"); 
        const isToday = format(date, "yyyy-MM-dd") === format("2024-11-29", "yyyy-MM-dd"); //dummy code lol

          return (
            <div
              className={`dateTile ${isToday ? 'currentDay' : ''}`}
              key={dateString}
              style={{ backgroundColor: tileColor }}
            >
              {format(date, "d")}
            </div>
          );
        })}
      </div>
    </div>
  );
}