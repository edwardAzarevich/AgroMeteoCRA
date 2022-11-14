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

// ReactDOM.render(
//     <BrowserRouter basename='/MainWindow'>
//         <Footer />
//     </BrowserRouter>, document.getElementById('root')
// );

let configJSON;
const req = new Promise(function (resolve, reject) {
    axios.get('http://localhost:3000/block')
        .then(data => {
            configJSON = JSON.parse(JSON.stringify(data.data));
            //console.log(configJSON);
            resolve();
        });
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
});

serviceWorker.unregister();


