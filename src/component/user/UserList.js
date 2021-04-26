import React from 'react';
import {connect} from 'react-redux';
import User from "./User"
import * as userActions from "../../actions/user-action";
import {bindActionCreators} from "redux";

const UserList = ({items}) => {
    return (
        <div className="container">
            {
                items.map((user) => {
                    return <User key={user.id} user={user}/>
                })
            }
        </div>
    );

};

const mapStateToProps = (state) => {
    return {
        items: state.user.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);