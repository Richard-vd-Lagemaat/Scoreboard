import React, { useState } from "react";
import PlayerBar from "./../PlayerBar/PlayerBar";
import Spacer from "./../Spacer/Spacer";
import AddPlayerForm from "./../AddPlayerForm/AddPlayerForm";
import "./style.css";

const compareScore = (a, b) => {
  return b.score - a.score;
};
const compareName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
};
export default function Scoreboard() {
  const [sortType, setSortType] = useState("Name");
  const [players, set_players] = useState([]);
  const [highestScore, setHighestScore] = useState(0);
  const onSortDropdownChange = (event) => {
    console.log(event.target.value);
    setSortType(event.target.value);
  };
  const incrementScore = (id, val) => {
    let newArray = [...players];
    let newItem = newArray.find((player) => {
      return player.id === id;
    });
    newItem.score += val;
    set_players(newArray);
    setHighestScore(Math.max(...players.map((o) => o.score), 0));
  };
  const addPlayer = (name) => {
    let newArray = [...players];
    console.log("addplayer", name, " with id: ", newArray.length + 1);
    newArray.push({ id: newArray.length + 1, name: name, score: 0 });
    set_players(newArray);
  };
  return (
    <div id="Score">
      <p>GAME ON</p>
      <p>
        Sort order:{" "}
        <select onChange={onSortDropdownChange}>
          <option value="Name">Sort by name</option>
          <option value="Score">Sort by score</option>
        </select>
      </p>
      {players
        .sort(sortType == "Score" ? compareScore : compareName)
        .map((player) => {
          return (
            <PlayerBar
              data={player}
              incrementScore={incrementScore}
              highestScore={highestScore}
            ></PlayerBar>
          );
        })}
      <Spacer></Spacer>
      <AddPlayerForm addPlayer={addPlayer}></AddPlayerForm>
    </div>
  );
}
