import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import Headers from './components/header/header';
import Device from './components/device/device';
import SideBar from './components/SideBar/sideBar';
import SettingChannel from './components/Setting-channel/Setting-Channel-list/SettingChannel';
import Singin from './components/Pages/Login/SingIn/Singin';
import Singup from './components/Pages/Login/SingUp/Singup';
import StartPage from './components/StartPage/StartPage';
import axios from 'axios';


const Footer = () => (
    <div className="footer">Created with love</div>
);

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

// Review !!!!!!
const req = new Promise(function (resolve, reject) {
    axios.get('http://localhost:4000/config')
        .then(data => {
            configJSON = JSON.parse(JSON.stringify(data.data.config));
            //console.log(configJSON);
            resolve();
        }).catch(() => {
            console.log('Server not faound 404');
            configJSON = '';
            reject();
        })
});


req.then(() => {
    //console.log(configJSON);
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App configJSON={configJSON} />} />
            </Routes>
            {/* <Headers /> */}
            {/* <SideBar /> */}
            {/* <Device /> */}
            {/* <SideBar /> */}
            <Routes>
                {/* <Route exact path='/Singin' element={<Singin />}></Route>
            <Route exact path='/Singup' element={<Singup />}></Route> */}
                <Route exact path='/main' element={<StartPage />} />
                <Route exact path="/footer" element={<Footer />} />
                {/* <Route exact path='/' element={<SettingChannel />} /> */}
            </Routes>
        </BrowserRouter>
    );
}).catch(() => {
    configJSON = '';
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App configJSON={configJSON} />} />
            </Routes>
            {/* <Headers /> */}
            {/* <SideBar /> */}
            {/* <Device /> */}
            {/* <SideBar /> */}
            <Routes>
                {/* <Route exact path='/Singin' element={<Singin />}></Route>
            <Route exact path='/Singup' element={<Singup />}></Route> */}
                <Route exact path='/main' element={<StartPage />} />
                <Route exact path="/footer" element={<Footer />} />
                {/* <Route exact path='/' element={<SettingChannel />} /> */}
            </Routes>
        </BrowserRouter>
    );
});

serviceWorker.unregister();


