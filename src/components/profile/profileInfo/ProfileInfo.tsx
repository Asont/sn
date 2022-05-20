import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import searchWork from "../../../assets/images/search.jpg"
import noSearchWork from "../../../assets/images/nosearch.gif"
import ProfilieStatus from "./ProfilieStatus"

const ProfileInfo = (props:any) => {

    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfilieStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>В поиске работы: {props.profile.lookingForAJob?<img src={searchWork}/>:<img src={noSearchWork}/>}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;