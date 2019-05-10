import React from 'react';
import { connect } from 'react-redux';

interface Props {
    number: number;
    onNumberUp: any;
    onNumberDown: any;
}

const Component1 = (props: Props): JSX.Element => {
    return (
        <div>
            <h1>Component1 content</h1>
            <p>Number: {props.number}</p>
            <button onClick={props.onNumberDown}>-</button>
            <button onClick={props.onNumberUp}>+</button>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        number: state.firstReducer.number,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onNumberUp: () => dispatch({ type: 'NUMBER_UP' }),
        onNumberDown: () => dispatch({ type: 'NUMBER_DOWN' }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Component1);
