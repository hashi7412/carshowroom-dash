import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import DashLayout from './pages/private/dashboard';
import NotFoundPage from './pages/public/404';
import MainPage from 'pages/private/dashboard/children/main-page';
import SpecialOffers from 'pages/private/dashboard/children/special-offers';
import MotorCycles from 'pages/private/dashboard/children/main-page/children/motorcycles';
import MngDashLayout from 'pages/private/management';
import Landing from 'pages/public/landing';
import AvaiableCars from 'pages/private/management/children/available-cars';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Landing />}></Route>
                <Route path='dash/' element={(<DashLayout />)}>
                    <Route path='' element={<Navigate to='main-page/' />}></Route>
                    <Route path='main-page' element={(<MainPage />)}>
                        <Route path=':type' element={<MotorCycles />}></Route>
                    </Route>
                    <Route path='special-offers' element={<SpecialOffers />}></Route>
                </Route>
                <Route path='dash-management/' element={(<MngDashLayout />)}>
                    <Route path='' element={<AvaiableCars />}></Route>
                </Route>
                <Route path='*' element={<NotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
