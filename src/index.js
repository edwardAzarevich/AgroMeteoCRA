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



const Footer = () => (
    <div className="footer">Created with love</div>
);

// ReactDOM.render(
//     <BrowserRouter basename='/MainWindow'>
//         <Footer />
//     </BrowserRouter>, document.getElementById('root')
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <StartPage />
        {/* <Headers /> */}
        {/* <SideBar /> */}
        {/* <Device /> */}
        {/* <SideBar /> */}
        <Routes>
            {/* <Route exact path='/Singin' element={<Singin />}></Route>
            <Route exact path='/Singup' element={<Singup />}></Route> */}
            <Route exact path='/main' element={<App />} />
            <Route exact path="/footer" element={<Footer />} />
            {/* <Route exact path='/' element={<SettingChannel />} /> */}
        </Routes>
    </BrowserRouter>
);

serviceWorker.unregister();


