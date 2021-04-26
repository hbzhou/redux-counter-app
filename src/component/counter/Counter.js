import React from "react";
import {connect} from "react-redux";
import * as actions from '../../actions/counter-action'
import {bindActionCreators} from "redux";

const Counter = (props) => {
    const {counter, counterActions} = props;
    return (
        <div className="container">
            <div className="text-center">
                <span className="text-primary">Counter: {counter}</span>
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary" onClick={() => counterActions.increment(1)}>Increment</button>
                &nbsp;&nbsp;
                <button className="btn btn-danger" onClick={() => counterActions.decrement(2)}>Decrement</button>
            </div>
        </div>

    )
};

const mapStateToProps = state => {
    return {
        counter: state.counter.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        /*increment: () => dispatch(actions.increment(1)),
        decrement: () => dispatch(actions.decrement(2))*/
        counterActions: bindActionCreators(actions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);