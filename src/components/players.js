import React from "react";
import PropTypes from "prop-types";

function Players() {
  const incrementIfOdd = () => {
    if (this.props.value % 2 !== 0) {
      this.props.onAddition();
    }
  };

  const incrementAsync = () => {
    setTimeout(this.props.onAddition, 1000);
  };

  const { value, onAddition, onDeletion } = this.props;
  return (
    <p>
      Clicked: {value} times <button onClick={onAddition}>+</button>{" "}
      <button onClick={onDeletion}>-</button>{" "}
      <button onClick={this.incrementIfOdd}>Increment if odd</button>{" "}
      <button onClick={this.incrementAsync}>Increment async</button>
    </p>
  );
}

Players.propTypes = {
  value: PropTypes.number.isRequired,
  onAddition: PropTypes.func.isRequired,
  onRemoval: PropTypes.func.isRequired
};

export default Players;
