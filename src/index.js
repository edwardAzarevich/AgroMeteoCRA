import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/app/App'
import * as serviceWorker from './serviceWorker';
import Headers from './components/header/header';
import Device from './components/device/device';
import SideBar from './components/SideBar/sideBar';
import SettingChannel from './components/SettingChannel/SettingChannel';


const Footer = () => (
    <div className="footer">Created with love</div>
);

const dataInfo = [
    { nameDevice: "Пиранометор", value: ["400", "500"], id: 1 },
    { nameDevice: "Датчик влажности", value: ["65"], id: 2 },
    { nameDevice: "Датчик температуры", value: ["20"], id: 3 }
];

// ReactDOM.render(
//     <BrowserRouter basename='/MainWindow'>
//         <Footer />
//     </BrowserRouter>, document.getElementById('root')
// );



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <Headers />
        {/* <Device /> */}
        {/* <SideBar /> */}
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/footer" element={<Footer />} />
            <Route exact path='/Setting' element={<SettingChannel />} />
        </Routes>

    </BrowserRouter>
);

/*ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'));*/

serviceWorker.unregister();