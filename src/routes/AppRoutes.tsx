import { Routes, Route } from 'react-router-dom';
import { ReactElement } from 'react';

import Home from '../views/Home';
import { UserData } from '../App';

interface RoutesProps {
    user: UserData,
    setUserLoginResponseData: (isLogged: boolean, token: string) => void,
}


const AppRoutes = (props: RoutesProps): ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user} setUserLoginResponseData={props.setUserLoginResponseData} />} />
        </Routes>
    );
}

export default AppRoutes;
