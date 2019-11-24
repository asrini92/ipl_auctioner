import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import ListComponent from "./listComponent";

const AddercustomRadio = styled.div`
  display: flex;
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
  font-weight: bold;
  text-align: center;
  margin-top: ${props => (props.margin ? "20px" : "5px")};
`;

Modal.setAppElement("#root");

export default function Adder(props) {
  const [modalIsOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const ForNewTeam = props.newTeam;

  const handler = value => {
    console.log(value);
    closeModal();
  };

  return (
    <AddercustomRadio margin={ForNewTeam}>
      <AddIcon margin={ForNewTeam} onClick={openModal} />
      <AdderText margin={ForNewTeam}>
        {ForNewTeam ? "Add New Team" : "Add Player"}
      </AdderText>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selection Modal"
      >
        <ListComponent ForNewTeam={props.newTeam} getValue={handler} />
      </Modal>
    </AddercustomRadio>
  );
}
