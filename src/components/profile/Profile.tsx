import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/MyPostsContainer";


const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;