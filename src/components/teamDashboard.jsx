import React from "react";
import styled from "styled-components";
import Adder from "./adderComponent";
import PlayerDashboard from "./playerCard";

const IndividualTeamContainer = styled.div`
  max-height: 600px;
  padding: 20px;
  padding-top: 0px;
  min-width: 200px;
  background-color: #fff;
  margin-right: 20px;
`;

const TeamName = styled.h2`
  margin-bottom: 20px;
  border-bottom: ${props => (props.border ? "0" : "3px solid #fcc203")};
`;
export default function TeamDashboard(props) {
  const playersRetriever = () => {
    const playerList = [];
    for (let players in props.teamDetails) {
      let allPlayers = props.teamDetails[players];
      for (let player in allPlayers) {
        playerList.push(
          <PlayerDashboard
            playerDetails={allPlayers[player]}
            playerName={player}
          />
        );
      }
    }
    return playerList;
  };
  return (
    <IndividualTeamContainer>
      <TeamName border={props.newAdd}>{props.teamName}</TeamName>
      {playersRetriever()}
      <Adder newTeam={props.newAdd} />
    </IndividualTeamContainer>
  );
}
