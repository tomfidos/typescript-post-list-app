interface PostProps {
    avatar: string,
    userName: string,
    postDate: string,
    postText: string,
    likes: object[],
}


const Post = (props: PostProps): JSX.Element => {
    return (
        <div className="post">
            <img src={props.avatar} alt="avatar"/>
            <p className="name">{props.userName}</p>
            <p className="messageDate">{props.postDate.substr(0, 10)}</p>
            <p className="message">{props.postText}</p>
            <p className="likeNumber">{props.likes.length}</p>
        </div>
    );
}

export default Post;