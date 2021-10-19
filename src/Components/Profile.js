import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { actionMyPosts } from "../actions";
import CDrop from "./DropZone";
import CPromiseComponent from "./PromiseComponent";
import { MyFeed } from "./MyPosts";
import unknown from '../images/unknown.jpg'

const Profile = ({ userData, postsData, getPosts }) => {
    useEffect(() => getPosts(), [])
    return (
        <CPromiseComponent promiseName='UserInfo'>
            <Container>
                <div className='d-flex flex-column justify-content-center align-items-center profile'>
                    <h4>{userData?.login}</h4>
                    <img src={userData?.avatar ? userData?.avatar.url : unknown} />
                    <CDrop />
                </div>
                <div>
                    <h4>Ваши объявления:</h4>
                    <CPromiseComponent promiseName='MyPosts'>
                        {postsData && Object.keys(postsData).length == 0 && <h6>У вас еще нет обьявлений</h6>}
                        {postsData?.map(ad => <MyFeed key={ad._id} _id = {ad. _id} price = {ad.price} title = {ad.title} description={ad.description} owner={ad.owner} images={ad.images} comments={ad.comments} />) }
                    </CPromiseComponent>
                </div>
            </Container>
        </CPromiseComponent>
    )
}

const CProfile = connect(state => ({ userData: state.promiseReducer.UserInfo?.payload?.data?.UserFindOne , postsData: state.promiseReducer.MyPosts?.payload?.data?.AdFind }),{getPosts: actionMyPosts})(Profile)
export default CProfile