import React from "react";
import { connect } from "react-redux";

const Component2 = props => {
  return (
    <div>
      <h1>Component2 content</h1>
      <p>{props.message}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.firstReducer.message
  };
};

export default connect(mapStateToProps)(Component2);
