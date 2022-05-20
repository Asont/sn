import React from 'react';
import s from './Post.module.css';

const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src='https://cdn.pixabay.com/photo/2021/04/16/09/25/chat-6183068_960_720.png' alt={"img"}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;