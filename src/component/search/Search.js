import React from 'react';
import {connect} from "react-redux";
import * as userActions from "../../actions/user-action"
import {bindActionCreators} from "redux";

const Search = (props) => {
    const {userActions} = props;
    let input = null;
    return (
        <div>
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => input = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={() => userActions.getUser(input.value)}>Search</button>
                </div>
            </section>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(null, mapDispatchToProps)(Search);