import axios from 'axios';

import Post from '../components/Post';
import Login from './Login';
import { UserData } from '../App';
import { useState, useEffect } from 'react';
import './Home.css';

interface HomeProps {
    user: UserData,
    setUserLoginResponseData: (isLogged: boolean, token: string) => void,
    logoutUser: () => void,
}

interface LatestPostResponse {
    data: SinglePost,
}

interface SinglePost {
    id: number,
    user: {
        avatar_url: string,
        username: string,
    }
    user_id: number,
    content: string,
    created_at: string,
    updated_at: string,
    likes: [],
}

const LATEST_POSTS = 'https://akademia108.pl/api/social-app/post/latest';


const Home = (props: HomeProps): JSX.Element => {

    const [latestPosts, setLatestPosts] = useState<SinglePost[]>([]);

    const getLatestPosts = (): void => {
        axios
            .post(LATEST_POSTS)
            .then((response: LatestPostResponse) => {
                setLatestPosts(latestPosts.concat(response.data));
            })
            .catch((error: boolean) => console.error(error));
    }

    useEffect(() => {
        getLatestPosts();
    }, []);

    return (
        <div>
            {!props.user.isLogged && <Login setUserLoginResponseData={props.setUserLoginResponseData} />}
            {props.user.isLogged &&
                <div>
                    <span className="logout" onClick={props.logoutUser}>logout</span>
                    {latestPosts.map(post => {
                        return (<Post key={post.id} avatar={post.user.avatar_url} userName={post.user.username} postDate={post.created_at} postText={post.content} likes={post.likes} />);
                    })}
                </div>
            }
        </div>
    );
}

export default Home;
