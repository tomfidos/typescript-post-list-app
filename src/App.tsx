import { useState } from 'react';
import axios from 'axios';

import './App.css';
import AppRoutes from './routes/AppRoutes';
import { UserData } from './types/UserTypes';

const LOGOUT: string = 'https://akademia108.pl/api/social-app/user/logout';


function App() {

  const [user, setUser] = useState<UserData>({
    isLogged: false,
    jwt_token: '',
  });
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + (user ? user.jwt_token : '');

  const setUserLoginResponseData = (isLogged: boolean, token: string): void => {
    setUser({
      isLogged: isLogged,
      jwt_token: token,
    });
  }

  const logoutUser = (): void => {
    axios
        .post(LOGOUT)
        .then(() => {
            setUser({
              isLogged: false,
              jwt_token: '',
            });
        })
        .catch(error => console.error(error));
}

  return (
    <div className="app">
      <AppRoutes user={user} setUserLoginResponseData={setUserLoginResponseData} logoutUser={logoutUser} />
    </div>
  );
}

export default App;
