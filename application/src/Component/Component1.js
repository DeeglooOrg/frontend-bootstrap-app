import React from "react";
import { connect } from "react-redux";

const Component1 = props => {
  return (
    <div>
      <h1>Component1 content</h1>
      <p>Number: {props.number}</p>
      <button onClick={props.onNumberUp}>+</button>
      <button onClick={props.onNumberDown}>-</button>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    number: state.firstReducer.number
  };
};

const mapDispachToProps = dispach => {
  return {
    onNumberUp: () => dispach({ type: "NUMBER_UP" }),
    onNumberDown: () => dispach({ type: "NUMBER_DOWN" })
  };
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Component1);
