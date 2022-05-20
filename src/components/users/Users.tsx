import React from 'react';
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"
import { v1 } from 'uuid';
import {NavLink, Navigate} from "react-router-dom";
let Users = (props: any) => {

    let pagesCount =  Math.ceil(props.totalUsersCount/props.pageSize )

    if(pagesCount>10)  pagesCount=10

    let pages = []
    for (let i =1; i<=pagesCount; i++){
        pages.push(i)
    }

    //@ts-ignore
    let PagesForRender = pages.map(m=>{return<span className={props.currentPage===m && styles.selectPage}
                                                   style={{cursor:"pointer"}}
                                                   onClick={()=>{props.onPageChanged(m)}} key={v1()}>{m}</span>})

    if(props.isAuth===false) return <Navigate to={"/login"}/>

    return (
        <div>
            <div>
                {PagesForRender}
            </div>

            {props.users.map((m: any) => <div key={m.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/`+`${m.id}`}>
                        <img src={m.photos.small !== null ? m.photos.small : userPhoto} alt={""}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div> {
                        m.followed ?
                            <button disabled={props.followingInProgress.some((id:number)=>id===m.id)}

                                    onClick={() => {props.unfollow(m.id)}}
                            >Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id:number)=>id===m.id)} onClick={() => {
                                props.follow(m.id)
                            }
                            }>Follow</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{m.name}</div><div>{m.status}</div>
                    </span>
                    <span>
                         <div>{"m.location.country"}</div>
                        <div>{"m.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}


export default Users;