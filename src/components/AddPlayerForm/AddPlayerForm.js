import React, { useState } from "react";

export default function AddPlayerForm(props) {
  const [name, setName] = useState("");
  const onclickAddPlayer = () => {
    if (name.length < 2) return;
    console.log("onClick", name);
    props.addPlayer(name);
    setName("");
  };
  const changeInput = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    console.log("onKey");
    if (event.key === "Enter") {
      onclickAddPlayer();
    }
  };
  return (
    <div id="">
      <span>
        <input
          onChange={changeInput}
          value={name}
          onKeyDown={handleKeyDown}
          placeholder="NAME"
        ></input>
        <button onClick={onclickAddPlayer}>ADD PLAYER</button>
      </span>
    </div>
  );
}
