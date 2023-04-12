import { Routes, Route } from 'react-router-dom';
import { ReactElement } from 'react';

import Home from '../views/Home';
import { UserData } from '../types/UserTypes';

interface RoutesProps {
    user: UserData,
    setUserLoginResponseData: (isLogged: boolean, token: string) => void,
    logoutUser: () => void,
}


const AppRoutes = (props: RoutesProps): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user} setUserLoginResponseData={props.setUserLoginResponseData} logoutUser={props.logoutUser} />} />
        </Routes>
    );
}

export default AppRoutes;
