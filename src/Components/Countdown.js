import React from "react";
import "../css/countdown.scss";
import CountdownTimer from "./countDownTimer";
import IconFacebook from "../images/icon-facebook.svg";
import IconInstagram from "../images/icon-instagram.svg";
import IconPinterest from "../images/icon-pinterest.svg";
const CountDown = () => {
  const targetTimer = 14 * 24 * 60 * 60 * 1000;
  const currentTimer = new Date().getTime();
  const timeAfterTargetTimer = targetTimer + currentTimer;

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: IconFacebook,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: IconInstagram,
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/",
      target: "_blank",
      rel: "noopener noreferrer",
      icon: IconPinterest,
    },
  ];
  return (
    <section>
      <div className="count-down-wrapper">
        <CountdownTimer targetDate={timeAfterTargetTimer} />
      </div>
      <div className="pattern-hills"></div>
      <div className="social-media-wrapper">
        {socialLinks.map((link, index) => (
          <a href={link.url} target={link.target} rel={link.rel} key={index}>
            <img src={link.icon} alt={link.name} />
          </a>
        ))}
      </div>
    </section>
  );
};
export default CountDown;
