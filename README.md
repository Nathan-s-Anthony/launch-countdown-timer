# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Gatsby](https://reactjs.org/) - JS library
- [Next.js](https://www.gatsbyjs.com/) - React framework
- [SASS](https://sass-lang.com/) - For styles

### What I learned

Working with time in javascript and rendering days , hours , minutes and seconds with a set variable that is passed to the component to display the timer.

```js
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
```

### Continued development

I would like to be further my knowledge on working with Dates and times with javascript.

### Useful resources

- [GreenRoots Blog](https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks) - This post helped me with understanding on how use Date and times to render a countdown timer for a website launch.

## Author

- Website - [Nathan Anthony](https://nathandev.vercel.app/)
- Frontend Mentor - [@Nathan-s-Anthony](https://www.frontendmentor.io/profile/Nathan-s-Anthony)
- Twitter - [@Nath_s_Anthony](https://twitter.com/Nath_s_Anthony)
