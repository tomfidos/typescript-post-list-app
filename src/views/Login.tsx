import React, { useState } from 'react';
import axios from 'axios';

interface LoginProps {
    setUserLoginResponseData: (isLogged: boolean, token: string) => void,
}

interface LoggingUser {
    username: string,
    password: string,
}

interface LoginResponse {
    data: {
        username: string,
        ttl: number,
        jwt_token: string,
        id: number,
        error: boolean,
    }
}

const LOGIN: string = 'https://akademia108.pl/api/social-app/user/login';


const Login = (props: LoginProps): JSX.Element => {

    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const readAndSetUsername = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setUserName(event.currentTarget.value);
    }

    const readAndSetPassword = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setPassword(event.currentTarget.value);
    }

    const login = (event: React.SyntheticEvent): void => {
        event.preventDefault();

        const user: LoggingUser = {
            username: userName,
            password: password,
        }

        axios
            .post(LOGIN, user)
            .then((response: LoginResponse) => {
                console.log(response);
                props.setUserLoginResponseData(true, response.data.jwt_token);
            })
            .catch((error: boolean) => console.error(error));
    }

    return (
        <form onSubmit={login} className="form">
            <input placeholder="User name" onChange={readAndSetUsername} className="input" />
            <input placeholder="Password" onChange={readAndSetPassword} className="input" />
            <button type="submit" className="button">Login</button>
        </form>
    );
}

export default Login;
