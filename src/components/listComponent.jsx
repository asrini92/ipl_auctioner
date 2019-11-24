import React, { useState } from "react";
import styled from "styled-components";
import Data from "../assets/data/sampleData";

const Button = styled.button`
  width: 50%;
  background-color: #000;
  font-size: 20px;
  color: #fff;
  border-radius: 10px;
`;
export default function ListComponent(props) {
  const [selected, setSelected] = useState("");

  const clickHandler = event => {
    setSelected(event.target.value);
  };

  const onSubmit = () => {
    if (selected === "") {
      alert("select any one");
    } else {
      props.getValue(selected);
    }
  };

  const TeamList = [];
  for (let team in Data.teamList) {
    let teamName = Data.teamList[team];
    TeamList.push(
      <label class="customRadio" key={teamName}>
        {teamName}
        <input
          type="radio"
          name="radio"
          value={teamName}
          onClick={clickHandler}
        />
        <span class="checkmark" />
      </label>
    );
  }
  const PlayersList = [];
  let players = Data.playerList;
  players.forEach(player => {
    for (var key in player) {
      let playerName = key;
      let PlayerDescription = player[key];
      PlayersList.push(
        <label class="customRadio players" key={playerName}>
          {playerName + " -- " + PlayerDescription}
          <input
            type="radio"
            name="radio"
            value={playerName}
            onClick={clickHandler}
          />
          <span class="checkmark" />
        </label>
      );
    }
  });
  return (
    <div>
      <h2>{props.ForNewTeam ? "Select a team" : "Select a player"}</h2>
      {props.ForNewTeam ? TeamList : PlayersList}
      <Button onClick={onSubmit}>submit</Button>
    </div>
  );
}
