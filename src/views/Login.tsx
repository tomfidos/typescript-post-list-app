import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string,
    password: string,
}

const LOGIN = 'https://akademia108.pl/api/social-app/user/login';


const Login = (): JSX.Element => {

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

        const user: User = {
            name: userName,
            password: password,
        }

        axios
            .post(LOGIN, user)
            .then(response => {
            })
    }

    return (
        <form onSubmit={login} className="form">
            <input placeholder="User name" onChange={readAndSetUsername} className="input"/>
            <input placeholder="Password" onChange={readAndSetPassword} className="input"/>
            <button type="submit" className="button">Login</button>
        </form>
    );
}

export default Login;
