import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App'
import * as serviceWorker from './serviceWorker';
import Headers from './components/header/header';
import Device from './components/device/device';
import SideBar from './components/SideBar/sideBar';
import SettingChannel from './components/Setting-channel/Setting-Channel-list/SettingChannel';



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
        <App />
        {/* <Headers /> */}
        {/* <SideBar /> */}
        {/* <Device /> */}
        {/* <SideBar /> */}
        <Routes>
            <Route exact path="/footer" element={<Footer />} />
            {/* <Route exact path='/' element={<SettingChannel />} /> */}
        </Routes>
    </BrowserRouter>
);

serviceWorker.unregister();


