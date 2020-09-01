import React from "react";
import "./style.css";

export default function PlayerBar(props) {
  const { id, name, score } = props.data; // destructuring is handy
  const incrementScore = props.incrementScore;
  const onClickIncrement = () => {
    // call the callback prop passed down from the scoreboard
    incrementScore(id, +1);
  };
  const onClickDecrement = () => {
    // call the callback prop passed down from the scoreboard
    incrementScore(id, -1);
  };
  return (
    <div id="playerContainer">
      <div id="playerText">
        <p className="playerText">{name}</p>
        <p className="playerText">SCORE: {score}</p>
      </div>
      <span id="buttonArea">
        <button className="plusMinusButton" onClick={onClickDecrement}>
          -
        </button>
        <button className="plusMinusButton" onClick={onClickIncrement}>
          +
        </button>
      </span>
      <div
        style={{ width: (score / props.highestScore) * 100 + "%" }}
        id="scoreBar"
      ></div>
    </div>
  );
}
