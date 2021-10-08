import React from "react";
import { connect } from "react-redux";

const Profile = ({login,posts}) => {
    return (
        <div>
            <p>{login}</p>
        </div>
    )
}

const CProfile = connect(state => ({login: state.authReducer.payload.sub.login}))(Profile)
export default CProfile