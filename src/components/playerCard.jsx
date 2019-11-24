import React from "react";
import styled from "styled-components";

const IndividuaPlayerContainer = styled.div`
  max-height: 250px;
  padding: 5px 12px;
  background-color: #e0dcdc;
  margin-bottom: 15px;
`;

const PlayerName = styled.h3`
  margin-bottom: 15px;
`;

const PlayerDetails = styled.h4`
  margin-bottom: 15px;
`;

export default function PlayerDashboard(props) {
  return (
    <IndividuaPlayerContainer>
      <PlayerName>{props.playerName}</PlayerName>
      <PlayerDetails>{props.playerDetails.description}</PlayerDetails>
    </IndividuaPlayerContainer>
  );
}
