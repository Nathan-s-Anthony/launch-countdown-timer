import React from "react";

const DateTime = ({ value, type, oneDigit }) => {
  return (
    <div className="countdown">
      <div className="counter-box1"></div>
      <div className="counter-box2"></div>
      <p>{oneDigit ? `0${value}` : `${value}`}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTime;
