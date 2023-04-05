import { useState } from 'react';
import axios from 'axios';

import './App.css';
import AppRoutes from './routes/AppRoutes';

interface User {
  isLogged: boolean,
  jwt_token: string,
}


function App() {

  const [user, setUser] = useState<User>({
    isLogged: false,
    jwt_token: '',
  });
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + (user ? user.jwt_token : '');

  return (
    <div className="app">
      <AppRoutes user={user} />
    </div>
  );
}

export default App;
export type { User };
