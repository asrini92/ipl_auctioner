import React from "react";
import styled from "styled-components";
import TeamDashboard from "../components/teamDashboard";
import Data from "../assets/data/sampleData";

const Container = styled.div`
  margin: auto;
  width: 100%;
  background-color: #f2f2f2;
  padding: 20px;
`;
const DashboardContainer = styled.div`
  display: flex;
`;
const TeamContainer = styled.div`
  flex-basis: 80%;
  display: flex;
`;
const TeamAdder = styled.div`
  flex-basis: 20%;
`;

export default function Dashboard() {
  const teamsRetriever = () => {
    const TeamList = [];
    for (let team in Data.teams) {
      TeamList.push(
        <TeamDashboard teamDetails={Data.teams[team]} teamName={team} />
      );
    }
    return TeamList;
  };
  return (
    <Container>
      <h1>IPL Auction List</h1>
      <DashboardContainer>
        <TeamContainer>{teamsRetriever()}</TeamContainer>
        <TeamAdder>
          <TeamDashboard newAdd />
        </TeamAdder>
      </DashboardContainer>
    </Container>
  );
}
