import { Routes, Route } from 'react-router-dom';

import Login from '../views/Login';
import Home from '../views/Home';
import { User } from '../App';
import { ReactElement } from 'react';

interface RoutesProps {
    user: User,
}


const AppRoutes = (props: RoutesProps): ReactElement => {
    return (
        <Routes>
            {props.user.isLogged && <Route path="/" element={<Home />} />}
            {!props.user.isLogged && <Route path="login" element={<Login />} />}
        </Routes>
    );
}

export default AppRoutes;
