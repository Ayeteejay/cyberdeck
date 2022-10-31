import React from "react";

const GameTimer = () => {
  const currentTime = () => {
    const timer = document.getElementById("game-timer");
    const addZero = (timeObject) =>
      timeObject < 10 ? `0${timeObject}` : timeObject;
    const date = new Date();
    timer.innerText = `${addZero(date.getHours())}:${addZero(
      date.getMinutes()
    )}:${addZero(date.getSeconds())}`;
  };
  setInterval(() => {
    currentTime();
  }, 1000);

  return (
    <>
      <p id="game-timer">Loading time...</p>
    </>
  );
};
export default GameTimer;
