import React from "react";
import DateTime from "./DateTime";
import UseCountdown from "./useCountDown";
import "../css/countdown.scss";
import Expired from "./ExpiredCountDownTimer";
// const ExpiredNotice = () => {
//   return (
//     <div className="expired-notice">
//       <h1>Our Website should be launching now</h1>
//     </div>
//   );
// };

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTime value={days} type={"Days"} oneDigit={days < 10} />
      <p></p>
      <DateTime value={hours} type={"Hours"} oneDigit={hours < 10} />
      <p></p>
      <DateTime value={minutes} type={"Minutes"} oneDigit={minutes < 10} />
      <p></p>
      <DateTime value={seconds} type={"Seconds"} oneDigit={seconds < 10} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = UseCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <Expired text="Our Website should be launching soon" />;
  } else {
    return (
      <>
        <Expired text={"Our Website should be launching soon"} />
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </>
    );
  }
};

export default CountdownTimer;
