import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from '../components/Home/Home';
import Detail from '../components/Detail/Detail';

export const HomeRoute = () => (
    <Routes>
        <Route path="/">
            <Home />
        </Route>
    </Routes>
);

export const ProfileRoute = () => (
    <Routes>
        <Route path="/:userName">
            <Detail />
        </Route>
    </Routes>
);