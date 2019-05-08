import React from "react";
import { connect } from "react-redux";

interface Props {
  message: string
}

const Component2 = (props: Props) => {
  return (
    <div>
      <h1>Component2 content</h1>
      <p>{props.message}</p>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    message: state.firstReducer.message
  };
};

export default connect(mapStateToProps)(Component2);
