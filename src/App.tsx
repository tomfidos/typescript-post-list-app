import { useState } from 'react';
import axios from 'axios';

import './App.css';
import AppRoutes from './routes/AppRoutes';

interface UserData {
  isLogged: boolean,
  jwt_token: string,
}


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

  return (
    <div className="app">
      <AppRoutes user={user} setUserLoginResponseData={setUserLoginResponseData} />
    </div>
  );
}

export default App;
export type { UserData };
