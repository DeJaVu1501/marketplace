import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import CDrop from "./DropZone";

const Profile = ({login,avatar,posts}) => {
    return (
        <Container>
            <div className='d-flex flex-column justify-content-center align-items-center profile'>
                <p>{login}</p>
                <img src={avatar} alt='avatar' />
                {console.log(avatar)}
                <CDrop />
            </div>
        </Container>
    )
}

const CProfile = connect(state => ({login: state.authReducer.payload.sub.login, avatar: state.promiseReducer?.photo?.payload?.url}))(Profile)
export default CProfile