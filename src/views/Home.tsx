import Post from '../components/Post';
import Login from './Login';
import { UserData } from '../App';

interface HomeProps {
    user: UserData,
    setUserLoginResponseData: (isLogged: boolean, token: string) => void,
}


const Home = (props: HomeProps): JSX.Element => {
    return (
        <div>
            {!props.user.isLogged && <Login setUserLoginResponseData={props.setUserLoginResponseData} />}
        </div>
    );
}

export default Home;
