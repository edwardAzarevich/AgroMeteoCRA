import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App';
import HomeNew from './components/Pages/MainBoard/MainBoard';
import * as serviceWorker from './serviceWorker';
import Headers from './components/header/header';
import Device from './components/device/device';
import SideBar from './components/SideBar/sideBar';
import SettingChannel from './components/Setting-channel/Setting-Channel-list/SettingChannel';
import signin from './components/Pages/Login/SignIn/Signin';
import signup from './components/Pages/Login/SignUp/Signup';
import StartPage from './components/StartPage/StartPage';
import axios from 'axios';

let configJSON = [
    {
        "block_number": 0,
        "ch": [
            {
                "ch_number": 1,
                "dev": "sf-03",
                "phy": "RS232",
                "baudrate": 9600
            },
            {
                "ch_number": 2,
                "dev": "sf-04",
                "phy": "RS232",
                "baudrate": 9600
            },
            {
                "ch_number": 3,
                "dev": "sf-05",
                "phy": "RS232",
                "baudrate": 9600
            },
            {
                "ch_number": 8,
                "dev": "BMP280",
                "phy": "RS485",
                "baudrate": 1200,
                "par1": 23
            }
        ]
    },
    {
        "block_number": 1,
        "ch": [
            {
                "ch_number": 0,
                "dev": "sf-03",
                "phy": "RS232",
                "baudrate": 9600
            },
            {
                "ch_number": 1,
                "dev": "sf-03",
                "phy": "RS232",
                "baudrate": 9600
            },
            {
                "ch_number": 2,
                "dev": "sf-03",
                "phy": "RS232",
                "baudrate": 9600
            },
            {
                "ch_number": 3,
                "dev": "BMP280",
                "phy": "RS485",
                "baudrate": 1200
            }
        ]
    }
];

configJSON = '';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/setting' element={<App configJSON={configJSON} />} />
        </Routes>
        {/* <Headers /> */}
        {/* <SideBar /> */}
        {/* <Device /> */}
        {/* <SideBar /> */}
        <Routes>
            <Route exact path="/" element={<StartPage />} />
        </Routes>
    </BrowserRouter>
);
//});

serviceWorker.unregister();


