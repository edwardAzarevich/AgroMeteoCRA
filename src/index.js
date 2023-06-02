import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App';
import HomeNew from './components/Pages/MainBoard/MainBoard';
import * as serviceWorker from './serviceWorker';
import Headers from './components/header/header';
import SideBar from './components/SideBar/sideBar';
import SettingChannel from './components/Setting-channel/Setting-Channel-list/SettingChannel';
import signin from './components/Pages/Login/SignIn/Signin';
import signup from './components/Pages/Login/SignUp/Signup';
import StartPage from './components/StartPage/StartPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path='/setting' element={<App />} />
        </Routes>
        {/* <Headers /> */}
        {/* <SideBar /> */}
        {/* <SideBar /> */}
        <Routes>
            <Route exact path="/" element={<StartPage />} />
        </Routes>
    </BrowserRouter>
);
//});

serviceWorker.unregister();


