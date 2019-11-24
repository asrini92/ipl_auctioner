import React from "react";
import styled from "styled-components";

const AdderContainer = styled.div`
  min-width: 150px;
`;

const AddIcon = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin: 6px;
  background-color: ${props => (props.margin ? "#fcc203" : "#000")};
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  top: ${props => (props.margin ? "15px" : "0px")};
  left: 0;
  &:after {
    background-color: #fff;
    width: 8px;
    height: 2px;
    border-radius: 1px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    position: absolute;
    top: 7px;
    left: 4px;
    content: "";
  }
  &:before {
    background-color: #fff;
    width: 2px;
    height: 8px;
    border-radius: 1px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    position: absolute;
    top: 4px;
    left: 7px;
    content: "";
  }
`;

const AdderText = styled.div`
  width: 130px;
  position: absolute;
  font-weight: bold;
  text-align: center;
  top: 0px;
  left: 10px;
`;

export default function Adder(props) {
  return (
    <AdderContainer margin={props.newTeam}>
      <AddIcon margin={props.newTeam}>
        <AdderText> {props.newTeam ? "Add New Team" : "Add Player"} </AdderText>
      </AddIcon>
    </AdderContainer>
  );
}
