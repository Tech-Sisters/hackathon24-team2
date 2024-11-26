/* eslint-disable react/prop-types */
import React from "react"
import { useNavigate } from "react-router-dom";
import "./landing.css";

const emotionWords = {
  veryBad: "TERRIBLE",
  bad: "UNPLEASANT",
  neutral: "NONCHALANT",
  good: "GREAT",
  veryGood: "ECSTATIC",
};

const emotionColors = {
  veryBad: "var(--veryBadAccent)",
  bad: "var(--badAccent)",
  neutral: "var(--neutralAccent)",
  good: "var(--goodAccent)",
  veryGood: "var(--veryGoodAccent)",
};

export default function LandingCard({ image, align, text, date, link }) {
  const navigate = useNavigate();

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayString = yesterday.toISOString().split("T")[0];
  const yesterdayEmotion = date && date[yesterdayString] ? date[yesterdayString] : "neutral"

  const emotionWord = emotionWords[yesterdayEmotion];
  const formattedText = text && text.includes("{}") ? text.replace("{}", emotionWord) : text;

  const handleCardClick = () => {
    if (link) {
      if (link.startsWith("http")) {
        window.location.href = link;
      } else {
        navigate(link);
      }
    }
  };

  return (
    <div className="landingCard" onClick={handleCardClick}>
      <img src={image} alt="Card background" className="cardImage" />
      <div className={`cardText ${align}`}>
        {formattedText.split(emotionWord).map((segment, index) => (
          <React.Fragment key={index}>
            {segment}
            {index < formattedText.split(emotionWord).length - 1 && (
              <span style={{ color: emotionColors[yesterdayEmotion] }}>
                {emotionWord}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}